import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			height: {
				'control-strip': '26px'
			},
			width: {
				'control-strip': '32px'
			},
			colors: {
				'primary-black': '#262626',
				'primary-white': '#ffffff',

				'gray-200': '#eeeeee',
				'gray-300': '#dddddd',
				'gray-400': '#cccccc',
				'gray-500': '#bbbbbb',
				'gray-600': '#999999',
				'gray-700': '#808080',
				'gray-800': '#666666',

				azul: '#6686B7',
				bondi: '#308F91',
				copper: '#CC6633',
				crimson: '#CC3333',
				emerald: '#339966',
				'french-blue': '#666699',
				gold: '#999900',
				ivy: '#336633',
				lavender: '#6666CC',
				magenta: '#993399',
				nutmeg: '#996633',
				pistachio: '#B5E040',
				plum: '#996699',
				poppy: '#F46F19',
				rose: '#996666',
				sapphire: '#3366FF',
				silver: '#777777',
				sunny: '#D0AF3E',
				teal: '#477979',
				turquoise: '#0099CC'
			}
		},
		fontFamily: {
			headlines: 'Headlines',
			chicago: 'Chicago'
		}
	},

	plugins: []
} as Config;
