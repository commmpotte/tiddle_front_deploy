import type { Meta, StoryObj } from '@storybook/react';

import { IconBtn } from './IconBtn';

const meta: Meta<typeof IconBtn> = {
	component: IconBtn,
	//👇 Enables auto-generated documentation for the component story
	tags: ['autodocs'],
	argTypes: {}
};

export default meta;
type Story = StoryObj<typeof IconBtn>;

export const Active: Story = {
	args: {
		icon: 'female'
	}
};
