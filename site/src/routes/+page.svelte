<script lang="ts">
	import { onMount } from 'svelte';

	let isDarkMode = false;
	onMount(() => {
		isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
		setDarkMode(isDarkMode);
	});

	function setDarkMode(isDark: boolean) {
		const htmlTag = document.querySelector('html');
		if (isDark) {
			htmlTag?.classList.remove('theme-default');
			htmlTag?.classList.remove('theme-light');
			htmlTag?.classList.add('theme-dark');
		} else {
			htmlTag?.classList.add('theme-default');
			htmlTag?.classList.add('theme-light');
			htmlTag?.classList.remove('theme-dark');
		}
	}

	function toggle() {
		isDarkMode = !isDarkMode;
		setDarkMode(isDarkMode);
	}
</script>

<svelte:head>
	<title>Home | We Want Web LLC</title>
	<meta name="description" content="We Want Web LLC" />
</svelte:head>

<button
	on:click={() => {
		toggle();
	}}>Toggle Theme</button
>
