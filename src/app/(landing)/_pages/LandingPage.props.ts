import { landingHelpProps } from '@/helps/landing.help';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface LandingPageProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	landingInformation: landingHelpProps;
}
