<script>
	/**
	 * @type {string}
	 */
	export let title;
	import HomeIcon from '$lib/icons/home.svelte';
	import RssIcon from '$lib/icons/rss.svelte';
	import '$lib/styles/style.css';
</script>

<header>
	<div class="title" data-testid="title">{title}</div>

	<nav>
		<ul>
			<li>
				<a href="/" data-testid="home-link"><HomeIcon /></a>
			</li>
			<li>
				<a href="/" data-testid="rss-link"><RssIcon /></a>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		padding: 0.2rem;
		color: var(--secondory-color);
		display: flex;
		justify-content: space-between;
		align-items: center;
		text-align: center;
		overflow: hidden;
		border-bottom: 1px solid var(--primary-color);
	}

	header .title {
		font-size: 1.6rem;
		text-align: left;
	}

	ul {
		margin: 0;
		list-style-type: none;
		display: flex;
		gap: 1rem;
		align-items: center;
	}
</style>
