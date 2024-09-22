<script lang="ts">
	import Button from '$lib/components/button/Button.svelte';

	export let onClick: () => unknown = () => {};
	export let hide = false;
</script>

<Button
	src={{
		default: '/assets/title_bar/atoms/zoom_box/default.png',
		active: '/assets/title_bar/atoms/zoom_box/active.png'
	}}
	{onClick}
	hidden={hide}
	alt="Zoom"
/>
