import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface SlipProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: ReactNode;
}
