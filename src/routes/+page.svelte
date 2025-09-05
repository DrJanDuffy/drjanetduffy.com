<script>
import { onMount } from 'svelte';
import { browser } from '$app/env';

let realScoutReady = false;

onMount(() => {
  if (browser) {
    // Wait for RealScout to load - check for any RealScout components
    if (
      window.customElements &&
      (customElements.get('realscout-office-listings') ||
        customElements.get('realscout-advanced-search') ||
        customElements.get('realscout-home-value'))
    ) {
      realScoutReady = true;
    } else {
      // Wait for the components to be defined
      const checkInterval = setInterval(() => {
        if (
          window.customElements &&
          (customElements.get('realscout-office-listings') ||
            customElements.get('realscout-advanced-search') ||
            customElements.get('realscout-home-value'))
        ) {
          clearInterval(checkInterval);
          realScoutReady = true;
        }
      }, 100);

      // Timeout after 5 seconds
      setTimeout(() => {
        clearInterval(checkInterval);
        realScoutReady = true; // Show fallback
      }, 5000);
    }
  }
});
</script>

<svelte:head>
	<title>Dr. Jan Duffy REALTOR - Las Vegas Real Estate Expert</title>
	<meta name="description" content="Find your dream home in Las Vegas with Dr. Jan Duffy, your trusted REALTOR. Expert guidance, local market knowledge, and personalized service for buyers and sellers." />
	<meta name="keywords" content="Las Vegas real estate, REALTOR, homes for sale, property search, real estate agent" />
	
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://drjanduffy.com/" />
	<meta property="og:title" content="Dr. Jan Duffy REALTOR - Las Vegas Real Estate Expert" />
	<meta property="og:description" content="Find your dream home in Las Vegas with Dr. Jan Duffy, your trusted REALTOR." />
	
	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://drjanduffy.com/" />
	<meta property="twitter:title" content="Dr. Jan Duffy REALTOR - Las Vegas Real Estate Expert" />
	<meta property="twitter:description" content="Find your dream home in Las Vegas with Dr. Jan Duffy, your trusted REALTOR." />
</svelte:head>

<!-- Hero Section -->
<section class="hero-section bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20">
	<div class="container mx-auto px-4 text-center">
		<h1 class="text-5xl md:text-6xl font-bold mb-6">
			Find Your Dream Home in Las Vegas
		</h1>
		<p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
			Expert real estate guidance with Dr. Jan Duffy, your trusted Las Vegas REALTOR
		</p>
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<a href="/properties" class="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
				View All Properties
			</a>
			<a href="/contact" class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
				Get in Touch
			</a>
		</div>
	</div>
</section>

<!-- Property Search Section -->
<section class="py-16 bg-gray-50">
	<div class="container mx-auto px-4">
		<h2 class="text-3xl font-bold text-center mb-8 text-gray-800">
			Search Las Vegas Properties
		</h2>
		<div class="max-w-4xl mx-auto">
			{#if realScoutReady}
				<realscout-advanced-search 
					agent-encoded-id="QWdlbnQtMjI1MDUw">
				</realscout-advanced-search>
			{:else}
				<div class="bg-white p-8 rounded-lg shadow-lg">
					<div class="animate-pulse">
						<div class="h-12 bg-gray-200 rounded mb-4"></div>
						<div class="h-12 bg-gray-200 rounded mb-4"></div>
						<div class="h-12 bg-gray-200 rounded mb-4"></div>
						<div class="h-12 bg-gray-200 rounded"></div>
					</div>
					<p class="text-center text-gray-600 mt-4">Loading advanced property search...</p>
				</div>
			{/if}
		</div>
	</div>
</section>

<!-- Featured Properties Section -->
<section class="py-16">
	<div class="container mx-auto px-4">
		<h2 class="text-3xl font-bold text-center mb-8 text-gray-800">
			Featured Las Vegas Properties
		</h2>
		<div class="max-w-7xl mx-auto">
			{#if realScoutReady}
				<realscout-office-listings 
					agent-encoded-id="QWdlbnQtMjI1MDUw" 
					sort-order="STATUS_AND_SIGNIFICANT_CHANGE" 
					listing-status="For Sale" 
					property-types="SFR,MF,TC">
				</realscout-office-listings>
			{:else}
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{#each Array(6) as _}
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
				<p class="text-center text-gray-600 mt-4">Loading featured properties...</p>
			{/if}
		</div>
	</div>
</section>

<!-- Home Value Section -->
<section class="py-16">
	<div class="container mx-auto px-4">
		<div class="max-w-4xl mx-auto text-center">
			<h2 class="text-3xl font-bold mb-6 text-gray-800">
				What's Your Home Worth?
			</h2>
			<p class="text-lg text-gray-600 mb-8">
				Get an instant estimate of your home's value with our advanced valuation tool
			</p>
			<div class="bg-white p-8 rounded-lg shadow-lg">
				{#if realScoutReady}
					<realscout-home-value 
						agent-encoded-id="QWdlbnQtMjI1MDUw">
					</realscout-home-value>
				{:else}
					<div class="animate-pulse">
						<div class="h-12 bg-gray-200 rounded mb-4"></div>
						<div class="h-12 bg-gray-200 rounded mb-4"></div>
						<div class="h-12 bg-gray-200 rounded"></div>
					</div>
					<p class="text-center text-gray-600 mt-4">Loading home value tool...</p>
				{/if}
			</div>
		</div>
	</div>
</section>

<!-- About Section -->
<section class="py-16 bg-gray-50">
	<div class="container mx-auto px-4">
		<div class="max-w-4xl mx-auto text-center">
			<h2 class="text-3xl font-bold mb-6 text-gray-800">
				Why Choose Dr. Jan Duffy?
			</h2>
			<div class="grid md:grid-cols-3 gap-8">
				<div class="text-center">
					<h3 class="text-xl font-semibold mb-2">Local Expertise</h3>
					<p class="text-gray-600">Deep knowledge of Las Vegas neighborhoods and market trends</p>
				</div>
				<div class="text-center">
					<h3 class="text-xl font-semibold mb-2">Proven Results</h3>
					<p class="text-gray-600">Successful transactions and satisfied clients throughout Las Vegas</p>
				</div>
				<div class="text-center">
					<h3 class="text-xl font-semibold mb-2">Personal Service</h3>
					<p class="text-gray-600">Dedicated attention to your unique real estate needs and goals</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="py-16 bg-primary-600 text-white">
	<div class="container mx-auto px-4 text-center">
		<h2 class="text-3xl font-bold mb-4">Ready to Start Your Real Estate Journey?</h2>
		<p class="text-xl mb-8">Contact Dr. Jan Duffy today for a free consultation</p>
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<a href="tel:+17025551234" class="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
				Call (702) 555-1234
			</a>
			<a href="mailto:jan@drjanduffy.com" class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
				Email Me
			</a>
		</div>
	</div>
</section>
