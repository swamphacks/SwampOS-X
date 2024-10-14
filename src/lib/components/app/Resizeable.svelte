<script lang="ts">
	import type { Position, Size } from '$lib/utils/windows';

	export let size: Size;

	let startLocation: Position | null;
	let startSize: Size | null;

	export function startResize({ pageX, pageY }: MouseEvent) {
		startLocation = { x: pageX, y: pageY };
		startSize = size;
	}

	function resize({ pageX, pageY }: MouseEvent) {
		if (!startLocation || !startSize) return;

		const dx = pageX - startLocation.x,
			dy = pageY - startLocation.y;

		size = {
			w: startSize.w + dx,
			h: startSize.h + dy
		};
	}

	function stopResize() {
		startLocation = startSize = null;
	}
</script>

<svelte:window on:mouseup={stopResize} on:mousemove={resize} />

<slot {startResize} />
