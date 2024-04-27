import { AnchorHTMLAttributes, ReactNode } from 'react';

export interface SkipProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	children: ReactNode;
	href: string;
}
