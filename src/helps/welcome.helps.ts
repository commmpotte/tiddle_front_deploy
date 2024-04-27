type welcomeInfo = {
	url?: string;
	description: string;
	title: string;
	button: string;
	position: number;
	type: 'login' | 'signup' | 'none';
};

export const welcomeInformation: welcomeInfo[] = [
	{
		description:
			'We are here to give you the expert-backed assistant that guides couples through simple activities to strengthen the bond',
		title: 'Welcome to Tiddle!',
		button: 'Next',
		position: 1,
		type: 'none'
	},
	{
		url: '/welcome/screen2.png',
		description:
			'Improve couple communication, strengthen the emotional bond and resolve conflicts productively',
		title: 'Build a lasting connection',
		button: 'Next',
		position: 2,
		type: 'none'
	},
	{
		url: '/welcome/screen3.png',
		description:
			'We provide an individual approach and deep analysis of the couple through gamification and involving activities',
		title: 'Be involved',
		button: 'Log in',
		position: 3,
		type: 'login'
	}
];

export const welcomeQuestionText = {
	title: 'Attachment Style Test',
	text: 'Take the 5 minute attachment style quiz to explore how childhood conditioning manifests in your adult relationships'
};
