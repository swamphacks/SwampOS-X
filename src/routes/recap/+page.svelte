<script lang="ts">
	import Letter from '$lib/components/recap/Letter.svelte';
	import Love from '$lib/components/recap/Love.svelte';
	import Marquee from '$lib/components/recap/Marquee.svelte';
	import Quote from '$lib/components/recap/Quote.svelte';
	import SponsorShowcase from '$lib/components/recap/SponsorShowcase.svelte';
	import Stats from '$lib/components/recap/Stats.svelte';
</script>

<main
	class="flex min-h-screen select-text flex-col items-center overflow-y-auto bg-[#FFFFFF] pb-12"
>
	<!-- Header/Hero -->
	<section class="flex w-full flex-col items-center justify-center gap-2 pb-12 pt-36 menu-lg:pb-24">
		<h1 class="title-text text-center text-5xl menu-lg:text-7xl menu-2xl:text-8xl">
			SwampHacks X Recap
		</h1>
		<h2
			class="title-text flex-wrap text-center text-xl text-zinc-700 menu-lg:text-2xl menu-2xl:text-3xl"
		>
			270+ Hackers, 75+ Projects, One Incredible Weekend
		</h2>
	</section>

	<!-- Image Marquee -->
	<Marquee />
	<section class="flex w-full items-center justify-center pt-6">
		<a
			class="link-text text-lg text-blue-600 underline underline-offset-4 menu-md:text-lg menu-lg:text-2xl menu-3xl:text-3xl" 
			href="https://photos.app.goo.gl/GiS4hwhuqVWmEJ7n7"
			target="_blank"
		>
			Photo Album
		</a>
	</section>

	<Stats />

	<Quote />

	<SponsorShowcase />

	<Letter />

	<Love />
</main>
