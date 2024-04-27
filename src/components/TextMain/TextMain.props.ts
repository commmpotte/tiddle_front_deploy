import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface TextMainProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: ReactNode;
	type: 'title' | 'text';
}
