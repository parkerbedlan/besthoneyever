<svelte:head>
	<title>Order Honey</title>

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

<h1>We're in it for the honey.</h1>
<div class="flexbox triple picbox">
	<div class="flexitem">
		<picture>
			<source srcset="photos/webp/logo_jar_trippy.webp" type="image/webp" />
			<img alt="Jar of honey" src="photos/logo_jar_trippy.png" height="240" width="180" />
		</picture>
	</div>
	<div class="flexitem">
		<picture>
			<source srcset="photos/webp/thekingdom.webp" type="image/webp" />
			<img alt="Jars of honey" src="photos/thekingdom.jpg" height="240" width="180" />
		</picture>
	</div>
</div>
<div class="banner" style="text-align:center;">
	<h3 style="max-width:100%;">
		Want to order a jar of BJ's Orange Blossum Honey? Enter your email and Beth will contact you
		right away!
	</h3>
	<form method="POST">
		<input
			type="email"
			name="customerEmailAddress"
			class="textform"
			placeholder="Your Email Address"
		/>
		<input type="submit" value="Send" class="submit " />
		<!-- <input type="hidden" name="product" value="honey" /> -->
	</form>
</div>
<div class="flexbox double picbox">
	<div class="flexitem">
		<picture>
			<source srcset="photos/webp/chugjug2.webp" type="image/webp" />
			<img alt="Neal's Chug Jug" src="photos/chugjug2.jpg" width="240" height="240" />
		</picture>
	</div>
	<div class="flexitem">
		<picture>
			<source srcset="photos/webp/science2.webp" type="image/webp" />
			<img alt="Honeycomb" src="photos/science2.jpg" height="240" width="240" />
		</picture>
	</div>
</div>
