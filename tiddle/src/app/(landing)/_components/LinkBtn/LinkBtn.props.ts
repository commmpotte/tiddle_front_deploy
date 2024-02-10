import { ReactNode, AnchorHTMLAttributes } from 'react';

export interface LinkBtnProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	children?: ReactNode;
	urls: string;
	social?: boolean;
	design?: boolean;
}
