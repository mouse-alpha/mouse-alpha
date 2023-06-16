import { json } from '@sveltejs/kit';
import { fetchMarkdownArticles } from '$lib/services/articleService.ts';

export const GET = async () => {
	const allPosts = await fetchMarkdownArticles();
	const sortedPosts = allPosts.sort((a, b) => {
		return new Date(b.article.publishDate) - new Date(a.article.publishDate);
	});
	return json(sortedPosts);
};
