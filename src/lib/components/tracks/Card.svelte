<script lang="ts">
	export let name: string;
	export let src: string;
	export let small: boolean = false;
</script>

<div
	class=" relative z-10 flex items-center text-wrap border-2 border-solid border-black bg-white p-4"
	class:large-card={!small}
	class:small-card={small}
>
	<div class="flex w-full flex-col items-center gap-4">
		<h1 class="text-center font-chicago">{name}</h1>
		<img {src} alt={name} width={small ? 30 : 50} height={small ? 30 : 50} draggable="false" />
	</div>
</div>

<style lang="postcss">
	.large-card {
		@apply h-[190px] w-[190px] text-xl;
	}

	.small-card {
		@apply h-[110px] w-[110px] text-xs;
	}
</style>
