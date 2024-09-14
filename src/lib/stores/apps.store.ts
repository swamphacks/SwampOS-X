import { get, writable } from 'svelte/store';

export enum AppType {
	WINDOW,
	STICKY
}

let stickyCount = 0;

export const openApps = writable<Record<string, AppType>>({});
export const zindexApp = writable<Record<string, number>>({});

export const activeApp = writable<string | null>(null);

export const activeAppZIndex = writable(0);

export const addSticky = () => {
	const id = `sticky-${stickyCount}`;
	stickyCount += 1;

	openApps.update((store) => ({
		...store,
		[id]: AppType.STICKY
	}));

	zindexApp.update((store) => ({
		...store,
		[id]: 0
	}));

	setActiveApp(id);
};

export const setActiveApp = (id: string) => {
	if (id in get(zindexApp)) {
		const curr_index = get(activeAppZIndex);
		const new_index = curr_index + 1;
		zindexApp.update((store) => ({
			...store,
			[id]: new_index
		}));

		activeAppZIndex.set(new_index);
		activeApp.set(id);
	}
};
