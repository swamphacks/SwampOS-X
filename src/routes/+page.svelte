<script>
	import StickyNote from '$lib/components/sticky_note/StickyNote.svelte';
	import Window from '$lib/components/window/Window.svelte';
	import { openApps, AppType, addSticky } from '$lib/stores/apps.store';

	addSticky();
</script>

<!-- <Window name="FAQs">
	<slot slot="icon">
		<img class="disable-blur w-[13px]" src="/assets/folders/help.svg" alt="Help" />
	</slot>

	<div class="px-1" style="width: 350px; height: 200px;">testing</div>
</Window> -->

<div class="h-screen w-screen bg-blueberry-oxygen bg-cover bg-center bg-no-repeat">
	{#each Object.entries($openApps) as [id, appType]}
		{#if appType === AppType.STICKY}
			<StickyNote stickyNoteColor={'purple'} initialMessage={`${id}`} appID={id} />
		{/if}
	{/each}
	<Window name="This is my window"></Window>
</div>
