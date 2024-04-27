import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
	component: Button,
	//👇 Enables auto-generated documentation for the component story
	tags: ['autodocs'],
	argTypes: {}
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Active: Story = {
	args: {
		status: 'active',
		children: 'button'
	}
};

export const Disabled: Story = {
	args: {
		...Active.args,
		status: 'disabled'
	}
};
