/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				body: '#ECF2FF'
			},
			fontFamily: {
				mada: ['Mada', 'sans-serif']
			},
			animation: {
				marquee: 'marquee 10s linear infinite'
			},
			keyframes: {
				marquee: {
					'0%': { transform: 'translateX(0%)' },
					'100%': { transform: 'translateX(-100%)' }
				}
			}
		}
	},
	plugins: []
};
