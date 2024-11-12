import { get, writable } from 'svelte/store';
import { v4 as uuidv4 } from 'uuid';

export interface App {
	id: string;
	name: string;
	zIndex: number;
	open: boolean;
}

const Z_INDEX_LOWER_BOUND = 1000;

export const apps = writable<Map<string, App>>(new Map());
export const activeAppId = writable<string | null>(null);

export const getApp = (id: string): App | null => get(apps).get(id) ?? null;
export const getActiveApp = () => {
	const currActiveAppId = get(activeAppId);
	if (currActiveAppId) return getApp(currActiveAppId);
	return null;
};

export const registerApp = (
	name: string,
	open: boolean,
	preferredId: string | null = null
): string => {
	const id: string = preferredId && getApp(preferredId) == null ? preferredId : uuidv4();
	apps.update((prev) => prev.set(id, { id, name, zIndex: 0, open }));
	setActiveApp(id);
	return id;
};

export const unregisterApp = (id: string) => {
	apps.update((prev) => {
		prev.delete(id);
		return prev;
	});
	if (getActiveApp()?.id === id) activeAppId.set(null);
};

const getNextZIndex = (): number => {
	const currActiveApp = getActiveApp();
	if (currActiveApp) return currActiveApp.zIndex + 1;
	return [...get(apps).values()]
		.map((a) => a.zIndex)
		.reduce((a, b) => Math.max(a, b), Z_INDEX_LOWER_BOUND);
};

export const setActiveApp = (id: string) => {
	if (get(activeAppId) !== id) {
		apps.update((prev) => prev.set(id, { ...prev.get(id)!, zIndex: getNextZIndex() }));
		activeAppId.set(id);
	}
};

// This shoud be called to open or close a specific window with a specific name
// SHOULD ONLY BE CALLED ON WINDOWS
export const setVisible = (id: string, open: boolean) => {
	const app = [...get(apps).values()].find((a) => a.id === id);
	if (app) apps.update((prev) => prev.set(app.id, { ...app, open }));
};
