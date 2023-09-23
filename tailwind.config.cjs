/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				mainColor: 'rgb(16, 21, 29)',
				purple: 'rgb(134, 98, 226)',
				blueGrey: 'rgb(22, 30, 41)',
				grey: 'rgb(46, 60, 81)',
				green: 'rgb(23, 184, 119)',
				orange: 'rgb(255, 194, 110)',
				blue: 'rgb(37, 165, 231)',
				greyText: 'rgb(191, 199, 210)',
				whiteIcon: '#e5e7eb',
				greyIcon: 'rgb(128, 140, 156)'

			},
			inset: {
				'37': "165px",

			},
			height: {
				'pr': '550px'

			},
			screens: {
				'mdp': '750px'
			}
		},
	},
	plugins: [],
}
