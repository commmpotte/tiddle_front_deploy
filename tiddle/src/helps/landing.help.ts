import { ReactNode } from 'react';

export interface CardPropsItem {
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
	table: {
		tag: string;
		columns: {
			title: string;
			description: string;
		}[];
	};
	whyTiddle: {
		tag: string;
		text: string[];
	};
	title: {
		tag: string;
		animateText: string[];
		description: ReactNode;
		textLink: string;
	};
	plans: {
		tag: string;
		card: CardPropsItem[];
	};
	faq: {
		title: string;
		description: string;
	}[];
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

	table: {
		tag: 'How does it work',
		columns: [
			{
				title: 'Tests and quizes',
				description:
					'Take tests and quizzes to find out the strengths and growth areas of your relationship'
			},
			{
				title: 'Personal plan',
				description: 'Get a personalized plan for developing your relationship'
			},
			{
				title: 'Gamification',
				description: 'Complete your tasks and activities from our app'
			},
			{
				title: 'Improvement',
				description: 'Move closer and closer to harmony in your happy couple'
			}
		]
	},
	whyTiddle: {
		tag: 'Why Tiddle',
		text: [
			'Over 20 features to address specific issues in your relationship',
			'Begin conversing with your partner in the same language',
			'Access to expert materials on relationship psychology',
			'Joyful way to improve your relationship',
			'Individual assessment of relationships without visiting a psychologist'
		]
	},
	title: {
		tag: 'What is it',
		animateText: ['Connect.', 'Improve.', 'Thrive.'],
		description: 'Evelate your love<br/> everyday with',
		textLink: 'Tiddle'
	},
	plans: {
		tag: 'Price & Plans',
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
	},
	faq: [
		{
			title: 'How does Tiddle maintain user confidentiality and data security?',
			description:
				'The Tiddle application ensures a high level of confidentiality and security. We prioritize the privacy of our users and employ robust measures to safeguard your personal information. All data transmission and storage adhere to industry-standard encryption protocols, ensuring that your information remains secure and confidential.'
		},
		{
			title:
				'Is the subscription cost calculated for both partners or just one?',
			description:
				'The Tiddle application ensures a high level of confidentiality and security. We prioritize the privacy of our users and employ robust measures to safeguard your personal information. All data transmission and storage adhere to industry-standard encryption protocols, ensuring that your information remains secure and confidential.'
		},
		{
			title: 'Can you guarantee that my relationship will improve?',
			description:
				'The Tiddle application ensures a high level of confidentiality and security. We prioritize the privacy of our users and employ robust measures to safeguard your personal information. All data transmission and storage adhere to industry-standard encryption protocols, ensuring that your information remains secure and confidential.'
		},
		{
			title: 'Will anyone read my messages and study the data?',
			description:
				'The Tiddle application ensures a high level of confidentiality and security. We prioritize the privacy of our users and employ robust measures to safeguard your personal information. All data transmission and storage adhere to industry-standard encryption protocols, ensuring that your information remains secure and confidential.'
		},
		{
			title:
				'Is it certain that the app will help improve my relationship with my partner?',
			description:
				'The Tiddle application ensures a high level of confidentiality and security. We prioritize the privacy of our users and employ robust measures to safeguard your personal information. All data transmission and storage adhere to industry-standard encryption protocols, ensuring that your information remains secure and confidential.'
		},
		{
			title: 'How do I persuade my partner to start using the app?',
			description:
				'The Tiddle application ensures a high level of confidentiality and security. We prioritize the privacy of our users and employ robust measures to safeguard your personal information. All data transmission and storage adhere to industry-standard encryption protocols, ensuring that your information remains secure and confidential.'
		},
		{
			title: 'Is the cost for both individuals or just one?',
			description:
				'The Tiddle application ensures a high level of confidentiality and security. We prioritize the privacy of our users and employ robust measures to safeguard your personal information. All data transmission and storage adhere to industry-standard encryption protocols, ensuring that your information remains secure and confidential.'
		}
	]
};
