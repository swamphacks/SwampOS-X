<script lang="ts">
	import type { MenuSetting, MenuItem } from '$lib/types/menu-bar';

	export let setting: MenuSetting;
	export let display: boolean;
	export let right: boolean = false;

	function toggleBackground(el: HTMLElement, on: boolean, turn: number, item: MenuItem) {
		if (on && turn >= 4) {
			if (item.action) item.action();
			if (item.url) window.open(item.url, '_blank');
			el.classList.add('border-hover');
			return;
		}
		if (on) {
			el.classList.add('select');
			setTimeout(() => toggleBackground(el, !on, turn, item), 50);
		} else {
			el.classList.remove('select');
			setTimeout(() => toggleBackground(el, !on, turn + 1, item), 50);
		}
	}

	function actionWrapper(item: MenuItem, id: string) {
		const el: HTMLElement | null = document.getElementById(id);
		if (!el) return;

		el.classList.remove('border-hover');
		toggleBackground(el, true, 0, item);
	}
</script>

<div
	class="absolute mt-[-1px] flex flex-col border border-solid border-black bg-gray-300"
	class:hidden={!display}
	class:right-0={right}
>
	{#each setting.sections as section, i}
		{#if i > 0}
			<div class="border-lr inline h-[4px] w-full border-t border-t-white" />
		{/if}
		<div class="flex flex-col items-center">
			{#each section as item, j}
				<button
					class="border-lr grid w-full grid-cols-[10px_auto_auto] items-center pl-0.5 pr-3"
					id={`${item.name}-${i.toString()}-${j.toString()}`}
					class:top-item={j === 0 && i === 0}
					class:bottom-item={j + 1 === section.length && i + 1 === setting.sections.length}
					class:text-gray-700={!item.enabled}
					class:border-hover={item.enabled}
					on:click={(e) => {
						e.preventDefault();
						if (!item.enabled) return;
						actionWrapper(item, `${item.name}-${i.toString()}-${j.toString()}`);
					}}
				>
					<img
						class="justif-self-start mt-[-1px]"
						class:opacity-0={!item.on}
						alt="checkmark"
						src="/assets/menu_bar/checkmark.svg"
						width={10}
						height={10}
					/>
					<div class="flex items-center gap-1 justify-self-start pl-1.5 pr-4">
						{#if item.iconSrc}
							<img width={20} height={20} src={item.iconSrc} alt={item.name} />
						{/if}
						<h1 class="whitespace-nowrap">
							{item.name}
						</h1>
					</div>
					<h1 class="justify-self-end whitespace-nowrap">{item.shortcut ?? ''}</h1>
				</button>
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

	:global(.select) {
		@apply !border-l-[#6666CB] !border-r-[#000088] bg-menu-blue text-white;
	}

	.border-hover {
		@apply hover:!border-l-[#6666CB] hover:!border-r-[#000088] hover:bg-menu-blue hover:text-white;
	}

	.border-lr {
		@apply border-l border-r border-solid border-l-white border-r-gray-600;
	}
</style>
