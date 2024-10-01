import { menu as menuStore } from '$lib/stores/menu-bar';
import type { MenuSetting } from '$lib/types/menu-bar';

export function toggleSetting(name: string, display: Record<string, boolean>) {
	menuStore.subscribe((menu) => {
		menu.settings.forEach((setting: MenuSetting) => {
			if (setting.name === name) display[setting.name] = !display[setting.name];
			else display[setting.name] = false;
		});
	})();

	return display;
}
