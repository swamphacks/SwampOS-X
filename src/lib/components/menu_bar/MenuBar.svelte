<script lang="ts">
	import { onMount } from 'svelte';

	function currentTime() {
		const now = new Date();
		const hours = now.getHours();
		const minutes = now.getMinutes();
		const half = hours < 12 ? 'AM' : 'PM';

		let hourString;
		if (hours === 0) hourString = '12';
		else if (hours <= 12) hourString = hours.toString();
		else hourString = (hours - 12).toString();

		return `${hourString}:${minutes} ${half}`;
	}

	let currTime: string = currentTime();
	let intervalId: number;

	onMount(() => {
		intervalId = setInterval(() => (currTime = currentTime()), 1000); // Update every second
		return () => clearInterval(intervalId);
	});
</script>

<section
	class="flex h-[30px] w-screen items-center border-y-2 border-solid border-b-[#BBBBBB] border-t-[#EEEEEE] bg-[#DDDDDD] pr-[8px] font-chicago text-[13px] leading-[2]"
>
	<div class="flex items-center">
		<div class="btn-container hover:bg-[#333399]">
			<button class="h-full">
				<img
					draggable="false"
					src="/assets/menu_bar/swamphacks.png"
					alt="SwampHacks"
					height="28"
					width="40"
				/>
			</button>
		</div>

		<div class="btn-container group">
			<button class="h-full group-hover:text-white">Menu 01</button>
		</div>

		<div class="btn-container group">
			<button class="h-full group-hover:text-white">Menu 02</button>
		</div>

		<div class="btn-container group">
			<button class="h-full group-hover:text-white">Menu 03</button>
		</div>

		<div class="btn-container group">
			<button class="h-full group-hover:text-white">Menu 04</button>
		</div>

		<div class="btn-container group">
			<button class="h-full group-hover:text-white">Menu 05</button>
		</div>

		<div class="btn-container group">
			<button class="h-full group-hover:text-white">Menu 06</button>
		</div>
	</div>

	<div class="flex grow flex-row-reverse items-center">
		<h1>Finder</h1>
		<img
			height="22"
			width="38"
			class="px-2"
			draggable="false"
			src="/assets/menu_bar/finder.png"
			alt="Finder"
		/>
		<img
			class="mt-[-2px] h-[28px]"
			draggable="false"
			src="/assets/menu_bar/resizer.png"
			alt="Menu Bar Resizer"
		/>
		<button class="px-2">{currTime}</button>
	</div>
</section>
<span class="block h-[2px] w-screen bg-[#262626]" />

<style lang="postcss">
	.btn-container {
		@apply flex h-[34px] items-center px-1.5 hover:bg-[#333399];
	}
</style>
