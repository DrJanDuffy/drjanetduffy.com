<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
</script>

<svelte:head>
	<title>Dr. Janet Duffy, REALTOR® | Luxury Las Vegas Real Estate Expert</title>
	<meta name="description" content="Dr. Janet Duffy, licensed REALTOR® specializing in luxury Las Vegas real estate. Expert guidance for buying, selling, and investing in West Summerlin, The Ridges, and premier Las Vegas communities." />
	<meta name="keywords" content="Las Vegas real estate, luxury homes Las Vegas, West Summerlin realtor, Dr. Janet Duffy, Las Vegas homes for sale" />
	
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://drjanetduffy.com/" />
	<meta property="og:title" content="Dr. Janet Duffy, REALTOR® | Luxury Las Vegas Real Estate Expert" />
	<meta property="og:description" content="Expert guidance for buying, selling, and investing in Las Vegas real estate. 15+ years of experience serving West Summerlin, The Ridges, and premier communities." />
	
	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://drjanetduffy.com/" />
	<meta property="twitter:title" content="Dr. Janet Duffy, REALTOR® | Luxury Las Vegas Real Estate Expert" />
	<meta property="twitter:description" content="Expert guidance for buying, selling, and investing in Las Vegas real estate." />
	
	<!-- Structured Data -->
	<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "RealEstateAgent",
		"name": "Dr. Janet Duffy",
		"description": "Licensed REALTOR® specializing in luxury Las Vegas real estate with 15+ years of experience",
		"url": "https://drjanetduffy.com",
		"telephone": "702-222-1964",
		"email": "drduffy@bhhsnv.com",
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "Las Vegas",
			"addressRegion": "NV",
			"addressCountry": "US"
		},
		"worksFor": {
			"@type": "RealEstateAgent",
			"name": "Berkshire Hathaway Nevada Properties"
		},
		"areaServed": {
			"@type": "City",
			"name": "Las Vegas"
		}
	}
	</script>
	<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "WebSite",
		"name": "Dr. Janet Duffy, REALTOR®",
		"url": "https://drjanetduffy.com",
		"potentialAction": {
			"@type": "SearchAction",
			"target": "https://drjanetduffy.com/properties?search={search_term_string}",
			"query-input": "required name=search_term_string"
		}
	}
	</script>
</svelte:head>

<!-- Hero Section with Search -->
<section class="relative bg-white pt-24 pb-16">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-6xl mx-auto">
			<!-- Hero Content -->
			<div class="text-center mb-12">
				<h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 tracking-tight">
					Find Your Dream Home in Las Vegas
				</h1>
				<p class="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
					Expert real estate guidance from Dr. Janet Duffy, REALTOR®
				</p>
			</div>
			
			<!-- Search Form Card -->
			<div class="bg-white rounded-2xl shadow-2xl border border-gray-200 p-8 md:p-10">
				<form class="space-y-6">
					<div class="grid md:grid-cols-4 gap-4">
						<div class="md:col-span-2">
							<label class="block text-sm font-semibold text-gray-700 mb-2">Location</label>
							<input 
								type="text" 
								placeholder="Enter city, neighborhood, or ZIP"
								class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-900 placeholder-gray-400"
							/>
						</div>
						<div>
							<label class="block text-sm font-semibold text-gray-700 mb-2">Property Type</label>
							<select class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-900 bg-white">
								<option>All Types</option>
								<option>Single Family</option>
								<option>Condos</option>
								<option>Townhomes</option>
								<option>Luxury Estates</option>
							</select>
						</div>
						<div>
							<label class="block text-sm font-semibold text-gray-700 mb-2">Price Range</label>
							<select class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-900 bg-white">
								<option>Any Price</option>
								<option>Under $300K</option>
								<option>$300K - $500K</option>
								<option>$500K - $750K</option>
								<option>$750K - $1M</option>
								<option>Over $1M</option>
							</select>
						</div>
					</div>
					<div class="flex flex-col sm:flex-row gap-4">
						<div class="flex-1">
							<label class="block text-sm font-semibold text-gray-700 mb-2">Bedrooms</label>
							<select class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-900 bg-white">
								<option>Any</option>
								<option>1+</option>
								<option>2+</option>
								<option>3+</option>
								<option>4+</option>
								<option>5+</option>
							</select>
						</div>
						<div class="flex-1">
							<label class="block text-sm font-semibold text-gray-700 mb-2">Bathrooms</label>
							<select class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-900 bg-white">
								<option>Any</option>
								<option>1+</option>
								<option>2+</option>
								<option>3+</option>
								<option>4+</option>
							</select>
						</div>
						<div class="flex items-end">
							<button 
								type="submit"
								class="w-full sm:w-auto bg-primary-600 hover:bg-primary-700 text-white font-bold px-10 py-3 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
							>
								Search Properties
							</button>
						</div>
					</div>
				</form>
			</div>
			
			<!-- Quick Stats -->
			<div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
				<div class="text-center">
					<div class="text-3xl md:text-4xl font-bold text-primary-600 mb-1">150+</div>
					<div class="text-sm text-gray-600">Properties Sold</div>
				</div>
				<div class="text-center">
					<div class="text-3xl md:text-4xl font-bold text-primary-600 mb-1">15+</div>
					<div class="text-sm text-gray-600">Years Experience</div>
				</div>
				<div class="text-center">
					<div class="text-3xl md:text-4xl font-bold text-primary-600 mb-1">98%</div>
					<div class="text-sm text-gray-600">Client Satisfaction</div>
				</div>
				<div class="text-center">
					<div class="text-3xl md:text-4xl font-bold text-primary-600 mb-1">$50M+</div>
					<div class="text-sm text-gray-600">Sales Volume</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Featured Properties Section -->
<section class="py-16 bg-gray-50">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-7xl mx-auto">
			<div class="flex justify-between items-center mb-10">
				<div>
					<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Featured Properties</h2>
					<p class="text-gray-600">Discover luxury homes in Las Vegas</p>
				</div>
				<a href="/properties" class="text-primary-600 hover:text-primary-700 font-semibold">
					View All →
				</a>
			</div>
			
			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
				<!-- Property Card 1 -->
				<div class="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200">
					<div class="h-64 bg-gradient-to-br from-primary-100 to-primary-200 relative">
						<div class="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-bold text-primary-600">
							For Sale
						</div>
					</div>
					<div class="p-6">
						<div class="text-2xl font-bold text-gray-900 mb-2">$485,000</div>
						<h3 class="text-lg font-semibold text-gray-900 mb-2">Luxury Home in West Summerlin</h3>
						<p class="text-gray-600 text-sm mb-4">1234 Desert View Dr, Las Vegas, NV 89138</p>
						<div class="flex items-center gap-4 text-sm text-gray-600 mb-4">
							<span>4 Beds</span>
							<span>3 Baths</span>
							<span>2,500 sqft</span>
						</div>
						<a href="/properties" class="block w-full text-center bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 rounded-lg transition-colors">
							View Details
						</a>
					</div>
				</div>
				
				<!-- Property Card 2 -->
				<div class="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200">
					<div class="h-64 bg-gradient-to-br from-primary-200 to-primary-300 relative">
						<div class="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-bold text-primary-600">
							For Sale
						</div>
					</div>
					<div class="p-6">
						<div class="text-2xl font-bold text-gray-900 mb-2">$625,000</div>
						<h3 class="text-lg font-semibold text-gray-900 mb-2">Modern Estate in The Ridges</h3>
						<p class="text-gray-600 text-sm mb-4">5678 Mountain Peak Way, Las Vegas, NV 89144</p>
						<div class="flex items-center gap-4 text-sm text-gray-600 mb-4">
							<span>5 Beds</span>
							<span>4 Baths</span>
							<span>3,200 sqft</span>
						</div>
						<a href="/properties" class="block w-full text-center bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 rounded-lg transition-colors">
							View Details
						</a>
					</div>
				</div>
				
				<!-- Property Card 3 -->
				<div class="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200">
					<div class="h-64 bg-gradient-to-br from-primary-300 to-primary-400 relative">
						<div class="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-bold text-primary-600">
							For Sale
						</div>
					</div>
					<div class="p-6">
						<div class="text-2xl font-bold text-gray-900 mb-2">$350,000</div>
						<h3 class="text-lg font-semibold text-gray-900 mb-2">Charming Condo in Green Valley</h3>
						<p class="text-gray-600 text-sm mb-4">9012 Valley View Ln, Las Vegas, NV 89123</p>
						<div class="flex items-center gap-4 text-sm text-gray-600 mb-4">
							<span>2 Beds</span>
							<span>2 Baths</span>
							<span>1,400 sqft</span>
						</div>
						<a href="/properties" class="block w-full text-center bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 rounded-lg transition-colors">
							View Details
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Why Choose Section -->
<section class="py-16 bg-white">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-7xl mx-auto">
			<div class="text-center mb-12">
				<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Why Choose Dr. Janet Duffy?</h2>
				<p class="text-gray-600 text-lg">Expert real estate guidance you can trust</p>
			</div>
			<div class="grid md:grid-cols-3 gap-8">
				<div class="text-center">
					<div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
						<span class="text-3xl">🏆</span>
					</div>
					<h3 class="text-xl font-bold text-gray-900 mb-2">15+ Years Experience</h3>
					<p class="text-gray-600">
						Proven track record of successful transactions in the Las Vegas market.
					</p>
				</div>
				<div class="text-center">
					<div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
						<span class="text-3xl">🎯</span>
					</div>
					<h3 class="text-xl font-bold text-gray-900 mb-2">Expert Guidance</h3>
					<p class="text-gray-600">
						Personalized service tailored to your unique real estate needs.
					</p>
				</div>
				<div class="text-center">
					<div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
						<span class="text-3xl">📍</span>
					</div>
					<h3 class="text-xl font-bold text-gray-900 mb-2">Local Expertise</h3>
					<p class="text-gray-600">
						Deep knowledge of Las Vegas neighborhoods and market trends.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Services Section -->
<section class="py-16 bg-gray-50">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-7xl mx-auto">
			<div class="text-center mb-12">
				<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Our Services</h2>
				<p class="text-gray-600 text-lg">Comprehensive real estate solutions for all your needs</p>
			</div>
			<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
				<a href="/properties" class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-200 group">
					<div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-600 transition-colors">
						<span class="text-2xl">🏠</span>
					</div>
					<h3 class="text-lg font-bold text-gray-900 mb-2">Buying</h3>
					<p class="text-gray-600 text-sm">Find your perfect home with expert guidance</p>
				</a>
				<a href="/home-value" class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-200 group">
					<div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-600 transition-colors">
						<span class="text-2xl">💰</span>
					</div>
					<h3 class="text-lg font-bold text-gray-900 mb-2">Selling</h3>
					<p class="text-gray-600 text-sm">Maximize your home's value</p>
				</a>
				<a href="/rentals" class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-200 group">
					<div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-600 transition-colors">
						<span class="text-2xl">🔑</span>
					</div>
					<h3 class="text-lg font-bold text-gray-900 mb-2">Rentals</h3>
					<p class="text-gray-600 text-sm">Luxury rental properties</p>
				</a>
				<a href="/properties" class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-200 group">
					<div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-600 transition-colors">
						<span class="text-2xl">📊</span>
					</div>
					<h3 class="text-lg font-bold text-gray-900 mb-2">Investments</h3>
					<p class="text-gray-600 text-sm">Build your portfolio</p>
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Featured Communities -->
<section class="py-16 bg-white">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-7xl mx-auto">
			<div class="text-center mb-12">
				<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Popular Neighborhoods</h2>
				<p class="text-gray-600 text-lg">Explore Las Vegas's most sought-after communities</p>
			</div>
			<div class="grid md:grid-cols-3 gap-6">
				<a href="/properties?neighborhood=west-summerlin" class="group bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-200 overflow-hidden">
					<div class="h-48 bg-gradient-to-br from-primary-100 to-primary-200"></div>
					<div class="p-6">
						<h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">West Summerlin</h3>
						<p class="text-gray-600 text-sm mb-4">Luxury master-planned community</p>
						<span class="text-primary-600 font-semibold text-sm">View Properties →</span>
					</div>
				</a>
				<a href="/properties?neighborhood=the-ridges" class="group bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-200 overflow-hidden">
					<div class="h-48 bg-gradient-to-br from-primary-200 to-primary-300"></div>
					<div class="p-6">
						<h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">The Ridges</h3>
						<p class="text-gray-600 text-sm mb-4">Exclusive gated community</p>
						<span class="text-primary-600 font-semibold text-sm">View Properties →</span>
					</div>
				</a>
				<a href="/properties?neighborhood=red-rock" class="group bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-200 overflow-hidden">
					<div class="h-48 bg-gradient-to-br from-primary-300 to-primary-400"></div>
					<div class="p-6">
						<h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">Red Rock Country Club</h3>
						<p class="text-gray-600 text-sm mb-4">Premier golf course community</p>
						<span class="text-primary-600 font-semibold text-sm">View Properties →</span>
					</div>
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Testimonials Section -->
<section class="py-16 bg-gray-50">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-7xl mx-auto">
			<div class="text-center mb-12">
				<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Client Testimonials</h2>
				<p class="text-gray-600 text-lg">What our clients say about working with us</p>
			</div>
			<div class="grid md:grid-cols-3 gap-6">
				<div class="bg-white rounded-xl p-6 shadow-md border border-gray-200">
					<div class="flex items-center gap-1 mb-4">
						{#each Array(5) as _}
							<svg class="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
								<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
							</svg>
						{/each}
					</div>
					<p class="text-gray-700 mb-4">
						"Dr. Duffy made our first home buying experience seamless. Her knowledge of the Las Vegas market and attention to detail helped us find the perfect home."
					</p>
					<div class="border-t border-gray-100 pt-4">
						<div class="font-bold text-gray-900">Sarah & Mike Johnson</div>
						<div class="text-sm text-gray-600">First-time Buyers</div>
					</div>
				</div>
				<div class="bg-white rounded-xl p-6 shadow-md border border-gray-200">
					<div class="flex items-center gap-1 mb-4">
						{#each Array(5) as _}
							<svg class="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
								<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
							</svg>
						{/each}
					</div>
					<p class="text-gray-700 mb-4">
						"Jan's expertise in luxury properties is unmatched. She helped us sell our home for 15% above asking price and found us an incredible investment property."
					</p>
					<div class="border-t border-gray-100 pt-4">
						<div class="font-bold text-gray-900">Robert Chen</div>
						<div class="text-sm text-gray-600">Luxury Home Seller & Investor</div>
					</div>
				</div>
				<div class="bg-white rounded-xl p-6 shadow-md border border-gray-200">
					<div class="flex items-center gap-1 mb-4">
						{#each Array(5) as _}
							<svg class="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
								<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
							</svg>
						{/each}
					</div>
					<p class="text-gray-700 mb-4">
						"Professional, responsive, and results-driven. Jan's market knowledge and negotiation skills saved us thousands on our home purchase."
					</p>
					<div class="border-t border-gray-100 pt-4">
						<div class="font-bold text-gray-900">Lisa Martinez</div>
						<div class="text-sm text-gray-600">Relocating from California</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Market Statistics Section -->
<section class="py-16 bg-white">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-7xl mx-auto">
			<div class="text-center mb-12">
				<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Market Insights</h2>
				<p class="text-gray-600 text-lg">Current Las Vegas real estate statistics</p>
			</div>
			<div class="grid md:grid-cols-4 gap-6">
				<div class="bg-gray-50 rounded-xl p-6 text-center border border-gray-200">
					<div class="text-3xl md:text-4xl font-bold text-primary-600 mb-2">$485K</div>
					<div class="text-gray-700 font-semibold">Median Home Price</div>
				</div>
				<div class="bg-gray-50 rounded-xl p-6 text-center border border-gray-200">
					<div class="text-3xl md:text-4xl font-bold text-primary-600 mb-2">46</div>
					<div class="text-gray-700 font-semibold">Days on Market</div>
				</div>
				<div class="bg-gray-50 rounded-xl p-6 text-center border border-gray-200">
					<div class="text-3xl md:text-4xl font-bold text-primary-600 mb-2">98%</div>
					<div class="text-gray-700 font-semibold">List Price Received</div>
				</div>
				<div class="bg-gray-50 rounded-xl p-6 text-center border border-gray-200">
					<div class="text-3xl md:text-4xl font-bold text-primary-600 mb-2">4</div>
					<div class="text-gray-700 font-semibold">Months Supply</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="py-16 bg-primary-600">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-4xl mx-auto text-center">
			<h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Find Your Dream Home?</h2>
			<p class="text-xl text-white/90 mb-8">
				Let's discuss your real estate goals and how I can help you achieve them.
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="/contact" class="bg-white text-primary-600 hover:bg-gray-100 font-bold px-8 py-3 rounded-lg transition-colors shadow-lg">
					Schedule Consultation
				</a>
				<a href="/home-value" class="bg-transparent text-white border-2 border-white hover:bg-white hover:text-primary-600 font-bold px-8 py-3 rounded-lg transition-colors">
					Get Free Home Valuation
				</a>
			</div>
		</div>
	</div>
</section>
