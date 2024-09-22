<script lang="ts">
	import { draggable } from '@neodrag/svelte';
	import { setActiveApp, openApps, activeApp } from '$lib/stores/apps.store';
	import { getColor, type StickyNoteColorKey } from './sticky-colors';
	import Header from './molecules/Header.svelte';

	export let initialMessage: string;
	export let appID: string;
	export let stickyNoteColor: StickyNoteColorKey;
	export let height: number;
	export let width: number;

	let color = getColor(stickyNoteColor);
	let active = false;
	let isResizing = false;

	let message: string = initialMessage;
	let stickyNoteElement: HTMLElement;

	const focusApp = () => {
		setActiveApp(appID);
	};

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

	$: boxShadow = `
        0.7px 0.7px 0px 1px ${color.secondary_color},
        -.2px -.2px 0px 1.5px ${active ? color.secondary_color : '#fff'}
    `;

	$: backgroundColor = color.main_color;
	$: headerColor = active ? color.secondary_color : color.main_color;

	$: active = $activeApp === appID ? true : false;
</script>

<div
	class={`absolute flex flex-col`}
	style="background-color: {backgroundColor}; box-shadow: {boxShadow}; height: {height}px; width: {width}px;"
	style:z-index={$openApps[appID]}
	bind:this={stickyNoteElement}
	on:focus={focusApp}
	use:draggable={{
		grid: [6, 6],
		handle: '.header',
		bounds: 'body',
		onDragStart: focusApp,
		cancel: '.cancel'
	}}
>
	<Header colors={color} headerColorResponsive={headerColor} {active} />
	<textarea
		bind:value={message}
		style="background-color: transparent;"
		class="sticky-text m-0 h-[95%] w-full grow resize-none border-none pl-1 pr-1 text-lg leading-none focus:outline-none focus:ring-0"
	></textarea>
	<div
		class="sticky-note-resizable-clip absolute bottom-0 right-0 flex h-[10px] w-[10px] items-center justify-center hover:cursor-pointer"
		style="background-color: {color.highlight_color};"
		on:mousedown={onResizeMouseDown}
		role="button"
		tabindex="0"
	>
		<div
			style="background-color: {color.main_color};"
			class="sticky-note-resizable-clip h-[9px] w-[9px]"
		></div>
	</div>
</div>
