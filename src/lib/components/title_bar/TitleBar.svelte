<script lang="ts">
	import HandlePicker from './atoms/BarPicker.svelte';
	import CloseBox from './atoms/CloseBox.svelte';
	import ZoomBox from './atoms/ZoomBox.svelte';
	import CollapseBox from './atoms/CollapseBox.svelte';

	export let title: string;
	export let active: boolean = true;

	export let onClose: (() => unknown) | undefined;
	export let onZoom: (() => unknown) | undefined;
	export let onCollapse: (() => unknown) | undefined;
</script>

<div class="{active ? 'bg-gray-400' : 'bg-gray-300'} flex flex-grow items-center gap-[4px] p-[3px]">
	<CloseBox hidden={!active} onClick={onClose} />

	<HandlePicker {active} />

	<div class="flex gap-[4px] {!active && 'opacity-50'}">
		<slot name="icon" />
		<div class="headline text-primary-black">
			{title}
		</div>
	</div>

	<HandlePicker {active} />

	<ZoomBox hidden={!active} onClick={onZoom} />

	<CollapseBox hidden={!active} onClick={onCollapse} />
</div>
