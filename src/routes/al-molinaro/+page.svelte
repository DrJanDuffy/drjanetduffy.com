<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
</script>

<svelte:head>
	<title>Al Molinaro, REALTOR® | Summerlin Las Vegas Real Estate Expert</title>
	<meta name="description" content="Al Molinaro, experienced REALTOR® specializing in Summerlin, Seven Hills, Green Valley Ranch, and Southern Highlands. Expert guidance for buying, selling, and investing in premier Las Vegas communities." />
	<meta name="keywords" content="Al Molinaro realtor, Summerlin real estate, Seven Hills homes, Green Valley Ranch, Southern Highlands, Las Vegas homes for sale" />
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
	<div class="container mx-auto px-4">
		<div class="max-w-4xl mx-auto text-center">
			<h1 class="text-5xl md:text-6xl font-bold mb-6">Al Molinaro</h1>
			<p class="text-2xl md:text-3xl font-semibold mb-4">Licensed REALTOR®</p>
			<p class="text-xl md:text-2xl mb-8 text-primary-100">
				Your Trusted Summerlin & Las Vegas Real Estate Expert
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="/al-molinaro/properties" class="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
					View Properties
				</a>
				<a href="/al-molinaro/home-value" class="bg-primary-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-400 transition-colors">
					Get Home Value
				</a>
				<a href="/al-molinaro/contact" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
					Contact Me
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Achievement Banner -->
<section class="py-8 bg-blue-600 text-white">
	<div class="container mx-auto px-4">
		<div class="max-w-6xl mx-auto">
			<div class="grid md:grid-cols-4 gap-6 text-center">
				<div>
					<div class="text-4xl font-bold mb-2">15+ Years</div>
					<div class="text-blue-100">Real Estate Experience</div>
				</div>
				<div>
					<div class="text-4xl font-bold mb-2">Summerlin</div>
					<div class="text-blue-100">Market Expert</div>
				</div>
				<div>
					<div class="text-4xl font-bold mb-2">200+</div>
					<div class="text-blue-100">Properties Sold</div>
				</div>
				<div>
					<div class="text-4xl font-bold mb-2">BHHS</div>
					<div class="text-blue-100">Nevada Properties</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Why Choose Section -->
<section class="py-16 bg-gray-50">
	<div class="container mx-auto px-4">
		<div class="max-w-6xl mx-auto">
			<h2 class="text-4xl font-bold text-center mb-12 text-gray-800">Why Choose Al Molinaro?</h2>
			<div class="grid md:grid-cols-3 gap-8">
				<div class="bg-white rounded-lg shadow-lg p-8 text-center">
					<div class="text-5xl mb-4">🏆</div>
					<h3 class="text-2xl font-bold mb-4 text-gray-800">Proven Excellence</h3>
					<p class="text-gray-600">
						Over 15 years of experience helping clients buy and sell properties in Summerlin, Seven Hills, Green Valley Ranch, Southern Highlands, and throughout Las Vegas.
					</p>
				</div>
				<div class="bg-white rounded-lg shadow-lg p-8 text-center">
					<div class="text-5xl mb-4">🎯</div>
					<h3 class="text-2xl font-bold mb-4 text-gray-800">Multi-Community Expert</h3>
					<p class="text-gray-600">
						Specialized knowledge of multiple premier Las Vegas communities, providing clients with comprehensive market insights and diverse property options.
					</p>
				</div>
				<div class="bg-white rounded-lg shadow-lg p-8 text-center">
					<div class="text-5xl mb-4">📍</div>
					<h3 class="text-2xl font-bold mb-4 text-gray-800">Client-Focused Service</h3>
					<p class="text-gray-600">
						Dedicated to understanding your unique needs and delivering personalized service that exceeds expectations from first contact through closing and beyond.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Services Section -->
<section class="py-16">
	<div class="container mx-auto px-4">
		<div class="max-w-6xl mx-auto">
			<h2 class="text-4xl font-bold text-center mb-12 text-gray-800">Comprehensive Real Estate Services</h2>
			<div class="grid md:grid-cols-2 gap-8">
				<div class="bg-primary-50 rounded-lg p-8">
					<h3 class="text-2xl font-bold mb-4 text-gray-800">🏠 Buying a Home</h3>
					<p class="text-gray-600 mb-4">
						Find your perfect home in Summerlin, Seven Hills, or other premier Las Vegas communities with expert guidance through every step of the buying process.
					</p>
					<a href="/al-molinaro/properties" class="text-primary-600 font-semibold hover:underline">
						Browse Properties →
					</a>
				</div>
				<div class="bg-primary-50 rounded-lg p-8">
					<h3 class="text-2xl font-bold mb-4 text-gray-800">💰 Selling Your Home</h3>
					<p class="text-gray-600 mb-4">
						Maximize your home's value with strategic marketing, professional staging advice, and expert negotiation backed by years of proven results.
					</p>
					<a href="/al-molinaro/home-value" class="text-primary-600 font-semibold hover:underline">
						Get Free Valuation →
					</a>
				</div>
				<div class="bg-primary-50 rounded-lg p-8">
					<h3 class="text-2xl font-bold mb-4 text-gray-800">🌟 Luxury Homes</h3>
					<p class="text-gray-600 mb-4">
						Specializing in luxury properties across multiple prestigious Las Vegas communities, from Seven Hills estates to Summerlin mansions.
					</p>
					<a href="/al-molinaro/contact" class="text-primary-600 font-semibold hover:underline">
						Learn More →
					</a>
				</div>
				<div class="bg-primary-50 rounded-lg p-8">
					<h3 class="text-2xl font-bold mb-4 text-gray-800">📊 Investment Properties</h3>
					<p class="text-gray-600 mb-4">
						Build your real estate portfolio with strategic investment opportunities. Expert analysis and market insights for informed decisions.
					</p>
					<a href="/al-molinaro/properties" class="text-primary-600 font-semibold hover:underline">
						Explore Investments →
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Featured Communities -->
<section class="py-16 bg-gray-50">
	<div class="container mx-auto px-4">
		<div class="max-w-6xl mx-auto">
			<h2 class="text-4xl font-bold text-center mb-12 text-gray-800">Featured Las Vegas Communities</h2>
			<div class="grid md:grid-cols-4 gap-6">
				<div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
					<h3 class="text-xl font-bold mb-2 text-gray-800">Summerlin</h3>
					<p class="text-gray-600 mb-4">Master-planned community with world-class amenities and Red Rock views.</p>
					<a href="/al-molinaro/properties?neighborhood=summerlin" class="text-primary-600 font-semibold hover:underline">
						View Properties →
					</a>
				</div>
				<div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
					<h3 class="text-xl font-bold mb-2 text-gray-800">Seven Hills</h3>
					<p class="text-gray-600 mb-4">Prestigious gated community with luxury homes and golf course.</p>
					<a href="/al-molinaro/properties?neighborhood=seven-hills" class="text-primary-600 font-semibold hover:underline">
						View Properties →
					</a>
				</div>
				<div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
					<h3 class="text-xl font-bold mb-2 text-gray-800">Green Valley Ranch</h3>
					<p class="text-gray-600 mb-4">Upscale community with resort-style living and amenities.</p>
					<a href="/al-molinaro/properties?neighborhood=green-valley-ranch" class="text-primary-600 font-semibold hover:underline">
						View Properties →
					</a>
				</div>
				<div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
					<h3 class="text-xl font-bold mb-2 text-gray-800">Southern Highlands</h3>
					<p class="text-gray-600 mb-4">Guard-gated luxury community with spectacular mountain views.</p>
					<a href="/al-molinaro/properties?neighborhood=southern-highlands" class="text-primary-600 font-semibold hover:underline">
						View Properties →
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="py-16 bg-primary-600 text-white">
	<div class="container mx-auto px-4">
		<div class="max-w-4xl mx-auto text-center">
			<h2 class="text-4xl font-bold mb-6">Ready to Start Your Real Estate Journey?</h2>
			<p class="text-xl mb-8 text-primary-100">
				Let's discuss your real estate goals and how I can help you find the perfect home in Summerlin, Seven Hills, or other premier Las Vegas communities.
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="/al-molinaro/contact" class="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
					Schedule Consultation
				</a>
				<a href="/al-molinaro/home-value" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
					Get Free Home Valuation
				</a>
			</div>
		</div>
	</div>
</section>
