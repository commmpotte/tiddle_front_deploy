import { $fetch } from '@/api/api.fetch';
import { pathAPI } from '@/helps/pathAPI.help';
import { isApiError } from '@/types/interfaces/error.interface';
import { JwtToken } from '@/types/interfaces/jwt.interface';
import { AuthOptions, User } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

type TokenJwtType = {
	access: string;
	accessTokenExpires: number;
	refresh: string;
	user: { name: string; email: string };
	iat: number;
	exp: number;
	jti: string;
};

const authMaxAge = 5;
async function refreshAccessToken(token: JwtToken) {
	try {
		const data = await $fetch.post<JwtToken>(
			pathAPI.auth.refresh,
			token,
			true,
			{},
			token.refresh
		);
		// const response = await fetch(
		// 	process.env.NEXT_PUBLIC_DJANGO_HOST + pathAPI.auth.refresh,
		// 	{
		// 		method: 'POST',
		// 		body: JSON.stringify({
		// 			refresh: token.refresh
		// 		}),
		// 		headers: {
		// 			'Content-Type': 'application/json'
		// 		}
		// 	}
		// );

		// if (!response.ok) {
		// 	throw refreshedTokens;
		// }
		const currentDate = new Date();
		return {
			...token,
			access: data.access,
			accessTokenExpires: currentDate.setMinutes(
				currentDate.getMinutes() + authMaxAge
			),
			refresh: data.refresh ?? token.refresh
		};
	} catch (error) {
		if (isApiError(error)) {
			throw new Error(`${error.message}`);
		}
		throw error;
	}
}

export const authConfig: AuthOptions = {
	providers: [
		CredentialsProvider({
			credentials: {
				username: { label: 'username', type: 'text' },
				password: { label: 'password', type: 'password' }
			},
			async authorize(credentials) {
				try {
					if (!credentials?.username || !credentials?.password) {
						return null;
					}
					const data = await $fetch.post<JwtToken>(
						pathAPI.auth.login,
						credentials
					);
					return {
						access: data.access,
						refresh: data.refresh
					} as User;
				} catch (error) {
					if (isApiError(error)) {
						throw new Error(`${error.message}`);
					}
					throw error;
				}
			}
		})
	],
	pages: {
		signIn: '/login',
		error: '',
		newUser: '/signup'
	},
	session: {
		strategy: 'jwt'
	},
	callbacks: {
		async jwt({ token, user, account }) {
			if (account && user) {
				const currentDate = new Date();
				return {
					access: user.access,
					accessTokenExpires: currentDate.setMinutes(
						currentDate.getMinutes() + authMaxAge
					),
					refresh: user.refresh
				};
			}

			if (Date.now() < (token.accessTokenExpires as number)) {
				return token;
			}

			return refreshAccessToken(token as TokenJwtType);
		},
		async session({ session, token }) {
			session.access = token.access as string;
			return session;
		}
	}
};
