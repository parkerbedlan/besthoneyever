<svelte:head
	><title>Order Face Scrub</title>

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

<h1>Scrub for the dub.</h1>
<div class="banner" style="text-align:center;">
	<h3 style="max-width:100%;">
		Want to order some of BJ's cleansing honey scrub? Enter your email and Beth will contact you
		right away!
	</h3>
	<form action="email_add.php" method="POST">
		<input type="email" name="emailaddress" class="textform" placeholder="Your Email Address" />
		<input type="submit" value="Send" class="submit " />
		<input type="hidden" name="product" value="facescrub" />
	</form>
</div>
<div class="flexbox triple picbox">
	<div class="flexitem">
		<picture>
			<source srcset="photos/webp/scrub_closeup.webp" type="image/webp" />
			<img alt="Facial Scrub Close-up" src="photos/scrub_closeup.jpg" height="240" width="240" />
		</picture>
	</div>
	<div class="flexitem">
		<picture>
			<source srcset="photos/webp/scrubs.webp" type="image/webp" />
			<img alt="Facial Scrub Containers" src="photos/scrubs.jpg" height="240" width="438" />
		</picture>
	</div>
	<!-- <div class="flexitem">
				<picture>
					<source srcset="photos/webp/point.webp" type="image/webp">
					<img alt="Jar of honey" src="photos/point.jpg" height="240" width="180"/>
				</picture>
			</div> -->
</div>
