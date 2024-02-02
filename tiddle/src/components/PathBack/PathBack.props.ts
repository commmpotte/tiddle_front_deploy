import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface PathBackProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: ReactNode;
}
