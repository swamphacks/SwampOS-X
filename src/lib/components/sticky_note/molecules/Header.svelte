<script lang="ts">
	import CloseBox from '../atoms/CloseBox.svelte';
	import ShrinkBox from '../atoms/ShrinkBox.svelte';
	import type { StickyConfig } from '../sticky-colors';

	export let onClose: () => void;
	export let onShrink: () => void;

	export let colors: StickyConfig;
	export let headerColorResponsive: string;
	export let active: boolean;
</script>

<div
	class="header flex h-[10px] w-full flex-row justify-between px-1"
	style="background-color: {headerColorResponsive}"
>
	<CloseBox {colors} {active} {onClose} />
	<ShrinkBox {colors} {active} {onShrink} />
</div>
