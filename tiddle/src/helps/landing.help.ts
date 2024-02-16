export interface Card {
	plan: 'free' | 'premium' | 'standard';
	advantages: string[];
	price: string;
	active: boolean;
	secondaryText: string;
	extend?: string;
}
export interface landingHelpProps {
	header: string[];
	trobles: Trobles;
	table: Table;
	whyTiddle: WhyTiddle;
	title: Title;
	plans: Plans;
	faq: Faq[];
	contact: Contact;
}

export interface Trobles {
	h2: string;
	secondaryTextH2: string;
	slips: string[];
	h3: string;
	secondaryTextH3: string;
}

export interface Table {
	tag: string;
	columns: Column[];
}

export interface Column {
	title: string;
	description: string;
}

export interface WhyTiddle {
	tag: string;
	text: string[];
}

export interface Title {
	tag: string;
	animateText: string[];
	description: string;
	textLink: string;
}

export interface Plans {
	tag: string;
	card: Card[];
}

export interface Faq {
	title: string;
	description: string;
}

export interface Contact {
	links: Link[];
	social: Social[];
}

export interface Link {
	name: string;
	url: string;
}

export interface Social {
	name: string;
	url: string;
}
