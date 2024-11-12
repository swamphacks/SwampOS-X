<script lang="ts">
	import type { Size } from '$lib/utils/windows';

	export let size: Size;
	export let active: boolean;
	export let infinitelyWide: boolean = false;
	export let maxSize: Size | null = null;
	export let color: string = '';
</script>

<div
	class:active-frame={active}
	class:nonactive-frame={!active}
	class:border-opacity-40={!active}
	class:whitespace-nowrap={infinitelyWide}
	class="h-full w-full overflow-scroll border-[1px] border-primary-black"
	style="min-width: {size.w}px; min-height: {size.h}px; {color
		? `background-color: ${color}`
		: 'background-color: white'}"
	style:max-width={maxSize?.w ? `${maxSize.w}px` : 'none'}
	style:max-height={maxSize?.h ? `${maxSize.h}px` : 'none'}
>
	<slot />
</div>
