<script lang="ts">
	import MenuBar from '$lib/components/menu_bar/MenuBar.svelte';
	import ControlStrip from '$lib/components/control_strip/ControlStrip.svelte';
	import Welcome from '$lib/components/pages/Welcome.svelte';
	import DesktopIcon from '$lib/components/desktop_icon/DesktopIcon.svelte';
	import { setActiveApp, setVisible } from '$lib/stores/apps.store';
	import type { Position } from '$lib/utils/windows';
	import { onMount } from 'svelte';
	import GUD from '$lib/components/pages/GUD.svelte';
	import Tracks from '$lib/components/tracks/Tracks.svelte';
	import FAQ from '$lib/components/faq/FAQ.svelte';

	interface DesktopIconProps {
		icon_name: string;
		label: string;
		id: string;
		pos: Position;
	}

	// let height: number;
	let width: number;

	let DesktopIconList: DesktopIconProps[] = [];

	let init: number = 120;

	// Check if we are running in the browser
	if (typeof window !== 'undefined') {
		const mediaQuery = window.matchMedia('(max-width: 640px)');
		if (mediaQuery.matches) {
			init = 100;
		}

		mediaQuery.addEventListener('change', (event) => {
			if (event.matches) {
				init = 100;
			} else {
				init = 120;
			}
		});
	}

	onMount(() => {
		// height = window.innerHeight;
		width = window.innerWidth;

		DesktopIconList = [
			{
				icon_name: 'internet_browse',
				label: 'Welcome!',
				id: 'welcome',
				pos: {
					x: width - init,
					y: 30
				}
			},
			{
				icon_name: 'gud_logo',
				label: 'GUD',
				id: 'gud',
				pos: {
					x: width - init,
					y: 100
				}
			},
			{
				icon_name: 'tracks',
				label: 'Tracks',
				id: 'tracks',
				pos: {
					x: width - init,
					y: 170
				}
			},
			{
				icon_name: 'faq',
				label: 'FAQs',
				id: 'faqs',
				pos: {
					x: width - init,
					y: 240
				}
			}
		];
	});

	onMount(() => {
		setActiveApp('welcome');
	});
</script>

<MenuBar />

<Welcome />

<Tracks />
<FAQ />
<GUD />

<!-- ICONS -->
{#each DesktopIconList as icon (icon.id)}
	<DesktopIcon
		icon_name={icon.icon_name}
		label={icon.label}
		onOpen={() => {
			setVisible(icon.id, true);
			setActiveApp(icon.id);
		}}
		startAt={icon.pos}
	/>
{/each}

<ControlStrip />
