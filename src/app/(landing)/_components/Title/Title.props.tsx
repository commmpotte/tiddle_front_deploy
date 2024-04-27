import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface TitleProps
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLHeadingElement>,
		HTMLHeadingElement
	> {
	description: ReactNode;
	animateText: string[];
	textLink: string;
}
