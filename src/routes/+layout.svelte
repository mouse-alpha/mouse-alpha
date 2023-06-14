<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import dotenv from 'dotenv';

	import '$lib/styles/style.css';

	const tags = [
		'golang',
		'testing',
		'playwright',
		'typescript',
		'python',
		'photo',
		'animals',
		'aquascapes'
	];
	dotenv.config();

	const socialLinks = {
		linkedin: process.env.LINKEDIN,
		github: process.env.GITHUB,
		email: process.env.EMAIL,
	};
	const ownerName = 'Narek Kostanyan';
</script>

<Header {ownerName} {tags} {socialLinks} />
<div class="content">
	<main>
		<slot />
	</main>
</div>
