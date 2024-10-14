// IMPORTANT: FILTERS SHOULD *ONLY* BE APPLIED TO PURE BLACK COLORS

export interface StickyConfig {
	main_color: string;
	secondary_color: string;
	highlight_color: string;
	main_color_filter: string;
	secondary_color_filter: string;
	highlight_color_filter: string;
}

export type StickyNoteColorKey = keyof typeof stickyNoteColors;

export const stickyNoteColors: Record<string, StickyConfig> = {
	pink: {
		main_color: '#ffcccc',
		secondary_color: '#ff9e9e',
		highlight_color: '#ff67fe',
		main_color_filter:
			'invert(78%) sepia(66%) saturate(460%) hue-rotate(300deg) brightness(112%) contrast(117%)',
		secondary_color_filter:
			'invert(84%) sepia(25%) saturate(7142%) hue-rotate(307deg) brightness(118%) contrast(112%)',
		highlight_color_filter:
			'invert(66%) sepia(28%) saturate(7433%) hue-rotate(259deg) brightness(104%) contrast(106%)'
	},
	blue: {
		main_color: '#99ffff',
		secondary_color: '#30dcff',
		highlight_color: '#079fff',
		main_color_filter:
			'invert(98%) sepia(57%) saturate(7164%) hue-rotate(161deg) brightness(106%) contrast(104%)',
		secondary_color_filter:
			'invert(60%) sepia(99%) saturate(346%) hue-rotate(147deg) brightness(101%) contrast(101%)',
		highlight_color_filter:
			'invert(45%) sepia(75%) saturate(1626%) hue-rotate(180deg) brightness(98%) contrast(111%)'
	},
	green: {
		main_color: '#ccffcc',
		secondary_color: '#6df174',
		highlight_color: '#0aef0a',
		main_color_filter:
			'invert(93%) sepia(4%) saturate(1837%) hue-rotate(66deg) brightness(98%) contrast(113%)',
		secondary_color_filter:
			'invert(84%) sepia(13%) saturate(1952%) hue-rotate(64deg) brightness(102%) contrast(89%)',
		highlight_color_filter:
			'invert(47%) sepia(61%) saturate(4782%) hue-rotate(93deg) brightness(145%) contrast(92%)'
	},
	gray: {
		main_color: '#eeeeee',
		secondary_color: '#b6b6bd',
		highlight_color: '#7c7c7c',
		main_color_filter:
			'invert(100%) sepia(3%) saturate(2925%) hue-rotate(216deg) brightness(116%) contrast(87%)',
		secondary_color_filter:
			'invert(81%) sepia(5%) saturate(278%) hue-rotate(201deg) brightness(93%) contrast(83%)',
		highlight_color_filter:
			'invert(48%) sepia(0%) saturate(0%) hue-rotate(219deg) brightness(101%) contrast(84%)'
	},
	white: {
		main_color: '#ffffff',
		secondary_color: '#14141b',
		highlight_color: '#010101',
		main_color_filter:
			'invert(100%) sepia(100%) saturate(1%) hue-rotate(89deg) brightness(102%) contrast(101%)',
		secondary_color_filter:
			'invert(6%) sepia(5%) saturate(3465%) hue-rotate(201deg) brightness(92%) contrast(94%)',
		highlight_color_filter:
			'invert(0%) sepia(2%) saturate(7487%) hue-rotate(353deg) brightness(98%) contrast(99%)'
	},
	purple: {
		main_color: '#ccccff',
		secondary_color: '#9999e5',
		highlight_color: '#9c9cff',
		main_color_filter:
			'invert(80%) sepia(5%) saturate(1953%) hue-rotate(202deg) brightness(102%) contrast(101%)',
		secondary_color_filter:
			'invert(65%) sepia(17%) saturate(984%) hue-rotate(202deg) brightness(94%) contrast(91%)',
		highlight_color_filter:
			'invert(62%) sepia(16%) saturate(1438%) hue-rotate(202deg) brightness(100%) contrast(103%)'
	},
	yellow: {
		main_color: '#ffff99',
		secondary_color: '#f8c80e',
		highlight_color: '#ffa408',
		main_color_filter:
			'invert(90%) sepia(28%) saturate(562%) hue-rotate(7deg) brightness(106%) contrast(105%)',
		secondary_color_filter:
			'invert(73%) sepia(68%) saturate(776%) hue-rotate(354deg) brightness(105%) contrast(94%)',
		highlight_color_filter:
			'invert(81%) sepia(40%) saturate(5355%) hue-rotate(353deg) brightness(100%) contrast(102%)'
	}
};

export const getColor = (key: StickyNoteColorKey) => {
	return stickyNoteColors[key];
};
