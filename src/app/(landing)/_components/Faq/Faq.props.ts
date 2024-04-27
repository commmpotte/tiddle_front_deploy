import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface FaqProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	cards: {
		title: string;
		description: string;
	}[];
}
