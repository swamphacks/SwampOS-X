<script lang="ts">
	import MenuBar from '$lib/components/menu_bar/MenuBar.svelte';
	import ControlStrip from '$lib/components/control_strip/ControlStrip.svelte';
	import Welcome from '$lib/components/pages/Welcome.svelte';
	import Window from '$lib/components/window/Window.svelte';
	import StandardFrame from '$lib/components/window/frames/StandardFrame.svelte';
	import ResizeableFrame from '$lib/components/window/frames/ResizeableFrame.svelte';
</script>

<MenuBar />

<Welcome />

<Window name="Creative Assistant">
	<slot slot="icon">
		<img
			class="w-[13px]"
			draggable="false"
			on:contextmenu={(e) => e.preventDefault()}
			src="/assets/folders/colorsync_profiles.png"
			alt="Assistant"
		/>
	</slot>

	<svelte:fragment let:size let:active>
		<StandardFrame {size} {active} infinitelyWide={true}>
			testing<br />
			testing<br />
			testing<br />
			really really really really really long
		</StandardFrame>
	</svelte:fragment>
</Window>

<Window name="Gymnast">
	<slot slot="icon">
		<img
			class="w-[13px]"
			draggable="false"
			on:contextmenu={(e) => e.preventDefault()}
			src="/assets/folders/system.png"
			alt="Hullo"
		/>
	</slot>

	<svelte:fragment let:size let:active let:setActive>
		<ResizeableFrame {size} {active} {setActive}>
			testing<br />
			testing<br />
			testing<br />
			really really really really really long<br />
			testing<br />
			testing<br />
			testing<br />
			really really really really really long<br />
			testing<br />
			testing<br />
			testing<br />
			really really really really really long<br />
			testing<br />
			testing<br />
			testing<br />
			really really really really really long<br />
			testing<br />
			testing<br />
			testing<br />
			really really really really really long<br />
		</ResizeableFrame>
	</svelte:fragment>
</Window>

<ControlStrip />
