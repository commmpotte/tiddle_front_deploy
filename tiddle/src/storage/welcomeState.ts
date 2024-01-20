import { create } from 'zustand';

type StateWelcome = {
	welcome: string;
	setState: () => void;
};

export const useStateWelcome = create<StateWelcome>((set) => ({
	welcome: '',
	setState: () =>
		set((state) => {
			const welcomeDone = 'done';
			localStorage.setItem('welcome', welcomeDone);
			return {
				...state,
				welcome: welcomeDone
			};
		})
}));
