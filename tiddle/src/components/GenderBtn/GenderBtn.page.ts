import {
	DetailedHTMLProps,
	InputHTMLAttributes
} from 'react';

export interface GenderBtnProps
	extends DetailedHTMLProps<
		InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	gender: 'male' | 'female';
}
