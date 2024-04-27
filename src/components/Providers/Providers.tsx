'use client';

import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';
import { JwtProviders } from './JwtProviders';

export function Providers({ children }: { children: ReactNode }) {
	return (
		<SessionProvider>
			<JwtProviders>{children}</JwtProviders>
		</SessionProvider>
	);
}
