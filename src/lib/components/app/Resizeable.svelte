<script lang="ts">
	import type { Position, Resize, Size } from '$lib/utils/windows';

	export let size: Size;
	export let minResize: Resize | null = null;
	export let maxResize: Resize | null = null;

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

		// Constrained size - min
		size = {
			w: minResize && minResize.w ? Math.max(minResize.w, W) : W,
			h: minResize && minResize.h ? Math.max(minResize.h, H) : H
		};

		// Constrained size - max
		size = {
			w: maxResize && maxResize.w ? Math.min(maxResize.w, size.w) : size.w,
			h: maxResize && maxResize.h ? Math.min(maxResize.h, size.h) : size.h
		};
	}

	function stopResize() {
		startLocation = startSize = null;
	}

	function windowResize() {
		if (size.w >= window.innerWidth + 10) {
			size.w = window.innerWidth - 10;
		}

		if (size.h >= window.innerHeight + 10) {
			size.h = window.innerHeight - 10;
		}
	}
</script>

<svelte:window on:mouseup={stopResize} on:mousemove={resize} on:resize={windowResize} />

<slot {startResize} />
