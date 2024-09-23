<script lang="ts">
	import { draggable, type DragEventData } from '@neodrag/svelte';

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

	let positionPrev = 0;
	let position = { x: 0, y: 0 };
	let controlDragged = false;

	const closeWidth = 16;
	const arrowWidth = 17;
	const handleWidth = 17;
	const controlStripWidth =
		closeWidth +
		arrowWidth -
		1 +
		iconWidth * apps.length -
		apps.length -
		1 +
		arrowWidth +
		handleWidth -
		1;

	let appsVisible = true;
	const toggleApps = () => {
		appsVisible = !appsVisible;
		apps = apps.map((app) => ({ ...app, display: appsVisible }));
		if (appsVisible) {
			leftArrowElement.style.visibility = 'visible';
			closeElement.style.visibility = 'visible';
			rightArrowElement.style.left = '0px';
			position.x = 0;
		} else {
			leftArrowElement.style.visibility = 'hidden';
			closeElement.style.visibility = 'hidden';
			rightArrowElement.style.left = -(controlStripWidth - (handleWidth - 1)) + 'px';
			position.x = -(controlStripWidth - (handleWidth - 1));
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

		const rightArrowPos = rightArrowElement.getBoundingClientRect().x;
		rightArrowElement.style.left = e.detail.offsetX + 'px';

		apps = apps.map((app) => {
			if (rightArrowPos > app.el.getBoundingClientRect().x) {
				return { ...app, display: true };
			}
			return { ...app, display: false };
		});

		if (rightArrowPos < arrowWidth) {
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

	const onControlDragEnd = () => {
		let lastVisibleApp = apps.findIndex((app) => !app.display);
		if (lastVisibleApp === -1) lastVisibleApp = apps.length;
		lastVisibleApp = Math.max(lastVisibleApp - 1, 0);

		const leftBorder = apps[lastVisibleApp].el.getBoundingClientRect().x;
		const rightBorder = leftBorder + iconWidth;
		const endPosition = rightArrowElement.getBoundingClientRect().x;
		let closedAllApps = false;

		// Snap to left
		if (endPosition - leftBorder < rightBorder - endPosition) {
			if (lastVisibleApp > 0) {
				rightArrowElement.style.left =
					leftBorder - (controlStripWidth - handleWidth - arrowWidth) - 1 + 'px';
				position.x = leftBorder - (controlStripWidth - handleWidth - arrowWidth) - 1;
				activateArrows(true); // at least 1 app is not visible, we must activate arrows
			} else {
				apps[0].display = false;
				leftArrowElement.style.visibility = 'hidden';
				closeElement.style.visibility = 'hidden';
				rightArrowElement.style.left = -(controlStripWidth - (handleWidth - 1)) + 'px';
				position.x = -(controlStripWidth - (handleWidth - 1));
				closedAllApps = true;
			}
		} else {
			activateArrows(lastVisibleApp < apps.length - 1); // at least 1 app is not visible, we must activate arrows
			rightArrowElement.style.left =
				rightBorder - (controlStripWidth - handleWidth - arrowWidth) - 2 + 'px';
			position.x = rightBorder - (controlStripWidth - handleWidth - arrowWidth) - 2;
		}
		appsVisible = !closedAllApps;
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

<section class="relative mt-5 flex h-fit w-fit">
	<button
		class="h-[26px] w-[16px] bg-[url(/assets/control_strip/controls/default/close.png)] bg-center bg-no-repeat focus:bg-[url(/assets/control_strip/controls/active/close.png)] active:bg-[url(/assets/control_strip/controls/active/close.png)]"
		tabindex="0"
		bind:this={closeElement}
		on:click={toggleApps}
	/>
	<button
		class="inactive-left ml-[-1px] h-[26px] w-[17px] bg-center bg-no-repeat focus:bg-[url(/assets/control_strip/controls/active/left_arrow.png)]"
		tabindex="0"
		bind:this={leftArrowElement}
		on:click={shiftAppsLeft}
		on:mouseup={() => leftArrowElement.blur()}
		on:mouseleave={() => leftArrowElement.blur()}
	/>

	{#each apps as app}
		<button
			class="ml-[-1px] h-[26px] w-[24px] select-none bg-[url(/assets/control_strip/controls/default/app.png)] bg-center bg-no-repeat focus:bg-[url(/assets/control_strip/controls/active/app.png)] active:bg-[url(/assets/control_strip/controls/active/app.png)]"
			class:opacity-0={!app.display}
			class:opacity-100={app.display}
			bind:this={app.el}
			tabindex="0"
			on:mouseup={() => app.el.blur()}
			on:mouseleave={() => app.el.blur()}
		>
			<img
				src={`/assets/control_strip/app_icons/${app.src}`}
				class="ml-[3px] mt-[1px] h-[16px] w-[16px]"
				alt="control panel icon"
				draggable="false"
			/>
		</button>
	{/each}

	<button
		class="inactive-right relative ml-[-1px] h-[26px] w-[17px] bg-center bg-no-repeat focus:bg-[url(/assets/control_strip/controls/active/right_arrow.png)]"
		tabindex="0"
		bind:this={rightArrowElement}
		on:mouseup={() => rightArrowElement.blur()}
		on:mouseleave={() => rightArrowElement.blur()}
		on:click={shiftAppsRight}
	/>

	<button
		class="relative h-[26px] w-[17px] bg-[url(/assets/control_strip/controls/default/controller.png)] bg-center bg-no-repeat focus:bg-[url(/assets/control_strip/controls/active/controller.png)] active:bg-[url(/assets/control_strip/controls/active/controller.png)]"
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
