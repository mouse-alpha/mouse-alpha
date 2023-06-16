export const prerender = true;

export const load = async ({ fetch }) => {
	const response = await fetch(`/api/article`);
	const articles :Article[]= await response.json();
	return {
		articles
	};
};
