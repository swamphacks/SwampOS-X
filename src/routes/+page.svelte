<script lang="ts">
	import Tracks from '$lib/components/tracks/Tracks.svelte';
	import FAQ from '$lib/components/faq/FAQ.svelte';

	// disable eslint globally
	/* eslint-disable */

	// const randPos = (): Position => ({
	// 	x: (675 - 100) * Math.random(),
	// 	y: (750 - 100) * Math.random()
	// });

	const K = 50;
</script>

<Tracks />

<FAQ />

<!-- <Window name="Creative Assistant">
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
			really really really really really long
		</ResizeableFrame>
	</svelte:fragment>
</Window> -->

<!-- {#each Array.from({ length: K }) as _}
	{#each Object.keys(stickyNoteColors) as _}
		<StickyNote text="Test sticky note" startAt={{ x: 100, y: 100 }} />
	{/each}
{/each} -->
