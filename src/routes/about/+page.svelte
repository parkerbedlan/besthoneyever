<script>
	import { onInterval } from '$lib/utils/onInterval';

	let stings = 9000;
	onInterval(() => (stings += 1), 1000);
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div>
	<h1>
		{stings}
		{stings === 1 ? 'sting' : 'stings'}
	</h1>
</div>
