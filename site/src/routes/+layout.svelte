<script lang="ts">
	import { onMount } from 'svelte';
	import { initDarkMode } from '$lib/util/darkMode';
	import Header from '$lib/components/header/Header.svelte';
	import HeroBanner from '$lib/components/banner/HeroBanner.svelte';
	onMount(() => {
		initDarkMode();
	});
</script>

<Header />
<HeroBanner />
<main>
	<slot />
</main>

<footer><a href="/">We Want Web LLC est 2021</a></footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	footer a {
		font-weight: bold;
		color: var(--accent);
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
