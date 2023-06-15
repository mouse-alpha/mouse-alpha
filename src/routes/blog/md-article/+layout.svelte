<script lang="ts">
	import '$lib/styles/style.css';
</script>

<main>
	<slot />
</main>

<style>
    /* main {
        max-width:200px;
    } */
    main :global(p){
        word-wrap: break-word;      
    }

	main :global(pre code) {
        white-space: pre-line;        
		display: flex;
		border: 1px solid;
		padding: 12px;
		border-radius: 12px;
		border-color: var(--secondory-color);
		color: var(--highlight-color);
    }

	main :global(blockquote) {
		margin: 0;
		display: flex;
		padding-left: 24px;
		border-left: 3px dotted var(--highlight-color);
	}

	main :global(img) {
		display: block;
		margin-left: auto;
		margin-right: auto;
		max-width: 300px;
        max-height: 300px;
		padding: 12px;
        border-radius: 12px;
		border: 3px dotted var(--highlight-color);
	}
</style>
