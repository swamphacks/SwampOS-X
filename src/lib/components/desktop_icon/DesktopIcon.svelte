<script lang="ts">
	import { clickOutside } from '$lib/utils/clicks';
	import { draggable } from '@neodrag/svelte';
	import icons, { type IconName } from './icons';

	export let icon_name: IconName;
	export let label: string;
	export let onOpen: () => void = () => {};

	let active: boolean = false;
</script>

<!-- 27 words max for title -->

<div
	use:draggable={{
		defaultPosition: { x: 0, y: 0 },
		grid: [30, 30],
		bounds: 'parent',
		onDragStart: () => {
			active = true;
		}
	}}
	use:clickOutside={{
		deactivate: () => {
			active = false;
		}
	}}
	class=" relative flex h-[60px] w-[60px] flex-col items-center justify-center hover:cursor-default"
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
