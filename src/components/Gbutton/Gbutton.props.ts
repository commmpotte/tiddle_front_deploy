import { DetailedHTMLProps, ButtonHTMLAttributes, ReactNode } from 'react';

export interface GbuttonProps
	extends DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	children: ReactNode;
}
