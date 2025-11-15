<script>
import { onMount } from 'svelte';
import { browser } from '$app/environment';
import { CheckCircle } from 'lucide-svelte';

let mounted = false;

onMount(() => {
  mounted = true;
});
</script>

<svelte:head>
	<title>Property Listings - List View | Dr. Janet Duffy REALTOR®</title>
	<meta name="description" content="Browse Las Vegas property listings in a detailed list format. See active, pending, and sold properties with comprehensive details." />
	<meta name="keywords" content="Las Vegas listings, property list, real estate listings, detailed view" />
	
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.drjanetduffy.com/listings-list" />
	<meta property="og:title" content="Property Listings - List View | Dr. Janet Duffy REALTOR®" />
	<meta property="og:description" content="Browse Las Vegas property listings in a detailed list format." />
	
	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://www.drjanetduffy.com/listings-list" />
	<meta property="twitter:title" content="Property Listings - List View" />
	<meta property="twitter:description" content="Browse Las Vegas property listings in a detailed list format." />
</svelte:head>

<section class="section relative" style="background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);">
	<div class="container-premium">
		<div class="text-center mb-16">
			<h1 class="font-display text-5xl md:text-6xl font-bold mb-6 text-gray-900" style="letter-spacing: -0.03em;">Property Listings - List View</h1>
			<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-6"></div>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
				Browse properties in a detailed list format that provides more information at a glance. Perfect for comparing multiple properties side by side.
			</p>
			<div class="bg-gradient-to-r from-green-50 to-primary-50 border-l-4 border-primary-600 rounded-xl p-6 max-w-3xl mx-auto">
				<p class="text-gray-800 text-lg">
					<strong class="text-primary-700">Detailed View:</strong> This list format shows more property details in each row, making it easier to compare features, prices, and locations.
				</p>
			</div>
		</div>
	
		<!-- Search Options -->
		<div class="mb-16 bg-white rounded-2xl shadow-xl p-10 border border-gray-100">
			<h2 class="font-display text-3xl font-bold mb-8 text-center text-gray-900" style="letter-spacing: -0.02em;">Search Options</h2>
			<div class="grid-premium md:grid-cols-2 gap-8">
				<div class="bg-gradient-to-br from-primary-50/50 to-white rounded-xl p-6">
					<h3 class="font-display text-xl font-bold mb-4 text-gray-900">Advanced Search</h3>
					<div class="realscout-search advanced" 
						 data-rep="drjanduffy" 
						 data-button-color="#0284c7" 
						 data-button-font="#FFFFFF" 
						 data-background-color="#f8f9fa">
					</div>
				</div>
				<div class="bg-gradient-to-br from-primary-50/50 to-white rounded-xl p-6">
					<h3 class="font-display text-xl font-bold mb-4 text-gray-900">Simple Search</h3>
					<div class="realscout-search simple" 
						 data-rep="drjanduffy" 
						 data-button-color="#0284c7" 
						 data-button-font="#FFFFFF" 
						 data-background-color="#f8f9fa">
					</div>
				</div>
			</div>
		</div>
		
		<!-- Listings -->
		<div class="mb-16">
			<div class="text-center mb-12">
				<h2 class="font-display text-4xl font-bold mb-4 text-gray-900" style="letter-spacing: -0.02em;">All Properties (List View)</h2>
				<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto"></div>
			</div>
			{#if mounted && browser}
				<div class="realscout-listings agent" 
					 data-rep="drjanduffy" 
					 data-status="active,pending,sold" 
					 data-view="list__view">
				</div>
			{:else}
				<div class="loading-skeleton">
					<div class="space-y-6">
						{#each Array(6) as _}
							<div class="animate-pulse bg-white rounded-2xl shadow-lg p-6">
								<div class="flex md:flex-row flex-col gap-6">
									<div class="md:w-1/3">
										<div class="bg-gray-200 h-64 rounded-xl"></div>
									</div>
									<div class="md:w-2/3 space-y-4">
										<div class="h-6 bg-gray-200 rounded w-3/4"></div>
										<div class="h-5 bg-gray-200 rounded w-1/2"></div>
										<div class="h-4 bg-gray-200 rounded w-2/3"></div>
										<div class="h-4 bg-gray-200 rounded w-1/3"></div>
									</div>
								</div>
							</div>
						{/each}
					</div>
					<p class="text-center text-gray-600 mt-12 text-lg">Loading list view...</p>
				</div>
			{/if}
		</div>
		
		<!-- View Comparison -->
		<div class="mb-16 bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-xl border border-gray-100">
			<h2 class="font-display text-3xl font-bold mb-8 text-center text-gray-900" style="letter-spacing: -0.02em;">Choose Your Preferred View</h2>
			<div class="grid-premium md:grid-cols-3 gap-8">
				<div class="text-center bg-white rounded-xl p-8 shadow-md">
					<div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl mb-4 shadow-md">
						<span class="text-3xl">📊</span>
					</div>
					<h3 class="font-display text-xl font-bold mb-3 text-gray-900">Grid View</h3>
					<p class="text-gray-700 mb-4">Visual cards with images and key details</p>
					<a href="/listings-embedded" class="inline-flex items-center gap-2 text-primary-600 font-bold hover:text-primary-700 hover:gap-3 transition-all duration-300">
						View Grid Version <span class="text-xl">→</span>
					</a>
				</div>
				
				<div class="text-center bg-white rounded-xl p-8 shadow-md border-2 border-primary-600">
					<div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl mb-4 shadow-md">
						<span class="text-3xl">📋</span>
					</div>
					<h3 class="font-display text-xl font-bold mb-3 text-gray-900">List View</h3>
					<p class="text-gray-700 mb-4">Detailed rows with comprehensive information</p>
					<span class="inline-flex items-center gap-2 text-primary-600 font-bold">
						<span class="w-2 h-2 bg-primary-600 rounded-full animate-pulse"></span>
						Current View
					</span>
				</div>
				
				<div class="text-center bg-white rounded-xl p-8 shadow-md">
					<div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl mb-4 shadow-md">
						<span class="text-3xl">💻</span>
					</div>
					<h3 class="font-display text-xl font-bold mb-3 text-gray-900">Web Components</h3>
					<p class="text-gray-700 mb-4">Modern interactive interface</p>
					<a href="/properties" class="inline-flex items-center gap-2 text-primary-600 font-bold hover:text-primary-700 hover:gap-3 transition-all duration-300">
						View Web Components <span class="text-xl">→</span>
					</a>
				</div>
			</div>
		</div>
		
		<!-- Features of List View -->
		<div class="grid-premium md:grid-cols-2 gap-12">
			<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-lg border border-gray-100">
				<h3 class="font-display text-2xl font-bold mb-6 text-gray-900">Benefits of List View</h3>
				<ul class="space-y-4">
					<li class="flex items-start gap-4">
						<CheckCircle class="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
						<span class="text-gray-700 leading-relaxed">More detailed information per property</span>
					</li>
					<li class="flex items-start gap-4">
						<CheckCircle class="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
						<span class="text-gray-700 leading-relaxed">Easy to scan and compare multiple properties</span>
					</li>
					<li class="flex items-start gap-4">
						<CheckCircle class="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
						<span class="text-gray-700 leading-relaxed">Compact layout shows more properties per page</span>
					</li>
					<li class="flex items-start gap-4">
						<CheckCircle class="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
						<span class="text-gray-700 leading-relaxed">Perfect for mobile and tablet viewing</span>
					</li>
				</ul>
			</div>
			
			<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-lg border border-gray-100">
				<h3 class="font-display text-2xl font-bold mb-6 text-gray-900">Quick Actions</h3>
				<div class="space-y-4">
					<a href="/contact" class="block bg-primary-600 text-white px-6 py-4 rounded-xl text-center font-bold text-lg shadow-md hover:bg-primary-700 hover:shadow-lg transition-all duration-300 hover:scale-105">
						Schedule a Showing
					</a>
					<a href="tel:+17022221964" class="block border-2 border-primary-600 text-primary-600 px-6 py-4 rounded-xl text-center font-bold text-lg hover:bg-primary-600 hover:text-white transition-all duration-300 hover:scale-105">
						Call 702-500-1955
					</a>
					<a href="/home-value" class="block bg-gray-100 text-gray-800 px-6 py-4 rounded-xl text-center font-bold text-lg hover:bg-gray-200 transition-all duration-300 hover:scale-105">
						Get Home Value Estimate
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
