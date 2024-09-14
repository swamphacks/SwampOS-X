<script>
	import Window from '$lib/components/window/Window.svelte';
	import StickyNote from '$lib/components/sticky_note/StickyNote.svelte';
	import { openApps, AppType, addSticky } from '$lib/stores/apps.store';
</script>

<!-- <Window name="FAQs">
	<slot slot="icon">
		<img class="disable-blur w-[13px]" src="/assets/folders/help.svg" alt="Help" />
	</slot>

	<div class="px-1" style="width: 350px; height: 200px;">testing</div>
</Window> -->

<div class="h-screen w-screen bg-blueberry-oxygen bg-cover bg-no-repeat bg-center">

	<button on:click={addSticky}>Add Sticky Note</button>
	{#each Object.entries($openApps) as [id, appType]}
		{#if appType === AppType.STICKY}
			<StickyNote initialMessage={`${id}`} />
		{/if}
	{/each}
</div>
