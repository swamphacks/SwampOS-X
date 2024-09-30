<script lang="ts">
	import { onMount } from 'svelte';
	import { menu } from '$lib/stores/menu-bar';
	import type { MenuSetting } from '$lib/types/menu-bar';
	import Setting from './Setting.svelte';

	let display: Record<string, boolean> = {};
	$menu.settings.forEach((setting: MenuSetting) => (display[setting.name] = false));
	let hoverable = false;

	function currentTime() {
		const now = new Date();
		const hours = now.getHours();
		const minutes = now.getMinutes().toString().padStart(2, '0');
		const half = hours < 12 ? 'AM' : 'PM';

		let hourString;
		if (hours === 0) hourString = '12';
		else if (hours <= 12) hourString = hours.toString();
		else hourString = (hours - 12).toString();

		return `${hourString}:${minutes} ${half}`;
	}

	function mouseOver(name: string) {
		if (hoverable && !display[name]) toggleSetting(name);
	}

	function mouseLeave(name: string) {
		if (hoverable && display[name]) toggleSetting(name);
	}

	function toggleSetting(name: string) {
		$menu.settings.forEach((setting: MenuSetting) => {
			if (setting.name === name) display[setting.name] = !display[setting.name];
			else display[setting.name] = false;
		});
	}

	let currTime: string = currentTime();
	let intervalId: number;

	onMount(() => {
		intervalId = setInterval(() => (currTime = currentTime()), 1000); // Update every second
		return () => clearInterval(intervalId);
	});
</script>

<section
	class="flex h-menu-xs w-screen items-center border-y border-solid border-b-gray-600 border-t-gray-200 bg-gray-300 pr-[8px] font-chicago text-[4px] menu-sm:h-menu-sm menu-sm:text-[6px] menu-md:h-menu-md menu-md:border-y-2 menu-md:text-[8px] menu-lg:h-menu-lg menu-lg:text-[12px]"
>
	<div class="flex items-center">
		<div class="btn-container hover:bg-menu-blue">
			<button class="h-full">
				<img
					draggable="false"
					class="h-[15px] menu-md:h-[20px] menu-md:w-[30px] menu-lg:h-[28px] menu-lg:w-[42px]"
					src="/assets/menu_bar/swamphacks.png"
					alt="SwampHacks"
				/>
			</button>
		</div>

		{#each $menu.settings as setting}
			<button class="relative">
				<button
					class="btn-container z-10"
					on:click={() => {
						toggleSetting(setting.name);
						hoverable = display[setting.name];
					}}
					on:mouseover={() => mouseOver(setting.name)}
					on:focus={() => mouseOver(setting.name)}
					on:focusout={() => mouseLeave(setting.name)}
					class:hover={hoverable}
					class:selected={display[setting.name]}>{setting.name}</button
				>
				<Setting {setting} display={display[setting.name]} />
			</button>
		{/each}
	</div>

	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class="flex grow flex-row-reverse items-center" on:mouseenter={() => toggleSetting('')}>
		<h1>Finder</h1>
		<img
			width="22"
			height="22"
			src="/assets/menu_bar/finder.png"
			alt="Finder"
			class="mr-[3px] h-[8px] w-[8px] menu-sm:h-[12px] menu-sm:w-[12px] menu-md:mr-1.5 menu-md:h-[16px] menu-md:w-[16px] menu-lg:h-[22px] menu-lg:w-[22px]"
		/>
		<img
			class="mx-1 mt-[-2px] h-[13px] menu-sm:mx-1 menu-sm:h-[14px] menu-md:mx-1.5 menu-md:h-[18px] menu-lg:h-[28px]"
			draggable="false"
			src="/assets/menu_bar/resizer.png"
			alt="Menu Bar Resizer"
		/>
		<button>{currTime}</button>
	</div>
</section>
<span class="block h-[1px] w-screen bg-[#262626] menu-md:h-[2px]" />

<style lang="postcss">
	.btn-container {
		@apply flex h-[13px] items-center px-1.5 menu-sm:h-[17px] menu-md:h-[24px] menu-lg:h-[34px];
	}

	.hover {
		@apply hover:bg-menu-blue hover:text-white;
	}

	.selected {
		@apply bg-menu-blue text-white;
	}
</style>
