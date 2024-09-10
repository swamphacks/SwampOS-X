<script>
	const apps = [
		'apple_talk.svg',
		'cd.svg',
		'file_sharing.svg',
		'itunes.svg',
		'keychain_strip.svg',
		'monitor_resolution.svg',
		'remote_access.svg',
		'monitor_bitdepth.svg',
		'printer.svg',
		'sound_volume.svg',
		'web_sharing.svg'
	];
</script>

<section
	class="relative grid grid-cols-[repeat(2,16px)_repeat(11,33px)_repeat(2,17px)] items-center"
>
	<img
		src="assets/control_strip/controls/inactive/close.svg"
		class="h-[35px] w-[16px]"
		alt="close"
	/>
	<img
		src="assets/control_strip/controls/inactive/left-arrow.svg"
		class="h-[26px] w-[16px]"
		alt="left arrow"
	/>

	{#each apps as app, idx}
		<div
			class="relative h-[26px] w-[33px] bg-[url(assets/control_strip/controls/inactive/icon-container.svg)] bg-center bg-no-repeat"
			style="left: -{idx + 1}px"
		>
			<img
				src={`assets/control_strip/app_icons/${app}`}
				class="relative left-[4px] top-[6px] h-[16px] w-[16px]"
				alt={app}
			/>
		</div>
	{/each}

	<img
		src="assets/control_strip/controls/inactive/right-arrow.svg"
		class="relative h-[26px] w-[17px]"
		style="left: -{apps.length + 1}px"
		alt="right arrow"
	/>
	<img
		src="assets/control_strip/controls/inactive/control.svg"
		class="relative h-[26px] w-[17px]"
		style="left: -{apps.length + 1}px"
		alt="control"
	/>
</section>
