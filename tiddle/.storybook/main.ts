import type { StorybookConfig } from '@storybook/nextjs';
import path from 'path';

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-onboarding',
		'@storybook/addon-interactions',
		{
			name: '@storybook/addon-styling',
			options: {
				sass: {
					// Require your Sass preprocessor here
					implementation: require('sass'),
					additionalData: `@import "~@styles/_variables.scss";
            `
				}
			}
		}
	],
	framework: {
		name: '@storybook/nextjs',
		options: {
			nextConfigPath: path.resolve(__dirname, '../next.config.js')
		}
	},
	docs: {
		autodocs: 'tag'
	},
	
};
export default config;

