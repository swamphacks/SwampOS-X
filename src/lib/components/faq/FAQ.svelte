<script lang="ts">
	import { onMount } from 'svelte';
	import Window from '$lib/components/window/Window.svelte';
	import ResizeableFrame from '$lib/components/window/frames/ResizeableFrame.svelte';
	import Accordion from './Accordion.svelte';
	import Card from './Card.svelte';
	import { faq } from './faq';
	import { stickyNoteColors } from '$lib/components/sticky_note/sticky-colors';

	const colors = Object.keys(stickyNoteColors);
	let colorIdx = 0;

	const nextColor = () => {
		const color = colors[colorIdx];
		colorIdx = (colorIdx + 1) % colors.length;
		return color;
	};
	let faqCards: HTMLElement[] = [];

	const onResizeStart = () => {
		faqCards.forEach((card) => {
			card.dispatchEvent(new Event('resize-start'));
		});
	};

	onMount(() => {
		faqCards = Array.from(document.querySelectorAll('#faq-card'));
	});
</script>

<Window name="Tracks">
	<svelte:fragment let:size let:active let:setActive>
		<ResizeableFrame {size} {active} {setActive} {onResizeStart} color={'#cccccc'}>
			<div class="flex h-full flex-col gap-2 p-4">
				{#each Object.entries(faq) as [title, questions]}
					<Accordion {title}>
						{#each questions as { question, answer }}
							<Card color={nextColor()} {question} {answer} />
						{/each}
					</Accordion>
				{/each}
			</div>
		</ResizeableFrame>
	</svelte:fragment>
</Window>
