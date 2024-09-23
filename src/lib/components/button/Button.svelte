<script lang="ts">
	interface ButtonImages {
		default: string;
		active?: string;
		disabled?: string;
	}

	export let src: string | ButtonImages;
	export let alt: string = 'Button';
	export let onClick: () => unknown = () => {};
	export let disabled: boolean = false;
	export let opaque: boolean = false;
	export let hidden: boolean = false;

	let isActive = false;

	const set = () => {
			isActive = true;
		},
		reset = () => {
			isActive = false;
		};
</script>

{#if !hidden}
	<button
		class:opacity-0={opaque}
		disabled={opaque || disabled}
		on:mousedown={set}
		on:mouseup={reset}
		on:focusout={reset}
		on:mouseleave={reset}
		on:click={() => {
			// Do after sleeping 0.1s
			isActive = true;
			setTimeout(() => {
				isActive = false;
				if (!opaque && onClick) onClick();
			}, 100);
		}}
		draggable="false"
		{...$$restProps}
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

		<slot {isActive} />
	</button>
{/if}
