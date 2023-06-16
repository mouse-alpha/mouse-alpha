<script lang="ts">
	import '$lib/styles/text.css';
	import type { Article } from '$lib/types/Article';
	export let article: Article;
	const publishDate=new Date(article.publishDate)
</script>

<div class="article">
	<div class="title"><a href="/blog">{article.title}</a></div>
	<div class="publish-date">{publishDate.toDateString()}</div>
	<div class="details">
		{article.description}<a href="/blog">Click here to read more.</a>
	</div>
</div>

<style>
	.article {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 16px;
		max-width: 360px;
	}

	.title a {
		text-decoration: none;
	}

	.details a {
		margin-left: 6px;
		font-size: 12px;
		font-weight: 600;
	}
</style>
