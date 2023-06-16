import type { Article } from '$lib/types/Article';
const PATH = '/static/articles/';

export const fetchMarkdownArticles = async () => {
	/* @vite-ignore */
	const allPostFiles = import.meta.glob(`/static/articles/*.md`);
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			console.log(path);
			const postPath = path.replace(PATH, '').replace('.md', '');
			const article: Article = {
				title: metadata.title,
				description: metadata.description,
				publishDate: new Date(metadata.publishDate),
				tags: metadata.tags
			};

			return {
				// meta: metadata,
				article: article,
				path: postPath
			};
		})
	);
	return allPosts;
};

export const fetchMarkdownATopTags = async () => {
	/* @vite-ignore */
	const allPostFiles = import.meta.glob(`/static/articles/*.md`);
	const iterablePostFiles = Object.entries(allPostFiles);

	const tags = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			return metadata.tags;
		})
	);
	const topTags = getTopRepeatedElements(tags.flat(), 7);
	return topTags;
};

export const fetchMarkdownArticle = async (path) => {
	/* @vite-ignore */
	const articleData = await import(`/static/articles/${path}.md`);
	const { title, date } = articleData.metadata;
	const content = articleData.default;

	return {
		content,
		title,
		date
	};
};

function getTopRepeatedElements(list, size) {
	let frequencyMap = {};
	for (let i = 0; i < list.length; i++) {
		let item = list[i];
		if (frequencyMap[item]) {
			frequencyMap[item]++;
		} else {
			frequencyMap[item] = 1;
		}
	}
	let sortedKeys = Object.keys(frequencyMap).sort((a, b) => frequencyMap[b] - frequencyMap[a]);
	let repeatedKeys = sortedKeys.filter((key) => frequencyMap[key] > 0);
	return repeatedKeys.slice(0, size);
}
