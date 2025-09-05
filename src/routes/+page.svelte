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
	<title>Dr. Janet Duffy, REALTOR® | Berkshire Hathaway Nevada Properties - Luxury Las Vegas Real Estate</title>
	<meta name="description" content="Dr. Janet Duffy, REALTOR® specializes in luxury Las Vegas real estate, California relocations, and corporate moves. West Summerlin expert serving 89138, 89144, 89135. Direct: 702-222-1964 | drduffy@bhhsnv.com" />
	<meta name="keywords" content="Dr. Janet Duffy REALTOR, Berkshire Hathaway Nevada Properties, luxury Las Vegas real estate, West Summerlin, California relocation, corporate relocation, executive homes, 89138, 89144, 89135" />
	
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://drjanetduffy.com/" />
	<meta property="og:title" content="Dr. Janet Duffy, REALTOR® | Berkshire Hathaway Nevada Properties" />
	<meta property="og:description" content="Luxury Las Vegas real estate specialist for executives, California relocations, and corporate moves. West Summerlin expert serving 89138, 89144, 89135." />
	<meta property="og:image" content="https://drjanetduffy.com/og-image.jpg" />
	
	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://drjanetduffy.com/" />
	<meta property="twitter:title" content="Dr. Janet Duffy, REALTOR® | Berkshire Hathaway Nevada Properties" />
	<meta property="twitter:description" content="Luxury Las Vegas real estate specialist for executives, California relocations, and corporate moves." />
	<meta property="twitter:image" content="https://drjanetduffy.com/og-image.jpg" />
	
	<!-- Schema.org structured data -->
	<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "RealEstateAgent",
		"name": "Dr. Janet Duffy",
		"jobTitle": "REALTOR®",
		"description": "Luxury Las Vegas Real Estate Specialist with Berkshire Hathaway Nevada Properties",
		"url": "https://drjanetduffy.com",
		"telephone": "702-222-1964",
		"email": "drduffy@bhhsnv.com",
		"worksFor": {
			"@type": "RealEstateAgent",
			"name": "Berkshire Hathaway Nevada Properties"
		},
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "Las Vegas",
			"addressRegion": "NV",
			"addressCountry": "US"
		},
		"areaServed": [
			"West Summerlin", "Summerlin", "89138", "89144", "89135", 
			"Henderson", "Green Valley", "Anthem", "Las Vegas"
		],
		"serviceType": ["Luxury Real Estate Sales", "Corporate Relocation", "California Relocation", "Executive Home Sales"],
		"image": "https://drjanetduffy.com/dr-janet-duffy-headshot.jpg"
	}
	</script>
</svelte:head>

<!-- Hero Section -->
<section class="hero-section bg-gradient-to-br from-vegas-deep-900 via-vegas-deep-800 to-vegas-gold-600 text-white py-32 relative overflow-hidden">
	<!-- Luxury background pattern -->
	<div class="absolute inset-0 opacity-5">
		<div class="absolute top-20 left-20 w-32 h-32 border border-white rounded-full"></div>
		<div class="absolute top-40 right-32 w-24 h-24 border border-white rounded-full"></div>
		<div class="absolute bottom-32 left-1/3 w-16 h-16 border border-white rounded-full"></div>
		<div class="absolute bottom-20 right-1/4 w-12 h-12 border border-white rounded-full"></div>
		<div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-white rounded-full"></div>
	</div>
	
	<div class="container mx-auto px-4 text-center relative z-10">
		<div class="mb-8">
			<!-- Berkshire Hathaway branding -->
			<div class="mb-4">
				<span class="inline-block bg-vegas-gold-600 text-vegas-deep-900 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
					Berkshire Hathaway Nevada Properties
				</span>
			</div>
			
			<h1 class="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in">
				Dr. Janet Duffy
			</h1>
			<div class="text-3xl md:text-4xl lg:text-5xl font-light mb-4 animate-slide-up">
				REALTOR<sup>®</sup>
			</div>
			<p class="text-xl md:text-2xl lg:text-3xl mb-8 max-w-5xl mx-auto animate-slide-up font-light">
				Luxury Las Vegas Real Estate Specialist
			</p>
			<p class="text-lg md:text-xl mb-8 max-w-4xl mx-auto animate-slide-up text-vegas-gold-200">
				Executive Relocations • California Migration • West Summerlin Expert
			</p>
		</div>
		
		<!-- Direct contact info -->
		<div class="mb-12">
			<div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
				<div class="text-2xl md:text-3xl font-bold mb-2">Direct: 702-222-1964</div>
				<div class="text-lg md:text-xl text-vegas-gold-200">drduffy@bhhsnv.com</div>
				<div class="text-sm text-vegas-gold-300 mt-2">Serving 89138 • 89144 • 89135</div>
			</div>
		</div>
		
		<div class="flex flex-col sm:flex-row gap-6 justify-center">
			<a href="/contact" class="bg-vegas-gold-600 text-vegas-deep-900 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-vegas-gold-500 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2">
				Book Your Consultation Today
			</a>
			<a href="/properties" class="border-2 border-white text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white hover:text-vegas-deep-900 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2">
				Discover Your Next Summerlin Address
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
<section class="py-20 bg-gradient-to-b from-white to-vegas-gold-50">
	<div class="container mx-auto px-4">
		<div class="max-w-6xl mx-auto">
			<div class="text-center mb-16">
				<h2 class="text-4xl font-bold mb-6 text-vegas-deep-900">
					Why Choose Dr. Janet Duffy, REALTOR<sup>®</sup>?
				</h2>
				<p class="text-xl text-vegas-deep-700 max-w-4xl mx-auto">
					With Berkshire Hathaway Nevada Properties, Dr. Janet Duffy delivers luxury real estate expertise 
					for executives, California relocations, and corporate moves in West Summerlin's most prestigious communities.
				</p>
			</div>
			
			<div class="grid md:grid-cols-3 gap-8 mb-12">
				<div class="text-center bg-white p-8 rounded-2xl shadow-xl border border-vegas-gold-200">
					<div class="w-16 h-16 bg-vegas-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
						<svg class="w-8 h-8 text-vegas-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
						</svg>
					</div>
					<h3 class="text-2xl font-bold mb-4 text-vegas-deep-900">West Summerlin Expert</h3>
					<p class="text-vegas-deep-700">Specialized knowledge of 89138, 89144, and 89135 zip codes. Deep understanding of luxury market trends, timing advantages, and failed competitor listings for strategic positioning.</p>
				</div>
				<div class="text-center bg-white p-8 rounded-2xl shadow-xl border border-vegas-gold-200">
					<div class="w-16 h-16 bg-vegas-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
						<svg class="w-8 h-8 text-vegas-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
						</svg>
					</div>
					<h3 class="text-2xl font-bold mb-4 text-vegas-deep-900">Executive Relocations</h3>
					<p class="text-vegas-deep-700">Dedicated expertise in corporate relocations and California migration. Proven track record with C-suite executives, investment sales, and divorce relocation scenarios.</p>
				</div>
				<div class="text-center bg-white p-8 rounded-2xl shadow-xl border border-vegas-gold-200">
					<div class="w-16 h-16 bg-vegas-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
						<svg class="w-8 h-8 text-vegas-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
						</svg>
					</div>
					<h3 class="text-2xl font-bold mb-4 text-vegas-deep-900">Timing Advantage</h3>
					<p class="text-vegas-deep-700">Strategic market insights and urgent messaging about rate changes, hot listings, and market opportunities. Turn market volatility into your competitive advantage.</p>
				</div>
			</div>
			
			<!-- Stats Section -->
			<div class="bg-gradient-to-r from-vegas-deep-900 to-vegas-gold-600 text-white rounded-2xl p-12 shadow-2xl">
				<div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
					<div>
						<div class="text-4xl font-bold mb-2 text-vegas-gold-300">$200M+</div>
						<div class="text-vegas-gold-100 font-semibold">Luxury Sales Volume</div>
					</div>
					<div>
						<div class="text-4xl font-bold mb-2 text-vegas-gold-300">15+</div>
						<div class="text-vegas-gold-100 font-semibold">Years Experience</div>
					</div>
					<div>
						<div class="text-4xl font-bold mb-2 text-vegas-gold-300">98%</div>
						<div class="text-vegas-gold-100 font-semibold">Client Satisfaction</div>
					</div>
					<div>
						<div class="text-4xl font-bold mb-2 text-vegas-gold-300">300+</div>
						<div class="text-vegas-gold-100 font-semibold">Executive Relocations</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Services Section -->
<section class="py-20 bg-vegas-deep-50">
	<div class="container mx-auto px-4">
		<div class="max-w-6xl mx-auto">
			<div class="text-center mb-16">
				<h2 class="text-4xl font-bold mb-6 text-vegas-deep-900">
					Luxury Real Estate Services
				</h2>
				<p class="text-xl text-vegas-deep-700 max-w-4xl mx-auto">
					Specialized expertise for executives, California relocations, and corporate moves in West Summerlin's 
					most prestigious communities. Turn market volatility into your competitive advantage.
				</p>
			</div>
			
			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				<div class="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-vegas-gold-600 hover:shadow-2xl transition-all duration-300">
					<div class="w-12 h-12 bg-vegas-gold-100 rounded-lg flex items-center justify-center mb-4">
						<svg class="w-6 h-6 text-vegas-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
						</svg>
					</div>
					<h3 class="text-2xl font-bold mb-4 text-vegas-deep-900">Executive Home Buying</h3>
					<p class="text-vegas-deep-700 mb-4">Luxury home acquisition with strategic market timing and failed competitor listing advantages.</p>
					<ul class="text-sm text-vegas-deep-600 space-y-2">
						<li>• West Summerlin luxury market expertise</li>
						<li>• California relocation coordination</li>
						<li>• Corporate relocation packages</li>
						<li>• Investment property analysis</li>
					</ul>
				</div>
				
				<div class="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-vegas-gold-600 hover:shadow-2xl transition-all duration-300">
					<div class="w-12 h-12 bg-vegas-gold-100 rounded-lg flex items-center justify-center mb-4">
						<svg class="w-6 h-6 text-vegas-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
						</svg>
					</div>
					<h3 class="text-2xl font-bold mb-4 text-vegas-deep-900">Luxury Home Selling</h3>
					<p class="text-vegas-deep-700 mb-4">Maximize value with strategic pricing, urgent market messaging, and premium marketing.</p>
					<ul class="text-sm text-vegas-deep-600 space-y-2">
						<li>• Strategic pricing and market timing</li>
						<li>• Luxury photography and staging</li>
						<li>• Executive marketing campaigns</li>
						<li>• Divorce relocation expertise</li>
					</ul>
				</div>
				
				<div class="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-vegas-gold-600 hover:shadow-2xl transition-all duration-300">
					<div class="w-12 h-12 bg-vegas-gold-100 rounded-lg flex items-center justify-center mb-4">
						<svg class="w-6 h-6 text-vegas-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
						</svg>
					</div>
					<h3 class="text-2xl font-bold mb-4 text-vegas-deep-900">Investment Sales</h3>
					<p class="text-vegas-deep-700 mb-4">Strategic investment opportunities with market timing advantages and rate change insights.</p>
					<ul class="text-sm text-vegas-deep-600 space-y-2">
						<li>• Market volatility advantage</li>
						<li>• ROI optimization strategies</li>
						<li>• Portfolio diversification</li>
						<li>• Hot listing opportunities</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- West Summerlin Luxury Communities Section -->
<section class="py-20 bg-gradient-to-b from-vegas-gold-50 to-white">
	<div class="container mx-auto px-4">
		<div class="max-w-6xl mx-auto">
			<div class="text-center mb-16">
				<h2 class="text-4xl font-bold mb-6 text-vegas-deep-900">
					West Summerlin Luxury Communities
				</h2>
				<p class="text-xl text-vegas-deep-700 max-w-4xl mx-auto">
					Exclusive access to Las Vegas's most prestigious neighborhoods. Specialized expertise in 89138, 89144, 
					and 89135 zip codes for executives, California relocations, and luxury investment opportunities.
				</p>
			</div>
			
			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				<div class="bg-white p-8 rounded-2xl shadow-xl border border-vegas-gold-200 hover:shadow-2xl transition-all duration-300">
					<div class="text-vegas-gold-600 font-bold text-sm uppercase tracking-wide mb-2">89138</div>
					<h3 class="text-2xl font-bold mb-4 text-vegas-deep-900">West Summerlin</h3>
					<p class="text-vegas-deep-700 mb-4">Ultra-luxury master-planned community with championship golf courses, private clubs, and executive estates.</p>
					<div class="text-sm text-vegas-deep-600 space-y-1">
						<div><span class="font-semibold">Price Range:</span> $1.2M - $8M+</div>
						<div><span class="font-semibold">Property Types:</span> Luxury Estates, Custom Homes</div>
						<div><span class="font-semibold">Specialty:</span> Executive Relocations</div>
					</div>
				</div>
				
				<div class="bg-white p-8 rounded-2xl shadow-xl border border-vegas-gold-200 hover:shadow-2xl transition-all duration-300">
					<div class="text-vegas-gold-600 font-bold text-sm uppercase tracking-wide mb-2">89144</div>
					<h3 class="text-2xl font-bold mb-4 text-vegas-deep-900">The Ridges</h3>
					<p class="text-vegas-deep-700 mb-4">Exclusive gated community with mountain views, private golf, and luxury amenities for discerning buyers.</p>
					<div class="text-sm text-vegas-deep-600 space-y-1">
						<div><span class="font-semibold">Price Range:</span> $800K - $5M+</div>
						<div><span class="font-semibold">Property Types:</span> Luxury Villas, Custom Estates</div>
						<div><span class="font-semibold">Specialty:</span> California Relocations</div>
					</div>
				</div>
				
				<div class="bg-white p-8 rounded-2xl shadow-xl border border-vegas-gold-200 hover:shadow-2xl transition-all duration-300">
					<div class="text-vegas-gold-600 font-bold text-sm uppercase tracking-wide mb-2">89135</div>
					<h3 class="text-2xl font-bold mb-4 text-vegas-deep-900">Red Rock Country Club</h3>
					<p class="text-vegas-deep-700 mb-4">Prestigious golf community with luxury homes, private country club access, and mountain views.</p>
					<div class="text-sm text-vegas-deep-600 space-y-1">
						<div><span class="font-semibold">Price Range:</span> $600K - $3M+</div>
						<div><span class="font-semibold">Property Types:</span> Golf Course Homes, Estates</div>
						<div><span class="font-semibold">Specialty:</span> Investment Properties</div>
					</div>
				</div>
				
				<div class="bg-white p-8 rounded-2xl shadow-xl border border-vegas-gold-200 hover:shadow-2xl transition-all duration-300">
					<div class="text-vegas-gold-600 font-bold text-sm uppercase tracking-wide mb-2">Luxury</div>
					<h3 class="text-2xl font-bold mb-4 text-vegas-deep-900">Anthem Country Club</h3>
					<p class="text-vegas-deep-700 mb-4">Gated luxury community with championship golf, resort-style amenities, and executive lifestyle.</p>
					<div class="text-sm text-vegas-deep-600 space-y-1">
						<div><span class="font-semibold">Price Range:</span> $750K - $4M+</div>
						<div><span class="font-semibold">Property Types:</span> Luxury Homes, Estates</div>
						<div><span class="font-semibold">Specialty:</span> Corporate Relocations</div>
					</div>
				</div>
				
				<div class="bg-white p-8 rounded-2xl shadow-xl border border-vegas-gold-200 hover:shadow-2xl transition-all duration-300">
					<div class="text-vegas-gold-600 font-bold text-sm uppercase tracking-wide mb-2">Executive</div>
					<h3 class="text-2xl font-bold mb-4 text-vegas-deep-900">MacDonald Highlands</h3>
					<p class="text-vegas-deep-700 mb-4">Ultra-exclusive community with custom estates, private golf, and unparalleled luxury amenities.</p>
					<div class="text-sm text-vegas-deep-600 space-y-1">
						<div><span class="font-semibold">Price Range:</span> $1.5M - $10M+</div>
						<div><span class="font-semibold">Property Types:</span> Custom Estates, Mansions</div>
						<div><span class="font-semibold">Specialty:</span> Ultra-Luxury Sales</div>
					</div>
				</div>
				
				<div class="bg-white p-8 rounded-2xl shadow-xl border border-vegas-gold-200 hover:shadow-2xl transition-all duration-300">
					<div class="text-vegas-gold-600 font-bold text-sm uppercase tracking-wide mb-2">Investment</div>
					<h3 class="text-2xl font-bold mb-4 text-vegas-deep-900">Seven Hills</h3>
					<p class="text-vegas-deep-700 mb-4">Established luxury community with mature landscaping, golf course access, and strong investment potential.</p>
					<div class="text-sm text-vegas-deep-600 space-y-1">
						<div><span class="font-semibold">Price Range:</span> $500K - $2M+</div>
						<div><span class="font-semibold">Property Types:</span> Luxury Homes, Condos</div>
						<div><span class="font-semibold">Specialty:</span> Market Timing Advantage</div>
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

<!-- Motivational Quotes Section -->
<section class="py-16 bg-gradient-to-b from-vegas-gold-50 to-white">
	<div class="container mx-auto px-4">
		<div class="max-w-6xl mx-auto">
			<div class="text-center mb-12">
				<h2 class="text-3xl font-bold mb-6 text-vegas-deep-900">
					Words of Wisdom
				</h2>
				<p class="text-lg text-vegas-deep-700">
					Inspirational quotes from industry leaders to motivate and guide your real estate journey.
				</p>
			</div>
			
			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				<div class="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-vegas-gold-600">
					<blockquote class="text-lg text-vegas-deep-900 font-medium mb-4">
						"To be successful in real estate, you must always and consistently put your clients' best interests first."
					</blockquote>
					<div class="text-sm text-vegas-gold-600 font-semibold">Anthony Hitt</div>
					<div class="text-xs text-gray-500">Real Estate Executive</div>
				</div>
				
				<div class="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-vegas-gold-600">
					<blockquote class="text-lg text-vegas-deep-900 font-medium mb-4">
						"Don't wait to buy real estate. Buy real estate and wait."
					</blockquote>
					<div class="text-sm text-vegas-gold-600 font-semibold">Will Rogers</div>
					<div class="text-xs text-gray-500">Actor & Social Commentator</div>
				</div>
				
				<div class="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-vegas-gold-600">
					<blockquote class="text-lg text-vegas-deep-900 font-medium mb-4">
						"Owning a home is a keystone of wealth, both financial affluence and emotional security."
					</blockquote>
					<div class="text-sm text-vegas-gold-600 font-semibold">Suze Orman</div>
					<div class="text-xs text-gray-500">Financial Advisor</div>
				</div>
			</div>
			
			<div class="text-center mt-8">
				<a 
					href="/quotes" 
					class="inline-flex items-center text-vegas-gold-600 hover:text-vegas-gold-700 font-semibold transition-colors"
				>
					View All Motivational Quotes
					<svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
					</svg>
				</a>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="py-20 bg-gradient-to-r from-vegas-deep-900 to-vegas-gold-600 text-white">
	<div class="container mx-auto px-4 text-center">
		<h2 class="text-4xl font-bold mb-6">Ready to Discover Your Next Summerlin Address?</h2>
		<p class="text-xl mb-8 text-vegas-gold-200">Book your consultation with Dr. Janet Duffy, REALTOR<sup>®</sup> today</p>
		
		<!-- Direct contact info -->
		<div class="mb-12">
			<div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto">
				<div class="text-3xl font-bold mb-2">Direct: 702-222-1964</div>
				<div class="text-xl text-vegas-gold-200 mb-4">drduffy@bhhsnv.com</div>
				<div class="text-sm text-vegas-gold-300">Berkshire Hathaway Nevada Properties</div>
			</div>
		</div>
		
		<div class="flex flex-col sm:flex-row gap-6 justify-center">
			<a href="tel:+17022221964" class="bg-vegas-gold-600 text-vegas-deep-900 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-vegas-gold-500 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2">
				Call Direct: 702-222-1964
			</a>
			<a href="mailto:drduffy@bhhsnv.com" class="border-2 border-white text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white hover:text-vegas-deep-900 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2">
				Email Dr. Duffy
			</a>
		</div>
	</div>
</section>
