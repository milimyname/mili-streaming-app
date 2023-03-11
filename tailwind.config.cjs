/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors:{
				body: '#ECF2FF'
			},
			fontFamily: {
				mada: ['Mada', 'sans-serif']
			}
		}
	},
	plugins: []
};
