<script>
	import Nav from '../components/Nav.svelte';
  import { media } from 'svelte-match-media'

	export let segment;
</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

{#if $media && $media.desktop}
  <h1>I am on desktop</h1>
{/if}

<Nav {segment}/>

<main>
	<slot></slot>
</main>
