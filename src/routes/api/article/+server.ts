import { json } from '@sveltejs/kit';
import { fetchMarkdownArticles } from '$lib/services/articleService';


export const GET = async () => {
	const allPosts = await fetchMarkdownArticles();
	const sortedPosts = allPosts.sort((a, b) => {
		return b.publishDate.getDate() - a.publishDate.getDate();
	});
	return json(sortedPosts);
};
