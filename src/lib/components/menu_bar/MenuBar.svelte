<script lang="ts">
	import { onMount } from 'svelte';
	import { menu } from '$lib/stores/menu-bar';
	import { toggleSetting, closeAllMenus } from '$lib/utils/menu-bar';
	import type { MenuSetting as Setting, MenuItem } from '$lib/types/menu-bar';
	import MenuSetting from '$lib/components/menu_setting/Setting.svelte';
	import MenuButton from './MenuButton.svelte';

	let display: Record<string, boolean> = {};

	// Set all display to false
	// Wrap every action to close the menu bar when clicked
	$menu.settings.forEach((setting: Setting) => {
		display[setting.name] = false;
		setting.sections
			.flatMap((section: MenuItem[]) => section)
			.forEach((item: MenuItem) => {
				if (item.action) {
					let fn = item.action;
					item.action = () => {
						fn();
						display = closeAllMenus(display);
						hoverable = false;
					};
				} else {
					item.action = () => {
						display = closeAllMenus(display);
						hoverable = false;
					};
				}
			});
	});

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
	let truncateFinder: boolean = false;

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
	class="flex h-menu-lg w-screen items-center border-y border-solid border-b-gray-600 border-t-gray-200 bg-gray-300 px-[8px] font-chicago text-[12px]"
>
	<div class="flex items-center">
		<div id="menu-btn" class="relative">
			<MenuButton name={$menu.settings[0].name} bind:hoverable bind:display>
				<img
					draggable="false"
					class="w-[42px]"
					src="/assets/menu_bar/swamphacks.png"
					alt="SwampHacks"
				/>
			</MenuButton>
			<MenuSetting setting={$menu.settings[0]} bind:display={display['About']} />
		</div>

		{#each $menu.settings.slice(1, -1) as setting}
			<button id="menu-btn" class="relative">
				<MenuButton name={setting.name} bind:hoverable bind:display>
					{setting.name}
				</MenuButton>
				<MenuSetting {setting} bind:display={display[setting.name]} />
			</button>
		{/each}
	</div>

	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class="h-full grow" on:mouseenter={() => (display = toggleSetting('', display))}></div>

	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class="flex items-center" on:mouseenter={() => (display = toggleSetting('', display))}>
		<button class="text-nowrap" on:click={() => (displayTime = !displayTime)}
			>{displayTime ? currTime : currDate}</button
		>
		<div class="flex items-center">
			<button on:click={() => (truncateFinder = !truncateFinder)}>
				<img
					class="mx-1.5 h-[28px]"
					draggable="false"
					src="/assets/menu_bar/resizer.png"
					alt="Menu Bar Resizer"
				/>
			</button>
			<div class="relative" id="menu-btn">
				<MenuButton name="Finder" bind:hoverable bind:display>
					<img
						width="22"
						height="22"
						src="/assets/menu_bar/finder.png"
						alt="Finder"
						class="h-[22px] w-[22px]"
					/>
					{#if !truncateFinder}
						<h1 class="ml-1.5">Finder</h1>
					{/if}
				</MenuButton>
				<MenuSetting
					setting={$menu.settings[$menu.settings.length - 1]}
					bind:display={display['Finder']}
					right={true}
				/>
			</div>
		</div>
	</div>
</section>
<span class="block h-[1px] w-screen bg-[#262626]" />
