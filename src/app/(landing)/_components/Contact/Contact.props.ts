import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ContactProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	social: {
		name: string;
		url: string;
	}[];
	links: {
		name: string;
		url: string;
	}[];
}
