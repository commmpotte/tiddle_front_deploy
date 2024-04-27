import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface CardProps
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	> {
	type: 'premium' | 'free' | 'standard';
	extend?: string;
	active: boolean;
	advantages: string[];
	price: string;
	secondaryText: string;
}
