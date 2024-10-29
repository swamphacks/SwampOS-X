<script lang="ts">
	export let title: string;

	let opened = false;

	function onClick() {
		opened = !opened;
	}
</script>

<div class="flex w-full max-w-[600px] flex-col">
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
	<div
		class="h-full w-full overflow-hidden bg-white"
		class:close-acc={!opened}
		class:open-acc={opened}
	>
		<div
			class="inline-block flex w-full flex-wrap gap-4 overflow-hidden border border-solid border-black p-4"
		>
			<slot />
		</div>
	</div>
</div>

<style lang="postcss">
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
