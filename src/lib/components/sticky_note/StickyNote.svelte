<script lang="ts">
	import { draggable } from '@neodrag/svelte';
	import { getColor, type StickyNoteColorKey } from './sticky-colors';
	import App from '$lib/components/app/App.svelte';
	import Header from './molecules/Header.svelte';

	export let text: string = '';
	export let color: StickyNoteColorKey = 'yellow';
	export let height: number = 200;
	export let width: number = 200;

	let isResizing: boolean = false;

	let stickyNoteElement: HTMLElement;

	const onResizeMouseDown = () => {
		isResizing = true;
		document.addEventListener('mousemove', onResizeMouseMove);
		document.addEventListener('mouseup', onResizeMouseUp);
	};

	const onResizeMouseMove = (e: MouseEvent) => {
		if (isResizing) {
			const newWidth = e.clientX - stickyNoteElement.getBoundingClientRect().left;
			const newHeight = e.clientY - stickyNoteElement.getBoundingClientRect().top;

			width = Math.max(newWidth, 100); // Minimum width 100px
			height = Math.max(newHeight, 60); // Minimum height 60px
		}
	};

	const onResizeMouseUp = () => {
		isResizing = false;
		document.removeEventListener('mousemove', onResizeMouseMove);
		document.removeEventListener('mouseup', onResizeMouseUp);
	};

	const zoom = () => null;

	let colorSet = getColor(color);
</script>

<App name="sticky-note">
	<svelte:fragment let:active let:setActive let:unregister>
		<div
			class={`flex flex-col border-[1px]`}
			style="
			background-color: {colorSet.main_color}; 
			height: {height}px; 
			width: {width}px;
			{active
				? `border: 1px solid ${colorSet.highlight_color};`
				: `border-left: 1px solid white; border-top: 1px solid white; 
				border-bottom: 1px solid ${colorSet.highlight_color}; 
				border-right: 1px solid ${colorSet.highlight_color};`}
			"
			bind:this={stickyNoteElement}
			use:draggable={{
				grid: [6, 6],
				handle: '.header',
				bounds: 'body',
				onDragStart: setActive,
				cancel: '.cancel'
			}}
		>
			<Header {colorSet} {active} onClose={unregister} onZoom={zoom} />

			<textarea
				bind:value={text}
				on:click={setActive}
				style={`background-color: transparent; ::selection { background: ${colorSet.highlight_color} }`}
				spellcheck="false"
				class="sticky-text m-0 h-[95%] w-full grow resize-none border-none pl-1 pr-1 text-lg leading-none focus:outline-none focus:ring-0"
			/>
			<div
				class="sticky-note-resizable-clip absolute bottom-[-0.5px] right-[-0.5px] flex h-[8px] w-[8px] items-center justify-center hover:cursor-pointer"
				style="background-color: {colorSet.highlight_color};"
				on:mousedown={onResizeMouseDown}
				style:visibility={active ? 'visible' : 'hidden'}
				role="button"
				tabindex="0"
			>
				<div
					style="background-color: {colorSet.main_color};"
					class="sticky-note-resizable-clip-inner h-[8px] w-[8px]"
				></div>
			</div>
		</div>
	</svelte:fragment>
</App>
