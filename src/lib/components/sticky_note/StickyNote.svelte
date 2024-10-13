<script lang="ts">
	import { draggable } from '@neodrag/svelte';
	import { getColor, type StickyNoteColorKey } from './sticky-colors';
	import App from '$lib/components/app/App.svelte';
	import Header from './molecules/Header.svelte';
	import { GRID, type Position, type Size } from '$lib/utils/windows';
	import Resizeable from '../app/Resizeable.svelte';
	import ResizeClip from './atoms/ResizeClip.svelte';

	export let text: string = '';
	export let color: StickyNoteColorKey = 'yellow';
	let colorSet = getColor(color);

	export let startAt: Position = { x: 0, y: 0 };

	export let size: Size = { w: 200, h: 200 };
	export let defaultSize: Size = size;

	let startResize: (e: MouseEvent) => void;

	const zoom = () => {
		size = defaultSize;
	};
</script>

<App name="sticky-note">
	<svelte:fragment let:active let:setActive let:unregister let:zIndex>
		<div
			class="absolute flex w-min flex-col"
			style="background-color: {colorSet.main_color}; z-index: {zIndex};"
			use:draggable={{
				defaultPosition: startAt,
				grid: GRID,
				handle: '.header',
				bounds: 'parent',
				cancel: '.cancel'
			}}
		>
			<div
				class="border-[1px]"
				style={active
					? `border: 1px solid ${colorSet.highlight_color};`
					: `border-left: 1px solid white; border-top: 1px solid white; 
						border-bottom: 1px solid ${colorSet.highlight_color}; 
						border-right: 1px solid ${colorSet.highlight_color};`}
			>
				<Header {colorSet} {active} onClose={unregister} onZoom={zoom} {setActive} />

				<Resizeable bind:size bind:startResize>
					<textarea
						class="sticky-text m-0 border-none pl-1 pr-1 text-lg leading-none focus:outline-none focus:ring-0"
						style={`background-color: transparent; ::selection { background: ${colorSet.highlight_color} };
							height: ${size.h}px; width: ${size.w}px;`}
						spellcheck="false"
						bind:value={text}
						on:mousedown={setActive}
					/>
				</Resizeable>

				<ResizeClip {active} {setActive} {startResize} {colorSet} />
			</div>
		</div>
	</svelte:fragment>
</App>
