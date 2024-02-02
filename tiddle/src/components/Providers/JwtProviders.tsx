'use client';
import { ReactNode } from 'react';

export const JwtProviders = ({ children }: { children: ReactNode }) => {
	// const session = useSession();
	// useEffect(() => {
	// 	// if (session?.data.error)
	// 		if (session?.data.error === 'RefreshAccessTokenError') {
	// 			signIn(); // Force sign in to hopefully resolve error
	// 		}
	// }, [session]);

	return <>{children}</>;
};
