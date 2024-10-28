<script lang="ts">
	import MenuBar from '$lib/components/menu_bar/MenuBar.svelte';
	import ControlStrip from '$lib/components/control_strip/ControlStrip.svelte';
	import ResizeableFrame from '$lib/components/window/frames/ResizeableFrame.svelte';
	import StandardFrame from '$lib/components/window/frames/StandardFrame.svelte';
	import Window from '$lib/components/window/Window.svelte';

	// const heart = ({ x, y }: Position): boolean => {
	// 	// convert to [-1, 1]
	// 	x = x * 2 - 1;
	// 	y = y * 2 - 1;

	// 	const C = 1 - Math.cbrt(x * x);
	// 	return C * Math.pow(19 - 8 * C, 2) - Math.pow(6 - 10 * C - 16 * y, 2) >= 1;
	// };

	// const randPos = (): Position => {
	// 	let pos: Position;
	// 	do {
	// 		pos = {
	// 			x: Math.random(),
	// 			y: Math.random()
	// 		};
	// 	} while (!heart(pos));
	// 	return pos;
	// };

	// const toCanvas = (pos: Position): Position => ({
	// 	x: 785 * pos.x,
	// 	y: 785 * (1 - pos.y)
	// });

	// const K = 100;
</script>

<MenuBar />

<Window name="Creative Assistant">
	<slot slot="icon">
		<img
			class="w-[13px]"
			draggable="false"
			on:contextmenu={(e) => e.preventDefault()}
			src="/assets/folders/colorsync_profiles.png"
			alt="Assistant"
		/>
	</slot>

	<svelte:fragment let:size let:active>
		<StandardFrame {size} {active} infinitelyWide={true}>
			testing<br />
			testing<br />
			testing<br />
			really really really really really long
		</StandardFrame>
	</svelte:fragment>
</Window>

<Window name="Gymnast">
	<slot slot="icon">
		<img
			class="w-[13px]"
			draggable="false"
			on:contextmenu={(e) => e.preventDefault()}
			src="/assets/folders/system.png"
			alt="Hullo"
		/>
	</slot>

	<svelte:fragment let:size let:active>
		<ResizeableFrame {size} {active} infinitelyWide={true}>
			testing<br />
			testing<br />
			testing<br />
			really really really really really long
		</ResizeableFrame>
	</svelte:fragment>
</Window>

<Window name="Schedule">
	<slot slot="icon">
		<img
			class="w-[13px]"
			draggable="false"
			on:contextmenu={(e) => e.preventDefault()}
			src="/assets/folders/default.png"
			alt="Schedule Icon"
		/>
	</slot>

	<svelte:fragment let:size let:active>
		<ResizeableFrame {size} {active} infinitelyWide={true}>
			<div class="h-full w-full items-center justify-center">
				<div class="h-24 w-24 bg-red-500"></div>
			</div>
		</ResizeableFrame>
	</svelte:fragment>
</Window>

<ControlStrip />
