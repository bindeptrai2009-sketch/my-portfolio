import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				navy: {
					50: '#f0f4f8',
					800: '#1e293b',
					900: '#0f172a', // Deep navy accent
				},
				softBlack: '#171717',
			},
			fontFamily: {
				sans: ['var(--font-inter)'],
				heading: ['var(--font-geist)'],
			},
			typography: {
				DEFAULT: {
					css: {
						lineHeight: '1.8',
						color: 'var(--foreground)',
						a: { color: '#0f172a', '&:hover': { color: '#334155' } },
					},
				},
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
export default config;
