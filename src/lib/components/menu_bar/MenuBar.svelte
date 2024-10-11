<script lang="ts">
	import { onMount } from 'svelte';
	import { swamphacksMenu, menu, finderMenu } from '$lib/stores/menu-bar';
	import {
		currentDate,
		currentTime,
		toggleSetting,
		closeAllMenus,
		inMenuBtn,
		handleMenuResize
	} from '$lib/utils/menu-bar';
	import type { MenuSetting as Setting, MenuItem } from '$lib/types/menu-bar';
	import MenuSetting from '$lib/components/menu_setting/Setting.svelte';
	import MenuButton from './MenuButton.svelte';

	let display: Record<string, boolean> = {};
	let hoverable = false;
	let currTime: string = currentTime();
	let currDate: string = currentDate();
	let displayTime: boolean = true;
	let intervalId: number;
	let truncateFinder: boolean = false;
	let rightEl: HTMLElement;
	const menuBtnName = 'menu-btn';

	// Wrap all item actions and initialize display state
	display[$swamphacksMenu.name] = false;
	$swamphacksMenu.sections
		.flatMap((section: MenuItem[]) => section)
		.forEach((item: MenuItem) => wrapAction(item));

	display[$finderMenu.name] = false;
	$finderMenu.sections
		.flatMap((section: MenuItem[]) => section)
		.forEach((item: MenuItem) => wrapAction(item));

	$menu.settings.forEach((setting: Setting) => {
		display[setting.name] = false;
		setting.sections
			.flatMap((section: MenuItem[]) => section)
			.forEach((item: MenuItem) => wrapAction(item));
	});

	// Wrap action to close the menu bar when clicked
	function wrapAction(item: MenuItem) {
		const fn = item.action ?? (() => {});
		item.action = () => {
			display = closeAllMenus(display);
			hoverable = false;
			fn();
		};
	}

	function cancelHover() {
		display = toggleSetting('', display);
	}

	// Close all menus when clicking outside of them
	function handleWindowClick(e: MouseEvent) {
		if (!inMenuBtn(e.target as HTMLElement)) {
			hoverable = false;
			display = closeAllMenus(display);
		}
	}

	onMount(() => {
		intervalId = setInterval(() => {
			currTime = currentTime();
			currDate = currentDate();
		}, 1000); // Update every second
		handleMenuResize(menuBtnName, rightEl);
		return () => clearInterval(intervalId);
	});
</script>

<svelte:window
	on:click={handleWindowClick}
	on:resize={() => handleMenuResize(menuBtnName, rightEl)}
/>
<section
	class="flex h-menu-lg w-screen items-center border-y border-solid border-b-gray-600 border-t-gray-200 bg-gray-300 px-[8px] font-chicago text-[12px]"
>
	<div class="flex flex-nowrap items-center">
		<div id="menu-btn" class="relative">
			<MenuButton name={$swamphacksMenu.name} bind:hoverable bind:display>
				<img
					draggable="false"
					class="min-h-[28px] min-w-[42px]"
					src={display['About']
						? '/assets/menu_bar/swamphacks-white.png'
						: '/assets/menu_bar/swamphacks.png'}
					alt="SwampHacks"
					width={42}
					height={28}
				/>
			</MenuButton>
			<MenuSetting setting={$swamphacksMenu} bind:display={display[$swamphacksMenu.name]} />
		</div>

		{#each $menu.settings as setting}
			<button id="menu-btn" name={menuBtnName} class="relative">
				<MenuButton name={setting.name} bind:hoverable bind:display>
					{setting.name}
				</MenuButton>
				<MenuSetting {setting} bind:display={display[setting.name]} />
			</button>
		{/each}
	</div>

	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class="h-full grow" on:mouseenter={cancelHover}></div>

	<div class="absolute right-0 flex items-center" bind:this={rightEl}>
		<button
			class="text-nowrap bg-gray-300"
			on:mouseenter={cancelHover}
			on:click={() => (displayTime = !displayTime)}>{displayTime ? currTime : currDate}</button
		>
		<div class="flex items-center">
			<button on:mouseenter={cancelHover} on:click={() => (truncateFinder = !truncateFinder)}>
				<img
					class="ml-1.5 min-h-[28px] min-w-[9.33px]"
					draggable="false"
					src="/assets/menu_bar/resizer.png"
					alt="Menu Bar Resizer"
					height={28}
					width={9.33}
				/>
			</button>
			<div class="relative" id="menu-btn">
				<MenuButton name={$finderMenu.name} bind:hoverable bind:display>
					<img
						width={22}
						height={22}
						src="/assets/menu_bar/finder.png"
						alt="Finder"
						class="min-h-[22px] min-w-[22px]"
					/>
					{#if !truncateFinder}
						<h1 class="ml-1.5">Finder</h1>
					{/if}
				</MenuButton>
				<MenuSetting setting={$finderMenu} bind:display={display[$finderMenu.name]} right={true} />
			</div>
		</div>
	</div>
</section>
<span class="block h-[1px] w-screen bg-[#262626]" />
