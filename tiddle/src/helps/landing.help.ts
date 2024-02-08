import { ReactNode } from 'react';

interface CardProps {
	plan: 'free' | 'premium' | 'standard';
	advantages: string[];
	price: string;
	active: boolean;
	secondaryText: string;
	extend?: string;
}

interface landingHelpProps {
	header: string[];
	trobles: {
		h2: string;
		secondaryTextH2: string;
		slips: string[];
		h3: string;
		secondaryTextH3: string;
	};
	whyTiddle: string[];
	title: {
		animateText: string[];
		description: ReactNode;
		textLink: string;
	};
	card: CardProps[];
}

export const landingHelp: landingHelpProps = {
	header: [
		'Improve your relationship',
		'Tiddle App',
		'Strengthen the emotional bond'
	],
	trobles: {
		h2: 'Did you know that 60% of issues in couples go unspoken?',
		secondaryTextH2: "And here's why:",
		slips: [
			'Lack of intimacy 🔗',
			'Recurring conflicts 😤',
			'Misunderstanding 🧶',
			'Monotony in sexual life 👄',
			'Relationship routine 😔'
		],
		h3: 'So can happy relationships be built at all?',
		secondaryTextH3:
			'Yes, and we suggest you a tool to track your relationship journey!'
	},
	whyTiddle: [
		'Over 20 features to address specific issues in your relationship',
		'Begin conversing with your partner in the same language',
		'Access to expert materials on relationship psychology',
		'Joyful way to improve your relationship',
		'Individual assessment of relationships without visiting a psychologist'
	],
	title: {
		animateText: ['Connect.', 'Improve.', 'Thrive.'],
		description: 'Evelate your love<br/> everyday with',
		textLink: 'Tiddle'
	},
	card: [
		{
			plan: 'free',
			advantages: [
				'Mood tracker',
				'Sets of questions',
				'Quizes and tests',
				'Theoretical material'
			],
			price: 'Get free',
			secondaryText: 'Some options are limited',
			active: false
		},
		{
			plan: 'standard',
			extend: 'Free plan',
			advantages: [
				'Conflict Mediator',
				'Relationship checkup',
				'Relationship status chart',
				'Wish list',
				'Personal growth',
				'Development roadmap'
			],
			price: '$19.99 per month',
			secondaryText: 'Price for a couple',
			active: true
		},
		{
			plan: 'premium',
			extend: 'Standard plan',
			advantages: ['Supervision of a phychologist'],
			price: '$69.99 per month',
			secondaryText: 'Price for a couple',
			active: false
		}
	]
};
