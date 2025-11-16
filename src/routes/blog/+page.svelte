<script lang="ts">
	const pageTitle = 'Las Vegas Luxury & Relocation Real Estate Blog | Dr. Janet Duffy';
	const pageDescription =
		'Stay up-to-date with the latest Las Vegas real estate news, market trends, and community insights.';
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={pageDescription} />
	<meta
		name="keywords"
		content="Las Vegas real estate blog, Las Vegas market trends, real estate news, Las Vegas community insights, property market updates"
	/>
	<meta name="robots" content="index, follow" />

	<link rel="canonical" href="https://www.drjanetduffy.com/blog" />

	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.drjanetduffy.com/blog" />
	<meta property="og:title" content={pageTitle} />
	<meta property="og:description" content={pageDescription} />
	<meta property="og:site_name" content="Las Vegas Luxury & Relocation REALTOR" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content="https://www.drjanetduffy.com/blog" />
	<meta name="twitter:title" content={pageTitle} />
  
	<meta name="twitter:description" content={pageDescription} />

	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Blog",
			"name": "Las Vegas Luxury & Relocation Real Estate Blog",
			"description": "Stay up-to-date with Las Vegas luxury and relocation real estate news, market trends, and community insights",
			"url": "https://www.drjanetduffy.com/blog",
			"publisher": {
				"@type": "RealEstateAgent",
				"name": "Dr. Janet Duffy"
			}
		}
	</script>
</svelte:head>

<div class="container mx-auto px-4 py-10 max-w-6xl">
	<h1 class="text-4xl sm:text-5xl font-bold mb-6 text-gray-900">
		Las Vegas Real Estate News & Market Insights
	</h1>
	<p class="text-gray-600 text-lg leading-relaxed max-w-3xl mb-8">
		This blog will soon display curated Las Vegas real estate articles, neighborhood guides, and market
		updates. While we complete the live feed integration, you can still reach out directly for personalized
		insights on Summerlin, Skye Canyon, Henderson, North Las Vegas, and other key communities.
	</p>
	<p class="text-gray-700 leading-relaxed max-w-3xl">
		If you would like recent articles or market briefs sent to you directly, use the contact page to request
		a custom update for your price range and preferred neighborhoods.
	</p>
</div>


