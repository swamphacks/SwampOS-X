<script lang="ts">
	import { onMount } from 'svelte';

	function currentTime() {
		const now = new Date();
		const hours = now.getHours();
		const minutes = now.getMinutes().toString().padStart(2, '0');
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
	class="flex h-[13px] w-screen items-center border-y border-solid border-b-[#BBBBBB] border-t-[#EEEEEE] bg-[#DDDDDD] pr-[8px] font-chicago text-[4px] min-[410px]:h-[15px] min-[410px]:text-[6px] min-[510px]:h-[20px] min-[510px]:border-y-2 min-[510px]:text-[8px] min-[660px]:h-[30px] min-[660px]:text-[12px]"
>
	<div class="flex items-center">
		<div class="btn-container hover:bg-[#333399]">
			<button class="h-full">
				<img
					draggable="false"
					class="h-[15px] min-[510px]:h-[20px] min-[510px]:w-[30px] min-[660px]:h-[28px] min-[660px]:w-[42px]"
					src="/assets/menu_bar/swamphacks.png"
					alt="SwampHacks"
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
			width="22"
			height="22"
			src="/assets/menu_bar/finder.png"
			alt="Finder"
			class="mr-[3px] h-[8px] w-[8px] min-[410px]:h-[12px] min-[410px]:w-[12px] min-[510px]:mr-1.5 min-[510px]:h-[16px] min-[510px]:w-[16px] min-[660px]:h-[22px] min-[660px]:w-[22px]"
		/>
		<img
			class="mx-1 mt-[-2px] h-[13px] min-[410px]:mx-1 min-[410px]:h-[14px] min-[510px]:mx-1.5 min-[510px]:h-[18px] min-[660px]:h-[28px]"
			draggable="false"
			src="/assets/menu_bar/resizer.png"
			alt="Menu Bar Resizer"
		/>
		<button>{currTime}</button>
	</div>
</section>
<span class="block h-[1px] w-screen bg-[#262626] min-[510px]:h-[2px]" />

<style lang="postcss">
	.btn-container {
		@apply flex h-[13px] items-center px-1.5 hover:bg-[#333399] min-[410px]:h-[17px] min-[510px]:h-[24px] min-[660px]:h-[34px];
	}
</style>
