<script lang="ts">
	export let name: string;
	export let src: string;
</script>

<div
	class="border-black bg-white relative z-10 flex h-[134px] w-[145px] flex-col items-center gap-2 border-2 border-solid p-4"
>
	<h1 class="text-2xl">{name}</h1>
	<img {src} alt={name} />
</div>
