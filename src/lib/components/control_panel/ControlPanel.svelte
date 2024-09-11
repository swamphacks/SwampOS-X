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
	<button
		class="h-[26px] w-[16px] bg-center bg-no-repeat"
		style="background-image: url(assets/control_strip/controls/inactive/close.svg)"
		bind:this={closeElement}
		on:mousedown={() => {
			closeElement.style.backgroundImage = 'url(assets/control_strip/controls/active/close.svg)';
		}}
		on:mouseup={() => {
			toggleApps();
			closeElement.style.backgroundImage = 'url(assets/control_strip/controls/inactive/close.svg)';
		}}
	/>

	{#if !appsClosed}
		<button
			class="h-[26px] w-[16px] bg-center bg-no-repeat"
			style="background-image: url(assets/control_strip/controls/inactive/left-arrow.svg)"
			bind:this={leftArrowElement}
			on:mousedown={() => {
				leftArrowElement.style.backgroundImage =
					'url(assets/control_strip/controls/active/left-arrow.svg)';
			}}
			on:mouseup={() => {
				leftArrowElement.style.backgroundImage =
					'url(assets/control_strip/controls/inactive/left-arrow.svg)';
			}}
		/>
	{/if}

	{#each apps as app, idx}
		{#if app.display}
			<button
				class="relative h-[26px] w-[33px] bg-center bg-no-repeat"
				style="left: -{idx + 1}px; background-image: url(assets/control_strip/controls/{app.clicked
					? 'active'
					: 'inactive'}/icon-container.svg)"
				on:click={() => {
					apps = apps.map((a, i) =>
						i === idx ? { ...a, clicked: !a.clicked } : { ...a, clicked: false }
					);
				}}
			>
				<img
					src={`assets/control_strip/app_icons/${app.src}`}
					class="relative h-[16px] w-[16px]"
					style={app.clicked ? 'top: 1px; left: 4px;' : 'left: 3px'}
					alt="control panel icon"
				/>
			</button>
		{/if}
	{/each}

	{#if !appsClosed}
		<button
			class="relative h-[26px] w-[17px] bg-center bg-no-repeat"
			style="{!appsClosed &&
				'left: -' +
					(apps.length + 1) +
					'px'}; background-image: url(assets/control_strip/controls/inactive/right-arrow.svg)"
			bind:this={rightArrowElement}
			on:mousedown={() => {
				rightArrowElement.style.backgroundImage =
					'url(assets/control_strip/controls/active/right-arrow.svg)';
			}}
			on:mouseup={() => {
				rightArrowElement.style.backgroundImage =
					'url(assets/control_strip/controls/inactive/right-arrow.svg)';
			}}
		/>
	{/if}

	<button
		class="relative h-[26px] w-[17px] bg-center bg-no-repeat"
		style="{appsClosed
			? 'left: 0'
			: 'left: -' +
				(apps.length + 1) +
				'px'}; background-image: url(assets/control_strip/controls/inactive/control.svg)"
		bind:this={controlElement}
		on:mousedown={() => {
			controlElement.style.backgroundImage =
				'url(assets/control_strip/controls/active/control.svg)';
		}}
		on:mouseup={() => {
			toggleApps();
			controlElement.style.backgroundImage =
				'url(assets/control_strip/controls/inactive/control.svg)';
		}}
	/>
</section>
