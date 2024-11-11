<script lang="ts">
	export const DEFAULT_SIZE: Size = { w: 500, h: 350 };

	import TitleBar from '$lib/components/title_bar/TitleBar.svelte';
	import { GRID, type Resize, type Size } from '$lib/utils/windows';
	import { draggable } from '@neodrag/svelte';
	import App from '../app/App.svelte';

	export let name: string = 'Window';
	export let expanded: boolean = true;

	export let resizeTo: Resize | undefined = DEFAULT_SIZE;

	export let debug: boolean = false;

	let size = DEFAULT_SIZE;

	const resize = () => {
			const { w, h } = size;
			size = { w: resizeTo?.w ?? w, h: resizeTo?.h ?? h };
		},
		toggleCollapse = () => {
			expanded = !expanded;
		};

	resize();
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<App {name}>
	<svelte:fragment let:active let:setActive let:unregister let:zIndex>
		<div
			class:shadow-window={active}
			class:bg-gray-400={active}
			class:bg-gray-300={!active}
			class:border-opacity-40={!active}
			class="absolute size-fit border-[1px] border-primary-black p-[1px]"
			use:draggable={{
				grid: GRID,
				cancel: '.cancel',
				bounds: {
					top: 30 + 1 // MenuBar height + border
				}
			}}
			on:mousedown={setActive}
			style="z-index: {zIndex}"
		>
			<TitleBar
				title={name}
				{active}
				onClose={unregister}
				onZoom={resize}
				onCollapse={toggleCollapse}
			>
				<slot slot="icon" name="icon" />
			</TitleBar>

			<div class:h-0={!expanded} class:overflow-y-clip={!expanded} class="flex">
				<div class=" w-[3px]" />
				<div class="cancel">
					<slot {size} {active} {setActive} />
				</div>
				<div class=" w-[3px]" />
			</div>

			<div class="h-[3px]" hidden={!expanded} />
		</div>
	</svelte:fragment>
</App>

{#if debug}
	<fieldset>
		<legend><u>{name}</u></legend>

		<label>
			<b>⬌</b>
			<input type="range" min="0" max="500" bind:value={size.w} />
		</label>

		<label>
			<b>⬍</b>
			<input type="range" min="0" max="500" bind:value={size.h} />
		</label>
	</fieldset>
{/if}
