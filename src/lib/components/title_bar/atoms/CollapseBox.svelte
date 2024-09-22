<script lang="ts">
	import Button from '$lib/components/button/Button.svelte';

	export let onClick: () => unknown = () => {};
	export let hide = false;
</script>

<Button
	src={{
		default: '/assets/title_bar/atoms/collapse_box/default.png',
		active: '/assets/title_bar/atoms/collapse_box/active.png'
	}}
	{onClick}
	hidden={hide}
	alt="Collapse"
/>
