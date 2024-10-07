<script>
	import Window from '$lib/components/window/Window.svelte';
	import ControlStrip from '$lib/components/control_strip/ControlStrip.svelte';
	import StickyNote from '$lib/components/sticky_note/StickyNote.svelte';
</script>

<div class="relative h-screen w-screen">
	<Window name="FAQs" resizeTo={{ w: 200, h: 100 }}>
		<slot slot="icon">
			<img class="w-[13px]" draggable="false" src="/assets/folders/help.png" alt="Help" />
		</slot>
	</Window>

	<Window name="Assistant">
		<slot slot="icon">
			<img
				class="w-[13px]"
				draggable="false"
				on:contextmenu={(e) => e.preventDefault()}
				src="/assets/folders/default.png"
				alt="Help"
			/>
		</slot>
	</Window>

	<ControlStrip />

	<StickyNote text="tehe" color="pink" />

	<StickyNote text="blah blah" />
</div>
