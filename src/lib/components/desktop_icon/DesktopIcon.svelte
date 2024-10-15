<script lang="ts">
	import { draggable } from '@neodrag/svelte';
</script>

<!-- 27 words max for title -->

<div
	use:draggable={{
		defaultPosition: { x: 0, y: 0 },
		grid: [10, 10],
		bounds: 'body'
	}}
	class=" flex h-[70px] w-[70px] flex-col items-center justify-center bg-bondi"
>
	<img
		draggable="false"
		src="/assets/applications/microsoft_internet_explorer.png"
		alt="Icon"
		class="h-[65%]"
	/>
	<div class="flex grow items-center justify-center bg-primary-white opacity-50">
		<p class="text-md sticky-text whitespace-nowrap text-center font-chicago">Internet Explorer</p>
	</div>
</div>
