<script lang="ts">
	import { onMount } from 'svelte';
	import { menu } from '$lib/stores/menu-bar';
	import { toggleSetting, closeAllMenus } from '$lib/utils/menu-bar';
	import type { MenuSetting } from '$lib/types/menu-bar';
	import Setting from './Setting.svelte';
	import MenuButton from './MenuButton.svelte';

	let display: Record<string, boolean> = {};
	$menu.settings.forEach((setting: MenuSetting) => (display[setting.name] = false));
	display[$menu.appName] = false;
	let hoverable = false;

	function currentTime() {
		const now = new Date();
		const hours = now.getHours();
		const minutes = now.getMinutes().toString().padStart(2, '0');
		const seconds = now.getSeconds().toString().padStart(2, '0');
		const half = hours < 12 ? 'AM' : 'PM';

		let hourString;
		if (hours === 0) hourString = '12';
		else if (hours <= 12) hourString = hours.toString();
		else hourString = (hours - 12).toString();

		return `${hourString}:${minutes}:${seconds} ${half}`;
	}

	function currentDate() {
		const now = new Date();
		const day = now.getDate();
		const month = now.getMonth() + 1;
		const year = now.getFullYear().toString().slice(2);
		return `${month}/${day}/${year}`;
	}

	// Check if the element or its parent is a menu button
	function inMenuBtn(e: HTMLElement | null) {
		if (!e) return false;

		if (e.id === 'menu-btn') return true;
		return inMenuBtn(e.parentElement);
	}

	// Close all menus when clicking outside of them
	function handleWindowClick(e: MouseEvent) {
		if (!inMenuBtn(e.target as HTMLElement)) {
			hoverable = false;
			display = closeAllMenus(display);
		}
	}

	let currTime: string = currentTime();
	let currDate: string = currentDate();
	let displayTime: boolean = true;
	let intervalId: number;

	onMount(() => {
		intervalId = setInterval(() => {
			currTime = currentTime();
			currDate = currentDate();
		}, 1000); // Update every second
		return () => clearInterval(intervalId);
	});
</script>

<svelte:window on:click={handleWindowClick} />
<section
	class="flex h-menu-xs w-screen items-center border-y border-solid border-b-gray-600 border-t-gray-200 bg-gray-300 px-[8px] font-chicago text-[4px] menu-sm:h-menu-sm menu-sm:text-[6px] menu-md:h-menu-md menu-md:border-y-2 menu-md:text-[8px] menu-lg:h-menu-lg menu-lg:text-[12px]"
>
	<div class="flex items-center">
		<div id="menu-btn" class="relative">
			<MenuButton name={$menu.settings[0].name} bind:hoverable bind:display>
				<img
					draggable="false"
					class="h-[15px] menu-md:h-[20px] menu-md:w-[30px] menu-lg:h-[28px] menu-lg:w-[42px]"
					src="/assets/menu_bar/swamphacks.png"
					alt="SwampHacks"
				/>
			</MenuButton>
			<Setting setting={$menu.settings[0]} bind:display bind:hoverable />
		</div>

		{#each $menu.settings.slice(1) as setting}
			<button id="menu-btn" class="relative">
				<MenuButton name={setting.name} bind:hoverable bind:display>
					{setting.name}
				</MenuButton>
				<Setting {setting} bind:display bind:hoverable />
			</button>
		{/each}
	</div>

	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		class="flex grow flex-row-reverse items-center"
		on:mouseenter={() => (display = toggleSetting('', display))}
	>
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
		<button on:click={() => (displayTime = !displayTime)}
			>{displayTime ? currTime : currDate}</button
		>
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
</style>
