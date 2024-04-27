import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Card } from '@/helps/landing.help';

export interface PlanProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	cards: Card[];
	tag: string;
}
