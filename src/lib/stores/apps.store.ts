import { get, writable } from 'svelte/store';

let stickyCount = 0;

export interface Application {
	id: string;
	zIndex: number;
}

export const openApps = writable<Record<string, number>>({});
export const activeApp = writable<string | null>(null);
export const activeAppZIndex = writable(0);

export const addSticky = () => {
	const id = `sticky-${stickyCount}`;
	stickyCount += 1;

	openApps.update((store) => ({
		...store,
		[id]: 0
	}));

	setActiveApp(id);
};

export const setActiveApp = (id: string) => {
	const new_index = get(activeAppZIndex) + 1;
	openApps.update((store) => ({
		...store,
		[id]: new_index
	}));

	activeAppZIndex.set(new_index);
	activeApp.set(id);
};
