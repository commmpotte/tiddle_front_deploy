import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface TableProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	tag: string;
	column: {
		title: string;
		description: string;
	}[];
}
