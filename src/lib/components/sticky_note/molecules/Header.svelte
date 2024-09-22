<script lang="ts">
	import CloseBox from '../atoms/CloseBox.svelte';
	import type { StickyConfig } from '../sticky-colors';

	export let colors: StickyConfig;
	export let headerColorResponsive: string;
	export let active: boolean;
</script>

<div
	class="header flex h-[10px] w-full flex-row px-1"
	style="background-color: {headerColorResponsive}"
>
	<CloseBox {colors} {active} />
</div>
