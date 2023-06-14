<script lang="ts">
	import Tags from './Tags.svelte';
	import Navigation from './Navigation.svelte';
	import type { SocialLinks } from '$lib/types/SocialLinks';

	export let ownerName: string;
	export let tags: string[];
	export let socialLinks: SocialLinks = {};
</script>

<div class="header">
	<div class="blog-title">Welcome to<br /> {ownerName}'s <br />Blog</div>
	<Navigation {socialLinks} />
	<Tags {tags} />
</div>

<style>
	.header {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		min-height: 50vh;
	}

	.blog-title {
		font-style: normal;
		font-weight: 500;
		font-size: 36px;
		padding-bottom: 10px;
	}
</style>
