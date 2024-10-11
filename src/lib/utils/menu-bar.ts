import { swamphacksMenu, menu as menuStore, finderMenu } from '$lib/stores/menu-bar';
import type { MenuSetting } from '$lib/types/menu-bar';

export function closeAllMenus(display: Record<string, boolean>) {
	menuStore.subscribe((menu) => {
		menu.settings.forEach((setting: MenuSetting) => {
			display[setting.name] = false;
		});
	})();

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
