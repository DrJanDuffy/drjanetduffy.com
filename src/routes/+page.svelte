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
		<div class="max-w-6xl mx-auto">
			<div class="text-center mb-12">
				<h2 class="text-3xl font-bold mb-6 text-gray-800">
					Why Choose Dr. Jan Duffy?
				</h2>
				<p class="text-lg text-gray-600 max-w-3xl mx-auto">
					With over 15 years of experience in Las Vegas real estate, Dr. Jan Duffy brings unparalleled expertise, 
					local market knowledge, and a commitment to exceptional service to every transaction.
				</p>
			</div>
			
			<div class="grid md:grid-cols-3 gap-8 mb-12">
				<div class="text-center bg-white p-6 rounded-lg shadow-md">
					<h3 class="text-xl font-semibold mb-3 text-primary-600">Local Expertise</h3>
					<p class="text-gray-600">Deep knowledge of Las Vegas neighborhoods, market trends, and local regulations. From Summerlin to Henderson, I know every corner of the valley.</p>
				</div>
				<div class="text-center bg-white p-6 rounded-lg shadow-md">
					<h3 class="text-xl font-semibold mb-3 text-primary-600">Proven Results</h3>
					<p class="text-gray-600">Over 500 successful transactions and countless satisfied clients. I consistently exceed expectations and deliver results that matter.</p>
				</div>
				<div class="text-center bg-white p-6 rounded-lg shadow-md">
					<h3 class="text-xl font-semibold mb-3 text-primary-600">Personal Service</h3>
					<p class="text-gray-600">Dedicated attention to your unique real estate needs and goals. Every client receives personalized service tailored to their specific situation.</p>
				</div>
			</div>
			
			<!-- Stats Section -->
			<div class="bg-primary-600 text-white rounded-lg p-8">
				<div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
					<div>
						<div class="text-3xl font-bold mb-2">500+</div>
						<div class="text-primary-100">Homes Sold</div>
					</div>
					<div>
						<div class="text-3xl font-bold mb-2">15+</div>
						<div class="text-primary-100">Years Experience</div>
					</div>
					<div>
						<div class="text-3xl font-bold mb-2">98%</div>
						<div class="text-primary-100">Client Satisfaction</div>
					</div>
					<div>
						<div class="text-3xl font-bold mb-2">$50M+</div>
						<div class="text-primary-100">Total Sales Volume</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Services Section -->
<section class="py-16">
	<div class="container mx-auto px-4">
		<div class="max-w-6xl mx-auto">
			<div class="text-center mb-12">
				<h2 class="text-3xl font-bold mb-6 text-gray-800">
					Comprehensive Real Estate Services
				</h2>
				<p class="text-lg text-gray-600 max-w-3xl mx-auto">
					Whether you're buying your first home, selling your current property, or looking for investment opportunities, 
					I provide expert guidance every step of the way.
				</p>
			</div>
			
			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				<div class="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary-600">
					<h3 class="text-xl font-semibold mb-3 text-gray-800">Home Buying</h3>
					<p class="text-gray-600 mb-4">Expert guidance through the entire home buying process, from initial search to closing day.</p>
					<ul class="text-sm text-gray-500 space-y-1">
						<li>• Market analysis and pricing</li>
						<li>• Property search and tours</li>
						<li>• Negotiation and offers</li>
						<li>• Inspection coordination</li>
					</ul>
				</div>
				
				<div class="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary-600">
					<h3 class="text-xl font-semibold mb-3 text-gray-800">Home Selling</h3>
					<p class="text-gray-600 mb-4">Maximize your home's value with professional marketing and strategic pricing.</p>
					<ul class="text-sm text-gray-500 space-y-1">
						<li>• Home valuation and pricing</li>
						<li>• Professional photography</li>
						<li>• Marketing and advertising</li>
						<li>• Negotiation and closing</li>
					</ul>
				</div>
				
				<div class="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary-600">
					<h3 class="text-xl font-semibold mb-3 text-gray-800">Investment Properties</h3>
					<p class="text-gray-600 mb-4">Strategic investment advice to help you build wealth through real estate.</p>
					<ul class="text-sm text-gray-500 space-y-1">
						<li>• Market analysis</li>
						<li>• ROI calculations</li>
						<li>• Property management</li>
						<li>• Portfolio building</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Las Vegas Neighborhoods Section -->
<section class="py-16 bg-gray-50">
	<div class="container mx-auto px-4">
		<div class="max-w-6xl mx-auto">
			<div class="text-center mb-12">
				<h2 class="text-3xl font-bold mb-6 text-gray-800">
					Popular Las Vegas Neighborhoods
				</h2>
				<p class="text-lg text-gray-600 max-w-3xl mx-auto">
					Explore the diverse neighborhoods of Las Vegas, each offering unique lifestyle opportunities and investment potential.
				</p>
			</div>
			
			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
				<div class="bg-white p-6 rounded-lg shadow-md">
					<h3 class="text-xl font-semibold mb-3 text-gray-800">Summerlin</h3>
					<p class="text-gray-600 mb-4">Master-planned community with golf courses, parks, and top-rated schools.</p>
					<div class="text-sm text-gray-500">
						<span class="font-semibold">Avg. Home Price:</span> $650,000<br>
						<span class="font-semibold">Property Types:</span> Single Family, Condos
					</div>
				</div>
				
				<div class="bg-white p-6 rounded-lg shadow-md">
					<h3 class="text-xl font-semibold mb-3 text-gray-800">Henderson</h3>
					<p class="text-gray-600 mb-4">Family-friendly area with excellent schools and recreational facilities.</p>
					<div class="text-sm text-gray-500">
						<span class="font-semibold">Avg. Home Price:</span> $450,000<br>
						<span class="font-semibold">Property Types:</span> Single Family, Townhomes
					</div>
				</div>
				
				<div class="bg-white p-6 rounded-lg shadow-md">
					<h3 class="text-xl font-semibold mb-3 text-gray-800">Green Valley</h3>
					<p class="text-gray-600 mb-4">Established neighborhood with mature trees and convenient location.</p>
					<div class="text-sm text-gray-500">
						<span class="font-semibold">Avg. Home Price:</span> $400,000<br>
						<span class="font-semibold">Property Types:</span> Single Family, Condos
					</div>
				</div>
				
				<div class="bg-white p-6 rounded-lg shadow-md">
					<h3 class="text-xl font-semibold mb-3 text-gray-800">Anthem</h3>
					<p class="text-gray-600 mb-4">Gated community with luxury amenities and golf course access.</p>
					<div class="text-sm text-gray-500">
						<span class="font-semibold">Avg. Home Price:</span> $750,000<br>
						<span class="font-semibold">Property Types:</span> Single Family, Luxury
					</div>
				</div>
				
				<div class="bg-white p-6 rounded-lg shadow-md">
					<h3 class="text-xl font-semibold mb-3 text-gray-800">Centennial Hills</h3>
					<p class="text-gray-600 mb-4">Northwest Las Vegas with newer construction and mountain views.</p>
					<div class="text-sm text-gray-500">
						<span class="font-semibold">Avg. Home Price:</span> $500,000<br>
						<span class="font-semibold">Property Types:</span> Single Family, New Construction
					</div>
				</div>
				
				<div class="bg-white p-6 rounded-lg shadow-md">
					<h3 class="text-xl font-semibold mb-3 text-gray-800">Spring Valley</h3>
					<p class="text-gray-600 mb-4">Convenient location with diverse housing options and great value.</p>
					<div class="text-sm text-gray-500">
						<span class="font-semibold">Avg. Home Price:</span> $350,000<br>
						<span class="font-semibold">Property Types:</span> Single Family, Condos, Townhomes
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Testimonials Section -->
<section class="py-16">
	<div class="container mx-auto px-4">
		<div class="max-w-6xl mx-auto">
			<div class="text-center mb-12">
				<h2 class="text-3xl font-bold mb-6 text-gray-800">
					What My Clients Say
				</h2>
				<p class="text-lg text-gray-600">
					Don't just take my word for it - hear from satisfied clients who have achieved their real estate goals.
				</p>
			</div>
			
			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				<div class="bg-white p-6 rounded-lg shadow-md">
					<div class="flex items-center mb-4">
						<div class="flex text-yellow-400">
							<span>★★★★★</span>
						</div>
					</div>
					<p class="text-gray-600 mb-4">"Dr. Duffy made our first home buying experience seamless. Her knowledge of the Las Vegas market is unmatched, and she guided us through every step with patience and expertise."</p>
					<div class="font-semibold text-gray-800">Sarah & Mike Johnson</div>
					<div class="text-sm text-gray-500">First-time Home Buyers</div>
				</div>
				
				<div class="bg-white p-6 rounded-lg shadow-md">
					<div class="flex items-center mb-4">
						<div class="flex text-yellow-400">
							<span>★★★★★</span>
						</div>
					</div>
					<p class="text-gray-600 mb-4">"We sold our home for 15% above asking price thanks to Dr. Duffy's strategic pricing and marketing approach. Her professionalism and results speak for themselves."</p>
					<div class="font-semibold text-gray-800">Robert Chen</div>
					<div class="text-sm text-gray-500">Home Seller</div>
				</div>
				
				<div class="bg-white p-6 rounded-lg shadow-md">
					<div class="flex items-center mb-4">
						<div class="flex text-yellow-400">
							<span>★★★★★</span>
						</div>
					</div>
					<p class="text-gray-600 mb-4">"As an investor, I rely on Dr. Duffy's market insights and property analysis. She's helped me build a profitable real estate portfolio in Las Vegas."</p>
					<div class="font-semibold text-gray-800">Maria Rodriguez</div>
					<div class="text-sm text-gray-500">Real Estate Investor</div>
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
