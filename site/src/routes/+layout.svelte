<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { darkMode, initDarkMode } from '$lib/util/darkMode';
	import Header from '$lib/components/header/Header.svelte';
	import HeroBanner from '$lib/components/banner/HeroBanner.svelte';
	import LightSwitch from '$lib/components/Switch.svelte';

	const HOME_TITLE = 'WWW: The way the internet was supposed to be made';
	let bannerTitle = HOME_TITLE;
	onMount(() => {
		const isDark = initDarkMode();
		if (isDark) darkMode.setDark();
	});

	$: bannerTitle = $page.routeId ? $page.routeId : HOME_TITLE;
</script>

<Header />
<HeroBanner title={bannerTitle} />
<main>
	<slot />
	<div>
		Light Switch:
		<LightSwitch checked={$darkMode} on:toggle={darkMode.toggle} />
	</div>
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
