<script lang="ts">
	import type { Article } from '$lib/types/Article';
	export let article: Article;
</script>

<div class="article">
	<div class="title">{article.title}</div>
	<div class="publish-date">{article.publishDate.toDateString()}</div>
	<div class="details">{article.description}<a href="/">Click here to read more.</a></div>
</div>

<style>
	.article {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 16px;
		max-width: 360px;
	}

	.title {
		font-size: 24px;
		font-weight: 500;
	}

	.publish-date {
		font-size: 12px;
		font-weight: 200;
	}

	.details {
		font-size: 18px;
		font-weight: 400;
	}

	a {
		margin-left: 6px;
		font-size: 12px;
		font-weight: 600;
	}
</style>
