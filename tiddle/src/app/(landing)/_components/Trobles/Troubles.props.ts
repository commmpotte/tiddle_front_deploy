import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface TroublesProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	tagH2: string;
	tagH3: string;
	secondaryH2: string;
	secondaryH3: string;
	slips: string[];
}
