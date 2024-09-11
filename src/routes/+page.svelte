<script>
	import Window from '$lib/components/window/Window.svelte';
	import StickyNote from '$lib/components/sticky_note/StickyNote.svelte';
</script>

<!-- <Window name="FAQs">
	<slot slot="icon">
		<img class="disable-blur w-[13px]" src="/assets/folders/help.svg" alt="Help" />
	</slot>

	<div class="px-1" style="width: 350px; height: 200px;">testing</div>
</Window> -->

<div class="h-screen w-screen bg-bondi">
	<StickyNote initialMessage="This is a bum ass message bro" />
	<StickyNote initialMessage="Another note" />
</div>
