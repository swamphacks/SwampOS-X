<script lang="ts">
	import type { MenuSetting } from '$lib/types/menu-bar';

	export let setting: MenuSetting;
	export let display: boolean;
</script>

<div
	class="absolute mt-[-1px] flex flex-col border border-solid border-black bg-gray-300"
	class:hidden={!display}
>
	{#each setting.sections as section, i}
		{#if i > 0}
			<div class="border-lr inline h-[4px] w-full border-t border-t-white" />
		{/if}
		<div class="flex flex-col items-center">
			{#each section as item, j}
				<div
					class="border-lr grid w-full grid-cols-[8px_auto_auto] items-center pl-0.5 pr-3 hover:!border-l-[#6666CB] hover:!border-r-[#000088] hover:bg-menu-blue hover:text-white"
					class:top-item={j === 0 && i === 0}
					class:bottom-item={j + 1 === section.length && i + 1 === setting.sections.length}
				>
					<img
						class="justif-self-start mt-[-1px]"
						class:opacity-0={!item.on}
						alt="checkmark"
						src="/assets/menu_bar/checkmark.svg"
						width="8"
						height="8"
					/>
					{#if item.action}
						<button on:click={item.action} class="justify-self-start whitespace-nowrap pl-1.5 pr-4">
							{item.name}
						</button>
					{/if}
					<h1 class="justify-self-end whitespace-nowrap">{item.shortcut ?? ''}</h1>
				</div>
			{/each}
			{#if i + 1 !== setting.sections.length}
				<div class="border-lr inline h-[4px] w-full border-b border-b-[#888888]" />
			{/if}
		</div>
	{/each}
</div>

<style lang="postcss">
	.top-item {
		@apply border-t hover:border-t-[#6666CB];
	}

	.bottom-item {
		@apply border-b hover:border-b-[#000088];
	}

	.border-lr {
		@apply border-l border-r border-solid border-l-white border-r-gray-600;
	}
</style>
