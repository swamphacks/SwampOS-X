<script>
	import StandardFrame from '../window/frames/StandardFrame.svelte';
	import Window from '../window/Window.svelte';
</script>

<Window name="Sponsors" preferredId="sponsors">
	<slot slot="icon">
		<img
			class="w-[13px]"
			draggable="false"
			on:contextmenu={(e) => e.preventDefault()}
			src="/assets/folders/favorites.png"
			alt="Favorites folder icon"
		/>
	</slot>

	<svelte:fragment let:active>
		<!-- Size is set to 0 to allow for text size to determine size of the window -->
		<StandardFrame size={{ w: 0, h: 0 }} {active} infinitelyWide={false}>
			<div>
				<h1>Sponsors</h1>
			</div>
		</StandardFrame>
	</svelte:fragment>
</Window>
