export interface StickyConfig {
	main_color: string;
	secondary_color: string;
	highlight_color: string;
}

export type StickyNoteColorKey = keyof typeof stickyNoteColors;

export const stickyNoteColors: Record<string, StickyConfig> = {
	pink: {
		main_color: '#ffcccc',
		secondary_color: '#ff9e9e',
		highlight_color: '#ff67fe'
	},
	blue: {
		main_color: '#99ffff',
		secondary_color: '#30dcff',
		highlight_color: '#079fff'
	},
	green: {
		main_color: '#ccffcc',
		secondary_color: '#6df174',
		highlight_color: '#0aef0a'
	},
	gray: {
		main_color: '#eeeeee',
		secondary_color: '#b6b6bd',
		highlight_color: '#7c7c7c'
	},
	white: {
		main_color: '#ffffff',
		secondary_color: '#14141b',
		highlight_color: '#010101'
	},
	purple: {
		main_color: '#ccccff',
		secondary_color: '#9999e5',
		highlight_color: '#9c9cff'
	},
	yellow: {
		main_color: '#9999ff',
		secondary_color: '#f8c80e',
		highlight_color: '#ffa408'
	}
};

export const getColor = (key: StickyNoteColorKey) => {
	return stickyNoteColors[key];
};
