<script lang="ts">
	import ArticleBox from '$lib/components/Article.svelte';
	import type { Article } from '$lib/types/Article';
	export let articles: Article[];
</script>

<div class="articles">
	{#each articles as article}
		<ArticleBox {article} />
	{/each}
</div>

<!-- <div class="pagination">
	<a href="/">Previos page</a>|
	<a href="/">1</a>
	<a href="/">2</a>
	<a href="/">...</a>
	<a href="/">12</a>
	<a href="/">13</a> |
	<a href="/">Next page</a>
</div> -->

<style>
	.articles {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
	}

	@media (max-width: 860px) {
		.articles {
			grid-template-columns: 1fr;
		}
	}

	@media (min-width: 860px) and (max-width: 1250px) {
		.articles {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	/* .pagination {
		align-items: center;
		padding: 12px;
		display: flex;
		justify-content: center;
		font-size: 12px;
		font-weight: 600;
		gap: 1rem;
	} */
</style>
