export const load = async ({ fetch }) => {
	const response = await fetch(`/api/article`);
	const articles = await response.json();

	return {
		articles
	};
};
