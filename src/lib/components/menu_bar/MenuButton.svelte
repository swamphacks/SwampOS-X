<script lang="ts">
	import { toggleSetting } from '$lib/utils/menu-bar';

	export let name: string;
	export let hoverable: boolean = false;
	export let display: Record<string, boolean>;

	function mouseOver() {
		if (hoverable && !display[name]) {
			display = toggleSetting(name, display);
		}
	}

	function mouseLeave() {
		if (hoverable && display[name]) toggleSetting(name, display);
	}
</script>

<button
	on:click={() => {
		display = toggleSetting(name, display);
		hoverable = display[name];
	}}
	on:mouseover={mouseOver}
	on:focus={mouseOver}
	on:focusout={mouseLeave}
	class:hover={hoverable}
	class:selected={display[name]}
	class="btn-container z-10"
>
	<slot />
</button>

<style lang="postcss">
	.btn-container {
		@apply flex items-center px-1.5 h-[34px];
	}

	.hover {
		@apply hover:bg-menu-blue hover:text-white;
	}

	.selected {
		@apply bg-menu-blue text-white;
	}
</style>
