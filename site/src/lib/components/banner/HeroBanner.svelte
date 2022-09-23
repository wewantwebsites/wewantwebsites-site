<script lang="ts">
	import { page } from '$app/stores';
	const HOME_TITLE = 'The way the internet was supposed to be made';
</script>

<div>
	<section>
		<h1>
			{#if $page.routeId}
				{$page.routeId.replaceAll('-', ' ')}
			{:else}
				<span>WWW:</span> {HOME_TITLE}
			{/if}
		</h1>
	</section>
</div>

<style>
	div {
		width: '100%';
		min-height: '200px';
		background-color: var(--accent);
		color: var(--bg);
	}
	section {
		padding: 1rem;
	}
	h1 {
		text-transform: capitalize;
	}

	span {
		font-weight: 900;
	}
</style>
