<script lang="ts">
	type Tiers = 'Tier1' | 'Tier2' | 'Tier3' | 'Food';

	export let icon: string;
	export let name: string;
	export let url: string;

	export let tier: Tiers;

	const size = {
		Tier1: 'h-24',
		Tier2: 'h-26',
		Tier3: 'h-44',
		Food: 'h-16'
	}[tier];
</script>

<a href={url} target="_blank">
	<img class={`${size}`} src={icon} alt={name} />
</a>
