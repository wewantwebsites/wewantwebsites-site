<script lang="ts">
	export let title: string;
</script>

<div>
	<section>
		<h1>
			{title.replaceAll('-', ' ')}
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
</style>
