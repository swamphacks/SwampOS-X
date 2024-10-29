<script>
	import ResizeableFrame from '$lib/components/window/frames/ResizeableFrame.svelte';

	import Window from '$lib/components/window/Window.svelte';
</script>

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

	<svelte:fragment let:active>
		<ResizeableFrame size={{ h: 500, w: 700 }} {active} infinitelyWide={true}>
			<div class="flex h-full w-full items-center justify-center bg-red-500">
				<div class="h-[80%] w-[80%] bg-blue-500"></div>
			</div>
		</ResizeableFrame>
	</svelte:fragment>
</Window>
