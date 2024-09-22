<script lang="ts">
	type Size = { w: number; h: number };
	type Resize = { w?: number; h?: number };

	export const DEFAULT_SIZE: Size = { w: 500, h: 350 };

	import TitleBar from '$lib/components/title_bar/TitleBar.svelte';
	import WindowFrame from '$lib/components/window/WindowFrame.svelte';
	import { draggable } from '@neodrag/svelte';

	export let name: string = 'Window';
	export let visible: boolean = true;
	export let expanded: boolean = true;
	export let state: 'active' | 'moving' | 'background' = 'active';
	export let resizeTo: Resize | undefined = DEFAULT_SIZE;

	let size = DEFAULT_SIZE;

	const close = () => {
			visible = false;
		},
		resize = () => {
			const { w, h } = size;
			size = { w: resizeTo?.w ?? w, h: resizeTo?.h ?? h };
		},
		toggleCollapse = () => {
			expanded = !expanded;
		};

	resize();
</script>

{#if visible}
	<div
		class="size-fit border-[1px] border-primary-black p-[1px] {state === 'active'
			? 'shadow-window bg-gray-400'
			: 'bg-gray-300'}"
		use:draggable={{ grid: [4, 4], handle: '.handle', bounds: 'parent' }}
	>
		<TitleBar
			title={name}
			active={state === 'active'}
			onClose={close}
			onZoom={resize}
			onCollapse={toggleCollapse}
		>
			<slot slot="icon" name="icon" />
		</TitleBar>

		<div class:h-0={!expanded} class:overflow-y-clip={!expanded} class="flex">
			<div class="handle w-[3px] flex-grow" />
			<WindowFrame {size}>
				<slot />
			</WindowFrame>
			<div class="handle w-[3px] flex-grow" />
		</div>

		<div class="handle flex-grow" style="height: {expanded ? 3 : 0}px;" />
	</div>
{/if}

<input type="range" min="0" max="500" bind:value={size.w} />
<input type="range" min="0" max="500" bind:value={size.h} />
