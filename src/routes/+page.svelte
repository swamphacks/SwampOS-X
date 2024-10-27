<script lang="ts">
	// import { stickyNoteColors } from '$lib/components/sticky_note/sticky-colors';
	// import StickyNote from '$lib/components/sticky_note/StickyNote.svelte';
	// import ResizeableFrame from '$lib/components/window/frames/ResizeableFrame.svelte';
	// import StandardFrame from '$lib/components/window/frames/StandardFrame.svelte';
	// import Window from '$lib/components/window/Window.svelte';
	import Tracks from '$lib/components/tracks/Tracks.svelte';
	// import type { Position } from '$lib/utils/windows';

	// const randPos = (): Position => ({
	// 	x: (675 - 100) * Math.random(),
	// 	y: (750 - 100) * Math.random()
	// });

	// const K = 50;
</script>

<Tracks />
<!-- <Window name="Creative Assistant"> -->
<!-- 	<slot slot="icon"> -->
<!-- 		<img -->
<!-- 			class="w-[13px]" -->
<!-- 			draggable="false" -->
<!-- 			on:contextmenu={(e) => e.preventDefault()} -->
<!-- 			src="/assets/folders/colorsync_profiles.png" -->
<!-- 			alt="Assistant" -->
<!-- 		/> -->
<!-- 	</slot> -->
<!---->
<!-- 	<svelte:fragment let:size let:active> -->
<!-- 		<StandardFrame {size} {active} infinitelyWide={true}> -->
<!-- 			testing<br /> -->
<!-- 			testing<br /> -->
<!-- 			testing<br /> -->
<!-- 			really really really really really long -->
<!-- 		</StandardFrame> -->
<!-- 	</svelte:fragment> -->
<!-- </Window> -->
<!---->
<!-- <Window name="Gymnast"> -->
<!-- 	<slot slot="icon"> -->
<!-- 		<img -->
<!-- 			class="w-[13px]" -->
<!-- 			draggable="false" -->
<!-- 			on:contextmenu={(e) => e.preventDefault()} -->
<!-- 			src="/assets/folders/system.png" -->
<!-- 			alt="Hullo" -->
<!-- 		/> -->
<!-- 	</slot> -->
<!---->
<!-- 	<svelte:fragment let:size let:active> -->
<!-- 		<ResizeableFrame {size} {active} infinitelyWide={true}> -->
<!-- 			testing<br /> -->
<!-- 			testing<br /> -->
<!-- 			testing<br /> -->
<!-- 			really really really really really long -->
<!-- 		</ResizeableFrame> -->
<!-- 	</svelte:fragment> -->
<!-- </Window> -->

<!-- {#each Array.from({ length: K }) as _, i} -->
<!-- 	{#each Object.keys(stickyNoteColors) as color} -->
<!-- 		<StickyNote -->
<!-- 			text={`this is where you belong ;)\n\n(${i + 1}/${K} in ${color})`} -->
<!-- 			{color} -->
<!-- 			startAt={randPos()} -->
<!-- 			size={{ w: 100, h: 100 }} -->
<!-- 		/> -->
<!-- 	{/each} -->
<!-- {/each} -->
