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
	import Sponsors from '$lib/components/sponsors/Sponsors.svelte';

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
		iconSize: number = 60,
		padding: number = 40,
		beginningXOffset: number = 30,
		rightMargin: number = 120
	): DesktopIconProps[] {
		const maxIconsPerColumn = Math.floor(windowHeight / (iconSize + padding + 20)); // Calcuklate how many icons can fit in a column

		console.log(maxIconsPerColumn);

		// Position declarations
		let currentX = windowWidth - rightMargin;
		let currentY = beginningXOffset;
		let itemsInCurrentColumn = 0;

		return icons.map((icon) => {
			// Check if column is filled up. If so, move to the next column.
			if (itemsInCurrentColumn >= maxIconsPerColumn) {
				currentX -= iconSize + padding - 10;
				currentY = beginningXOffset;
				itemsInCurrentColumn = 0;
			}

			const position: Position = {
				x: currentX,
				y: currentY
			};

			currentY += padding + iconSize;
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
			}
		];

		DesktopIconList = generateIconPositions(icons, width, height, 60, 60, 30, init);
	});

	onMount(() => {
		setActiveApp('welcome');
	});
</script>

<MenuBar />

<!-- CONTENT -->
<Welcome />
<Tracks />
<FAQ />
<GUD />
<Sponsors />

<a
	id="mlh-trust-badge"
	style="display:block;position:fixed;top:30px;z-index:10000"
	class="left-5 w-[10%] min-w-[60px] max-w-[100px] menu-md:left-10 menu-lg:left-20"
	href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2025-season&utm_content=white"
	target="_blank"
	><img
		src="https://s3.amazonaws.com/logged-assets/trust-badge/2025/mlh-trust-badge-2025-white.svg"
		alt="Major League Hacking 2025 Hackathon Season"
		style="width:100%"
	/></a
>

<a
	id="mlh-trust-badge"
	style="display:block;position:fixed;top:30px;z-index:10000"
	class="left-5 w-[10%] min-w-[60px] max-w-[100px] menu-md:left-10 menu-lg:left-20"
	href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2025-season&utm_content=white"
	target="_blank"
	><img
		src="https://s3.amazonaws.com/logged-assets/trust-badge/2025/mlh-trust-badge-2025-white.svg"
		alt="Major League Hacking 2025 Hackathon Season"
		style="width:100%"
	/></a
>

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
