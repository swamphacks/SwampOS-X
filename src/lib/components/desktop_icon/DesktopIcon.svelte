<script lang="ts">
	import { clickOutside } from '$lib/utils/clicks';
	import { draggable } from '@neodrag/svelte';
	import icons, { type IconName } from './icons';
	import type { Position } from '$lib/utils/windows';

	export let icon_name: IconName;
	export let label: string;
	export let onOpen: () => void = () => {};
	export let startAt: Position = { x: 0, y: 0 };

	let size = '60px';

	// Check if we are running in the browser
	if (typeof window !== 'undefined') {
		const mediaQuery = window.matchMedia('(max-width: 640px)');
		if (mediaQuery.matches) {
			size = '45px';
		}

		mediaQuery.addEventListener('change', (event) => {
			if (event.matches) {
				size = '45px';
			} else {
				size = '60px';
			}
		});
	}

	let active: boolean = false;
</script>

<!-- 27 words max for title -->

<div
	use:draggable={{
		defaultPosition: startAt,
		grid: [5, 5],
		bounds: {
			top: 30 + 1
		},
		onDragStart: () => {
			active = true;
		}
	}}
	use:clickOutside={{
		deactivate: () => {
			active = false;
		}
	}}
	class=" relative flex flex-col items-center justify-center hover:cursor-default"
	style="height: {size}; width: {size};"
	on:dblclick={() => {
		onOpen();
		active = false;
	}}
	role="button"
	tabindex="0"
>
	<img
		draggable="false"
		src={icons[icon_name]}
		alt="Icon"
		class="h-full"
		style="filter: brightness({active ? '0.4' : '1'});"
	/>
	<p
		class="icon-text absolute -bottom-7 inline-block whitespace-nowrap px-1.5 pb-0.5 text-center text-[30px] leading-[.65]"
		style="background-color: {active
			? 'rgba(0, 0, 0, 1)'
			: 'rgba(255, 255, 255, 0.4)'}; color: {active ? 'white' : '#1A1A1A'};"
	>
		{label}
	</p>
</div>
