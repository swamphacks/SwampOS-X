<script lang="ts">
	import MenuBar from '$lib/components/menu_bar/MenuBar.svelte';
	import ControlStrip from '$lib/components/control_strip/ControlStrip.svelte';
	import Welcome from '$lib/components/Welcome/Welcome.svelte';
	import DesktopIcon from '$lib/components/desktop_icon/DesktopIcon.svelte';
	import { setActiveApp, setVisible } from '$lib/stores/apps.store';
	import type { Position } from '$lib/utils/windows';
	import { onMount } from 'svelte';
	import GUD from '$lib/components/GUD/GUD.svelte';
	import Tracks from '$lib/components/tracks/Tracks.svelte';
	import FAQ from '$lib/components/faq/FAQ.svelte';

	interface DesktopIconProps {
		icon_name: string;
		label: string;
		id: string;
		pos: Position;
	}

	function generateIconPositions(
		icons: Omit<DesktopIconProps, 'pos'>[],
		windowWidth: number,
		windowHeight: number,
		iconSize: number = 0,
		padding: number = 40
	): DesktopIconProps[] {
		// Calculate how many columns we can fit
		const rightMargin = iconSize; // Distance from right edge
		const maxIconsPerColumn = Math.floor(windowHeight / (iconSize + padding));

		console.log(maxIconsPerColumn);

		// Start positions
		let currentX = windowWidth - rightMargin;
		let currentY = padding;
		let itemsInCurrentColumn = 0;

		return icons.map((icon) => {
			// If we've filled the current column, start a new one
			if (itemsInCurrentColumn >= maxIconsPerColumn) {
				currentX -= iconSize + 20;
				currentY = 40;
				itemsInCurrentColumn = 0;
			}

			const position: Position = {
				x: currentX,
				y: currentY
			};

			// Prepare for next icon
			currentY += padding + 40;
			itemsInCurrentColumn++;

			console.log(icon.icon_name, position);

			return {
				...icon,
				pos: position
			};
		});
	}

	let height: number;
	let width: number;

	let DesktopIconList: DesktopIconProps[] = [];

	let init: number = 120;

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
		width = window.innerWidth;
		height = window.innerHeight;

		const icons: Omit<DesktopIconProps, 'pos'>[] = [
			{
				icon_name: 'internet_browse',
				label: 'Welcome!',
				id: 'welcome'
			},
			{
				icon_name: 'gud_logo',
				label: 'GUD',
				id: 'gud'
			},
			{
				icon_name: 'tracks',
				label: 'Tracks',
				id: 'tracks'
			},
			{
				icon_name: 'faq',
				label: 'FAQs',
				id: 'faqs'
			},
			{
				icon_name: 'itunes',
				label: 'Sponsors',
				id: 'sponsors'
			},
			{
				icon_name: 'itunes',
				label: 'Bro',
				id: 'bro'
			},
			{
				icon_name: 'itunes',
				label: 'AHHH',
				id: 'dude'
			}
		];

		DesktopIconList = generateIconPositions(icons, width, height, init);
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
