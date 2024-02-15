import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface WhatIsItProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	description: ReactNode;
	animateText: string[];
	textLink: string;
	tag: string;
}
