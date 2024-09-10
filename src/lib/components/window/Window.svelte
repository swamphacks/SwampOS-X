<script lang="ts">
	import TitleBar from '$lib/components/title_bar/TitleBar.svelte';
	import WindowFrame from '$lib/components/window/WindowFrame.svelte';
	import { draggable } from '@neodrag/svelte';

	export let name: string = 'Window name';
	export let visible: boolean = true;
	export let expanded: boolean = true;
	export let state: 'active' | 'moving' | 'background' = 'active';
</script>

{#if visible}
	<div
		class="size-fit border-[1px] border-primary-black p-[1px] {state === 'active'
			? 'shadow-window bg-gray-400'
			: 'bg-gray-300'}"
		use:draggable={{ grid: [4, 4] }}
	>
		<TitleBar
			title={name}
			active={state === 'active'}
			onClose={() => {
				visible = false;
			}}
			onZoom={() => {
				// TODO: add auto-sizing
			}}
			onCollapse={() => {
				expanded = !expanded;
			}}
		>
			<slot slot="icon" name="icon" />
		</TitleBar>

		<div class:h-0={!expanded} class:overflow-y-clip={!expanded}>
			<WindowFrame>
				<slot />
			</WindowFrame>
		</div>
	</div>
{/if}
