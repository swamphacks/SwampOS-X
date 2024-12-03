<script>
	import StandardFrame from '../window/frames/StandardFrame.svelte';
	import Window from '../window/Window.svelte';
</script>

<Window name="Welcome!" preferredId="welcome">
	<slot slot="icon">
		<img
			class="w-[13px]"
			draggable="false"
			on:contextmenu={(e) => e.preventDefault()}
			src="/assets/applications/website.png"
			alt="Globe icon"
		/>
	</slot>

	<svelte:fragment let:active>
		<!-- Size is set to 0 to allow for text size to determine size of the window -->
		<StandardFrame size={{ w: 0, h: 0 }} {active} infinitelyWide={false}>
			<div
				class="relative flex h-full w-full flex-col items-center justify-center gap-y-1 px-8 py-5 menu-md:px-10 menu-md:py-7 menu-lg:gap-y-3 menu-lg:px-12 menu-lg:py-14 menu-3xl:gap-y-6 menu-3xl:p-20"
			>
				<button
					class="absolute bottom-0 left-0 h-1 w-1"
					on:click={() => window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ')}
				/>

				<h1 class="title-text text-5xl menu-md:text-6xl menu-lg:text-8xl menu-3xl:text-9xl">
					SwampHacks X
				</h1>

				<h2 class="title-text text-2xl menu-md:text-3xl menu-lg:text-5xl menu-3xl:text-6xl">
					The University of Florida
				</h2>

				<h2 class="title-text text-xl menu-md:text-2xl menu-lg:text-4xl menu-3xl:text-5xl">
					January 25-26th
				</h2>

				<a
					class="link-text text-xl text-blue-600 underline menu-md:text-2xl menu-lg:text-4xl menu-3xl:text-5xl"
					href="https://app.swamphacks.com/api/auth/signin"
					target="_blank"
					rel="noopener noreferrer"
				>
					Apply now!
				</a>
			</div>
		</StandardFrame>
	</svelte:fragment>
</Window>
