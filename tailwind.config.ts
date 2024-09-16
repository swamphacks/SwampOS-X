import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
<<<<<<< HEAD
			height: {
				'control-strip': '26px'
			},
			width: {
				'control-strip': '32px'
=======
			backgroundImage: {
				'blueberry-oxygen': "url('/assets/backgrounds/blueberry_oxygen5k.jpg')",
				'flower-power': "url('/assets/backgrounds/flower_power5k.jpg')",
				'heavy-petal-2': "url('/assets/backgrounds/heavy_petal_2_5k.jpg')",
				'lime-sharp': "url('/assets/backgrounds/lime_sharp5k.jpg')",
				'sage-foam': "url('/assets/backgrounds/sage_foam5k.jpg')",
				'tangerine-melt': "url('/assets/backgrounds/tangerine_melt5k.jpg')",
				'blueberry-union': "url('/assets/backgrounds/blueberry_union5k.jpg')",
				'golden-poppy': "url('/assets/backgrounds/golden_poppy5k.jpg')",
				'heavy-petal-3': "url('/assets/backgrounds/heavy_petal_3_5k.jpg')",
				macos: "url('/assets/backgrounds/macos5k.jpg')",
				shutters: "url('/assets/backgrounds/shutters5k.jpg')",
				tub: "url('/assets/backgrounds/tub5k.jpg')",
				'blue-dalmation': "url('/assets/backgrounds/blue-dalmation5k.jpg')",
				'grape-gravity': "url('/assets/backgrounds/grape_gravity5k.jpg')",
				'heavy-petal-4': "url('/assets/backgrounds/heavy_petal_4_5k.jpg')",
				'metallic-foam': "url('/assets/backgrounds/metallic_foam5k.jpg')",
				'strawberry-baby': "url('/assets/backgrounds/strawberry_baby5k.jpg')",
				'ufo-1': "url('/assets/backgrounds/ufo_1_5k.jpg')",
				bottles: "url('/assets/backgrounds/bottles5k.jpg')",
				'grape-mission': "url('/assets/backgrounds/grape_mission5k.jpg')",
				'indigo-foam': "url('/assets/backgrounds/indigo_foam5k.jpg')",
				'quantum-foam': "url('/assets/backgrounds/quantum_foam5k.jpg')",
				'strawberry-parabola': "url('/assets/backgrounds/strawberry_parabola5k.jpg')",
				'ufo-2': "url('/assets/backgrounds/ufo_2_5k.jpg')",
				capsule: "url('/assets/backgrounds/capsule5k.jpg')",
				'heavy-petal-1': "url('/assets/backgrounds/heavy_petal_1_5k.jpg')",
				'lime-horizon': "url('/assets/backgrounds/lime_horizon5k.jpg')",
				'ruby-foam': "url('/assets/backgrounds/ruby_foam5k.jpg')",
				'tangerine-fusion': "url('/assets/backgrounds/tangerine_fusion5k.jpg')"
<<<<<<< HEAD
			},
			boxShadow: {
				'sticky-note': '1px 1px 0px 0px rgba(119, 49, 125,1)'
>>>>>>> got store working
=======
>>>>>>> styling n shi
			}
		},
		fontFamily: {
			headlines: 'Headlines'
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

	plugins: []
} as Config;
