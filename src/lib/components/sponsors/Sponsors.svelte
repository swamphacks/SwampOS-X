<script>
	import StandardFrame from '../window/frames/StandardFrame.svelte';
	import Window from '../window/Window.svelte';
	import SponsorImage from './SponsorImage.svelte';
	import { sponsors } from './sponsors';
</script>

<Window name="Sponsors" preferredId="sponsors" startOpen={false}>
	<slot slot="icon">
		<img
			class="w-[13px]"
			draggable="false"
			on:contextmenu={(e) => e.preventDefault()}
			src="/assets/folders/favorites.png"
			alt="Favorites folder icon"
		/>
	</slot>

	<svelte:fragment let:active>
		<!-- Size is set to 0 to allow for text size to determine size of the window -->
		<StandardFrame size={{ w: 0, h: 0 }} {active} infinitelyWide={false}>
			<div
				class="flex flex-col items-center justify-center gap-y-6 px-5 py-5 menu-md:gap-y-10 menu-md:px-20 menu-md:py-10"
			>
				<h1 class="gud-text text-xl menu-md:text-3xl">Sponsored by</h1>
				<div class="flex flex-col gap-y-3 menu-md:gap-y-10">
					{#if sponsors.Tier3}
						<!-- Margin left is hotfix for weird NextEra Logo -->
						<div
							class="ml-4 flex w-full flex-row items-center justify-center menu-md:ml-6 menu-lg:ml-10"
						>
							{#each sponsors.Tier3 as sponsor}
								<SponsorImage
									tier="Tier3"
									icon={sponsor.icon}
									name={sponsor.name}
									url={sponsor.url}
								/>
							{/each}
						</div>
					{/if}

					{#if sponsors.Tier2}
						<div class="flex w-full flex-row items-center justify-center">
							{#each sponsors.Tier2 as sponsor}
								<SponsorImage
									tier="Tier2"
									icon={sponsor.icon}
									name={sponsor.name}
									url={sponsor.url}
								/>
							{/each}
						</div>
					{/if}

					{#if sponsors.Tier1}
						<div class="flex w-full flex-row items-center justify-center">
							{#each sponsors.Tier1 as sponsor}
								<SponsorImage
									tier="Tier1"
									icon={sponsor.icon}
									name={sponsor.name}
									url={sponsor.url}
								/>
							{/each}
						</div>
					{/if}

					{#if sponsors.Food}
						<div class="flex w-full flex-row items-center justify-center gap-x-5 menu-md:gap-x-10">
							{#each sponsors.Food as sponsor}
								<SponsorImage
									tier="Food"
									icon={sponsor.icon}
									name={sponsor.name}
									url={sponsor.url}
								/>
							{/each}
						</div>
					{/if}
				</div>
			</div>
		</StandardFrame>
	</svelte:fragment>
</Window>
