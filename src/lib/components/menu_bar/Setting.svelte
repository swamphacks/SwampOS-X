<script lang="ts">
	import type { MenuSetting } from '$lib/types/menu-bar';

	export let setting: MenuSetting;
	export let display: boolean;
</script>

<div
	class="absolute mt-[-1px] flex flex-col border border-b border-solid border-black bg-gray-300"
	class:hidden={!display}
>
	{#each setting.sections as section, idx}
		<div
			class="border border-solid border-b-gray-500 border-l-white border-r-gray-600 border-t-white py-0.5"
			class:border-b-gray-600={idx + 1 == setting.sections.length}
		>
			<div class="flex flex-col items-center">
				{#each section as item}
					<div
						class="grid w-[calc(100%+2px)] grid-cols-[8px_auto_auto] items-center border-l border-r border-solid border-l-white border-r-gray-600 pl-0.5 pr-3 hover:border-l-[#6666CB] hover:border-r-[#000088] hover:bg-menu-blue hover:text-white"
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
							<button
								on:click={item.action}
								class="justify-self-start whitespace-nowrap pl-1.5 pr-4"
							>
								{item.name}
							</button>
						{/if}
						<h1 class="justify-self-end whitespace-nowrap">{item.shortcut ?? ''}</h1>
					</div>
				{/each}
			</div>
		</div>
	{/each}
</div>
