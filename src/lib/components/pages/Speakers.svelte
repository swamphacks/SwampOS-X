<script>
	import StandardFrame from '../window/frames/StandardFrame.svelte';
	import Window from '../window/Window.svelte';

	let stage = 1; // Use this to track the active tab
</script>

<Window name="Speakers" preferredId="speakers">
	<slot slot="icon">
		<img
			class="w-[13px]"
			draggable="false"
			on:contextmenu={(e) => e.preventDefault()}
			src="/assets/desktop/speakers.png"
			alt="Globe icon"
		/>
	</slot>

	<svelte:fragment let:active>
		<StandardFrame size={{ w: 0, h: 0 }} {active} infinitelyWide={false}>
			<div
				class="relative flex h-[250px] w-[350px] flex-col items-center justify-center menu-sm:h-[300px] menu-sm:w-[400px] menu-md:h-[380px] menu-md:w-[550px] menu-xl:h-[500px] menu-xl:w-[700px]"
			>
				<div
					class="relative flex h-[70%] w-[80%] items-center justify-center border border-black shadow-md"
					style="background-color: #f9cdcb;"
				>
					<!-- Tab 1 -->
					<button
						on:click={() => (stage = 1)}
						class="absolute left-[-1px] top-[-26px] flex h-[30px] items-center justify-center"
					>
						<img
							alt="tab 1"
							src={stage === 1 ? '/assets/tabs/Tab.png' : '/assets/tabs/inactiveTab.png'}
						/>
						<div
							class="absolute flex h-[50%] w-[60%] items-center justify-center"
							style={`background-color: ${stage === 1 ? '#f9cdcb' : '#CCCCCC'}`}
						>
							<p class="text-sm">???</p>
						</div>
					</button>

					<!-- Tab 2 -->
					<button
						on:click={() => (stage = 2)}
						class="absolute left-[59px] top-[-26px] flex h-[30px] items-center justify-center"
					>
						<img
							alt="tab 2"
							src={stage === 2 ? '/assets/tabs/Tab.png' : '/assets/tabs/inactiveTab.png'}
						/>
						<div
							class="absolute flex h-[50%] w-[60%] items-center justify-center"
							style={`background-color: ${stage === 2 ? '#f9cdcb' : '#CCCCCC'}`}
						>
							<p class="text-sm">???</p>
						</div>
					</button>

					<!-- Tab 3 -->
					<button
						on:click={() => (stage = 3)}
						class="absolute left-[119px] top-[-26px] flex h-[30px] items-center justify-center"
					>
						<img
							alt="tab 3"
							src={stage === 3 ? '/assets/tabs/Tab.png' : '/assets/tabs/inactiveTab.png'}
						/>
						<div
							class="absolute flex h-[50%] w-[60%] items-center justify-center"
							style={`background-color: ${stage === 3 ? '#f9cdcb' : '#CCCCCC'}`}
						>
							<p class="text-sm">???</p>
						</div>
					</button>

					<!-- Content -->

					{#if stage === 1}
						<div class="flex h-[90%] w-[90%] flex-row items-center justify-center">
							<div class="flex h-full flex-1 items-center justify-center">
								<img class="h-[80%]" alt="Mystery Speaker 1" src="/assets/speakers/pixel1.png" />
							</div>
							<div class="flex h-[80%] flex-1 flex-col items-center justify-center">
								<div class="flex h-[30%] w-full items-center">
									<h1 class="speaker-text text-xl">Coming soon...</h1>
								</div>
								<div class="h-[70%] w-full">
									<p class="speaker-text text-xs">
										A tech entrepreneur who founded companies in robotics and aviation,
										revolutionizing transportation and automation. His most recent venture has
										gained over a $<span class="font-bold underline">[REDACTED]</span> valuation.
									</p>
								</div>
							</div>
						</div>
					{:else if stage === 2}
						<div class="flex h-[90%] w-[90%] flex-row items-center justify-center">
							<div class="flex h-full flex-1 items-center justify-center">
								<img
									class="h-[80%] w-[85%]"
									alt="Mystery Speaker 1"
									src="/assets/speakers/pixel2.png"
								/>
							</div>
							<div class="flex h-[80%] flex-1 flex-col items-center justify-center">
								<div class="flex h-[30%] w-full items-center">
									<h1 class="speaker-text text-xl">Coming soon...</h1>
								</div>
								<div class="h-[70%] w-full">
									<p class="speaker-text text-xs">
										A visionary leader who co-founded a major tech company, pioneering
										groundbreaking consumer devices. Known for his relentless drive for innovation,
										design, and reshaping entire industries.
									</p>
								</div>
							</div>
						</div>
					{:else if stage === 3}
						<div class="flex h-[90%] w-[90%] flex-row">
							<div class="flex h-full flex-1 items-center justify-center">
								<img class="h-[80%]" alt="Mystery Speaker 1" src="/assets/speakers/pixel1.png" />
							</div>
							<div class="flex h-full flex-1 flex-col items-center justify-center">
								<p class="speaker-text w-[80%] text-xs">
									A tech entrepreneur who founded companies in robotics and aviation,
									revolutionizing transportation and automation. Known for launching startups that
									achieved significant financial success.
								</p>
							</div>
						</div>
					{/if}
				</div>
			</div>
		</StandardFrame>
	</svelte:fragment>
</Window>
