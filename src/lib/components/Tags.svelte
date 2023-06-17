<script lang="ts">
	export let tags: string[];
</script>

<div class="tags">
	<b>You can find articles about :</b>
	{#each tags as tag, index}
		<a class="margin" href="/tag/{tag}">
			#{tag}
		</a>{#if index != tags.length - 1},{/if}
	{/each}
	<span class="margin">and</span>
	<a class="margin" href="/tag">more</a>
	<span>...<span /></span>
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
	}

	.margin {
		margin-left: 8px;
	}
</style>
