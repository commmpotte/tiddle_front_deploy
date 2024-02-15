import { ReactNode, AnchorHTMLAttributes } from 'react';

export interface BtnLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	children: ReactNode;
	status?: 'active' | 'disabled';
	urls: string;
}
