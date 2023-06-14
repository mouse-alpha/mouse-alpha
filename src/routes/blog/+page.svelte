<script lang="ts">
	import ArticlesBox from '$lib/components/Articles.svelte';
	import type { Article } from '$lib/types/Article';

	let article: Article = {
		title: 'My FIrst Blog Post',
		publishDate: new Date(2013, 11, 17),
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut' +
			'labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco' +
			'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in' +
			'voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat' +
			'non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
	};
	const articles: Article[] = Array(12).fill(article);
</script>

<ArticlesBox {articles} />
