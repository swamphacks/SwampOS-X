<script lang="ts">
	import { onMount } from 'svelte';
	import Window from '$lib/components/window/Window.svelte';
	import StandardFrame from '$lib/components/window/frames/StandardFrame.svelte';
	import Card from './Card.svelte';

	let maxSize = { w: 300, h: 684 };
	let size = { w: 300, h: 684 };
	let innerWidth = 0;

	function resize() {
		if (window.innerWidth >= 600) {
			maxSize = { w: 500, h: 684 };
			size = { w: 500, h: 684 };
		} else {
			maxSize = { w: 300, h: 684 };
			size = { w: 300, h: 684 };
		}
	}

	onMount(resize);
</script>

<svelte:window bind:innerWidth on:resize={resize} />
<Window name="Tracks">
	<svelte:fragment let:active>
		<StandardFrame {size} {active} {maxSize}>
			<div class="relative flex w-full flex-col items-center">
				<div class="flex flex-wrap justify-center gap-y-6 py-8 menu-md:justify-evenly">
					<Card name="Innovation" src="/assets/tracks/ai.png" />
					<Card name="Environmental & Sustainability" src="/assets/tracks/innovation.png" />
					<Card name="Health" src="/assets/tracks/health.png" />
					<Card name="Education" src="/assets/tracks/education.png" />
					<Card name="Social Good & Human Experience" src="/assets/tracks/social-good.png" />
				</div>

				<img
					class="absolute right-[20px] top-0 h-full w-[150px]"
					src="/assets/tracks/rainbow.png"
					alt="Rainbow"
				/>
			</div>
		</StandardFrame>
	</svelte:fragment>
</Window>
