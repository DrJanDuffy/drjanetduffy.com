<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
</script>

<svelte:head>
	<title>Dr. Janet Duffy, REALTOR® | Luxury Las Vegas Real Estate Expert</title>
	<meta name="description" content="Dr. Janet Duffy, licensed REALTOR® specializing in luxury Las Vegas real estate. Expert guidance for buying, selling, and investing in West Summerlin, The Ridges, and premier Las Vegas communities." />
	<meta name="keywords" content="Las Vegas real estate, luxury homes Las Vegas, West Summerlin realtor, Dr. Janet Duffy, Las Vegas homes for sale" />
</svelte:head>

<!-- Hero Section -->
<section class="gradient-hero text-white section-sm relative overflow-hidden">
	<div class="container-premium">
		<div class="max-w-4xl mx-auto text-center animate-fade-in-up">
			<h1 class="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-lg">
				Dr. Janet Duffy
			</h1>
			<p class="text-2xl md:text-3xl font-semibold mb-4 text-white/90">Licensed REALTOR®</p>
			<p class="text-xl md:text-2xl mb-10 text-white/80 max-w-2xl mx-auto">
				Your Trusted Las Vegas Real Estate Expert
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="/properties" class="btn-primary text-lg px-8 py-4">
					View Properties
				</a>
				<a href="/home-value" class="btn-secondary text-lg px-8 py-4">
					Get Home Value
				</a>
				<a href="/contact" class="btn-outline text-lg px-8 py-4">
					Contact Me
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Why Choose Section -->
<section class="section gradient-section">
	<div class="container-premium">
		<h2 class="font-display text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
			Why Choose Dr. Janet Duffy?
		</h2>
		<div class="grid-premium md:grid-cols-3">
			<div class="card-luxury text-center hover-lift">
				<div class="text-6xl mb-6">🏆</div>
				<h3 class="font-display text-2xl font-bold mb-4 text-gray-900">15+ Years Experience</h3>
				<p class="text-gray-700 leading-relaxed">
					Extensive knowledge of the Las Vegas real estate market with a proven track record of successful transactions.
				</p>
			</div>
			<div class="card-luxury text-center hover-lift animate-fade-in-up" style="animation-delay: 0.1s">
				<div class="text-6xl mb-6">🎯</div>
				<h3 class="font-display text-2xl font-bold mb-4 text-gray-900">Expert Guidance</h3>
				<p class="text-gray-700 leading-relaxed">
					Personalized service tailored to your unique needs, whether buying, selling, or investing in Las Vegas real estate.
				</p>
			</div>
			<div class="card-luxury text-center hover-lift animate-fade-in-up" style="animation-delay: 0.2s">
				<div class="text-6xl mb-6">📍</div>
				<h3 class="font-display text-2xl font-bold mb-4 text-gray-900">Local Expertise</h3>
				<p class="text-gray-700 leading-relaxed">
					Deep understanding of Las Vegas neighborhoods, market trends, and the unique characteristics of each community.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Services Section -->
<section class="section">
	<div class="container-premium">
		<h2 class="font-display text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
			Comprehensive Real Estate Services
		</h2>
		<div class="grid-premium md:grid-cols-2">
			<div class="card hover-glow">
				<h3 class="font-display text-2xl font-bold mb-4 text-gray-900">🏠 Buying a Home</h3>
				<p class="text-gray-700 mb-6 leading-relaxed">
					Find your perfect Las Vegas home with expert guidance through every step of the buying process. From property search to closing, I'll help you navigate the market with confidence.
				</p>
				<a href="/properties" class="text-primary-600 font-semibold hover:text-primary-700 inline-flex items-center gap-2">
					Browse Properties <span>→</span>
				</a>
			</div>
			<div class="card hover-glow">
				<h3 class="font-display text-2xl font-bold mb-4 text-gray-900">💰 Selling Your Home</h3>
				<p class="text-gray-700 mb-6 leading-relaxed">
					Maximize your home's value with strategic marketing, professional staging advice, and expert negotiation. Get a free home valuation to start.
				</p>
				<a href="/home-value" class="text-primary-600 font-semibold hover:text-primary-700 inline-flex items-center gap-2">
					Get Free Valuation <span>→</span>
				</a>
			</div>
			<div class="card hover-glow">
				<h3 class="font-display text-2xl font-bold mb-4 text-gray-900">🔑 Rental Properties</h3>
				<p class="text-gray-700 mb-6 leading-relaxed">
					Explore luxury rental opportunities throughout Las Vegas. Find the perfect rental property or list your property for rent.
				</p>
				<a href="/rentals" class="text-primary-600 font-semibold hover:text-primary-700 inline-flex items-center gap-2">
					View Rentals <span>→</span>
				</a>
			</div>
			<div class="card hover-glow">
				<h3 class="font-display text-2xl font-bold mb-4 text-gray-900">📊 Investment Properties</h3>
				<p class="text-gray-700 mb-6 leading-relaxed">
					Build your real estate portfolio with strategic investment opportunities in Las Vegas. Expert analysis and market insights to help you make informed decisions.
				</p>
				<a href="/properties" class="text-primary-600 font-semibold hover:text-primary-700 inline-flex items-center gap-2">
					Explore Investments <span>→</span>
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Featured Communities -->
<section class="section gradient-section">
	<div class="container-premium">
		<h2 class="font-display text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
			Featured Las Vegas Communities
		</h2>
		<div class="grid-premium md:grid-cols-3">
			<div class="card-luxury hover-lift">
				<h3 class="font-display text-xl font-bold mb-3 text-gray-900">West Summerlin</h3>
				<p class="text-gray-700 mb-6 leading-relaxed">Luxury homes in one of Las Vegas's most prestigious master-planned communities.</p>
				<a href="/properties?neighborhood=west-summerlin" class="text-primary-600 font-semibold hover:text-primary-700 inline-flex items-center gap-2">
					View Properties <span>→</span>
				</a>
			</div>
			<div class="card-luxury hover-lift">
				<h3 class="font-display text-xl font-bold mb-3 text-gray-900">The Ridges</h3>
				<p class="text-gray-700 mb-6 leading-relaxed">Exclusive gated community with stunning mountain views and luxury amenities.</p>
				<a href="/properties?neighborhood=the-ridges" class="text-primary-600 font-semibold hover:text-primary-700 inline-flex items-center gap-2">
					View Properties <span>→</span>
				</a>
			</div>
			<div class="card-luxury hover-lift">
				<h3 class="font-display text-xl font-bold mb-3 text-gray-900">Red Rock Country Club</h3>
				<p class="text-gray-700 mb-6 leading-relaxed">Premier golf course community with luxury estates and world-class amenities.</p>
				<a href="/properties?neighborhood=red-rock" class="text-primary-600 font-semibold hover:text-primary-700 inline-flex items-center gap-2">
					View Properties <span>→</span>
				</a>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="section gradient-hero text-white relative overflow-hidden">
	<div class="container-premium">
		<div class="max-w-4xl mx-auto text-center animate-fade-in-up">
			<h2 class="font-display text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg">
				Ready to Start Your Real Estate Journey?
			</h2>
			<p class="text-xl md:text-2xl mb-10 text-white/90 max-w-2xl mx-auto">
				Let's discuss your real estate goals and how I can help you achieve them.
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="/contact" class="btn-primary text-lg px-8 py-4">
					Schedule Consultation
				</a>
				<a href="/home-value" class="btn-outline text-lg px-8 py-4">
					Get Free Home Valuation
				</a>
			</div>
		</div>
	</div>
</section>
