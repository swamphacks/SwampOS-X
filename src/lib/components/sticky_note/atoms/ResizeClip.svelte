<script lang="ts">
	export let active: boolean;
	export let setActive: () => void;
	export let startResize: (e: MouseEvent) => void;
	export let colorSet: { main_color: string; highlight_color: string };
</script>

<div
	class="sticky-note-resizable-clip absolute bottom-0 right-0 flex h-[8px] w-[8px] items-center justify-center hover:cursor-pointer"
	style="background-color: {colorSet.highlight_color};"
	on:mousedown={(e) => {
		e.stopPropagation();
		setActive();
		startResize(e);
	}}
	style:visibility={active ? 'visible' : 'hidden'}
	role="button"
	tabindex="0"
>
	<div
		style="background-color: {colorSet.main_color};"
		class="sticky-note-resizable-clip-inner h-[8px] w-[8px]"
	></div>
</div>
