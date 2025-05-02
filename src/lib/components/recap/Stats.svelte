<script>
	import StatsNumber from './StatsNumber.svelte';
</script>

<section
	class="title-text mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 py-16 menu-md:py-24 menu-lg:grid-cols-3"
>
	<StatsNumber number={712} text="Applications" />
	<StatsNumber number={273} text="Hackers" />
	<StatsNumber number={75} text="Projects" />
</section>
