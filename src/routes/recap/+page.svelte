<script lang="ts">
	const leftImages = [
		'/images/shx1.JPG',
		'/images/shx2.JPG',
		'/images/shx3.JPG',
		'/images/shx4.JPG',
		'/images/shx5.JPG',
		'/images/shx6.JPG',
		'/images/shx7.JPG',
		'/images/shx8.JPG'
	];

	const rightImages = [
		'/images/shx9.JPG',
		'/images/shx10.JPG',
		'/images/shx11.JPG',
		'/images/shx12.JPG',
		'/images/shx13.JPG',
		'/images/shx14.JPG',
		'/images/shx15.JPG',
		'/images/shx16.JPG'
	];
</script>

<main
	class="flex min-h-screen select-text flex-col items-center overflow-y-auto bg-[#FFFFFF] pb-52"
>
	<!-- Header/Hero -->
	<section class="flex w-full flex-col items-center justify-center gap-2 pb-12 pt-36 menu-lg:pb-24">
		<h1 class="title-text text-center text-5xl menu-lg:text-7xl menu-2xl:text-8xl">
			SwampHacks X Recap
		</h1>
		<h2 class="title-text text-center text-xl text-zinc-700 menu-lg:text-2xl menu-2xl:text-3xl">
			300 Hackers, 75+ Projects, Endless Innovations
		</h2>
	</section>

	<!-- Image Marquee -->
	<section class="flex w-full flex-col gap-4 menu-lg:gap-8">
		<!-- Marquee Image Gallery Left -->
		<div class="relative w-full overflow-x-hidden">
			<div class="flex whitespace-nowrap">
				<!-- First set of images -->
				{#each Array.from([1, 2]) as i (i)}
					<div class="flex min-w-max animate-infinite-scroll-left gap-4 pr-4">
						{#each leftImages as image}
							<img
								src={image}
								alt="SwampHacks X Recap"
								class="h-36 w-48 rounded-lg object-cover shadow-lg menu-lg:h-52 menu-lg:w-72"
							/>
						{/each}
					</div>
				{/each}
			</div>
		</div>
		<!-- Marquee Image Gallery Right -->
		<div class="relative w-full overflow-x-hidden">
			<div class="flex whitespace-nowrap">
				<!-- First set of images -->
				{#each Array.from([1, 2]) as i (i)}
					<div class="flex min-w-max animate-infinite-scroll-right gap-4 pr-4">
						{#each rightImages as image}
							<img
								src={image}
								alt="SwampHacks X Recap"
								class="h-36 w-48 rounded-lg object-cover shadow-lg menu-lg:h-52 menu-lg:w-72"
							/>
						{/each}
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Event Details -->
	<section class="mx-auto mt-32 flex w-full max-w-7xl flex-col items-start gap-4 px-4">
		<div>
			<h2 class="title-text text-3xl menu-lg:text-4xl menu-2xl:text-5xl">
				SwampHacks Returns: A Triumphant Revival
			</h2>
			<h3 class="title-text text-xl text-zinc-700 menu-lg:text-2xl menu-2xl:text-3xl">
				After five years, innovation finds its home again at UF
			</h3>
		</div>
		<p class="title-text text-xl text-zinc-700 menu-2xl:text-2xl">
			SwampHacks X marked the triumphant return of the University of Florida's premier hackathon
			after a five-year hiatus. What began as an ambitious revival quickly transformed into our most
			successful event yet, drawing an unprecedented <span
				class="bg-yellow-200 font-black text-black">700+</span
			>
			applications and bringing together
			<span class="bg-yellow-200 font-black text-black">300+</span>
			passionate hackers who created <span class="bg-yellow-200 font-black text-black">75+</span> groundbreaking
			projects in just 24 hours. The overwhelming response and energy demonstrated that the UF tech community
			wasn't just ready for SwampHacks' return—they were hungry for it.
		</p>

		<img
			src="/images/shx2.JPG"
			alt="SwampHacks X Recap"
			class="mt-8 h-[50vh] rounded-lg shadow-lg"
		/>
	</section>
</main>
