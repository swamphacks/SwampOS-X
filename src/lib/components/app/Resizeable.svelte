<script lang="ts">
	import type { Position, Resize, Size } from '$lib/utils/windows';

	export let size: Size;
	export let minResize: Resize | null = null;

	let startLocation: Position | null;
	let startSize: Size | null;

	export function startResize({ pageX, pageY }: MouseEvent) {
		startLocation = { x: pageX, y: pageY };
		startSize = size;
	}

	function resize({ pageX, pageY }: MouseEvent) {
		if (!startLocation || !startSize) return;

		// Mouse delta
		const dx = pageX - startLocation.x;
		const dy = pageY - startLocation.y;

		// Corresponding size
		const W = startSize.w + dx,
			H = startSize.h + dy;

		// Constrained size
		size = {
			w: minResize && minResize.w ? Math.max(minResize.w, W) : W,
			h: minResize && minResize.h ? Math.max(minResize.h, H) : H
		};
	}

	function stopResize() {
		startLocation = startSize = null;
	}
</script>

<svelte:window on:mouseup={stopResize} on:mousemove={resize} />

<slot {startResize} />
