import 'next-auth';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { JWT } from 'next-auth/jwt';

declare module 'next-auth' {
	/**
	 * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
	 */
	interface Session {
		access: string;
	}

	interface User {
		access: string;
		refresh: string;
	}
}

declare module 'next-auth/jwt' {
	/** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
	interface JWT {
		/** OpenID ID Token */
		access?: string;
		refresh?: string;
		accessTokenExpires?: number;
	}
}
