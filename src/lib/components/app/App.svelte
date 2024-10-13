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
	export const id = registerApp(name);

	let open: boolean = true;

	const zIndex = derived(apps, ($apps) => $apps.get(id)?.zIndex ?? 0);
</script>

{#if open}
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
