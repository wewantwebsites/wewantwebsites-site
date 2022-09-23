<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { darkMode, initDarkMode } from '$lib/util/darkMode';
	import formatPageTitle from '$lib/util/pageTitle';
	import Header from '$lib/components/header/Header.svelte';
	import HeroBanner from '$lib/components/banner/HeroBanner.svelte';

	onMount(() => {
		const isDark = initDarkMode();
		if (isDark) darkMode.setDark();
	});
</script>

<Header />
<HeroBanner title={formatPageTitle($page.routeId ?? 'Home')} />
<main>
	<slot />
	<h1>Dark Mode is currently: {$darkMode ? 'On' : 'Off'}</h1>
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
