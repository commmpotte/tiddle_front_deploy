import { Features } from '@/helps/landing.help';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface FutersProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	futers: Features[];
}
