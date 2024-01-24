import { DetailedHTMLProps, ButtonHTMLAttributes, ReactNode } from 'react';

export interface GenderBtnProps
	extends DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	gender: 'male' | 'female';
}
