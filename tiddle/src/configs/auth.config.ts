import { AuthApi } from '@/api/auth.api';
import { isApiError } from '@/types/interfaces/error.interface';
import { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authConfig: AuthOptions = {
	providers: [
		CredentialsProvider({
			credentials: {
				identifier: { label: 'identifier', type: 'identifier' },
				password: { label: 'password', type: 'password' }
			},
			async authorize(credentials) {
				try {
					if (!credentials?.identifier || !credentials?.password) {
						return null;
					}
					const currentUser = await AuthApi({
						identifier: credentials.identifier,
						password: credentials.password
					});
					if (currentUser?.error) {
						throw new Error(currentUser.error.message);
					}
					return {
						...currentUser
					};
				} catch (error) {
					if (isApiError(error)) {
						throw new Error(
							`${error.message}`
						);
					}
					throw error;
				}
			}
		})
	],
	pages: {
		signIn: '/login'
	},
	jwt: {},
	callbacks: {
		async jwt({ token, user }) {
			return { ...token, ...user };
		},
		async session({ session }) {
			return session;
		}
	}
};
