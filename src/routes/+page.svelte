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

<!-- Hero Section -->
<section class="relative overflow-hidden bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 text-white" style="min-height: 90vh; display: flex; align-items: center;">
	<!-- Animated Background Elements -->
	<div class="absolute inset-0 overflow-hidden">
		<div class="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
		<div class="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
		<div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-white/10 to-transparent rounded-full blur-3xl"></div>
	</div>
	
	<div class="container-premium relative z-10">
		<div class="max-w-5xl mx-auto text-center animate-fade-in-up">
			<div class="mb-6">
				<span class="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6 border border-white/30">
					🏆 Award-Winning Real Estate Expert
				</span>
			</div>
			<h1 class="font-display text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-white drop-shadow-2xl leading-tight" style="text-shadow: 0 4px 20px rgba(0,0,0,0.3);">
				Dr. Janet Duffy
			</h1>
			<p class="text-3xl md:text-4xl font-semibold mb-4 text-white/95" style="text-shadow: 0 2px 10px rgba(0,0,0,0.2);">
				Licensed REALTOR®
			</p>
			<p class="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed" style="text-shadow: 0 1px 5px rgba(0,0,0,0.1);">
				Your Trusted Las Vegas Real Estate Expert
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
				<a href="/properties" class="group relative overflow-hidden bg-white text-primary-700 px-10 py-5 rounded-xl font-bold text-lg shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:scale-110 hover:-translate-y-1">
					<span class="relative z-10">View Properties</span>
					<div class="absolute inset-0 bg-gradient-to-r from-primary-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
				</a>
				<a href="/home-value" class="group relative overflow-hidden bg-primary-500/90 backdrop-blur-sm text-white border-2 border-white/30 px-10 py-5 rounded-xl font-bold text-lg shadow-xl hover:bg-white hover:text-primary-700 transition-all duration-300 hover:scale-110 hover:-translate-y-1">
					<span class="relative z-10">Get Home Value</span>
				</a>
				<a href="/contact" class="group relative overflow-hidden bg-transparent text-white border-2 border-white px-10 py-5 rounded-xl font-bold text-lg backdrop-blur-sm hover:bg-white hover:text-primary-700 transition-all duration-300 hover:scale-110 hover:-translate-y-1">
					<span class="relative z-10">Contact Me</span>
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Why Choose Section -->
<section class="section relative" style="background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);">
	<div class="container-premium">
		<div class="text-center mb-20">
			<h2 class="font-display text-5xl md:text-6xl font-bold mb-6 text-gray-900" style="letter-spacing: -0.03em;">
				Why Choose Dr. Janet Duffy?
			</h2>
			<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-4"></div>
			<p class="text-xl text-gray-600 max-w-2xl mx-auto">
				Experience the difference that expertise, dedication, and personalized service make
			</p>
		</div>
		<div class="grid-premium md:grid-cols-3">
			<div class="group relative bg-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 overflow-hidden">
				<div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-100 to-transparent rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
				<div class="relative z-10 text-center">
					<div class="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500">
						<span class="text-4xl">🏆</span>
					</div>
					<h3 class="font-display text-2xl font-bold mb-4 text-gray-900">15+ Years Experience</h3>
					<p class="text-gray-700 leading-relaxed text-lg">
						Extensive knowledge of the Las Vegas real estate market with a proven track record of successful transactions.
					</p>
				</div>
			</div>
			<div class="group relative bg-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 overflow-hidden animate-fade-in-up" style="animation-delay: 0.1s">
				<div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-100 to-transparent rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
				<div class="relative z-10 text-center">
					<div class="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500">
						<span class="text-4xl">🎯</span>
					</div>
					<h3 class="font-display text-2xl font-bold mb-4 text-gray-900">Expert Guidance</h3>
					<p class="text-gray-700 leading-relaxed text-lg">
						Personalized service tailored to your unique needs, whether buying, selling, or investing in Las Vegas real estate.
					</p>
				</div>
			</div>
			<div class="group relative bg-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 overflow-hidden animate-fade-in-up" style="animation-delay: 0.2s">
				<div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-100 to-transparent rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
				<div class="relative z-10 text-center">
					<div class="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500">
						<span class="text-4xl">📍</span>
					</div>
					<h3 class="font-display text-2xl font-bold mb-4 text-gray-900">Local Expertise</h3>
					<p class="text-gray-700 leading-relaxed text-lg">
						Deep understanding of Las Vegas neighborhoods, market trends, and the unique characteristics of each community.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Services Section -->
<section class="section relative bg-white">
	<div class="container-premium">
		<div class="text-center mb-20">
			<h2 class="font-display text-5xl md:text-6xl font-bold mb-6 text-gray-900" style="letter-spacing: -0.03em;">
				Comprehensive Real Estate Services
			</h2>
			<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-4"></div>
			<p class="text-xl text-gray-600 max-w-2xl mx-auto">
				Everything you need for your real estate journey in Las Vegas
			</p>
		</div>
		<div class="grid-premium md:grid-cols-2">
			<div class="group relative bg-gradient-to-br from-white to-primary-50/50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden">
				<div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
				<div class="flex items-start gap-6">
					<div class="flex-shrink-0">
						<div class="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
							<span class="text-3xl">🏠</span>
						</div>
					</div>
					<div class="flex-1">
						<h3 class="font-display text-2xl font-bold mb-3 text-gray-900">Buying a Home</h3>
						<p class="text-gray-700 mb-6 leading-relaxed text-lg">
							Find your perfect Las Vegas home with expert guidance through every step of the buying process. From property search to closing, I'll help you navigate the market with confidence.
						</p>
						<a href="/properties" class="inline-flex items-center gap-2 text-primary-600 font-bold hover:text-primary-700 hover:gap-3 transition-all duration-300">
							Browse Properties <span class="text-xl">→</span>
						</a>
					</div>
				</div>
			</div>
			<div class="group relative bg-gradient-to-br from-white to-primary-50/50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden">
				<div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
				<div class="flex items-start gap-6">
					<div class="flex-shrink-0">
						<div class="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
							<span class="text-3xl">💰</span>
						</div>
					</div>
					<div class="flex-1">
						<h3 class="font-display text-2xl font-bold mb-3 text-gray-900">Selling Your Home</h3>
						<p class="text-gray-700 mb-6 leading-relaxed text-lg">
							Maximize your home's value with strategic marketing, professional staging advice, and expert negotiation. Get a free home valuation to start.
						</p>
						<a href="/home-value" class="inline-flex items-center gap-2 text-primary-600 font-bold hover:text-primary-700 hover:gap-3 transition-all duration-300">
							Get Free Valuation <span class="text-xl">→</span>
						</a>
					</div>
				</div>
			</div>
			<div class="group relative bg-gradient-to-br from-white to-primary-50/50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden">
				<div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
				<div class="flex items-start gap-6">
					<div class="flex-shrink-0">
						<div class="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
							<span class="text-3xl">🔑</span>
						</div>
					</div>
					<div class="flex-1">
						<h3 class="font-display text-2xl font-bold mb-3 text-gray-900">Rental Properties</h3>
						<p class="text-gray-700 mb-6 leading-relaxed text-lg">
							Explore luxury rental opportunities throughout Las Vegas. Find the perfect rental property or list your property for rent.
						</p>
						<a href="/rentals" class="inline-flex items-center gap-2 text-primary-600 font-bold hover:text-primary-700 hover:gap-3 transition-all duration-300">
							View Rentals <span class="text-xl">→</span>
						</a>
					</div>
				</div>
			</div>
			<div class="group relative bg-gradient-to-br from-white to-primary-50/50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden">
				<div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
				<div class="flex items-start gap-6">
					<div class="flex-shrink-0">
						<div class="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
							<span class="text-3xl">📊</span>
						</div>
					</div>
					<div class="flex-1">
						<h3 class="font-display text-2xl font-bold mb-3 text-gray-900">Investment Properties</h3>
						<p class="text-gray-700 mb-6 leading-relaxed text-lg">
							Build your real estate portfolio with strategic investment opportunities in Las Vegas. Expert analysis and market insights to help you make informed decisions.
						</p>
						<a href="/properties" class="inline-flex items-center gap-2 text-primary-600 font-bold hover:text-primary-700 hover:gap-3 transition-all duration-300">
							Explore Investments <span class="text-xl">→</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Featured Communities -->
<section class="section relative" style="background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);">
	<div class="container-premium">
		<div class="text-center mb-20">
			<h2 class="font-display text-5xl md:text-6xl font-bold mb-6 text-gray-900" style="letter-spacing: -0.03em;">
				Featured Las Vegas Communities
			</h2>
			<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-4"></div>
			<p class="text-xl text-gray-600 max-w-2xl mx-auto">
				Discover the finest neighborhoods Las Vegas has to offer
			</p>
		</div>
		<div class="grid-premium md:grid-cols-3">
			<div class="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 overflow-hidden">
				<div class="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
				<div class="relative z-10">
					<div class="w-12 h-1 bg-gradient-to-r from-primary-500 to-primary-700 rounded-full mb-6"></div>
					<h3 class="font-display text-2xl font-bold mb-4 text-gray-900">West Summerlin</h3>
					<p class="text-gray-700 mb-6 leading-relaxed text-lg">
						Luxury homes in one of Las Vegas's most prestigious master-planned communities.
					</p>
					<a href="/properties" class="inline-flex items-center gap-2 text-primary-600 font-bold hover:text-primary-700 hover:gap-3 transition-all duration-300">
						View Properties <span class="text-xl">→</span>
					</a>
				</div>
			</div>
			<div class="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 overflow-hidden">
				<div class="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
				<div class="relative z-10">
					<div class="w-12 h-1 bg-gradient-to-r from-primary-500 to-primary-700 rounded-full mb-6"></div>
					<h3 class="font-display text-2xl font-bold mb-4 text-gray-900">The Ridges</h3>
					<p class="text-gray-700 mb-6 leading-relaxed text-lg">
						Exclusive gated community with stunning mountain views and luxury amenities.
					</p>
					<a href="/properties" class="inline-flex items-center gap-2 text-primary-600 font-bold hover:text-primary-700 hover:gap-3 transition-all duration-300">
						View Properties <span class="text-xl">→</span>
					</a>
				</div>
			</div>
			<div class="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 overflow-hidden">
				<div class="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
				<div class="relative z-10">
					<div class="w-12 h-1 bg-gradient-to-r from-primary-500 to-primary-700 rounded-full mb-6"></div>
					<h3 class="font-display text-2xl font-bold mb-4 text-gray-900">Red Rock Country Club</h3>
					<p class="text-gray-700 mb-6 leading-relaxed text-lg">
						Premier golf course community with luxury estates and world-class amenities.
					</p>
					<a href="/properties" class="inline-flex items-center gap-2 text-primary-600 font-bold hover:text-primary-700 hover:gap-3 transition-all duration-300">
						View Properties <span class="text-xl">→</span>
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Testimonials Section -->
<section class="section relative bg-white">
	<div class="container-premium">
		<div class="text-center mb-20">
			<h2 class="font-display text-5xl md:text-6xl font-bold mb-6 text-gray-900" style="letter-spacing: -0.03em;">
				What My Clients Say
			</h2>
			<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-4"></div>
			<p class="text-xl text-gray-600 max-w-2xl mx-auto">
				Real experiences from satisfied clients across Las Vegas
			</p>
		</div>
		<div class="grid-premium md:grid-cols-3 gap-8">
			<div class="group relative bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
				<div class="mb-6">
					<div class="flex items-center gap-1 mb-4">
						{#each Array(5) as _}
							<svg class="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
								<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
							</svg>
						{/each}
					</div>
					<p class="text-gray-700 leading-relaxed text-lg mb-6">
						"Dr. Duffy made our first home buying experience seamless. Her knowledge of the Las Vegas market and attention to detail helped us find the perfect home within our budget."
					</p>
				</div>
				<div class="border-t border-gray-200 pt-6">
					<div class="font-display font-bold text-gray-900 text-lg">Sarah & Mike Johnson</div>
					<div class="text-sm text-gray-600">First-time Buyers</div>
				</div>
			</div>
			<div class="group relative bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
				<div class="mb-6">
					<div class="flex items-center gap-1 mb-4">
						{#each Array(5) as _}
							<svg class="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
								<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
							</svg>
						{/each}
					</div>
					<p class="text-gray-700 leading-relaxed text-lg mb-6">
						"Jan's expertise in luxury properties is unmatched. She helped us sell our home for 15% above asking price and found us an incredible investment property."
					</p>
				</div>
				<div class="border-t border-gray-200 pt-6">
					<div class="font-display font-bold text-gray-900 text-lg">Robert Chen</div>
					<div class="text-sm text-gray-600">Luxury Home Seller & Investor</div>
				</div>
			</div>
			<div class="group relative bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
				<div class="mb-6">
					<div class="flex items-center gap-1 mb-4">
						{#each Array(5) as _}
							<svg class="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
								<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
							</svg>
						{/each}
					</div>
					<p class="text-gray-700 leading-relaxed text-lg mb-6">
						"Professional, responsive, and results-driven. Jan's market knowledge and negotiation skills saved us thousands on our home purchase."
					</p>
				</div>
				<div class="border-t border-gray-200 pt-6">
					<div class="font-display font-bold text-gray-900 text-lg">Lisa Martinez</div>
					<div class="text-sm text-gray-600">Relocating from California</div>
				</div>
			</div>
		</div>
		<div class="text-center mt-12">
			<a href="/about#testimonials" class="inline-flex items-center gap-2 text-primary-600 font-bold hover:text-primary-700 hover:gap-3 transition-all duration-300 text-lg">
				Read More Testimonials <span class="text-xl">→</span>
			</a>
		</div>
	</div>
</section>

<!-- Market Statistics Section -->
<section class="section relative" style="background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);">
	<div class="container-premium">
		<div class="text-center mb-20">
			<h2 class="font-display text-5xl md:text-6xl font-bold mb-6 text-gray-900" style="letter-spacing: -0.03em;">
				Las Vegas Market Insights
			</h2>
			<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-4"></div>
			<p class="text-xl text-gray-600 max-w-2xl mx-auto">
				Current market trends and statistics to guide your real estate decisions
			</p>
		</div>
		<div class="grid-premium md:grid-cols-4 gap-8">
			<div class="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
				<div class="text-5xl font-display font-bold text-primary-600 mb-4">$485K</div>
				<div class="text-gray-600 font-semibold mb-2">Median Home Price</div>
				<div class="text-sm text-gray-500">Single-family homes</div>
			</div>
			<div class="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
				<div class="text-5xl font-display font-bold text-primary-600 mb-4">46</div>
				<div class="text-gray-600 font-semibold mb-2">Days on Market</div>
				<div class="text-sm text-gray-500">Average time to sell</div>
			</div>
			<div class="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
				<div class="text-5xl font-display font-bold text-primary-600 mb-4">98%</div>
				<div class="text-gray-600 font-semibold mb-2">List Price Received</div>
				<div class="text-sm text-gray-500">Average sale price ratio</div>
			</div>
			<div class="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
				<div class="text-5xl font-display font-bold text-primary-600 mb-4">4</div>
				<div class="text-gray-600 font-semibold mb-2">Months Supply</div>
				<div class="text-sm text-gray-500">Current inventory level</div>
			</div>
		</div>
		<div class="text-center mt-12">
			<p class="text-gray-600 mb-4">Data based on October 2025 Las Vegas real estate market</p>
			<a href="/blog" class="inline-flex items-center gap-2 text-primary-600 font-bold hover:text-primary-700 hover:gap-3 transition-all duration-300">
				Read Market Reports <span class="text-xl">→</span>
			</a>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="relative overflow-hidden bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 text-white py-24" style="position: relative;">
	<!-- Animated Background -->
	<div class="absolute inset-0 overflow-hidden">
		<div class="absolute top-1/4 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
		<div class="absolute bottom-1/4 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style="animation-delay: 1.5s;"></div>
	</div>
	
	<div class="container-premium relative z-10">
		<div class="max-w-4xl mx-auto text-center animate-fade-in-up">
			<h2 class="font-display text-5xl md:text-6xl font-bold mb-6 text-white" style="text-shadow: 0 4px 20px rgba(0,0,0,0.3); letter-spacing: -0.02em;">
				Ready to Start Your Real Estate Journey?
			</h2>
			<p class="text-xl md:text-2xl mb-12 text-white/95 max-w-2xl mx-auto leading-relaxed" style="text-shadow: 0 2px 10px rgba(0,0,0,0.2);">
				Let's discuss your real estate goals and how I can help you achieve them.
			</p>
			<div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
				<a href="/contact" class="group relative overflow-hidden bg-white text-primary-700 px-10 py-5 rounded-xl font-bold text-lg shadow-2xl hover:shadow-white/30 transition-all duration-300 hover:scale-110 hover:-translate-y-1">
					<span class="relative z-10">Schedule Consultation</span>
					<div class="absolute inset-0 bg-gradient-to-r from-primary-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
				</a>
				<a href="/home-value" class="group relative overflow-hidden bg-transparent text-white border-2 border-white/50 px-10 py-5 rounded-xl font-bold text-lg backdrop-blur-sm hover:bg-white hover:text-primary-700 transition-all duration-300 hover:scale-110 hover:-translate-y-1">
					<span class="relative z-10">Get Free Home Valuation</span>
				</a>
			</div>
		</div>
	</div>
</section>
