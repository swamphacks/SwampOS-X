<script>
	let apps = [
		{ src: 'apple_talk.svg', clicked: false },
		{ src: 'cd.svg', clicked: false },
		{ src: 'file_sharing.svg' },
		{ src: 'itunes.svg', clicked: false },
		{ src: 'keychain_strip.svg', clicked: false },
		{ src: 'monitor_resolution.svg', clicked: false },
		{ src: 'remote_access.svg', clicked: false },
		{ src: 'monitor_bitdepth.svg', clicked: false },
		{ src: 'printer.svg', clicked: false },
		{ src: 'sound_volume.svg', clicked: false },
		{ src: 'web_sharing.svg', clicked: false }
	];
</script>

<section
	class="relative grid grid-cols-[repeat(2,16px)_repeat(11,33px)_repeat(2,17px)] items-center"
>
	<button>
		<img
			src="assets/control_strip/controls/inactive/close.svg"
			class="h-[35px] w-[16px]"
			alt="close"
		/>
	</button>

	<button>
		<img
			src="assets/control_strip/controls/inactive/left-arrow.svg"
			class="h-[26px] w-[16px]"
			alt="left arrow"
		/>
	</button>

	{#each apps as app, idx}
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
	{/each}

	<button class="relative h-[26px] w-[17px]" style="left: -{apps.length + 1}px">
		<img src="assets/control_strip/controls/inactive/right-arrow.svg" alt="right arrow" />
	</button>

	<button class="relative h-[26px] w-[17px]" style="left: -{apps.length + 1}px">
		<img src="assets/control_strip/controls/inactive/control.svg" alt="control" />
	</button>
</section>
