/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'league-spartan': ['"League Spartan"', 'sans-serif'],
				'inter': ['"inter"', 'sans-serif'],
				'poppins': ['"poppins"', 'sans-serif']
			},
		},
	},
	plugins: [],
	darkMode: 'class'
}
