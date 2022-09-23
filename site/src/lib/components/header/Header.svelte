<script lang="ts">
	import { darkMode } from '$lib/util/darkMode';
	import { page } from '$app/stores';
	import Logo from '../Logo.svelte';
	import LightSwitch from '$lib/components/Switch.svelte';

	const routes = [
		{
			label: 'Home',
			target: '/'
		},
		{
			label: 'About',
			target: '/about'
		},
		// {
		// 	label: 'Services',
		// 	target: '/services'
		// },
		{
			label: 'Contact',
			target: '/contact-us'
		}
	];
</script>

<header>
	<nav data-sveltekit-prefetch>
		<ul>
			<li>
				<a id="logoNavRoute" href="/">
					{#if $darkMode}
						<Logo size="sm" />
					{:else}
						<img id="logo" width="100" src="/logo.png" alt="We Want Web Logo" />
					{/if}
				</a>
			</li>
			{#each routes as { label, target }}
				<li class:active={$page.url.pathname === target}><a href={target}>{label}</a></li>
			{/each}
		</ul>
	</nav>
</header>

<style>
	header {
		display: grid;
	}

	nav {
		display: flex;
		justify-content: center;
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--bg);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li.active::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--accent);
	}

	nav a {
		position: relative;
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--accent);
	}
	a:not(#logoNavRoute):hover::before {
		content: '';
		height: 3px;
		width: calc(100% - 25px);
		background: var(--accent);
		position: absolute;
		bottom: 10px;
	}
</style>
