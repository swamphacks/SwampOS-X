<script lang="ts">
	import {
		activeAppId,
		apps,
		registerApp,
		setActiveApp,
		unregisterApp
	} from '$lib/stores/apps.store';
	import { onMount } from 'svelte';
	import { derived } from 'svelte/store';

	export let name: string;

	export let startOpen: boolean = true;

	export let preferredId: string | null = null;

	export const id = registerApp(name, startOpen, preferredId);

	const zIndex = derived(apps, ($apps) => $apps.get(id)?.zIndex ?? 0);

	const open = derived(apps, ($apps) => $apps.get(id)?.open ?? false);

	onMount(() => {
		console.log('GUD is open = ', $open, startOpen);
	});
</script>

{#if $open}
	<slot
		active={$activeAppId === id}
		setActive={() => setActiveApp(id)}
		unregister={() => {
			unregisterApp(id);
			startOpen = false;
		}}
		zIndex={$zIndex}
	/>
{/if}
