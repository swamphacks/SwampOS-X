<script>
	import Window from '$lib/components/window/Window.svelte';
</script>

<Window name="FAQs">
	<slot slot="icon">
		<img class="disable-blur w-[13px]" src="/assets/folders/help.svg" alt="Help" />
	</slot>

	<div class="px-1" style="width: 350px; height: 200px;">testing</div>
</Window>
