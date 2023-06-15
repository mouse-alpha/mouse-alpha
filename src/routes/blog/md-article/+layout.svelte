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
        font-family: 'Comfortaa', serif;

    }

	main :global(pre code) {
        white-space: pre-line;        
		display: flex;
		border: 1px solid;
		padding: 12px;
		border-radius: 12px;
        font-size: 12px;
        letter-spacing: 2px;
		border-color: var(--secondory-color);
		color: var(--highlight-color);
    }

    main :global(code){
        font-family: 'Comfortaa', serif;
    }

	main :global(blockquote) {
		margin: 0;
		display: flex;
    	border-left: 3px dotted var(--highlight-color);

	}

	main :global(blockquote p) {
        padding: 6px;
		padding-left: 24px;
        margin: 0;
        font-family: 'Comfortaa', serif;

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
