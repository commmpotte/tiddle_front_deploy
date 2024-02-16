import {
	DetailedHTMLProps,
	Dispatch,
	HTMLAttributes,
	SetStateAction
} from 'react';

export interface MapFunctionProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	title: string;
	description: string;
	page: number;
	totalPage: number;
	setDown: () => void;
	setNext: () => void;
}
