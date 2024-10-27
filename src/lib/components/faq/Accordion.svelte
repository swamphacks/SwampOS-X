<script lang="ts">
	export let title: string;
	let arrow: HTMLElement;

	// let opened = false;
</script>

<div>
	<button class="flex items-center gap-4">
		<img src="/assets/faq/arrow.png" alt="arrow" bind:this={arrow} height={8} width={15} />
		<img src="/assets/faq/help.png" alt={title} width={33} height={33} />
		<h1 class="text-lg">{title}</h1>
	</button>
</div>
