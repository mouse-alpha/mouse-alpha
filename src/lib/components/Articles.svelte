<script lang="ts">
	import ArticleBox from '$lib/components/ArticleBox.svelte';
	import type { Article } from '$lib/types/Article';
	export let articles: Article[];
</script>

<div class="articles">
	{#each articles as article}
		<ArticleBox {article} />
	{/each}
</div>

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
