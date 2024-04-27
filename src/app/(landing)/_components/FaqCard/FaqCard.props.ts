import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface FaqCardProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	title: string;
	description: string;
}
