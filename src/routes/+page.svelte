<script>
	import StickyNote from '$lib/components/sticky_note/StickyNote.svelte';
	import Window from '$lib/components/window/Window.svelte';
	import { openApps, addSticky } from '$lib/stores/apps.store';

	addSticky();
	addSticky();
	addSticky();
</script>

<!-- <Window name="FAQs">
	<slot slot="icon">
		<img class="disable-blur w-[13px]" src="/assets/folders/help.svg" alt="Help" />
	</slot>

	<div class="px-1" style="width: 350px; height: 200px;">testing</div>
</Window> -->

<div
	class="relative h-screen w-screen overflow-hidden bg-blueberry-oxygen bg-cover bg-center bg-no-repeat"
>
	{#each Object.entries($openApps) as [id, zIndex]}
		<StickyNote
			stickyNoteColor={'yellow'}
			initialMessage={`${id} + Zindex: ${zIndex}`}
			appID={id}
			height={200}
			width={200}
		/>
	{/each}
	<Window name="This is my window"></Window>
</div>
