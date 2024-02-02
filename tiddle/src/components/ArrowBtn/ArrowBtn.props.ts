import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';

export interface ArrowBtnProps
	extends DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	arrow: 'arrowLeft' | 'close';
}
