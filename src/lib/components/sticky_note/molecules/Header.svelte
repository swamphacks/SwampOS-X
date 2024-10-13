<script lang="ts">
	import CloseBox from '../atoms/CloseBox.svelte';
	import ShrinkBox from '../atoms/ShrinkBox.svelte';
	import type { StickyConfig } from '../sticky-colors';

	export let onClose: () => void;
	export let onZoom: () => void;

	export let colorSet: StickyConfig;
	export let active: boolean;
</script>

<div
	class="header relative flex h-[9px] w-full flex-row items-center justify-between px-[4px]"
	style="background-color: {colorSet.main_color}"
	style:visibility={active ? 'visible' : 'hidden'}
>
	<!-- Background pattern -->
	<div
		class="absolute left-0 top-0 z-0 h-full w-full"
		style="
				background-image: url(/assets/sticky/header-background.png);
				background-repeat: repeat; /* Ensures the image repeats */
				background-size: 2px auto; /* Keeps the original size of the image */
				filter: {colorSet.secondary_color_filter};
				"
	></div>
	<CloseBox {colorSet} {active} {onClose} />
	<ShrinkBox {colorSet} onShrink={onZoom} />
</div>
