<script lang="ts">
	import DesktopIcon from '$lib/components/desktop_icon/DesktopIcon.svelte';
	import ResizeableFrame from '$lib/components/window/frames/ResizeableFrame.svelte';
	import StandardFrame from '$lib/components/window/frames/StandardFrame.svelte';
	import Window from '$lib/components/window/Window.svelte';
</script>

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

	<svelte:fragment let:size let:active>
		<ResizeableFrame {size} {active} infinitelyWide={true}>
			testing<br />
			testing<br />
			testing<br />
			really really really really really long
		</ResizeableFrame>
	</svelte:fragment>
</Window>

<DesktopIcon />
