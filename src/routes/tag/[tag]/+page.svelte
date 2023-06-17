<script lang="ts">
	import ArticlesBox from '$lib/components/Articles.svelte';
	export let data;
	const articles = data.articles;
	const tag = data.tag;
</script>

<h1>Articles with #{tag} tag</h1>
<ArticlesBox {articles} />
