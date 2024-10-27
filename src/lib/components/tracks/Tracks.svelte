<script lang="ts">
	import Window from '$lib/components/window/Window.svelte';
	import ResizeableFrame from '$lib/components/window/frames/ResizeableFrame.svelte';
	import Card from './Card.svelte';
</script>

<Window name="Tracks">
	<svelte:fragment let:size let:active>
		<ResizeableFrame {size} {active} verticalResize={false} infinitelyWide={true}>
			<div class="flex min-w-[350px] flex-col items-center justify-center">
				<div class="relative">
					<div class="grid grid-cols-2 gap-x-10 gap-y-6 py-8">
						<Card name="Media" src="/assets/tracks/media.png" />
						<Card name="Innovation" src="/assets/tracks/innovation.png" />
						<Card name="Health" src="/assets/tracks/health.png" />
						<Card name="Education" src="/assets/tracks/education.png" />
						<Card name="AI" src="/assets/tracks/ai.png" />
						<Card name="Social Good" src="/assets/tracks/social-good.png" />
					</div>
					<img
						class="absolute right-[-70px] top-0 h-full w-[150px]"
						src="/assets/tracks/rainbow.png"
						alt="Rainbow"
					/>
				</div>
			</div>
		</ResizeableFrame>
	</svelte:fragment>
</Window>
