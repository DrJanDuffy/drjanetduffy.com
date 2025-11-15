<script lang="ts">
	export let title: string;
	export let description: string;
	export let keywords: string = '';
	export let canonical: string = '';
	export let ogImage: string = '';
	export let ogType: string = 'website';
	export let schema: any = null;

	// Default values
	const defaultTitle = 'Dr. Janet Duffy, REALTOR® | Luxury Las Vegas Real Estate Expert';
	const defaultDescription = 'Dr. Janet Duffy, licensed REALTOR® specializing in luxury Las Vegas real estate. Expert guidance for buying, selling, and investing in West Summerlin, The Ridges, and premier Las Vegas communities.';
	const defaultKeywords = 'Las Vegas real estate, luxury homes Las Vegas, West Summerlin realtor, Dr. Janet Duffy, Las Vegas homes for sale';
	const defaultImage = 'https://drjanetduffy.com/images/dr-janet-duffy-realtor.jpg';

	// Use provided values or defaults
	const pageTitle = title || defaultTitle;
	const pageDescription = description || defaultDescription;
	const pageKeywords = keywords || defaultKeywords;
	const pageImage = ogImage || defaultImage;

	// Default structured data
	const defaultSchema = {
		'@context': 'https://schema.org',
		'@type': 'RealEstateAgent',
		name: 'Dr. Janet Duffy',
		description: 'Licensed REALTOR® specializing in luxury Las Vegas real estate',
		url: 'https://drjanetduffy.com',
		telephone: '(702) 555-1234',
		email: 'contact@drjanetduffy.com',
		address: {
			'@type': 'PostalAddress',
			addressLocality: 'Las Vegas',
			addressRegion: 'NV',
			addressCountry: 'US'
		},
		geo: {
			'@type': 'GeoCoordinates',
			latitude: '36.1699',
			longitude: '-115.1398'
		}
	};

	const structuredData = schema || defaultSchema;
</script>

<svelte:head>
	<!-- Basic Meta Tags -->
	<title>{pageTitle}</title>
	<meta name="description" content={pageDescription} />
	{#if pageKeywords}
		<meta name="keywords" content={pageKeywords} />
	{/if}

	<!-- Canonical URL -->
	{#if canonical}
		<link rel="canonical" href={canonical} />
	{/if}

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content={ogType} />
	<meta property="og:title" content={pageTitle} />
	<meta property="og:description" content={pageDescription} />
	{#if canonical}
		<meta property="og:url" content={canonical} />
	{/if}
	<meta property="og:image" content={pageImage} />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:title" content={pageTitle} />
	<meta property="twitter:description" content={pageDescription} />
	<meta property="twitter:image" content={pageImage} />
	{#if canonical}
		<meta property="twitter:url" content={canonical} />
	{/if}

	<!-- Structured Data / Schema.org -->
	{#if structuredData}
		{@html `<script type="application/ld+json">${JSON.stringify(structuredData)}</script>`}
	{/if}

	<!-- Additional SEO -->
	<meta name="robots" content="index, follow" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="author" content="Dr. Janet Duffy" />
</svelte:head>
