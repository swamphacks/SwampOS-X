<script lang="ts">
	import { draggable, type DragEventData } from '@neodrag/svelte';

	const iconOffset = 30; // close button + left arrow - padding = 16 + 17 - 3
	const iconWidth = 24;

	let apps = [
		{
			el: undefined as unknown as HTMLButtonElement,
			src: 'apple_talk.png',
			clicked: false,
			display: true
		},
		{ el: undefined as unknown as HTMLButtonElement, src: 'cd.png', clicked: false, display: true },
		{
			el: undefined as unknown as HTMLButtonElement,
			src: 'file_sharing.png',
			clicked: false,
			display: true
		},
		{
			el: undefined as unknown as HTMLButtonElement,
			src: 'itunes.png',
			clicked: false,
			display: true
		},
		{
			el: undefined as unknown as HTMLButtonElement,
			src: 'keychain_strip.png',
			clicked: false,
			display: true
		},
		{
			el: undefined as unknown as HTMLButtonElement,
			src: 'monitor_resolution.png',
			clicked: false,
			display: true
		},
		{
			el: undefined as unknown as HTMLButtonElement,
			src: 'remote_access.png',
			clicked: false,
			display: true
		},
		{
			el: undefined as unknown as HTMLButtonElement,
			src: 'monitor_bitdepth.png',
			clicked: false,
			display: true
		},
		{
			el: undefined as unknown as HTMLButtonElement,
			src: 'printer.png',
			clicked: false,
			display: true
		},
		{
			el: undefined as unknown as HTMLButtonElement,
			src: 'sound_volume.png',
			clicked: false,
			display: true
		},
		{
			el: undefined as unknown as HTMLButtonElement,
			src: 'web_sharing.png',
			clicked: false,
			display: true
		}
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
		activateArrows(!appsVisible);
		positionPrev = position.x;
	};

	const activateArrows = (active: boolean) => {
		if (active) {
			leftArrowElement.classList.remove('inactive-left');
			rightArrowElement.classList.remove('inactive-right');
			leftArrowElement.classList.add('active-left');
			rightArrowElement.classList.add('active-right');
		} else {
			leftArrowElement.classList.remove('active-left');
			rightArrowElement.classList.remove('active-right');
			leftArrowElement.classList.add('inactive-left');
			rightArrowElement.classList.add('inactive-right');
		}
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

		console.log(apps.some((app) => !app.display));
		activateArrows(apps.some((app) => !app.display));
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
		class="absolute left-0 h-[26px] w-[16px] bg-[url(/assets/control_strip/controls/default/close.png)] bg-center bg-no-repeat focus:bg-[url(/assets/control_strip/controls/active/close.png)] active:bg-[url(/assets/control_strip/controls/active/close.png)]"
		tabindex="0"
		bind:this={closeElement}
		on:click={toggleApps}
	/>
	<button
		class="inactive-left absolute left-[15px] h-[26px] w-[17px] bg-center bg-no-repeat focus:bg-[url(/assets/control_strip/controls/active/left_arrow.png)]"
		tabindex="0"
		bind:this={leftArrowElement}
		on:click={shiftAppsLeft}
		on:mouseup={() => leftArrowElement.blur()}
		on:mouseleave={() => leftArrowElement.blur()}
	/>

	{#each apps as app, idx}
		{#if app.display}
			<button
				class="absolute h-[26px] w-[24px] select-none bg-[url(/assets/control_strip/controls/default/app.png)] bg-center bg-no-repeat focus:bg-[url(/assets/control_strip/controls/active/app.png)] active:bg-[url(/assets/control_strip/controls/active/app.png)]"
				style="left: {iconOffset + idx * iconWidth - idx}px;"
				bind:this={app.el}
				tabindex="0"
				on:mouseup={() => app.el.blur()}
				on:mouseleave={() => app.el.blur()}
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
		class="inactive-right absolute h-[26px] w-[17px] bg-center bg-no-repeat focus:bg-[url(/assets/control_strip/controls/active/right_arrow.png)]"
		style={'left: ' + (iconOffset + apps.length * iconWidth - apps.length) + 'px;'}
		tabindex="0"
		bind:this={rightArrowElement}
		on:mouseup={() => rightArrowElement.blur()}
		on:mouseleave={() => rightArrowElement.blur()}
		on:click={shiftAppsRight}
	/>

	<button
		class="absolute h-[26px] w-[17px] bg-[url(/assets/control_strip/controls/default/controller.png)] bg-center bg-no-repeat focus:bg-[url(/assets/control_strip/controls/active/controller.png)] active:bg-[url(/assets/control_strip/controls/active/controller.png)]"
		use:draggable={{
			position,
			axis: 'x',
			bounds: 'parent'
		}}
		tabindex="0"
		on:neodrag={onControlDrag}
		on:neodrag:end={onControlDragEnd}
		bind:this={controlElement}
		on:mouseup={() => controlElement.blur()}
		on:mouseleave={() => controlElement.blur()}
		on:click={() => {
			if (!controlDragged) toggleApps();
			controlDragged = false;
		}}
	/>
</section>

<style lang="postcss">
	:global(.active-right) {
		@apply bg-[url(/assets/control_strip/controls/default/right_arrow.png)] active:bg-[url(/assets/control_strip/controls/active/right_arrow.png)];
	}

	:global(.active-left) {
		@apply bg-[url(/assets/control_strip/controls/default/left_arrow.png)] active:bg-[url(/assets/control_strip/controls/active/left_arrow.png)];
	}

	:global(.inactive-left) {
		@apply cursor-default bg-[url(/assets/control_strip/controls/disabled/left_arrow.png)];
	}

	:global(.inactive-right) {
		@apply cursor-default bg-[url(/assets/control_strip/controls/disabled/right_arrow.png)];
	}

	button {
		@apply focus:outline-none focus:ring-0 focus:ring-offset-0;
	}
</style>
