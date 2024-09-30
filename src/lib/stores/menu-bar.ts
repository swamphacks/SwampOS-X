import { writable } from 'svelte/store';
import { DefaultMenu } from '$lib/types/menu-bar';

export const menu = writable(DefaultMenu);
