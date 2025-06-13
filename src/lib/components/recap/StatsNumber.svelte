<script lang="ts">
	export let number: number;
	export let text: string;
</script>

<div class="flex w-full flex-col items-center justify-center">
	<h3 class="text-center text-4xl font-semibold menu-sm:text-6xl menu-lg:text-8xl">{number}</h3>
	<p class="text-center text-2xl font-normal menu-sm:text-3xl menu-lg:text-3xl">{text}</p>
</div>
