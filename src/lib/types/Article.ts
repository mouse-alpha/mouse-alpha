export type Article = {
	title: string;
	publishDate: Date;
	description: string;
	content?: string;
	tags?: string[];
	path?: string;
};
