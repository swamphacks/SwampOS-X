<script>
	import ResizeableFrame from '../window/frames/ResizeableFrame.svelte';

	import Window from '../window/Window.svelte';
</script>

<Window name="Title Page">
	<slot slot="icon">
		<img
			class="w-[13px]"
			draggable="false"
			on:contextmenu={(e) => e.preventDefault()}
			src="/assets/folders/default.png"
			alt="Hullo"
		/>
	</slot>

	<svelte:fragment let:size let:active>
		<ResizeableFrame {size} {active} infinitelyWide={true}>
			<div class="relative flex h-full w-full flex-col items-center justify-center gap-y-6 p-20">
				<button
					class="absolute bottom-0 left-0 h-1 w-1"
					on:click={() => window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ')}
				/>

				<h1 class="title-text text-9xl">Swamphacks X</h1>

				<h2 class="title-text text-6xl">The University of Florida</h2>

				<h2 class="title-text text-5xl">January 24-26th</h2>

				<a
					class="link-text text-5xl text-blue-600 underline"
					href="https://app.swamphacks.com/api/auth/signin"
					target="_blank"
					rel="noopener noreferrer"
				>
					Apply now!
				</a>
			</div>
		</ResizeableFrame>
	</svelte:fragment>
</Window>
