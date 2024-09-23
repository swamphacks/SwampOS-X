<script lang="ts">
	import type { ControlStripAppInfo } from '$lib/utils/control-strip';
	import Button from '../button/Button.svelte';

	export let app: ControlStripAppInfo;
	export let hidden: boolean = false;
</script>

<Button
	src={{
		default: '/assets/control_strip/controls/default/app.png',
		active: '/assets/control_strip/controls/active/app.png'
	}}
	onClick={() => app.url && window.open(app.url, '_blank')}
	class="ml-[-1px]"
	alt={app.name}
	{hidden}
>
	<svelte:fragment let:isActive>
		<div
			class:mt-[1px]={isActive}
			class:ml-[1px]={isActive}
			class="absolute top-0 flex h-[26px] w-[24px] items-center justify-center"
		>
			<img
				src={`/assets/control_strip/app_icons/${app.src}`}
				class=" h-[16px] w-[16px]"
				draggable="false"
				alt={app.name}
			/>
		</div>
	</svelte:fragment>
</Button>
