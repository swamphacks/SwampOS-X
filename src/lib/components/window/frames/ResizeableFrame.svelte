<script lang="ts">
	import Resizeable from '$lib/components/app/Resizeable.svelte';
	import type { Resize, Size } from '$lib/utils/windows';
	import Scrollable from './scrollbar/Scrollable.svelte';

	export let active: boolean;
	export let setActive: () => void;

	export let size: Size;
	export let minResize: Resize | null = { w: 150, h: 150 };

	let startResize: (e: MouseEvent) => void;
</script>

<Resizeable bind:size bind:startResize {minResize}>
	<svelte:fragment let:startResize>
		<Scrollable {size} {active} {setActive} {startResize}>
			<slot />
		</Scrollable>
	</svelte:fragment>
</Resizeable>
