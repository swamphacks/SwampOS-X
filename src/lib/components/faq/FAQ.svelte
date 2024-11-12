<script lang="ts">
	import { onMount } from 'svelte';
	import Window from '$lib/components/window/Window.svelte';
	import ResizeableFrame from '../window/frames/ResizeableFrame.svelte';
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
	const minResize = { w: 350, h: 450 };
	let size = { w: 350, h: 450 };

	const onResizeStart = () => {
		faqCards.forEach((card) => {
			card.dispatchEvent(new Event('resize-start'));
		});
	};

	onMount(() => {
		faqCards = Array.from(document.querySelectorAll('#faq-card'));
		if (window.innerWidth < 650) {
			size = {
				w: Math.min(window.innerWidth - 10, 350),
				h: Math.min(window.innerHeight - 10, 460)
			};
		} else {
			size.w = 650;
			size.h = Math.min(700, window.innerHeight - 10);
		}
	});
</script>

<Window name="FAQs" startOpen={false} preferredId="faqs">
	<svelte:fragment let:active let:setActive>
		<ResizeableFrame {onResizeStart} bind:size {minResize} {active} {setActive} color={'#cccccc'}>
			<div class="flex h-full w-full flex-col gap-2 p-4">
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
