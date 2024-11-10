<script lang="ts">
	import {
		activeAppId,
		apps,
		registerApp,
		setActiveApp,
		unregisterApp
	} from '$lib/stores/apps.store';
	import { derived } from 'svelte/store';

	export let name: string;

	export let open: boolean = true;

	export const id = registerApp(name, open);

	const zIndex = derived(apps, ($apps) => $apps.get(id)?.zIndex ?? 0);

	const status = derived(apps, ($apps) => $apps.get(id)?.open ?? false);
</script>

{#if status}
	<slot
		active={$activeAppId === id}
		setActive={() => setActiveApp(id)}
		unregister={() => {
			unregisterApp(id);
			open = false;
		}}
		zIndex={$zIndex}
	/>
{/if}
