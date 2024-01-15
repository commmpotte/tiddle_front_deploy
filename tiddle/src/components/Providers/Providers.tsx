'use clint';

import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

export function Providers({ childern }: { children: ReactNode }) {
	return <SessionProvider>{childern}</SessionProvider>;
}
