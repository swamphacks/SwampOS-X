<script lang="ts">
	import BarPicker from './atoms/BarPicker.svelte';
	import CloseBox from './atoms/CloseBox.svelte';
	import ZoomBox from './atoms/ZoomBox.svelte';
	import CollapseBox from './atoms/CollapseBox.svelte';

	export let title: string;
	export let active: boolean = true;

	export let onClose: (() => unknown) | undefined;
	export let onZoom: (() => unknown) | undefined;
	export let onCollapse: (() => unknown) | undefined;
</script>

<div class="{active ? 'bg-gray-400' : 'bg-gray-300'} p-[3px]">
	<div class="flex flex-grow items-center gap-[4px]">
		<CloseBox hide={!active} onClick={onClose} />

		<BarPicker {active} />

		<div class="flex gap-[4px] {!active && 'opacity-50'}">
			<slot name="icon" />
			<div class="headline text-primary-black">
				{title}
			</div>
		</div>

		<BarPicker {active} />

		<ZoomBox hide={!active} onClick={onZoom} />

		<CollapseBox hide={!active} onClick={onCollapse} />
	</div>
</div>
