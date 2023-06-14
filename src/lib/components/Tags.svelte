<script lang="ts">
	export let tags: string[];
</script>

<div class="tags">
	<b>You can find articles about :</b>
	{#each tags as tag}
		<a href="https://www.google.com/search?q={tag}">#{tag},</a>
	{/each}
	<span>and</span>
	<a href="/">more...</a>
</div>

<style>
	.tags {
		display: flex;
		max-width: 360px;
		flex-wrap: wrap;
		padding-top: 16px;
		align-items: center;
		padding-bottom: 12px;
	}

	.tags * {
		line-height: 18px;
		font-size: 16px;
		margin-top: 6px;
		margin-right: 8px;
	}

	.tags a:hover {
		font-size: 18px;
	}
</style>
