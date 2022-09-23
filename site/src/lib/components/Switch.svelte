<script lang="ts">
	export let checked: boolean;

	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function handleCheck() {
		dispatch('toggle', {
			isChecked: checked
		});
	}
</script>

<label class="switch">
	<input type="checkbox" bind:checked on:change={handleCheck} />
	<span class="slider" />
</label>

<style>
	.switch {
		position: relative;
		display: inline-block;
		width: 50px;
		height: 21px;
	}
	.switch input {
		opacity: 0;
		width: 0;
		height: 0;
	}
	.slider {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #ccc;
		-webkit-transition: 0.4s;
		transition: 0.4s;
		border-radius: 21px;
	}
	.slider::before {
		position: absolute;
		content: '';
		height: 18px;
		width: 18px;
		left: 3px;
		bottom: 1.5px;
		background-color: var(--pure-white);
		-webkit-transition: 4s;
		transition: 0.4s;
		border-radius: 50%;
	}
	input:checked + .slider {
		background-color: var(--accent);
	}
	input:checked + .slider {
		box-shadow: 0 0 1px var(--accent);
	}
	input:checked + .slider::before {
		-webkit-transform: translateX(26px);
		-ms-transform: translateX(26px);
		transform: translateX(26px);
	}
</style>
