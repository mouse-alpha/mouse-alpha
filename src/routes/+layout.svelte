<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import dotenv from 'dotenv';

	import '$lib/styles/style.css';
	export let data;
	dotenv.config();
	const socialLinks = {
		linkedin: process.env.LINKEDIN,
		github: process.env.GITHUB,
		email: process.env.EMAIL
	};
	const ownerName = 'Narek Kostanyan';
</script>

<Header {ownerName} tags={data.tags} {socialLinks} />
<div class="content">
	<main>
		<slot />
	</main>
</div>
