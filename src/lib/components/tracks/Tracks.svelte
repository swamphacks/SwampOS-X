<script lang="ts">
	import { onMount } from 'svelte';
	import Window from '$lib/components/window/Window.svelte';
	import ResizeableFrame from '$lib/components/window/frames/ResizeableFrame.svelte';
	import Card from './Card.svelte';

	const minResize = { w: 350, h: 450 };
	let size = { w: 350, h: 450 };
	$: small = size.w < 650;

	onMount(() => {
		if (window.innerWidth < 650) {
			size = {
				w: Math.min(window.innerWidth - 10, 350),
				h: Math.min(window.innerHeight - 10, 460)
			};
		} else {
			size = { w: 650, h: Math.min(700, window.innerHeight - 10) };
		}
	});
</script>

<Window name="Tracks">
	<svelte:fragment let:active let:setActive>
		<ResizeableFrame bind:size {active} {setActive} {minResize}>
			<div class="flex h-full w-full items-center">
				<div class="flex h-full w-full flex-col items-center">
					<div
						class="relative flex h-full items-center px-8"
						class:max-w-[520px]={!small}
						class:max-w-[350px]={small}
					>
						<img
							class="absolute right-[30px] h-full"
							class:w-[150px]={!small}
							class:w-[100px]={small}
							src="/assets/tracks/rainbow.png"
							alt="Rainbow"
							draggable="false"
						/>
						<div class="relative flex flex-wrap justify-evenly gap-8 py-8">
							<Card {small} name="AI" src="/assets/tracks/ai.png" />
							<Card
								{small}
								name="Environmental & Sustainability"
								src="/assets/tracks/innovation.png"
							/>
							<Card {small} name="Health" src="/assets/tracks/health.png" />
							<Card {small} name="Education" src="/assets/tracks/education.png" />
							<Card
								{small}
								name="Social Good & Human Experience"
								src="/assets/tracks/social-good.png"
							/>
						</div>
					</div>
				</div>
			</div>
		</ResizeableFrame>
	</svelte:fragment>
</Window>
