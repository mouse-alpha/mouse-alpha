import type { Article } from '$lib/types/Article.js';

export const prerender = true;

export async function load({ params }) {
	const post = await import(`../../../../static/articles/${params.slug}.md`);
	const article: Article = {
		title: post.metadata.title,
		publishDate: new Date(post.metadata.publishDate),
		tags: post.metadata.tags,
		content: post.default
	};
	return { article };
}
