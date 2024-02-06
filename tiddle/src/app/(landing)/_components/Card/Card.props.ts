import { DetailedHTMLProps } from 'react';

export interface CardProps
	extends DetailedHTMLProps<
		React.HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	> {
	type: 'premium' | 'free' | 'standard';
	extend?: string;
	active: boolean;
	advantages: string[];
	price: string;
	secondaryText: string;
}
