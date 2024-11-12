<script lang="ts">
	import type { Size } from '$lib/utils/windows';

	export let size: Size;
	export let active: boolean;
	export let infinitelyWide: boolean = false;
	export let maxSize: Size | null = null;
</script>

<div
	class:active-frame={active}
	class:nonactive-frame={!active}
	class:border-opacity-40={!active}
	class:whitespace-nowrap={infinitelyWide}
	class="h-full w-full overflow-scroll border-[1px] border-primary-black bg-gray-200"
	style="min-width: {size.w}px; min-height: {size.h}px"
	style:max-width={maxSize?.w ? `${maxSize.w}px` : 'none'}
	style:max-height={maxSize?.h ? `${maxSize.h}px` : 'none'}
>
	<slot />
</div>
