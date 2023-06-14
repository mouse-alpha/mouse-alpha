<script lang="ts">
	import '$lib/styles/text.css';
	import type { Article } from '$lib/types/Article';
	export let article: Article;
</script>

<div class="article">
	<div class="title"><a href='/blog/article'>{article.title}</a></div>
	<div class="publish-date">{article.publishDate.toDateString()}</div>
	<div class="details">{article.description}<a href="/blog/article">Click here to read more.</a></div>
</div>

<style>
	.article {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 16px;
		max-width: 360px;
	}

	.details a {
		margin-left: 6px;
		font-size: 12px;
		font-weight: 600;
	}
</style>
