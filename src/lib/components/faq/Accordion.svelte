<script lang="ts">
	export let title: string;

	let opened = false;

	function onClick() {
		opened = !opened;
	}
</script>

<div class="flex w-full flex-col">
	<button class="mb-4 flex items-center gap-2" on:click={onClick}>
		<img
			src="/assets/faq/arrow.png"
			alt="arrow"
			class={opened ? 'open-arrow' : 'close-arrow'}
			height={8}
			width={15}
			draggable="false"
		/>
		<img src="/assets/faq/help.png" alt={title} width={33} height={33} />
		<h1 class="font-chicago text-lg">{title}</h1>
	</button>

	<!-- Q&A Cards -->
	<div class="h-full w-full overflow-hidden" class:close-acc={!opened} class:open-acc={opened}>
		<div
			class="qa-container relative inline-block w-full overflow-hidden border border-solid border-black bg-white p-4"
		>
			<slot />
		</div>
	</div>
</div>

<style lang="postcss">
	.qa-container {
		columns: 300px 3;
		column-fill: balance;
		column-gap: 1rem;
	}

	.open-acc {
		max-height: 1000px;
		transition: max-height 0.6s ease-in;
	}

	.close-acc {
		max-height: 0px;
		transition: max-height 0.6s ease;
	}

	.open-arrow {
		transform: rotate(360deg);
		transition: transform 0.6s ease;
	}

	.close-arrow {
		transform: rotate(270deg);
		transition: transform 0.6s ease;
	}
</style>
