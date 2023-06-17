import { json } from '@sveltejs/kit';
import { fetchMarkdownAllTags } from '$lib/services/articleService';

export const GET = async () => {
	const tags = await fetchMarkdownAllTags();
	return json(tags);
};
