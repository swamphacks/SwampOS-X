<script lang="ts">
	import Resizeable from '$lib/components/app/Resizeable.svelte';
	import type { Size } from '$lib/utils/windows';

	export let active: boolean;
	export let infinitelyWide: boolean = false;
	export let verticalResize: boolean = true;

	export let minSize: Size = { w: 250, h: 250 };
	export let size: Size;
	let startResize: (e: MouseEvent) => void;
</script>

<Resizeable bind:size bind:startResize {verticalResize}>
	<div
		class:border-opacity-40={!active}
		class:whitespace-nowrap={infinitelyWide}
		class="h-full w-full overflow-scroll"
		style="width: {Math.max(minSize.w, size.w)}px; height: {Math.max(minSize.h, size.h)}px;"
	>
		<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->

		<div class="flex h-full w-full flex-col">
			<div class="w-full flex-grow overflow-hidden">
				<slot />
			</div>

			<div class="flex justify-end">
				<img
					class="h-[16px] w-[16px]"
					src="/assets/scrollbar/size_box.png"
					alt="Drag me"
					on:mousedown={startResize}
					draggable="false"
				/>
			</div>
		</div>
	</div>
</Resizeable>
