<script lang="ts">
	import Header from '$lib/components/Header.svelte';

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
	const socialLinks = {
		linkedin: 'https://linkedin.com',
		github: 'https://github.com',
		email: 'mail@example.com'
	};
	const ownerName = 'Narek Kostanyan';
</script>

<Header {ownerName} {tags} {socialLinks} />
<div class="content">
	<main>
		<slot />
	</main>
</div>
