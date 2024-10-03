<script lang="ts">
	import { draggable } from '@neodrag/svelte';
	import { getColor, type StickyNoteColorKey } from './sticky-colors';
	import App from '$lib/components/app/App.svelte';
	import Header from './molecules/Header.svelte';

	export let text: string = '';
	export let color: StickyNoteColorKey = 'yellow';
	export let height: number = 200;
	export let width: number = 200;

	let isResizing = false;

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

<App name="icky-sticky">
	<svelte:fragment let:active let:setActive let:unregister>
		<div
			class={`flex flex-col border-[1px] border-l-primary-white border-t-primary-white`}
			style="background-color: {colorSet.main_color}; height: {height}px; width: {width}px;"
			bind:this={stickyNoteElement}
			on:focus={setActive}
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
				class="sticky-note-resizable-clip absolute bottom-0 right-0 flex h-[10px] w-[10px] items-center justify-center hover:cursor-pointer"
				style="background-color: {colorSet.highlight_color};"
				on:mousedown={onResizeMouseDown}
				role="button"
				tabindex="0"
			>
				<div
					style="background-color: {colorSet.main_color};"
					class="sticky-note-resizable-clip-inner h-[10px] w-[10px]"
				></div>
			</div>
		</div>
	</svelte:fragment>
</App>
