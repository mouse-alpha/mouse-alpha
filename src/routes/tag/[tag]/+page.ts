export const prerender = true;

export const load = async ({ fetch, params }) => {
	const tag = params.tag;
	const response = await fetch(`/api/article-by-tag/${tag}`);
	const articles = await response.json();
	return {
		tag,
		articles
	};
};
