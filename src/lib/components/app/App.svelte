<script lang="ts">
	import {
		activeAppId,
		apps,
		registerApp,
		setActiveApp,
		unregisterApp
	} from '$lib/stores/apps.store';
	import { onDestroy } from 'svelte';
	import { derived } from 'svelte/store';

	export let name: string;

	export let open: boolean = true;

	export let preferredId: string | null = null;

	export const id = registerApp(name, open, preferredId);

	const zIndex = derived(apps, ($apps) => $apps.get(id)?.zIndex ?? 0);

	$: {
		const unsubscribe = derived(apps, ($apps) => $apps.get(id)?.open ?? open).subscribe((value) => {
			open = value;
		});

		onDestroy(unsubscribe);
	}
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
