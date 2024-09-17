<script lang="ts">
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
</script>

<section class="relative mt-5 flex flex-row items-center">
	{#if !appsClosed}
		<button
			class="h-[26px] w-[16px] bg-[url(assets/control_strip/controls/inactive/close.svg)] bg-center bg-no-repeat active:bg-[url(assets/control_strip/controls/active/close.svg)]"
			bind:this={closeElement}
			on:click={toggleApps}
		/>

		<button
			class="relative left-[-1px] h-[26px] w-[17px] bg-[url(assets/control_strip/controls/inactive/left-arrow.svg)] bg-center bg-no-repeat active:bg-[url(assets/control_strip/controls/active/left-arrow.svg)]"
			bind:this={leftArrowElement}
		/>
	{/if}

	{#each apps as app, idx}
		{#if app.display}
			<button
				class="relative h-[26px] w-[24px] select-none bg-[url(assets/control_strip/controls/inactive/icon-container.svg)] bg-center bg-no-repeat active:bg-[url(assets/control_strip/controls/active/icon-container.svg)]"
				style="left: -{idx + 2}px;"
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
			class="relative h-[26px] w-[17px] bg-[url(assets/control_strip/controls/inactive/right-arrow.svg)] bg-center bg-no-repeat active:bg-[url(assets/control_strip/controls/active/right-arrow.svg)]"
			style="{!appsClosed && 'left: -' + (apps.length + 2) + 'px'}; background-image: "
			bind:this={rightArrowElement}
		/>
	{/if}

	<button
		class="relative h-[26px] w-[17px] bg-[url(assets/control_strip/controls/inactive/control.svg)] bg-center bg-no-repeat active:bg-[url(assets/control_strip/controls/active/control.svg)]"
		style="{appsClosed ? 'left: -1px' : 'left: -' + (apps.length + 2) + 'px'};"
		bind:this={controlElement}
		on:click={toggleApps}
	/>
</section>
