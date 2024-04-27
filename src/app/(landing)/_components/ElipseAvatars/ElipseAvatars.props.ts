import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ElipseAvatarsProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	slips: string[];
	tag: string;
}
