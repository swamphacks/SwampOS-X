<script lang="ts">
	export let name: string;
	export let src: string;
</script>

<div
	class="relative z-10 flex h-[190px] w-[190px] items-center text-wrap border-2 border-solid border-black bg-white p-4"
>
	<div class="flex w-full flex-col items-center gap-4">
		<h1 class="text-center font-chicago text-xl">{name}</h1>
		<img {src} alt={name} />
	</div>
</div>
