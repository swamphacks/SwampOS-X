<script lang="ts">
	import Window from '$lib/components/window/Window.svelte';
	import ResizeableFrame from '$lib/components/window/frames/ResizeableFrame.svelte';
	import Accordion from './Accordion.svelte';
</script>

<Window name="Tracks">
	<svelte:fragment let:size let:active>
		<ResizeableFrame {size} {active} verticalResize={false} infinitelyWide={true}>
			<div class="flex flex-col gap-4 p-4">
				<Accordion title="General">
					<p>Here are some frequently asked questions.</p>
				</Accordion>
				<Accordion title="Travel">
					<p>Here are some frequently asked questions.</p>
				</Accordion>
				<Accordion title="Accommodations">
					<p>Here are some frequently asked questions.</p>
				</Accordion>
			</div>
		</ResizeableFrame>
	</svelte:fragment>
</Window>
