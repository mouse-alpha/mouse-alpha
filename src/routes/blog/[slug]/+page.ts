export const prerender = true;

export async function load({ params }) {
	const post = await import(`../../../../static/articles/${params.slug}.md`);
	const { title } = post.metadata;
	const content = post.default;

	return {
		content,
		title
	};
}
