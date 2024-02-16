import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface MapFunctionProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	title: string;
	description: string;
	page: number;
	totalPage: number;
}
