<script lang="ts">
	import '$lib/styles/style.css';
	export let data;
</script>

<div class="tags">
	<h1>Here is all tags found</h1>

	{#each Object.entries(data.tags) as [tag, count]}
		<div class="taginfo">
			#<a href="/tag/{tag}">{tag}</a>
			<div class="count">{count}</div>
		</div>
	{/each}
</div>

<style>
	.tags {
		display: flex;
		flex-direction: column;
	}

	.taginfo {
		margin: 6px;
		display: flex;
		align-items: center;
	}

	.count {
		margin-left: 6px;
		font-size: 10px;
		color: var(--primary-color);
		background-color: var(--highlight-color);
		border-radius: 12px;
		height: 24px;
		line-height: 26px;
		width: 24px;
		text-align: center;
	}
</style>
