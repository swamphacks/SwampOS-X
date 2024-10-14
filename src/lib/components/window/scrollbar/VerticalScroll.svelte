<script lang="ts">
	import Button from '$lib/components/button/Button.svelte';
	import { draggable } from '@neodrag/svelte';

	let bounding: HTMLDivElement;
</script>

<div class="flex w-[16px] flex-col">
	<div class="mb-[-1px] flex-grow border-[1px] border-primary-black bg-emerald">
		<div bind:this={bounding} class="h-full">
			<div
				class="w-full bg-copper"
				style="height: 80px;"
				use:draggable={{
					axis: 'y',
					bounds: 'parent',
					onDrag: ({ offsetY }) =>
						console.log({
							offsetY,
							Y: bounding.clientHeight,
							percent: offsetY / (bounding.clientHeight - 80)
						})
				}}
			></div>
		</div>
	</div>

	<div class="flex flex-col">
		<Button
			class=" mb-[-1px]"
			src={{
				default: '/assets/navigation/up/default.png',
				active: '/assets/navigation/up/active.png',
				disabled: '/assets/navigation/up/disabled.png'
			}}
		/>
		<Button
			src={{
				default: '/assets/navigation/down/default.png',
				active: '/assets/navigation/down/active.png',
				disabled: '/assets/navigation/down/disabled.png'
			}}
		/>
	</div>
</div>
