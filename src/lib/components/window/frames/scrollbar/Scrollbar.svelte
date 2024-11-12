<script lang="ts">
	import { onDestroy } from 'svelte';

	// See: https://github.com/daylilyfield/svrollbar

	export let viewport: HTMLElement;
	export let contents: HTMLElement;
	export let margin: { top?: number; right?: number; bottom?: number; left?: number } = {};

	export let startResize: (e: MouseEvent) => void;
	export let onResizeStart: () => void;

	export let active: boolean;
	export let setActive: () => void;

	const BUTTONS_HEIGHT = 16;
	let resized = false;

	let vThumb: HTMLElement;

	let startTop = 0;
	let startY = 0;

	$: teardownViewport = setupViewport(viewport);
	$: teardownContents = setupContents(contents);
	$: teardownThumb = setupThumb(vThumb);

	$: marginTop = margin?.top ?? 0;
	$: marginBottom = margin?.bottom ?? 0;
	$: marginRight = margin?.right ?? 0;
	$: marginLeft = margin?.left ?? 0;

	$: wholeHeight = viewport?.scrollHeight ?? 0;
	$: scrollTop = viewport?.scrollTop ?? 0;
	$: trackHeight = (viewport?.clientHeight ?? 0 - (marginTop + marginBottom)) - BUTTONS_HEIGHT;

	$: thumbHeight =
		wholeHeight > 0 ? ((trackHeight + BUTTONS_HEIGHT) / wholeHeight) * trackHeight : 0;
	$: thumbTop = wholeHeight > 0 ? (scrollTop / wholeHeight) * trackHeight : 0;

	$: scrollable = wholeHeight > trackHeight;

	function setupViewport(viewport: HTMLElement) {
		if (!viewport) return;

		viewport.addEventListener('scroll', onScroll, { passive: true });

		const observer = new ResizeObserver(() => {
			wholeHeight = viewport.scrollHeight ?? 0;
			trackHeight = viewport.clientHeight - (marginTop + marginBottom) - BUTTONS_HEIGHT;
		});

		observer.observe(viewport);

		return () => {
			viewport.removeEventListener('scroll', onScroll);
			observer.unobserve(contents);
			observer.disconnect();
		};
	}

	function setupThumb(thumb: HTMLElement) {
		if (!thumb) return;

		vThumb.addEventListener('mousedown', onThumbDown, { passive: true });
		vThumb.addEventListener('touchstart', onThumbDown, { passive: true });

		return () => {
			vThumb.removeEventListener('mousedown', onThumbDown);
			vThumb.removeEventListener('touchstart', onThumbDown);
		};
	}

	function setupContents(contents: HTMLElement) {
		if (!contents) return;

		const observer = new ResizeObserver(() => {
			wholeHeight = viewport?.scrollHeight ?? 0;
		});

		observer.observe(contents);

		return () => {
			observer.unobserve(contents);
			observer.disconnect();
		};
	}

	function onScroll() {
		if (!scrollable || !active) return;

		scrollTop = viewport?.scrollTop ?? 0;
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	function onThumbDown(event: any) {
		setActive();

		event.stopPropagation();

		startTop = viewport.scrollTop;
		startY = event.changedTouches ? event.changedTouches[0].clientY : event.clientY;

		document.addEventListener('mousemove', onThumbMove);
		document.addEventListener('touchmove', onThumbMove);
		document.addEventListener('mouseup', onThumbUp);
		document.addEventListener('touchend', onThumbUp);
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	function onThumbMove(event: any) {
		event.stopPropagation();
		event.preventDefault();

		const clientY = event.changedTouches ? event.changedTouches[0].clientY : event.clientY;
		const ratio = wholeHeight / trackHeight;

		viewport.scrollTop = startTop + ratio * (clientY - startY);
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	function onThumbUp(event: any) {
		event.stopPropagation();
		event.preventDefault();

		startTop = 0;
		startY = 0;

		document.removeEventListener('mousemove', onThumbMove);
		document.removeEventListener('touchmove', onThumbMove);
		document.removeEventListener('mouseup', onThumbUp);
		document.removeEventListener('touchend', onThumbUp);
	}

	function onResize(e: MouseEvent) {
		startResize(e);
		if (!resized) {
			resized = true;
			onResizeStart();
		}
	}

	function onResizeEnd() {
		resized = false;
	}

	onDestroy(() => {
		teardownViewport?.();
		teardownContents?.();
		teardownThumb?.();
	});
</script>

<div class="v-scrollbar" style:visibility={active ? 'visible' : 'hidden'}>
	<div
		class:active-frame={active}
		class:nonactive-frame={!active}
		style="height: {trackHeight}px; margin: {marginTop}px {marginRight}px {marginBottom}px {marginLeft}px;"
	>
		<div
			style:visibility={active && wholeHeight - trackHeight > BUTTONS_HEIGHT ? 'visible' : 'hidden'}
		>
			<div
				class="v-track"
				style="height: {trackHeight}px; border: solid var(--primary-black-900, #262626); border-width: 1px 1px 1px 0;"
			/>
			<div
				bind:this={vThumb}
				class="v-thumb inline-flex flex-col items-center justify-center"
				style="height: {thumbHeight}px; top: {thumbTop}px"
			>
				<img src="/assets/scrollbar/hand_atom.svg" alt="Scroll" draggable="false" />
			</div>
		</div>
	</div>

	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class="h-4 w-4" on:mousedown={onResize} on:mouseup={onResizeEnd}>
		<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
		<img
			src="/assets/scrollbar/size_box.png"
			alt="Resize handle"
			on:mousedown={onResize}
			on:mouseup={onResizeEnd}
			draggable="false"
		/>
	</div>
</div>

<style>
	.v-scrollbar {
		position: absolute;
		top: 0;
		right: 0;

		width: 16px;
		/* border: solid var(--primary-black-900, #262626); */
		/* border-width: 1px 1px 1px 0; */
	}

	.v-track {
		position: absolute;
		top: 0;
		right: 0;

		width: 100%;
		background: #aaa;
		box-shadow:
			-0.5px 0px 0.5px 0px rgba(255, 255, 255, 0.75) inset,
			1px 1px 1px 0px rgba(38, 38, 38, 0.5) inset;
	}

	.v-thumb {
		position: relative;
		margin: 0 auto; /* center */

		width: 15px;
		border: solid var(--primary-black-900, #262626);
		border-width: 1px 0;
		background: #99f;
		box-shadow:
			-1px -0.5px 0.5px 0px #4c4c99 inset,
			1px 1px 0px 0px rgba(255, 255, 255, 0.3) inset;
	}
</style>
