<svelte:head>
	<title>Our Photos</title>

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

<h1>Show me the honey!</h1>
<br />
<div class="vid-container">
	<video controls autoplay muted width="60%">
		<source src="honey_broll.mov" type="video/mp4" />
	</video>
</div>
<div class="photorow">
	<div class="photocol">
		<picture>
			<source srcset="photos/webp/jar.webp" type="image/webp" />
			<img alt="" src="photos/jar.jpg" loading="eager" />
		</picture>
		<picture>
			<source srcset="photos/webp/thekingdom.webp" type="image/webp" />
			<img alt="" src="photos/thekingdom.jpg" />
		</picture>
		<picture>
			<source srcset="photos/webp/logo_flag.webp" type="image/webp" />
			<img alt="" src="photos/logo_flag.jpg" />
		</picture>
		<picture>
			<source srcset="photos/webp/point.webp" type="image/webp" />
			<img alt="" src="photos/point.jpg" />
		</picture>
	</div>
	<div class="photocol">
		<picture>
			<source srcset="photos/webp/science.webp" type="image/webp" />
			<img alt="" src="photos/science.jpg" loading="eager" />
		</picture>
		<picture>
			<source srcset="photos/webp/paintings.webp" type="image/webp" />
			<img alt="" src="photos/paintings.jpg" />
		</picture>
		<picture>
			<source srcset="photos/webp/lookma.webp" type="image/webp" />
			<img alt="" src="photos/lookma.jpg" />
		</picture>
		<picture>
			<source srcset="photos/webp/motto_cropped.webp" type="image/webp" />
			<img alt="" src="photos/motto_cropped.jpg" />
		</picture>
		<picture>
			<source srcset="photos/webp/lipbalm_logo.webp" type="image/webp" />
			<img alt="" src="photos/lipbalm_logo.png" />
		</picture>
	</div>
	<div class="photocol">
		<picture>
			<source srcset="photos/webp/logo_jar.webp" type="image/webp" />
			<img alt="" src="photos/logo_jar.jpg" />
		</picture>
		<picture>
			<source srcset="photos/webp/logo_jar_trippy.webp" type="image/webp" />
			<img alt="" src="photos/logo_jar_trippy.png" />
		</picture>
		<picture>
			<source srcset="photos/webp/nature_bright.webp" type="image/webp" />
			<img alt="" src="photos/nature_bright.jpg" />
		</picture>
		<picture>
			<source srcset="photos/webp/stingray.webp" type="image/webp" />
			<img alt="" src="photos/stingray.jpeg" />
		</picture>
		<picture>
			<source srcset="photos/webp/chugjug.webp" type="image/webp" />
			<img alt="" src="photos/chugjug.jpg" />
		</picture>
	</div>
</div>
