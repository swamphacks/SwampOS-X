<script lang="ts">
	import { onMount } from 'svelte';
	import { draggable } from '@neodrag/svelte';

	export let initialMessage: string;
	let active: boolean = false;
	let message: string = initialMessage;
	let noteElement: HTMLElement;
	let zindex: Number = active ? 50 : 0;

	onMount(() => {
		document.addEventListener('click', handleClick);

		return () => {
			document.removeEventListener('click', handleClick);
		};
	});

	const handleClick = (event: MouseEvent) => {
		const target = event.target as HTMLElement;

		if (noteElement && noteElement.contains(target)) {
			active = true;
		} else {
			active = false;
		}
	};
</script>

<div
	style={`z-index: ${zindex};`}
	class="relative h-[200px] w-[200px] bg-plum shadow-sm shadow-primary-white"
	bind:this={noteElement}
	use:draggable={{ grid: [6, 6], handle: '.header' }}
>
	<div class="header h-[5%] w-full {active ? 'bg-magenta' : 'bg-plum'}"></div>

	<textarea
		bind:value={message}
		class="m-0 h-[95%] w-full resize-none border-none bg-plum p-0 text-xs leading-none focus:outline-none focus:ring-0"
	></textarea>
	<div
		class="sticky-note-resizable-clip absolute bottom-0 right-0 flex h-[10px] w-[10px] items-center justify-center bg-magenta hover:cursor-pointer"
	>
		<div class="sticky-note-resizable-clip h-[8px] w-[8px] bg-plum"></div>
	</div>
</div>
