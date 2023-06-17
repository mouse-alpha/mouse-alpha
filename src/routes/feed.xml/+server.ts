import { fetchMarkdownArticles } from '$lib/services/articleService';
import { setContext } from '@sveltejs/kit';

import dotenv from 'dotenv';
dotenv.config();

const siteURL = process.env.BASE_URL;
const siteTitle = process.env.TITLE;
const siteDescription = process.env.DESCRIPTION;

export const prerender = true;

export const GET = async () => {
	const allPosts = await fetchMarkdownArticles();
	const sortedPosts = allPosts.sort((a, b) => {
		return b.publishDate.getDate() - a.publishDate.getDate();
	});

	const body = render(sortedPosts);
	const options = {
		headers: {
			'Cache-Control': 'max-age=0, s-maxage=3600',
			'Content-Type': 'application/xml'
		}
	};

	return new Response(body, options);
};

const render = (posts) => `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>${siteTitle}</title>
<description>${siteDescription}</description>
<link>${siteURL}</link>
<atom:link href="${siteURL}/rss.xml" rel="self" type="application/xml"/>
${posts
	.map(
		(post) => `<item>
<guid isPermaLink="true">${siteURL}/blog/${post.path}</guid>
<title>${post.title}</title>
<link>${siteURL}/blog/${post.path}</link>
<description>${post.description}</description>
<pubDate>${new Date(post.publishDate).toUTCString()}</pubDate>
</item>`
	)
	.join('')}
</channel>
</rss>
`;
