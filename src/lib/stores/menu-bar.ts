import { writable } from 'svelte/store';
import { SwampHacksMenu, FinderMenu, DefaultMenu } from '$lib/types/menu-bar';

export const swamphacksMenu = writable(SwampHacksMenu);
export const menu = writable(DefaultMenu);
export const finderMenu = writable(FinderMenu);
