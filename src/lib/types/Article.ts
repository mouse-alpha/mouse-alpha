export type Article = {
	title: string;
	publishDate: Date;
	description?: string;
	content?: any;
	tags?: string[];
	path?: string;
};
