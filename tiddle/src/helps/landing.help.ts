interface CardProps {
	plan: 'free' | 'premium' | 'standard';
	advantages: string[];
	price: string;
	active: boolean;
	secondaryText: string;
	extend?: string;
}

interface landingHelpProps {
	card: CardProps[];
}

export const landingHelp: landingHelpProps = {
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
