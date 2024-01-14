/** @type {import('next').NextConfig} */
module.exports = (phase, { defaultConfig }) => {
	if ('sassOptions' in defaultConfig) {
		defaultConfig['sassOptions'] = {
			includePaths: ['./src'],
			prependData: `@import "~@styles/_variables.scss";`
		};
	}
	return {
		serverRuntimeConfig: {
			// ...
			cookieSecret: process.env.NEXT_SECRET_COOKIE // ваш секрет для кук
		},
		...defaultConfig
	};
};
