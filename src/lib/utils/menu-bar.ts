import { swamphacksMenu, menu as menuStore, finderMenu } from '$lib/stores/menu-bar';
import type { MenuSetting } from '$lib/types/menu-bar';

export function closeAllMenus(display: Record<string, boolean>) {
	Object.keys(display).forEach((key) => {
		display[key] = false;
	});

	return display;
}

export function toggleSetting(name: string, display: Record<string, boolean>) {
	swamphacksMenu.subscribe((menu) => {
		if (menu.name === name) display[menu.name] = !display[menu.name];
		else display[menu.name] = false;
	})();

	finderMenu.subscribe((menu) => {
		if (menu.name === name) display[menu.name] = !display[menu.name];
		else display[menu.name] = false;
	})();

	menuStore.subscribe((menu) => {
		menu.settings.forEach((setting: MenuSetting) => {
			if (setting.name === name) display[setting.name] = !display[setting.name];
			else display[setting.name] = false;
		});
	})();

	return display;
}

export function currentTime() {
	const now = new Date();
	const hours = now.getHours();
	const minutes = now.getMinutes().toString().padStart(2, '0');
	const seconds = now.getSeconds().toString().padStart(2, '0');
	const half = hours < 12 ? 'AM' : 'PM';

	let hourString;
	if (hours === 0) hourString = '12';
	else if (hours <= 12) hourString = hours.toString();
	else hourString = (hours - 12).toString();

	return `${hourString}:${minutes}:${seconds} ${half}`;
}

export function currentDate() {
	const now = new Date();
	const day = now.getDate();
	const month = now.getMonth() + 1;
	const year = now.getFullYear().toString().slice(2);
	return `${month}/${day}/${year}`;
}

// Check if the element or its parent is a menu button
export function inMenuBtn(e: HTMLElement | null) {
	if (!e) return false;

	if (e.id === 'menu-btn') return true;
	return inMenuBtn(e.parentElement);
}
