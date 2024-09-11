<script lang="ts">
	import { onMount } from 'svelte';
	import { draggable } from '@neodrag/svelte';
	import { incrementZIndex, highestZIndex } from '$lib/state/zIndexStore';

	export let initialMessage: string;
	let active: boolean = false;
	let message: string = initialMessage;
	let noteElement: HTMLElement;
	let zIndex: number = 1;

	onMount(() => {
		document.addEventListener('click', handleClick);
		highestZIndex.subscribe(value => {
			if (active) {
				zIndex = value;
			}
		})
		return () => {
			document.removeEventListener('click', handleClick);
		};
	});

	const handleClick = (event: MouseEvent) => {
		const target = event.target as HTMLElement;
		if (noteElement && noteElement.contains(target)) {
			active = true;
			bringToFront();
		} else {
			active = false;
		}

		console.log("The zindex is ", zIndex)
	};

	const onDragStart = () => {
		active = true;
		bringToFront();
	};

	const bringToFront = () => {
		highestZIndex.update(n => n + 1);
	};
</script>

<div
	class="relative h-[200px] w-[200px] bg-plum shadow-sm shadow-primary-white"
	bind:this={noteElement}
	use:draggable={{ grid: [6, 6], handle: '.header', onDragStart: onDragStart, bounds: 'body' }}
	style="z-index: {zIndex};"
>
	<div class="header h-[5%] w-full {active ? 'bg-magenta' : 'bg-plum'}"></div>
	<textarea
		bind:value={message}
		class="m-0 min-h-[90%] w-full resize-none border-none bg-plum p-0 text-xs leading-none focus:outline-none focus:ring-0"
	></textarea>
	<div
		class="sticky-note-resizable-clip absolute bottom-0 right-0 flex h-[10px] w-[10px] items-center justify-center bg-magenta hover:cursor-pointer"
	>
		<div class="sticky-note-resizable-clip h-[9px] w-[9px] bg-plum"></div>
	</div>
</div>
