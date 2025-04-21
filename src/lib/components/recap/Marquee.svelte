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
