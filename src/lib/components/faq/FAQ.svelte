<script lang="ts">
	import Window from '$lib/components/window/Window.svelte';
	import ResizeableFrame from '$lib/components/window/frames/ResizeableFrame.svelte';
	import Accordion from './Accordion.svelte';
	import Card from './Card.svelte';
</script>

<Window name="Tracks">
	<svelte:fragment let:size let:active>
		<ResizeableFrame {size} {active}>
			<div class="flex h-full w-full flex-col gap-2 bg-gray-300 p-4">
				<Accordion title="General">
					<Card
						question="What is the purpose of this FAQ?"
						answer="To provide answers to common questions."
					/>
					<Card
						question="What is a hackathon?"
						answer="A hackathon is an event where people come together to create software or hardware projects."
					/>
					<Card question="How do I participate?" answer="You can register on our website." />
					<Card question="How do I participate?" answer="You can register on our website." />
					<Card question="How do I participate?" answer="You can register on our website." />
				</Accordion>
				<Accordion title="Travel">
					<Card question="What travel arrangements are provided?" answer="None lmao" />
				</Accordion>
				<Accordion title="Accommodations">
					<Card
						question="What accomodations are provided?"
						answer="We provide a list of nearby hotels. You have to buy them though good luck with that."
					/>
					<Card question="Will there be food?" answer="If you bring it yourself." />
				</Accordion>
			</div>
		</ResizeableFrame>
	</svelte:fragment>
</Window>
