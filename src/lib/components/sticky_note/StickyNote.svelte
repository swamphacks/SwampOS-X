<script lang="ts">
	import { draggable } from '@neodrag/svelte';
	import { setActiveApp, zindexApp } from '$lib/stores/apps.store';

	export let initialMessage: string;
	export let appID: string;

	let message: string = initialMessage;
	let stickyNoteElement: HTMLElement;

	const focusApp = () => {
		setActiveApp(appID);
	};
</script>

<div
	class="relative h-[200px] w-[200px] bg-plum shadow-sticky-note"
	bind:this={stickyNoteElement}
	style:z-index={$zindexApp[appID]}
	use:draggable={{ grid: [6, 6], handle: '.header', bounds: 'body', onDragStart: focusApp }}
>
	<div class="header h-[6%] w-full bg-magenta"></div>
	<textarea
		bind:value={message}
		class="m-0 min-h-[90%] w-full resize-none border-none bg-plum p-1 text-xs leading-none focus:outline-none focus:ring-0"
	></textarea>
	<div
		class="sticky-note-resizable-clip absolute bottom-0 right-0 flex h-[10px] w-[10px] items-center justify-center bg-magenta hover:cursor-pointer"
	>
		<div class="sticky-note-resizable-clip h-[9px] w-[9px] bg-plum"></div>
	</div>
</div>
