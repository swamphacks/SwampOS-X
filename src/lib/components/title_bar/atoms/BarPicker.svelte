<script lang="ts">
	export let active: boolean = true;
</script>

<div class="handle h-[13px] flex-grow bg-gray-300">
	{#if active}
		<div class="my-[1px] flex flex-grow flex-col gap-[1px]">
			<div class="h-[1px] flex-grow bg-gray-600" />
			<div class="h-[1px] flex-grow bg-gray-600" />
			<div class="h-[1px] flex-grow bg-gray-600" />
			<div class="h-[1px] flex-grow bg-gray-600" />
			<div class="h-[1px] flex-grow bg-gray-600" />
			<div class="h-[1px] flex-grow bg-gray-600" />
		</div>
	{/if}
</div>
