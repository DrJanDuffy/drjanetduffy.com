<script>
import { onMount } from 'svelte';
import { browser } from '$app/environment';

let mounted = false;

onMount(() => {
  mounted = true;
});
</script>

<svelte:head>
	<title>Rental Properties | Dr. Jan Duffy REALTOR</title>
	<meta name="description" content="Find rental properties in Las Vegas with Dr. Jan Duffy. Browse available rentals, apartments, and homes for rent in the Las Vegas area." />
	<meta name="keywords" content="Las Vegas rentals, rental properties, apartments for rent, homes for rent, rental listings" />
	
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://drjanduffy.com/rentals" />
	<meta property="og:title" content="Rental Properties | Dr. Jan Duffy REALTOR" />
	<meta property="og:description" content="Find rental properties in Las Vegas with Dr. Jan Duffy. Browse available rentals, apartments, and homes for rent." />
	
	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://drjanduffy.com/rentals" />
	<meta property="twitter:title" content="Rental Properties | Dr. Jan Duffy REALTOR" />
	<meta property="twitter:description" content="Find rental properties in Las Vegas with Dr. Jan Duffy. Browse available rentals, apartments, and homes for rent." />
</svelte:head>

<svelte:head>
	<title>Rental Properties | Dr. Janet Duffy REALTOR®</title>
	<meta name="description" content="Find rental properties in Las Vegas with Dr. Janet Duffy. Browse available rentals, apartments, and homes for rent in the Las Vegas area." />
	<meta name="keywords" content="Las Vegas rentals, rental properties, apartments for rent, homes for rent, rental listings" />
	
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://drjanetduffy.com/rentals" />
	<meta property="og:title" content="Rental Properties | Dr. Janet Duffy REALTOR®" />
	<meta property="og:description" content="Find rental properties in Las Vegas with Dr. Janet Duffy. Browse available rentals, apartments, and homes for rent." />
	
	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://drjanetduffy.com/rentals" />
	<meta property="twitter:title" content="Rental Properties | Dr. Janet Duffy REALTOR®" />
	<meta property="twitter:description" content="Find rental properties in Las Vegas with Dr. Janet Duffy. Browse available rentals, apartments, and homes for rent." />
</svelte:head>

<section class="section relative" style="background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);">
	<div class="container-premium">
		<div class="text-center mb-16">
			<h1 class="font-display text-5xl md:text-6xl font-bold mb-6 text-gray-900" style="letter-spacing: -0.03em;">Las Vegas Rental Properties</h1>
			<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-6"></div>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
				Discover the perfect rental property in Las Vegas. From luxury apartments to single-family homes, find your ideal rental with expert guidance.
			</p>
			<div class="bg-gradient-to-r from-primary-50 to-blue-50 border-l-4 border-primary-600 rounded-xl p-6 max-w-3xl mx-auto">
				<p class="text-gray-800 text-lg">
					<strong class="text-primary-700">Rental Expertise:</strong> Whether you're looking for a short-term rental, long-term lease, or investment property, I can help you find the perfect rental solution in Las Vegas.
				</p>
			</div>
		</div>
	
		<!-- Rental Search -->
		<div class="mb-16 bg-white rounded-2xl shadow-xl p-10 border border-gray-100">
			<h2 class="font-display text-3xl font-bold mb-8 text-center text-gray-900" style="letter-spacing: -0.02em;">Search Rental Properties</h2>
			<div class="grid-premium md:grid-cols-2 gap-8">
				<div class="bg-gradient-to-br from-primary-50/50 to-white rounded-xl p-6">
					<h3 class="font-display text-xl font-bold mb-4 text-gray-900">Advanced Rental Search</h3>
					<div class="realscout-search advanced" 
						 data-rep="drjanduffy" 
						 data-button-color="#0284c7" 
						 data-button-font="#FFFFFF" 
						 data-background-color="#f8f9fa">
					</div>
				</div>
				<div class="bg-gradient-to-br from-primary-50/50 to-white rounded-xl p-6">
					<h3 class="font-display text-xl font-bold mb-4 text-gray-900">Quick Search</h3>
					<div class="realscout-search simple" 
						 data-rep="drjanduffy" 
						 data-button-color="#0284c7" 
						 data-button-font="#FFFFFF" 
						 data-background-color="#f8f9fa">
					</div>
				</div>
			</div>
		</div>
	
		<!-- Rental Listings -->
		<div class="mb-16">
			<div class="text-center mb-12">
				<h2 class="font-display text-4xl font-bold mb-4 text-gray-900" style="letter-spacing: -0.02em;">Available Rental Properties</h2>
				<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto"></div>
			</div>
		{#if mounted && browser}
			<div class="realscout-listings office" 
				 data-rep="drjanduffy" 
				 data-status="active" 
				 data-view="list__view">
			</div>
		{:else}
			<div class="loading-skeleton">
				<div class="space-y-4">
					{#each Array(8) as _}
						<div class="animate-pulse bg-white rounded-lg shadow p-6">
							<div class="flex md:flex-row flex-col gap-4">
								<div class="md:w-1/3">
									<div class="bg-gray-200 h-48 rounded-lg"></div>
								</div>
								<div class="md:w-2/3 space-y-3">
									<div class="h-6 bg-gray-200 rounded w-3/4"></div>
									<div class="h-4 bg-gray-200 rounded w-1/2"></div>
									<div class="h-4 bg-gray-200 rounded w-2/3"></div>
									<div class="h-4 bg-gray-200 rounded w-1/3"></div>
								</div>
							</div>
						</div>
					{/each}
				</div>
				<p class="text-center text-gray-600 mt-8">Loading rental properties...</p>
			</div>
		{/if}
	</div>
	
		<!-- Rental Information -->
		<div class="grid-premium md:grid-cols-2 gap-8 mb-16">
			<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-lg border border-gray-100">
				<h3 class="font-display text-2xl font-bold mb-6 text-gray-900">Rental Process</h3>
				<div class="space-y-6">
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-md">
							<span class="text-2xl">🔍</span>
						</div>
						<div>
							<h4 class="font-display text-lg font-bold mb-2 text-gray-900">Property Search</h4>
							<p class="text-gray-700 leading-relaxed">Browse available rentals and schedule viewings</p>
						</div>
					</div>
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-md">
							<span class="text-2xl">📝</span>
						</div>
						<div>
							<h4 class="font-display text-lg font-bold mb-2 text-gray-900">Application Process</h4>
							<p class="text-gray-700 leading-relaxed">Complete rental application and provide documentation</p>
						</div>
					</div>
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-md">
							<span class="text-2xl">✍️</span>
						</div>
						<div>
							<h4 class="font-display text-lg font-bold mb-2 text-gray-900">Lease Signing</h4>
							<p class="text-gray-700 leading-relaxed">Review lease terms and complete move-in process</p>
						</div>
					</div>
				</div>
			</div>
			
			<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-lg border border-gray-100">
				<h3 class="font-display text-2xl font-bold mb-6 text-gray-900">Rental Requirements</h3>
				<ul class="space-y-4">
					<li class="flex items-start gap-3">
						<svg class="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
						</svg>
						<span class="text-gray-700 leading-relaxed">Proof of income (3x monthly rent)</span>
					</li>
					<li class="flex items-start gap-3">
						<svg class="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
						</svg>
						<span class="text-gray-700 leading-relaxed">Credit check and background screening</span>
					</li>
					<li class="flex items-start gap-3">
						<svg class="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
						</svg>
						<span class="text-gray-700 leading-relaxed">Security deposit (typically 1-2 months rent)</span>
					</li>
					<li class="flex items-start gap-3">
						<svg class="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
						</svg>
						<span class="text-gray-700 leading-relaxed">Valid government-issued ID</span>
					</li>
					<li class="flex items-start gap-3">
						<svg class="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
						</svg>
						<span class="text-gray-700 leading-relaxed">References from previous landlords</span>
					</li>
				</ul>
			</div>
		</div>
		
		<!-- Rental Market Stats -->
		<div class="relative overflow-hidden bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 text-white rounded-3xl p-12 mb-16 shadow-2xl">
			<div class="absolute inset-0 overflow-hidden">
				<div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
				<div class="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
			</div>
			<div class="relative z-10">
				<h2 class="font-display text-4xl font-bold mb-10 text-center text-white" style="text-shadow: 0 2px 10px rgba(0,0,0,0.2);">Las Vegas Rental Market Overview</h2>
				<div class="grid-premium md:grid-cols-4 gap-8">
					<div class="text-center bg-white/10 backdrop-blur-sm rounded-xl p-8">
						<div class="text-5xl font-display font-bold mb-3">$1,850</div>
						<div class="text-primary-200 text-lg">Average Rent (1BR)</div>
					</div>
					<div class="text-center bg-white/10 backdrop-blur-sm rounded-xl p-8">
						<div class="text-5xl font-display font-bold mb-3">$2,400</div>
						<div class="text-primary-200 text-lg">Average Rent (2BR)</div>
					</div>
					<div class="text-center bg-white/10 backdrop-blur-sm rounded-xl p-8">
						<div class="text-5xl font-display font-bold mb-3">$3,200</div>
						<div class="text-primary-200 text-lg">Average Rent (3BR)</div>
					</div>
					<div class="text-center bg-white/10 backdrop-blur-sm rounded-xl p-8">
						<div class="text-5xl font-display font-bold mb-3">95%</div>
						<div class="text-primary-200 text-lg">Occupancy Rate</div>
					</div>
				</div>
			</div>
		</div>
		
		<!-- CTA Section -->
		<div class="relative overflow-hidden bg-gradient-to-br from-white to-primary-50/30 rounded-3xl p-12 text-center shadow-xl border border-gray-100">
			<h2 class="font-display text-4xl font-bold mb-6 text-gray-900" style="letter-spacing: -0.02em;">Ready to Find Your Perfect Rental?</h2>
			<p class="text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
				Let me help you navigate the Las Vegas rental market and find the perfect property for your needs and budget.
			</p>
			<div class="flex flex-col sm:flex-row gap-6 justify-center">
				<a href="/contact" class="group relative overflow-hidden bg-primary-600 text-white px-10 py-5 rounded-xl font-bold text-lg shadow-2xl hover:shadow-primary-600/30 transition-all duration-300 hover:scale-110 hover:-translate-y-1">
					<span class="relative z-10">Start Your Rental Search</span>
					<div class="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
				</a>
				<a href="tel:+17022221964" class="group relative overflow-hidden bg-transparent text-primary-600 border-2 border-primary-600 px-10 py-5 rounded-xl font-bold text-lg hover:bg-primary-600 hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1">
					<span class="relative z-10">Call 702-222-1964</span>
				</a>
			</div>
		</div>
	</div>
</section>
