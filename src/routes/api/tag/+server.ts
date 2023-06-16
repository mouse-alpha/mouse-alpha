import { json } from '@sveltejs/kit';
import { fetchMarkdownATopTags } from '$lib/services/articleService.ts';

export const prerender = true

export const GET = async () => {
	const tags = await fetchMarkdownATopTags();
	return json(tags);
};
