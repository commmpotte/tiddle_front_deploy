import { DetailedHTMLProps, ReactNode, HTMLAttributes } from 'react';

export interface HtagProps
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLHeadingElement>,
		HTMLHeadingElement
	> {
	tag: 'h1' | 'h2' | 'h3';
	type?: 'text' | 'primary';
	children: ReactNode;
}
