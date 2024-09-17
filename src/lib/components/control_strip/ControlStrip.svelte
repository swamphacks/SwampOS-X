<script lang="ts">
	import { draggable, type DragEventData } from '@neodrag/svelte';

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

	let appsClosed = false;

	let controlElement: HTMLButtonElement;
	let closeElement: HTMLButtonElement;
	let leftArrowElement: HTMLButtonElement;
	let rightArrowElement: HTMLButtonElement;

	const toggleApps = () => {
		appsClosed = !appsClosed;
		apps = apps.map((app) => ({ ...app, display: !appsClosed }));
	};

	const onControlDrag = (e: CustomEvent<DragEventData>) => {
		if (appsClosed || !rightArrowElement) return;
		const offset = 32;
		const rightArrowPos = parseInt(controlElement.style.left.slice(0, -2)) - 17 + e.detail.offsetX;
		rightArrowElement.style.left = rightArrowPos + 'px';

		apps = apps.map((app, idx) => {
			if (idx * 24 - idx < rightArrowPos - offset) {
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
</script>

<section
	class="relative mt-5 flex h-fit"
	style="width: {appsClosed ? 17 : 16 + 17 + 24 * apps.length + 17 + 17 - apps.length - 3}px;"
>
	{#if !appsClosed}
		<button
			class="absolute left-0 h-[26px] w-[16px] bg-[url(assets/control_strip/controls/inactive/close.svg)] bg-center bg-no-repeat active:bg-[url(assets/control_strip/controls/active/close.svg)]"
			bind:this={closeElement}
			on:click={toggleApps}
		/>

		<button
			class="absolute left-[15px] h-[26px] w-[17px] bg-[url(assets/control_strip/controls/inactive/left-arrow.svg)] bg-center bg-no-repeat active:bg-[url(assets/control_strip/controls/active/left-arrow.svg)]"
			bind:this={leftArrowElement}
		/>
	{/if}

	{#each apps as app, idx}
		{#if app.display}
			<button
				class="absolute h-[26px] w-[24px] select-none bg-[url(assets/control_strip/controls/inactive/icon-container.svg)] bg-center bg-no-repeat active:bg-[url(assets/control_strip/controls/active/icon-container.svg)]"
				style="left: {30 + idx * 24 - idx}px;"
			>
				<img
					src={`assets/control_strip/app_icons/${app.src}`}
					class="relative h-[16px] w-[16px]"
					style={app.clicked ? 'top: 1px; left: 4px;' : 'left: 3px'}
					alt="control panel icon"
					draggable="false"
				/>
			</button>
		{/if}
	{/each}

	{#if !appsClosed}
		<button
			class="absolute h-[26px] w-[17px] bg-[url(assets/control_strip/controls/inactive/right-arrow.svg)] bg-center bg-no-repeat active:bg-[url(assets/control_strip/controls/active/right-arrow.svg)]"
			style={'left: ' + (30 + apps.length * 24 - apps.length) + 'px;'}
			bind:this={rightArrowElement}
		/>
	{/if}

	<button
		class="absolute h-[26px] w-[17px] bg-[url(assets/control_strip/controls/inactive/control.svg)] bg-center bg-no-repeat active:bg-[url(assets/control_strip/controls/active/control.svg)]"
		style={appsClosed ? 'left: 0' : 'left: ' + (30 + apps.length * 24 - apps.length + 17) + 'px;'}
		use:draggable={{ axis: 'x', bounds: 'parent' }}
		on:neodrag={onControlDrag}
		bind:this={controlElement}
	/>
</section>
