<script lang="ts">
	export let path: string;
	export let alt: string = 'Button';
	export let onClick: () => unknown = () => {};
	export let hidden = false;

	let isActive = false;
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<img
	class:opacity-0={hidden}
	src="{path}/{isActive ? 'active' : 'default'}.svg"
	on:mousedown={() => {
		isActive = true;
	}}
	on:mouseup={() => {
		if (!hidden && onClick) onClick();
		isActive = false;
	}}
	{alt}
/>
