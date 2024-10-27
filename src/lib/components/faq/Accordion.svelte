<script lang="ts">
	import { slide } from 'svelte/transition';
	export let title: string;

	let opened = false;

	function onClick() {
		opened = !opened;
	}
</script>

<div class="flex flex-col">
	<button class="mb-4 flex items-center gap-2" on:click={onClick}>
		<img
			src="/assets/faq/arrow.png"
			alt="arrow"
			class={opened ? 'open-arrow' : 'close-arrow'}
			height={8}
			width={15}
		/>
		<img src="/assets/faq/help.png" alt={title} width={33} height={33} />
		<h1 class="text-lg">{title}</h1>
	</button>

	<!-- Q&A Cards -->
	{#if opened}
		<div class="min-w-[150px] overflow-hidden bg-white" transition:slide>
			<div
				class="flex min-w-[150px] flex-wrap gap-4 overflow-hidden border border-solid border-black p-4"
			>
				<slot />
			</div>
		</div>
	{/if}
</div>

<style lang="postcss">
	.open-arrow {
		transform: rotate(360deg);
		transition: transform 0.3s ease;
	}

	.close-arrow {
		transform: rotate(270deg);
		transition: transform 0.3s ease;
	}
</style>
