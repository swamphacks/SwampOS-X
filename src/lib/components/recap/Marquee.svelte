<script lang="ts">
	const leftImages = [
		'/images/marquee/shx1-min.jpg',
		'/images/marquee/shx2-min.jpg',
		'/images/marquee/shx3-min.jpg',
		'/images/marquee/shx4-min.jpg',
		'/images/marquee/shx5-min.jpg',
		'/images/marquee/shx6-min.jpg',
		'/images/marquee/shx7-min.jpg',
		'/images/marquee/shx8-min.jpg'
	];

	const rightImages = [
		'/images/marquee/shx9-min.jpg',
		'/images/marquee/shx10-min.jpg',
		'/images/marquee/shx11-min.jpg',
		'/images/marquee/shx12-min.jpg',
		'/images/marquee/shx13-min.jpg',
		'/images/marquee/shx14-min.jpg',
		'/images/marquee/shx15-min.jpg',
		'/images/marquee/shx16-min.jpg'
	];
</script>

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
							class="pointer-events-none h-36 w-48 select-none rounded-lg bg-gray-200 object-cover shadow-lg menu-lg:h-52 menu-lg:w-72"
						/>
					{/each}
				</div>
			{/each}
		</div>
	</div>
	<!-- Marquee Image Gallery Right -->
	<div class="relative w-full overflow-x-hidden">
		<div class="flex -scale-x-100 whitespace-nowrap">
			<!-- Second set of images -->
			{#each Array.from([1, 2]) as i (i)}
				<!-- infinite-scroll-right is misaligned and has an abrupt reset, so -scale-x is used instead -->
				<div class="flex min-w-max animate-infinite-scroll-left gap-4 pr-4">
					{#each rightImages as image}
						<img
							src={image}
							alt="SwampHacks X Recap"
							class="pointer-events-none h-36 w-48 select-none rounded-lg bg-gray-200 object-cover shadow-lg menu-lg:h-52 menu-lg:w-72"
						/>
					{/each}
				</div>
			{/each}
		</div>
	</div>
	<div class="items-center justify-center pt-6"></div>

	<!-- Photo album link -->
</section>
<section class="flex w-full items-center justify-center">
	<a
		class="link-text text-lg text-blue-600 underline underline-offset-4 menu-md:text-lg menu-lg:text-2xl menu-3xl:text-3xl"
		href="https://photos.app.goo.gl/GiS4hwhuqVWmEJ7n7"
		target="_blank"
		rel="noopener noreferrer"
	>
		Photo Album
	</a>
</section>
