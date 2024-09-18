<script lang="ts">
	import { draggable } from '@neodrag/svelte';
	import { setActiveApp, openApps, activeApp } from '$lib/stores/apps.store';
	import { getColor, type StickyNoteColorKey } from './sticky-colors';

	export let initialMessage: string;
	export let appID: string;
	export let stickyNoteColor: StickyNoteColorKey;
	export let height;
	export let width;

	let color = getColor(stickyNoteColor);
	let active = false;

	let message: string = initialMessage;
	let stickyNoteElement: HTMLElement;

	const focusApp = () => {
		setActiveApp(appID);
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
	class={`relative h-[${height}px] w-[${width}px] flex flex-col`}
	bind:this={stickyNoteElement}
	style="background-color: {backgroundColor}; box-shadow: {boxShadow}"
	style:z-index={$openApps[appID]}
	on:focus={focusApp}
	use:draggable={{ grid: [6, 6], handle: '.header', bounds: 'body', onDragStart: focusApp }}
>
	<div class="header h-[10px] w-full" style="background-color: {headerColor}"></div>
	<textarea
		bind:value={message}
		style="background-color: transparent;"
		class="sticky-text m-0 h-[95%] w-full grow resize-none border-none pl-1 pr-1 text-lg leading-none focus:outline-none focus:ring-0"
	></textarea>
	<div
		class="sticky-note-resizable-clip absolute bottom-0 right-0 flex h-[9px] w-[9px] items-center justify-center hover:cursor-pointer"
		style="background-color: {color.highlight_color};"
	>
		<div
			style="background-color: {color.main_color};"
			class="sticky-note-resizable-clip h-[8px] w-[8px]"
		></div>
	</div>
</div>
