import { json } from '@sveltejs/kit';
import { fetchMarkdownArticles } from '$lib/services/articleService.ts';

export const prerender = true

export const GET = async () => {
	const allPosts = await fetchMarkdownArticles();
	const sortedPosts = allPosts.sort((a, b) => {
		return new Date(b.publishDate) - new Date(a.publishDate);
	});
	return json(sortedPosts);
};
