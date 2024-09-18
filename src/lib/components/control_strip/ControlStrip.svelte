<script lang="ts">
	import { draggable, type DragEventData } from '@neodrag/svelte';

	const iconOffset = 30; // close button + left arrow - padding = 16 + 17 - 3
	const iconWidth = 24;

	let apps = [
		{ src: 'apple_talk.svg', clicked: false, display: true },
		{ src: 'cd.svg', clicked: false, display: true },
		{ src: 'file_sharing.svg', clicked: false, display: true },
		{ src: 'itunes.svg', clicked: false, display: true },
		{ src: 'keychain_strip.svg', clicked: false, display: true },
		{ src: 'monitor_resolution.svg', clicked: false, display: true },
		{ src: 'remote_access.svg', clicked: false, display: true },
		{ src: 'monitor_bitdepth.svg', clicked: false, display: true },
		{ src: 'printer.svg', clicked: false, display: true },
		{ src: 'sound_volume.svg', clicked: false, display: true },
		{ src: 'web_sharing.svg', clicked: false, display: true }
	];

	let controlElement: HTMLButtonElement;
	let closeElement: HTMLButtonElement;
	let leftArrowElement: HTMLButtonElement;
	let rightArrowElement: HTMLButtonElement;

	const initialControlPos = iconOffset + apps.length * iconWidth - apps.length + 17;
	let positionPrev = initialControlPos;
	let position = { x: initialControlPos, y: 0 };
	let controlDragged = false;

	let appsVisible = true;
	const toggleApps = () => {
		appsVisible = !appsVisible;
		apps = apps.map((app) => ({ ...app, display: appsVisible }));
		if (appsVisible) {
			leftArrowElement.style.visibility = 'visible';
			closeElement.style.visibility = 'visible';
			rightArrowElement.style.left = initialControlPos - 17 + 'px';
			position.x = initialControlPos;
		} else {
			leftArrowElement.style.visibility = 'hidden';
			closeElement.style.visibility = 'hidden';
			rightArrowElement.style.left = -17 + 'px';
			position.x = 0;
		}
		positionPrev = position.x;
	};

	const onControlDrag = (e: CustomEvent<DragEventData>) => {
		if (!rightArrowElement) return;
		if (e.detail.offsetX != positionPrev) {
			controlDragged = true;
		}

		const rightArrowPos = e.detail.offsetX - 17;
		rightArrowElement.style.left = rightArrowPos + 'px';

		apps = apps.map((app, idx) => {
			if (rightArrowPos - iconOffset - (idx * iconWidth - idx) >= 0) {
				return { ...app, display: true };
			}
			return { ...app, display: false };
		});

		if (rightArrowPos < 17) {
			leftArrowElement.style.visibility = 'hidden';
		} else {
			leftArrowElement.style.visibility = 'visible';
		}

		if (rightArrowPos < 0) {
			closeElement.style.visibility = 'hidden';
		} else {
			closeElement.style.visibility = 'visible';
		}
	};

	const onControlDragEnd = (e: CustomEvent<DragEventData>) => {
		let endIdx = apps.findIndex((app) => !app.display);

		if (endIdx === -1) endIdx = apps.length;

		// If no icons are visible pretend we are at the first icon.
		// This should cause all of the icons except the control to be
		// hidden because the control position is before the first icon
		if (endIdx === 0) endIdx = 1;

		const nextVisibleIconPos = iconOffset + (endIdx - 1) * iconWidth - (endIdx - 1);

		// snap to nearest icon
		if (e.detail.offsetX - 17 - nextVisibleIconPos < 12) {
			// snap if there is an icon to snap to. otherwise close all icons
			if (endIdx - 1 > 0) {
				rightArrowElement.style.left = nextVisibleIconPos + 'px';
				position.x = nextVisibleIconPos + 17;
				apps = apps.map((app, idx) => (idx >= endIdx - 1 ? { ...app, display: false } : app));
				appsVisible = true;
			} else {
				leftArrowElement.style.visibility = 'hidden';
				closeElement.style.visibility = 'hidden';
				rightArrowElement.style.left = -17 + 'px';
				position.x = 0;
				apps = apps.map((app, idx) => (idx >= 0 ? { ...app, display: false } : app));
				appsVisible = false;
			}
		} else {
			const rightArrowPos = iconOffset + endIdx * iconWidth - endIdx;
			rightArrowElement.style.left = rightArrowPos + 'px';
			position.x = rightArrowPos + 17;
			appsVisible = true;
		}

		positionPrev = position.x;
	};

	const shiftAppsLeft = () => {
		if (apps.every((app) => app.display)) return;
		const firstHiddenIdx = apps.findIndex((app) => !app.display);
		apps = [...apps.slice(1), apps[0]].map((app, idx) => {
			return { ...app, display: idx < firstHiddenIdx };
		});
	};

	const shiftAppsRight = () => {
		if (apps.every((app) => app.display)) return;
		const firstHiddenIdx = apps.findIndex((app) => !app.display);
		apps = [apps.at(-1)!, ...apps.slice(0, -1)].map((app, idx) => {
			return { ...app, display: idx < firstHiddenIdx };
		});
	};
</script>

<section
	class="relative mt-5 flex h-fit"
	style="width: {iconOffset + iconWidth * apps.length + 17 + 17 - apps.length}px;"
>
	<button
		class="absolute left-0 h-[26px] w-[16px] bg-[url(/assets/control_strip/controls/inactive/close.svg)] bg-center bg-no-repeat active:bg-[url(/assets/control_strip/controls/active/close.svg)]"
		bind:this={closeElement}
		on:click={toggleApps}
	/>
	<button
		class="absolute left-[15px] h-[26px] w-[17px] bg-[url(/assets/control_strip/controls/inactive/left-arrow.svg)] bg-center bg-no-repeat"
		class:active-left={apps.some((app) => !app.display)}
		bind:this={leftArrowElement}
		on:click={shiftAppsLeft}
	/>

	{#each apps as app, idx}
		{#if app.display}
			<button
				class="absolute h-[26px] w-[24px] select-none bg-[url(/assets/control_strip/controls/inactive/icon-container.svg)] bg-center bg-no-repeat active:bg-[url(/assets/control_strip/controls/active/icon-container.svg)]"
				style="left: {iconOffset + idx * iconWidth - idx}px;"
			>
				<img
					src={`/assets/control_strip/app_icons/${app.src}`}
					class="relative h-[16px] w-[16px]"
					style={app.clicked ? 'top: 1px; left: 4px;' : 'left: 3px'}
					alt="control panel icon"
					draggable="false"
				/>
			</button>
		{/if}
	{/each}

	<button
		class="absolute h-[26px] w-[17px] bg-[url(/assets/control_strip/controls/inactive/right-arrow.svg)] bg-center bg-no-repeat"
		style={'left: ' + (iconOffset + apps.length * iconWidth - apps.length) + 'px;'}
		class:active-right={apps.some((app) => !app.display)}
		bind:this={rightArrowElement}
		on:click={shiftAppsRight}
	/>

	<button
		class="absolute h-[26px] w-[17px] bg-[url(/assets/control_strip/controls/inactive/control.svg)] bg-center bg-no-repeat active:bg-[url(/assets/control_strip/controls/active/control.svg)]"
		use:draggable={{
			position,
			axis: 'x',
			bounds: 'parent'
		}}
		on:neodrag={onControlDrag}
		on:neodrag:end={onControlDragEnd}
		bind:this={controlElement}
		on:click={() => {
			if (!controlDragged) toggleApps();
			controlDragged = false;
		}}
	/>
</section>

<style lang="postcss">
	.active-right {
		@apply active:bg-[url(/assets/control_strip/controls/active/right-arrow.svg)];
	}

	.active-left {
		@apply active:bg-[url(/assets/control_strip/controls/active/left-arrow.svg)];
	}
</style>
