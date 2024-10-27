<script lang="ts">
	export let title: string;
	let arrow: HTMLElement;

	let opened = false;

	function onClick() {
		opened = !opened;
	}
</script>

<div>
	<button class="flex items-center gap-4" on:click={onClick}>
		<img
			src="/assets/faq/arrow.png"
			alt="arrow"
			class={opened ? 'open-arrow' : 'close-arrow'}
			bind:this={arrow}
			height={8}
			width={15}
		/>
		<img src="/assets/faq/help.png" alt={title} width={33} height={33} />
		<h1 class="text-lg">{title}</h1>
	</button>
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
