<script lang="ts">
	import Resizeable from '$lib/components/app/Resizeable.svelte';
	import Scrollable from './scrollbar/Scrollable.svelte';
	import type { Resize, Size } from '$lib/utils/windows';

	export let infinitelyWide: boolean = false;
	export let verticalResize: boolean = true;

	export let active: boolean;
	export let setActive: () => void;

	export let size: Size;
	export let onResizeStart: (e: MouseEvent) => void = () => {};
	// let resizeStarted = false;

// <Resizeable bind:size bind:startResize {verticalResize}>
// 	<div
// 		class:border-opacity-40={!active}
// 		class:whitespace-nowrap={infinitelyWide}
// 		class="h-full w-full"
// 		style="width: {Math.max(minSize.w, size.w)}px; height: {Math.max(minSize.h, size.h)}px;"
// 	>
// 		<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
// 
// 		<div class="flex h-full w-full flex-col">
// 			<div class="w-full flex-grow overflow-scroll">
// 				<slot />
// 			</div>
// 
// 			<div class="flex justify-end">
// 				<img
// 					class="h-[16px] w-[16px]"
// 					src="/assets/scrollbar/size_box.png"
// 					alt="Drag me"
// 					on:mousedown={(e) => {
// 						if (!resizeStarted) {
// 							onResizeStart(e);
// 							resizeStarted = true;
// 						}
// 						startResize(e);
// 					}}
// 					on:mouseup={() => {
// 						resizeStarted = false;
// 					}}
// 					draggable="false"
// 				/>
// 			</div>
// 		</div>
// 	</div>
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
