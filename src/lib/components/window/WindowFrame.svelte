<script lang="ts">
	type Size = { w: number; h: number };
	export let size: Size;
</script>

<div
	style="min-width: {size.w}px; min-height: {size.h}px"
	class="flex-grow border-[1px] border-primary-black bg-primary-white"
>
	<slot />
</div>
