<script lang="ts">
	import { onInterval } from '$lib/utils/onInterval';

	let stings = 9000;
	onInterval(() => (stings += 1), 500);
</script>

<svelte:head>
	<title>BJ's Honey</title>

	<!-- Search Engine -->
	<meta name="description" content="BJ's Florida Honey - The Best Honey Ever" />
	<meta name="image" content="photos/motto_cropped.jpg" />
	<!-- Schema.org for Google -->
	<meta itemprop="description" content="BJ's Florida Honey - The Best Honey Ever" />
	<meta itemprop="image" content="photos/motto_cropped.jpg" />
	<!-- Twitter -->
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:description" content="BJ's Florida Honey - The Best Honey Ever" />
	<!-- Open Graph general (Facebook, Pinterest & Google+) -->
	<meta name="og:description" content="BJ's Florida Honey - The Best Honey Ever" />
	<meta name="og:image" content="photos/motto_cropped.jpg" />
	<meta name="og:url" content="besthoneyever.com" />
	<meta name="og:type" content="website" />
</svelte:head>

<h1 class="item">Honey doesn't grow on trees.</h1>
<div class="respbox double">
	<div class="flexitem picbox">
		<picture>
			<source srcset="photos/webp/motto_cropped.webp" type="image/webp" />
			<img
				alt="How do you know it's pure honey if you don't know the beekeeper?"
				src="photos/motto_cropped.jpg"
				height="388"
				width="378"
			/>
		</picture>
	</div>
	<div class="flexitem picbox">
		<picture>
			<source srcset="photos/webp/nature_bright.webp" type="image/webp" />
			<img alt="The farm" src="photos/nature_bright.jpg" height="388" width="513" />
		</picture>
	</div>
</div>
<div class="respbox">
	<div
		style="display: flex; flex-wrap: wrap; justify-content: center; color: red;text-align:center;"
	>
		<h2 class="respitem" style="margin:0;width:80%;">Times Beth and Jessie have been stung:</h2>
		<h2 id="count" class="respitem" style="margin:0;">{stings}</h2>
	</div>
	<div class="flexitem textbox">
		<h3>We started selling our Orange Blossom Honey in March, and started with 50 hives.</h3>
	</div>
</div>
