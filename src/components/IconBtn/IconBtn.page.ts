import { checkItem } from '@/helps/questionStatus.help';
import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export interface IconBtnProps
	extends DetailedHTMLProps<
		InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	icon: checkItem;
}
