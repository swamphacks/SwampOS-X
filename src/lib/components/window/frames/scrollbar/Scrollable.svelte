<script lang="ts">
	import Scrollbar from './Scrollbar.svelte';
	import type { Size } from '$lib/utils/windows';
	import StandardFrame from '../StandardFrame.svelte';

	export let size: Size;
	export let startResize: (e: MouseEvent) => void;
	export let onResizeStart: () => void;

	export let active: boolean;
	export let setActive: () => void;

	$: width = `${size.w}px`;
	$: height = `${size.h}px`;

	let viewport: HTMLElement;
	let contents: HTMLElement;
</script>

<div class="svlr-wrapper" style="width: {width}; height: {height}">
	<StandardFrame size={{ ...size, w: size.w - 16 }} maxSize={{ ...size, w: size.w - 16 }} {active}>
		<div bind:this={viewport} class="svlr-viewport h-full bg-gray-200" style:width={size.w - 16}>
			<div bind:this={contents} class="svlr-contents">
				<slot />
			</div>
		</div>
	</StandardFrame>

	<Scrollbar
		{viewport}
		{contents}
		{active}
		{setActive}
		{startResize}
		{onResizeStart}
		on:show
		on:hide
	/>
</div>

<style>
	.svlr-wrapper {
		position: relative;
	}

	.svlr-viewport {
		position: relative;
		overflow: scroll;
		box-sizing: border-box;

		/* hide scrollbar */
		-ms-overflow-style: none;
		scrollbar-width: none;
	}

	.svlr-viewport::-webkit-scrollbar {
		/* hide scrollbar */
		display: none;
	}
</style>
