<script lang="ts">
	export let question: string;
	export let answer: string;
</script>

<div class="max-w-[300px] text-wrap border border-solid border-black p-2">
	<h2 class="pb-2 text-lg font-bold">{question}</h2>
	<p>{answer}</p>
</div>
