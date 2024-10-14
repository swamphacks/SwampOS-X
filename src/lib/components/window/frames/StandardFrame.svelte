<script lang="ts">
	import type { Size } from '$lib/utils/windows';

	export let size: Size;
	export let active: boolean;
	export let infinitelyWide: boolean = false;
</script>

<div
	class:active-frame={active}
	class:nonactive-frame={!active}
	class:border-opacity-40={!active}
	class:whitespace-nowrap={infinitelyWide}
	class="h-full w-full overflow-scroll border-[1px] border-primary-black bg-primary-white"
	style="min-width: {size.w}px; min-height: {size.h}px"
>
	<slot />
</div>
