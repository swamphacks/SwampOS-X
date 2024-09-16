<script lang="ts">
	import { draggable } from '@neodrag/svelte';
	import { setActiveApp, zindexApp } from '$lib/stores/apps.store';
	import { getColor, type StickyNoteColorKey } from './sticky-colors';

	export let initialMessage: string;
	export let appID: string;
	export let stickyNoteColor: StickyNoteColorKey;

	let color = getColor(stickyNoteColor);
	let active = false;

	let message: string = initialMessage;
	let stickyNoteElement: HTMLElement;

	const isOnElement = (event: MouseEvent) => {
		if (stickyNoteElement && stickyNoteElement.contains(event.target as Node)) active = true;
		else active = false;
	};

	document.addEventListener('click', isOnElement);

	const focusApp = () => {
		setActiveApp(appID);
	};

	$: boxShadow = `
        0.7px 0.7px 0px 1px ${color.secondary_color},
        0.4px 0.4px 0px 1.5px ${active ? color.secondary_color : '#fff'}
    `;

	$: backgroundColor = color.main_color;
	$: headerColor = active ? color.secondary_color : color.main_color;
</script>

<div
	class="relative h-[200px] w-[200px]"
	bind:this={stickyNoteElement}
	style="background-color: {backgroundColor}; box-shadow: {boxShadow}"
	style:z-index={$zindexApp[appID]}
	use:draggable={{ grid: [6, 6], handle: '.header', bounds: 'body', onDragStart: focusApp }}
>
	<div class="header h-[10px] w-full" style="background-color: {headerColor}"></div>
	<textarea
		bind:value={message}
		style="background-color: transparent;"
		class="m-0 min-h-[90%] w-full resize-none border-none pl-1 pr-1 leading-none focus:outline-none focus:ring-0"
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
