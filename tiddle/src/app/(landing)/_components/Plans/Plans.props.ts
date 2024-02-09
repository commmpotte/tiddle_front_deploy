import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { CardPropsItem } from '@/helps/landing.help';

export interface PlanProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	cards: CardPropsItem[];
	tag: string;
}
