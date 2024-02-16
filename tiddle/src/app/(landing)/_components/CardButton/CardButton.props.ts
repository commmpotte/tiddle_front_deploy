import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';

export interface CardButtonProps
	extends DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	arrow: 'arrowLeft' | 'arrowRight';
}
