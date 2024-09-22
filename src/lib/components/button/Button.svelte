<script lang="ts">
	interface ButtonImages {
		default: string;
		active?: string;
		disabled?: string;
	}

	export let src: string | ButtonImages;
	export let alt: string = 'Button';
	export let onClick: () => unknown = () => {};
	export let disabled = false;
	export let hidden = false;

	let isActive = false;
	let left = false;

	const set = () => {
			isActive = true;
			left = false;
		},
		reset = () => {
			isActive = false;
			left = false;
		},
		leave = () => {
			isActive = false;
			left = true;
		},
		enter = () => {
			if (left) isActive = true;
			left = false;
		};
</script>

<button
	class:opacity-0={hidden}
	disabled={hidden || disabled}
	on:mousedown={set}
	on:mouseup={reset}
	on:focusout={reset}
	on:mouseleave={leave}
	on:mouseenter={enter}
	on:click={() => {
		// Do after sleeping 0.1s
		isActive = true;
		setTimeout(() => {
			isActive = false;
			if (!hidden && onClick) onClick();
		}, 100);
	}}
	draggable="false"
>
	<img
		draggable="false"
		src={typeof src == 'string'
			? src
			: isActive && src.active
				? src.active
				: disabled && src.disabled
					? src.disabled
					: src.default}
		{alt}
	/>
</button>
