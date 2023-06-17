import { json } from '@sveltejs/kit';
import { fetchMarkdownArticles } from '$lib/services/articleService';

export const GET = async ({ params }) => {
	const allPosts = await fetchMarkdownArticles();
	const filterdPosts = allPosts.filter((post) => {
		const tags = post.tags.map((x) => {
			return x.toUpperCase();
		});
		return tags.includes(params.tag.toUpperCase());
	});
	const sortedPosts = filterdPosts.sort((a, b) => {
		return b.publishDate.getDate() - a.publishDate.getDate();
	});
	return json(sortedPosts);
};
