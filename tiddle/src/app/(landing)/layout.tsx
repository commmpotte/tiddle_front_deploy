import type { Metadata } from 'next';

import './globals.scss';
import { Providers } from '@/components/Providers/Providers';

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app'
};

export default function LandingLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<link
					href="https://fonts.cdnfonts.com/css/eurofurence"
					rel="stylesheet"
				/>

				<link
					href="https://fonts.cdnfonts.com/css/sf-pro-display"
					rel="stylesheet"
				></link>
			</head>
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
