<script lang="ts">
	export const DEFAULT_SIZE: Size = { w: 500, h: 350 };

	import TitleBar from '$lib/components/title_bar/TitleBar.svelte';
	import { GRID, type Resize, type Size } from '$lib/utils/windows';
	import { draggable } from '@neodrag/svelte';

	export let name: string = 'Window';
	export let visible: boolean = true;
	export let expanded: boolean = true;
	export let state: 'active' | 'moving' | 'background' = 'active';
	export let resizeTo: Resize | undefined = DEFAULT_SIZE;

	export let debug: boolean = false;

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
		class:shadow-window={state === 'active'}
		class:bg-gray-400={state === 'active'}
		class:bg-gray-300={state !== 'active'}
		class:border-opacity-40={state !== 'active'}
		class="absolute size-fit border-[1px] border-primary-black p-[1px]"
		use:draggable={{
			grid: GRID,
			cancel: '.cancel',
			bounds: 'parent',
			onDragStart: () => {
				state = 'moving';
			},
			onDragEnd: () => {
				state = 'active';
			}
		}}
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
			<div class=" w-[3px]" />
			<div class="cancel">
				<slot {size} active={state === 'active'} />
			</div>
			<div class=" w-[3px]" />
		</div>

		<div class="h-[3px]" hidden={!expanded} />
	</div>
{/if}

{#if debug}
	<fieldset>
		<legend><u>{name}</u></legend>

		<label>
			<b>State</b>
			<select bind:value={state}>
				<option value="active">Active</option>
				<option value="moving">Moving</option>
				<option value="background">Background</option>
			</select>
		</label>
		<br />

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
