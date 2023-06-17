export const prerender = true;

export const load = async ({ fetch }) => {
	const response = await fetch(`/api/all-tags`);
	const tags = await response.json();
	return {
		tags
	};
};
