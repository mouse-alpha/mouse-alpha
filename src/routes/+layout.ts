export const prerender = true;

export const load = async ({ fetch }) => {
	const response = await fetch(`/api/tag`);
	const tags: string[] = await response.json();
	return {
		tags
	};
};
