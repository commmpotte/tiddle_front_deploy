export type checkItem =
	| 'male'
	| 'female'
	| 'dating'
	| 'divorced'
	| 'married'
	| 'together'
	| 'apart'
	| 'havekids'
	| 'nokids';

type questionItem = {
	id: number;
	title: string;
	description: string;
	checkbox: checkItem[];
	btnName: string;
	checkStatus: 'relationship' | 'life' | 'kids';
};

export const questionStatus: questionItem[] = [
	{
		id: 1,
		title: 'What is your relationship status?',
		description:
			'This information will be used only for better statistics and recomendations',
		checkbox: ['dating', 'married', 'divorced'],
		btnName: 'Next',
		checkStatus: 'relationship'
	},
	{
		id: 2,
		title: 'Do you life together?',
		description:
			'This information will be used only for better statistics and recomendations',
		checkbox: ['together', 'apart'],
		btnName: 'Next',
		checkStatus: 'life'
	},
	{
		id: 3,
		title: 'Do you have kids?',
		description:
			'This information will be used only for better statistics and recomendations',
		checkbox: ['havekids', 'nokids'],
		btnName: 'Complete',
		checkStatus: 'kids'
	}
];
