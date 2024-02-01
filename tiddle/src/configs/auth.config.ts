import { AuthApi } from '@/api/auth.api';
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
async function refreshAccessToken(token: JwtToken) {
	try {
		const response = await fetch(
			process.env.DJANGO_HOST + pathAPI.auth.refresh,
			{
				method: 'POST',
				body: JSON.stringify({
					refresh: token.refresh
				}),
				headers: {
					'Content-Type': 'application/json'
				}
			}
		);
		const refreshedTokens: JwtToken = await response.json();

		if (!response.ok) {
			throw refreshedTokens;
		}
		const currentDate = new Date();
		return {
			...token,
			access: refreshedTokens.access,
			accessTokenExpires: currentDate.setMinutes(currentDate.getMinutes() + 1),
			refresh: refreshedTokens.refresh ?? token.refresh
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
					const currentUser = await AuthApi<JwtToken>({
						username: credentials.username,
						password: credentials.password
					});
					if (currentUser.error) {
						throw new Error(currentUser.error.message);
					}
					console.log(currentUser);
					return currentUser as User;
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
		signIn: '/login'
	},
	session: {
		strategy: 'jwt'
	},
	callbacks: {
		async jwt({ token, user, account }) {
			console.log(token);
			if (account && user) {
				const currentDate = new Date();
				return {
					access: user.access,
					accessTokenExpires: currentDate.setMinutes(
						currentDate.getMinutes() + 1
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
