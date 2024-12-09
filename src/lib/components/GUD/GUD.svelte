<script>
	import StandardFrame from '../window/frames/StandardFrame.svelte';
	import Window from '../window/Window.svelte';
</script>

<Window name="GUD" preferredId="gud" startOpen={false}>
	<slot slot="icon">
		<img
			class="w-[13px]"
			draggable="false"
			on:contextmenu={(e) => e.preventDefault()}
			src="/assets/desktop/gud-logo.png"
			alt="Globe icon"
		/>
	</slot>

	<svelte:fragment let:active>
		<!-- Size is set to 0 to allow for text size to determine size of the window -->
		<StandardFrame size={{ w: 0, h: 0 }} {active} infinitelyWide={false}>
			<div
				class="flex h-full w-full flex-col items-center justify-center gap-y-5 bg-gud-purple px-7 py-4 menu-lg:px-28 menu-lg:py-16"
			>
				<h1 class="text-md gud-text text-gud-text menu-lg:text-xl">Designed by</h1>
				<div class="gud-text flex flex-col text-nowrap text-sm text-gud-text menu-lg:text-lg">
					<div class="flex flex-row gap-28">
						<h2>Maya Rudo</h2>
						<h2>Thomas Kaw</h2>
					</div>
					<div class="mt-4 flex w-full flex-col items-center gap-y-3">
						<h2>Hana Checketts</h2>
						<h2>Nicole Quintero</h2>
						<h2>Helen Alvarez</h2>
						<h2>Lena Nguyen</h2>
					</div>
				</div>
			</div>
		</StandardFrame>
	</svelte:fragment>
</Window>
