<script lang="ts">
	const posts: { img: string; name: string; href: string; tags: string[] }[] = [
		{
			img: '/images/winners/1-rubbish.jpg',
			name: 'Rubbish',
			tags: ['1st Overall'],
			href: 'https://devpost.com/software/rubbish-bx5tai'
		},
		{
			img: '/images/winners/2-atmosphere.jpg',
			name: 'Atmosphere',
			tags: ['2nd Overall'],
			href: 'https://devpost.com/software/atmosphere-jd583o'
		},
		{
			img: '/images/winners/3-mathwiz.jpg',
			name: 'MathWiz',
			tags: ['3rd Overall'],
			href: 'https://devpost.com/software/mathwhiz'
		},
		{
			img: '/images/winners/4-neuralnet.gif',
			name: 'Neural Network Visualizer',
			tags: ['1st - AI Track'],
			href: 'https://devpost.com/software/neural-network-visualizer'
		},
		{
			img: '/images/winners/5-wastewize.jpg',
			name: 'WasteWize',
			tags: ['1st - Env. and Sustainability Track'],
			href: 'https://devpost.com/software/wastewise-d3qivz'
		},
		{
			img: '/images/winners/6-bettergator.gif',
			name: 'Better Gator',
			tags: ['1st - Health Track'],
			href: 'https://devpost.com/software/better-gator-7angv3'
		},
		{
			img: '/images/winners/7-debugdemolition.jpg',
			name: 'Debug Demolition',
			tags: ['1st - Education Track'],
			href: 'https://devpost.com/software/tempdebugbattle'
		},
		{
			img: '/images/winners/8-askaduck.jpg',
			name: 'Ask a Duck!',
			tags: ['1st - Social Good and Human Experience Track', 'Best Beginner Hack'],
			href: 'https://devpost.com/software/ask-a-duck'
		},
		{
			img: '/images/winners/9-prometheus.jpg',
			name: 'Prometheus',
			tags: ['Best Use of Auth0'],
			href: 'https://devpost.com/software/prometheus-rh7oxz'
		},
		{
			img: '/images/winners/10-watchdog.jpg',
			name: 'WatchDog.AI',
			tags: ['Best AI Application Built with Cloudflare'],
			href: 'https://devpost.com/software/watchdog-umt3en'
		},
		{
			img: '/images/winners/11-horus.jpg',
			name: 'Horus',
			tags: ['Best Use of Terraform'],
			href: 'https://devpost.com/software/horus-r1cjsw'
		},
		{
			img: '/images/winners/12-swamped.jpg',
			name: 'Swamped',
			tags: ['Best Domain Name from GoDaddy Registry'],
			href: 'https://devpost.com/software/swamped'
		},
		{
			img: '/images/winners/13-waye.jpg',
			name: 'WAYE - What Are You Eating?',
			tags: ['Best Use of Gen AI'],
			href: 'https://devpost.com/software/waye-what-are-you-eating'
		}
	];
</script>

<section class="sm:px-8 max-w-8xl mx-auto w-full px-6">
	<div class="max-w mt-16">
		<h3
			class="title-text mb-8 text-center text-4xl font-semibold menu-sm:text-4xl menu-md:text-6xl"
		>
			Awarded Projects
		</h3>
		<p class="title-text mb-8 text-center text-3xl">Congratulations to our winners!</p>
		<div class="flex flex-row flex-wrap justify-center gap-12">
			{#each posts as post}
				<div>
					<div class="relative justify-self-center overflow-hidden">
						<a href={post.href} target="_blank" rel="noopener noreferrer" class="group">
							<div class="absolute inset-x-0 bottom-0 z-10">
								<p class="title-text p-2 text-2xl font-bold text-white">{post.name}</p>
							</div>
							<img
								src={post.img}
								alt={post.name}
								class="pointer-events-none h-52 w-72 transform select-none rounded-lg bg-white object-cover shadow-lg duration-100 ease-in group-hover:scale-110 menu-lg:h-52 menu-lg:w-72"
							/>
							<div
								class="to-none absolute inset-x-0 bottom-0 h-20 rounded-b bg-opacity-60 bg-gradient-to-t from-black"
							></div>
						</a>
					</div>
					<div class="mt-1 flex w-72 flex-row flex-wrap gap-2 menu-lg:w-72">
						{#each post.tags as tag}
							<span
								class="title-text w-auto text-ellipsis rounded border-4 border-solid border-black bg-black text-lg font-bold text-white"
								title={tag}>{tag}</span
							>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
	<div class="sm:px-8 mx-auto w-full max-w-7xl px-6">
		<p class="title-text mt-12 text-center text-xl text-gray-700 menu-sm:text-2xl">
			<a
				class="link-text text-lg text-blue-600 underline underline-offset-4 menu-md:text-lg menu-lg:text-2xl menu-3xl:text-3xl"
				href="https://swamphacksx.devpost.com/project-gallery"
				target="_blank"
				rel="noopener noreferrer"
			>
				See more projects
			</a>
		</p>
	</div>
</section>
