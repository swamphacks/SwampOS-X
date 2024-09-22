<script lang="ts">
	import Button from '$lib/components/button/Button.svelte';

	export let onClick: () => unknown = () => {};
	export let hidden = false;
</script>

<Button
	src={{
		default: '/assets/title_bar/atoms/collapse_box/default.png',
		active: '/assets/title_bar/atoms/collapse_box/active.png'
	}}
	{onClick}
	opaque={hidden}
	alt="Collapse"
/>
