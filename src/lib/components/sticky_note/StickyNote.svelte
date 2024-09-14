<script lang="ts">
	import { onMount } from 'svelte';
	import { draggable } from '@neodrag/svelte';


	export let initialMessage: string;
	let active: boolean = false;
	let message: string = initialMessage;
	let noteElement: HTMLElement;
	let zIndex: number = 1;

	const handleClick = (event: MouseEvent) => {
		const target = event.target as HTMLElement;
		if (noteElement && noteElement.contains(target)) {
			active = true;
		} else {
			active = false;
		}

		console.log("The zindex is ", zIndex)
	};

	const onDragStart = () => {
		active = true;
	};

	document.addEventListener('click', handleClick);
</script>

<div
	class="relative h-[200px] w-[200px] bg-plum shadow-sticky-note"
	bind:this={noteElement}
	use:draggable={{ grid: [6, 6], handle: '.header', onDragStart: onDragStart, bounds: 'body' }}
	style="z-index: {zIndex};"
>
	<div class="header h-[6%] w-full {active ? 'bg-magenta' : 'bg-plum'}"></div>
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
