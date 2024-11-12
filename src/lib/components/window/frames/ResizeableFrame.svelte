<script lang="ts">
	import Resizeable from '$lib/components/app/Resizeable.svelte';
	import Scrollable from './scrollbar/Scrollable.svelte';
	import type { Resize, Size } from '$lib/utils/windows';

	export let active: boolean;
	export let setActive: () => void;

	export let size: Size;
	export let minResize: Resize | null = { w: 150, h: 150 };
	export let maxResize: Resize | null = null;
	export let onResizeStart: () => void = () => {};
	export let color: string = '';

	let startResize: (e: MouseEvent) => void;
</script>

<Resizeable bind:size bind:startResize {minResize} {maxResize}>
	<svelte:fragment let:startResize>
		<Scrollable {size} {active} {setActive} {startResize} {onResizeStart} {color}>
			<slot />
		</Scrollable>
	</svelte:fragment>
</Resizeable>
