<script lang="ts">
	import Resizeable from '$lib/components/app/Resizeable.svelte';
	import type { Size } from '$lib/utils/windows';
	import VerticalScroll from '../scrollbar/VerticalScroll.svelte';

	export let active: boolean;
	export let infinitelyWide: boolean = false;

	export let size: Size;
	let startResize: (e: MouseEvent) => void;
</script>

<Resizeable bind:size bind:startResize>
	<div
		class:border-opacity-40={!active}
		class:whitespace-nowrap={infinitelyWide}
		class="h-full w-full overflow-scroll"
		style="min-width: {size.w}px; min-height: {size.h}px"
	>
		<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
		<div class="flex h-full flex-col">
			<div class="flex flex-grow flex-row">
				<div class="flex-grow bg-primary-white">
					<slot />
				</div>
				<VerticalScroll />
			</div>
			<div class="flex">
				<div class="flex-grow"></div>
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
