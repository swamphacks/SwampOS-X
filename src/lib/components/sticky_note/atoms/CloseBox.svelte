<script lang="ts">
	import type { StickyConfig } from '../sticky-colors';

	export let active;
	export let colorSet: StickyConfig;
	export let onClose: () => void;

	let clicked = false;

	const handleMouseDown = () => {
		clicked = true;
	};

	const handleMouseUp = () => {
		clicked = false;
		onClose();
	};

	const handleMouseLeave = () => {
		clicked = false;
	};
</script>

<button
	class="cancel flex aspect-square h-[75%] items-center justify-center border-b-[1.5px] border-r-[1.5px] hover:cursor-pointer"
	style="border-color: {colorSet.highlight_color}; background-color: {clicked
		? colorSet.highlight_color
		: colorSet.main_color}; visibility: {active ? 'visible' : 'hidden'}"
	on:mousedown={handleMouseDown}
	on:mouseup={handleMouseUp}
	on:mouseleave={handleMouseLeave}
>
	<div
		class="aspect-square h-[60%] border-l-[1px] border-t-[1px]"
		style="border-color: {colorSet.highlight_color};"
	></div>
</button>
