import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface CopyProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	text;
	string;
}
