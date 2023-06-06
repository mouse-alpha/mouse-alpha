<script>
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import '$lib/styles/style.css';
</script>

<div class="container">
	<Header title="Narek Kostanyan's Blog" />
	<main>
		<slot />
	</main>
</div>
<Footer />
