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
				return null;
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
