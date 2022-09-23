<script lang="ts">
	export let size: 'sm' | 'md' | 'lg' = 'sm';
</script>

<div class={`size-${size}`} id="logoText">We Want Web</div>

<style>
	[class^='size-'] {
		font-weight: 300;
		color: #fff;
		animation: flicker 2s infinite alternate;
	}
	.size-sm {
		font-size: 12px;
	}
	.size-md {
		font-size: 20px;
	}
	.size-lg {
		font-size: 22px;
	}
	div {
		display: flex;
	}

	@keyframes flicker {
		0%,
		18%,
		22%,
		25%,
		53%,
		57%,
		100% {
			text-shadow: 0 0 5px var(--accent), 0 0 8px var(--accent), 0 0 20px var(--accent),
				0 0 40px var(--accent), 0 0 80px var(--accent), 0 0 90px var(--accent),
				0 0 100px var(--accent), 0 0 150px var(--accent);
		}
		20%,
		24%,
		55% {
			text-shadow: none;
		}
	}
</style>
