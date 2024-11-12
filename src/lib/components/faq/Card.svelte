<script lang="ts">
	import { onMount } from 'svelte';
	import { stickyNoteColors } from '$lib/components/sticky_note/sticky-colors';
	import { zIndex } from '$lib/stores/faq';
	import { draggable, type DragEventData } from '@neodrag/svelte';

	export let question: string;
	export let answer: string;
	export let color: string;

	const colorConfig = stickyNoteColors[color];
	let position = { x: 0, y: 0 };

	let el: HTMLElement;
	const onResizeStart = () => {
		el.style.zIndex = '0';
		position = { x: 0, y: 0 };
	};

	const onDrag = (e: CustomEvent<DragEventData>) => {
		position = { x: e.detail.offsetX, y: e.detail.offsetY };
	};

	onMount(() => {
		el.addEventListener('resize-start', onResizeStart);

		return () => {
			el.removeEventListener('resize-start', onResizeStart);
		};
	});
</script>

<div
	id="faq-card"
	class="column-settings relative mb-4 max-w-[300px] text-wrap border border-solid p-2 font-chicago transition duration-75 ease-linear"
	bind:this={el}
	style="background-color: {colorConfig.main_color}; border-left-color: white; border-top-color: white; border-right-color: {colorConfig.highlight_color}; border-bottom-color: {colorConfig.highlight_color};"
	on:neodrag:start={() => {
		zIndex.update((z) => z + 1);
		el.style.zIndex = `${$zIndex}`;
	}}
	on:neodrag={onDrag}
	use:draggable={{
		position,
		bounds: 'parent'
	}}
>
	<h2 class="pb-2 text-2xl font-bold">{question}</h2>
	<p class="text-sm">{answer}</p>
</div>

<style>
	.column-settings {
		break-inside: avoid;
	}
</style>
