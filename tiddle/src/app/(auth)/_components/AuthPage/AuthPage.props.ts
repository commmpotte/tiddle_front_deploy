import { DetailedHTMLProps, ReactNode, HTMLAttributes } from 'react';

export interface AuthPageProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: ReactNode;
	tag: string;
	type: 'login' | 'signup';
}
