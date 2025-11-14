<script>
import { onMount } from 'svelte';
import { browser } from '$app/environment';

let mounted = false;

onMount(() => {
  mounted = true;
});
</script>

<svelte:head>
	<title>Las Vegas Homes for Sale | Dr. Jan Duffy REALTOR</title>
	<meta name="description" content="Browse all available Las Vegas homes for sale. Updated listings from the MLS. Contact Dr. Jan Duffy for showings." />
	<meta name="keywords" content="Las Vegas homes for sale, property listings, MLS, real estate, Dr. Jan Duffy" />
	
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://drjanduffy.com/properties" />
	<meta property="og:title" content="Las Vegas Homes for Sale | Dr. Jan Duffy REALTOR" />
	<meta property="og:description" content="Browse all available Las Vegas homes for sale. Updated listings from the MLS." />
	
	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://drjanduffy.com/properties" />
	<meta property="twitter:title" content="Las Vegas Homes for Sale | Dr. Jan Duffy REALTOR" />
	<meta property="twitter:description" content="Browse all available Las Vegas homes for sale. Updated listings from the MLS." />
</svelte:head>

<div class="container mx-auto px-4 py-8">
	<div class="mb-8">
		<h1 class="text-4xl font-bold mb-4 text-gray-800">Las Vegas Properties for Sale</h1>
		<p class="text-lg text-gray-600">
			Showing all active listings. Use the filters below to narrow your search.
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
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{#each Array(9) as _}
					<div class="animate-pulse">
						<div class="bg-gray-200 h-48 rounded-t-lg"></div>
						<div class="bg-gray-100 p-4 rounded-b-lg">
							<div class="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
							<div class="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
							<div class="h-4 bg-gray-200 rounded w-2/3"></div>
						</div>
					</div>
				{/each}
			</div>
			<p class="text-center text-gray-600 mt-8">Loading property listings...</p>
		</div>
	{/if}
</div>

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
