<script lang="ts">
	import SVGButton from '$lib/components/button/SVGButton.svelte';

	export let onClick: () => unknown = () => {};
	export let hide = false;
</script>

<SVGButton path="/assets/title_bar/atoms/collapse_box" {onClick} hidden={hide} alt="Collapse" />
