<script>
import { onMount } from 'svelte';
import { browser } from '$app/environment';
import { Grid3x3, List, TrendingUp } from 'lucide-svelte';

let mounted = false;

onMount(() => {
  mounted = true;
});

// Canonical URL always points to base /properties page (without query parameters)
// This tells search engines that all query parameter variations are the same page
const canonicalUrl = 'https://www.drjanetduffy.com/properties';
</script>

<svelte:head>
	<title>Las Vegas Homes for Sale | Dr. Janet Duffy REALTOR®</title>
	<meta name="description" content="Browse all available Las Vegas homes for sale. Updated listings from the MLS. Contact Dr. Janet Duffy for showings." />
	<meta name="keywords" content="Las Vegas homes for sale, property listings, MLS, real estate, Dr. Janet Duffy" />
	
	<!-- Canonical URL - always points to base /properties page -->
	<link rel="canonical" href={canonicalUrl} />
	
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.drjanetduffy.com/properties" />
	<meta property="og:title" content="Las Vegas Homes for Sale | Dr. Janet Duffy REALTOR®" />
	<meta property="og:description" content="Browse all available Las Vegas homes for sale. Updated listings from the MLS." />
	
	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://www.drjanetduffy.com/properties" />
	<meta property="twitter:title" content="Las Vegas Homes for Sale | Dr. Janet Duffy REALTOR®" />
	<meta property="twitter:description" content="Browse all available Las Vegas homes for sale. Updated listings from the MLS." />
	
	<!-- Structured Data -->
	<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "CollectionPage",
		"name": "Las Vegas Properties for Sale",
		"description": "Browse all available Las Vegas homes for sale",
		"url": "https://www.drjanetduffy.com/properties",
		"mainEntity": {
			"@type": "ItemList",
			"itemListElement": {
				"@type": "ListItem",
				"position": 1,
				"name": "Las Vegas Real Estate Listings"
			}
		}
	}
	</script>
</svelte:head>

<section class="section relative" style="background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);">
	<div class="container-premium">
		<div class="text-center mb-12">
			<h1 class="font-display text-5xl md:text-6xl font-bold mb-6 text-gray-900" style="letter-spacing: -0.03em;">Browse Las Vegas Homes & Properties for Sale</h1>
			<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-6"></div>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
				Discover your perfect Las Vegas home from our comprehensive collection of active listings. Updated daily from the MLS.
			</p>
		</div>

		<div class="mb-12 text-center">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What Las Vegas Homes and Properties Are Available for Sale?</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto">
				Available Las Vegas homes and properties for sale include single-family homes, condos, townhomes, luxury estates, and investment properties across premier neighborhoods like Summerlin, Henderson, Green Valley, and The Ridges. Properties are updated daily from the MLS and feature diverse price points, sizes, and amenities to match every buyer's needs and budget.
			</p>
		</div>
	
		{#if mounted && browser}
			<div class="realscout-wrapper">
				<realscout-office-listings 
					agent-encoded-id="QWdlbnQtMjI1MDUw"
					sort-order="STATUS_AND_SIGNIFICANT_CHANGE"
					listing-status="For Sale"
					property-types="SFR,MF,TC">
				</realscout-office-listings>
			</div>
		{:else}
			<div class="loading-skeleton">
				<div class="grid-premium md:grid-cols-2 lg:grid-cols-3 gap-8">
					{#each Array(9) as _}
						<div class="animate-pulse bg-white rounded-2xl shadow-lg overflow-hidden">
							<div class="bg-gray-200 h-64"></div>
							<div class="p-6 space-y-4">
								<div class="h-6 bg-gray-200 rounded w-3/4"></div>
								<div class="h-5 bg-gray-200 rounded w-1/2"></div>
								<div class="h-4 bg-gray-200 rounded w-2/3"></div>
							</div>
						</div>
					{/each}
				</div>
				<p class="text-center text-gray-600 mt-12 text-lg">Loading property listings...</p>
			</div>
		{/if}
		
		<!-- Quick Links Section -->
		<div class="mt-16 mb-8 text-center">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">How Can You Explore Las Vegas Properties in Different Views?</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto">
				Explore Las Vegas properties in different views including grid view for visual browsing, list view for detailed property information, and past sales to understand market trends. Each view provides unique insights to help you find your perfect Las Vegas home and make informed real estate decisions.
			</p>
		</div>

		<div class="grid-premium md:grid-cols-3 gap-8">
			<a href="/listings-embedded" class="group relative bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2">
				<div class="text-center">
					<div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
						<Grid3x3 class="w-8 h-8 text-white" />
					</div>
					<h3 class="font-display text-xl font-bold mb-2 text-gray-900">Grid View</h3>
					<p class="text-gray-600 text-sm">Browse properties in a visual grid layout</p>
				</div>
			</a>
			<a href="/listings-list" class="group relative bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2">
				<div class="text-center">
					<div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
						<List class="w-8 h-8 text-white" />
					</div>
					<h3 class="font-display text-xl font-bold mb-2 text-gray-900">List View</h3>
					<p class="text-gray-600 text-sm">View detailed property information in list format</p>
				</div>
			</a>
			<a href="/past-sales" class="group relative bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2">
				<div class="text-center">
					<div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
						<TrendingUp class="w-8 h-8 text-white" />
					</div>
					<h3 class="font-display text-xl font-bold mb-2 text-gray-900">Past Sales</h3>
					<p class="text-gray-600 text-sm">Explore recently sold properties and market trends</p>
				</div>
			</a>
		</div>
	</div>
</section>

<style>
	.realscout-wrapper {
		min-height: 600px;
		width: 100%;
	}
	
	/* Override RealScout styles for this page */
	.realscout-wrapper :global(realscout-office-listings) {
		--rs-grid-columns: 3;
		--rs-card-hover-shadow: 0 10px 20px rgba(0,0,0,0.15);
	}
</style>
