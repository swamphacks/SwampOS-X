import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			height: {
				'control-strip': '26px',
				'menu-xs': '13px',
				'menu-sm': '15px',
				'menu-md': '20px',
				'menu-lg': '30px'
			},
			width: {
				'control-strip': '32px'
			},
			backgroundImage: {
				'blue-dalmatian': "url('/assets/backgrounds/blue_dalmatian.png')",
				'blueberry-oxygen': "url('/assets/backgrounds/blueberry_oxygen.png')",
				'blueberry-union': "url('/assets/backgrounds/blueberry_union.png')",
				capsules: "url('/assets/backgrounds/capsules.png')",
				default: "url('/assets/backgrounds/default.png')",
				'heavy-petal': "url('/assets/backgrounds/heavy_petal.png')",
				'indigo-foam': "url('/assets/backgrounds/indigo_foam.png')",
				'macos-background': "url('/assets/backgrounds/macos_background.png')",
				'quantum-foam': "url('/assets/backgrounds/quantum_foam.png')",
				'tangerine-fusion': "url('/assets/backgrounds/tangerine_fusion.png')",
				tub: "url('/assets/backgrounds/tub.png')",
				ufo: "url('/assets/backgrounds/ufo.png')"
			},
			boxShadow: {
				'sticky-note': '1px 1px 0px 0px rgba(119, 49, 125,1)'
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
				turquoise: '#0099CC',
				'menu-blue': '#333399'
			}
		},
		fontFamily: {
			headlines: 'Headlines',
			chicago: 'Chicago'
		},
		screens: {
			'menu-sm': '410px',
			'menu-md': '510px',
			'menu-lg': '660px'
		}
	},

	plugins: []
} as Config;
