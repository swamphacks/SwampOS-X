<script lang="ts">
	import type { StickyConfig } from '../sticky-colors';

	// export let active;
	export let colorSet: StickyConfig;
	export let onShrink: () => void;

	let clicked = false;

	const handleMouseDown = () => {
		clicked = true;
	};

	const handleMouseUp = () => {
		clicked = false;
		onShrink();
	};

	const handleMouseLeave = () => {
		clicked = false;
	};

	const inner = colorSet.highlight_color_filter;

	$: background = clicked ? colorSet.highlight_color_filter : colorSet.main_color_filter;
</script>

<button
	class="cancel relative z-[1] flex h-[6px] w-[6px] items-center justify-center"
	style="
      border-bottom: 1px solid {colorSet.highlight_color};
      border-right: 1px solid {colorSet.highlight_color};
	"
	on:mousedown={handleMouseDown}
	on:mouseup={handleMouseUp}
	on:mouseleave={handleMouseLeave}
>
	<div
		class="absolute h-full w-full"
		style="
	  background-image: url('/assets/sticky/default.png');
	  background-size: cover; /* Ensures the image fills the entire button */
	  background-repeat: no-repeat; /* Prevents tiling of the image */
	  background-position: center; /* Centers the image within the button */
	  filter: {background};
	"
	></div>

	<div
		class="absolute h-full w-full"
		style="
  background-image: url('/assets/sticky/inner.png');
  background-size: cover; /* Ensures the image fills the entire button */
  background-repeat: no-repeat; /* Prevents tiling of the image */
  background-position: center; /* Centers the image within the button */
  filter: {inner};
"
	></div>
</button>
