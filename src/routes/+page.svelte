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
<section class="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
	<div class="container mx-auto px-4">
		<div class="max-w-4xl mx-auto text-center">
			<h1 class="text-5xl md:text-6xl font-bold mb-6">Dr. Janet Duffy</h1>
			<p class="text-2xl md:text-3xl font-semibold mb-4">Licensed REALTOR®</p>
			<p class="text-xl md:text-2xl mb-8 text-primary-100">
				Your Trusted Las Vegas Real Estate Expert
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="/properties" class="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
					View Properties
				</a>
				<a href="/home-value" class="bg-primary-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-400 transition-colors">
					Get Home Value
				</a>
				<a href="/contact" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
					Contact Me
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Why Choose Section -->
<section class="py-16 bg-gray-50">
	<div class="container mx-auto px-4">
		<div class="max-w-6xl mx-auto">
			<h2 class="text-4xl font-bold text-center mb-12 text-gray-800">Why Choose Dr. Janet Duffy?</h2>
			<div class="grid md:grid-cols-3 gap-8">
				<div class="bg-white rounded-lg shadow-lg p-8 text-center">
					<div class="text-5xl mb-4">🏆</div>
					<h3 class="text-2xl font-bold mb-4 text-gray-800">15+ Years Experience</h3>
					<p class="text-gray-600">
						Extensive knowledge of the Las Vegas real estate market with a proven track record of successful transactions.
					</p>
				</div>
				<div class="bg-white rounded-lg shadow-lg p-8 text-center">
					<div class="text-5xl mb-4">🎯</div>
					<h3 class="text-2xl font-bold mb-4 text-gray-800">Expert Guidance</h3>
					<p class="text-gray-600">
						Personalized service tailored to your unique needs, whether buying, selling, or investing in Las Vegas real estate.
					</p>
				</div>
				<div class="bg-white rounded-lg shadow-lg p-8 text-center">
					<div class="text-5xl mb-4">📍</div>
					<h3 class="text-2xl font-bold mb-4 text-gray-800">Local Expertise</h3>
					<p class="text-gray-600">
						Deep understanding of Las Vegas neighborhoods, market trends, and the unique characteristics of each community.
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
						Find your perfect Las Vegas home with expert guidance through every step of the buying process. From property search to closing, I'll help you navigate the market with confidence.
					</p>
					<a href="/properties" class="text-primary-600 font-semibold hover:underline">
						Browse Properties →
					</a>
				</div>
				<div class="bg-primary-50 rounded-lg p-8">
					<h3 class="text-2xl font-bold mb-4 text-gray-800">💰 Selling Your Home</h3>
					<p class="text-gray-600 mb-4">
						Maximize your home's value with strategic marketing, professional staging advice, and expert negotiation. Get a free home valuation to start.
					</p>
					<a href="/home-value" class="text-primary-600 font-semibold hover:underline">
						Get Free Valuation →
					</a>
				</div>
				<div class="bg-primary-50 rounded-lg p-8">
					<h3 class="text-2xl font-bold mb-4 text-gray-800">🔑 Rental Properties</h3>
					<p class="text-gray-600 mb-4">
						Explore luxury rental opportunities throughout Las Vegas. Find the perfect rental property or list your property for rent.
					</p>
					<a href="/rentals" class="text-primary-600 font-semibold hover:underline">
						View Rentals →
					</a>
				</div>
				<div class="bg-primary-50 rounded-lg p-8">
					<h3 class="text-2xl font-bold mb-4 text-gray-800">📊 Investment Properties</h3>
					<p class="text-gray-600 mb-4">
						Build your real estate portfolio with strategic investment opportunities in Las Vegas. Expert analysis and market insights to help you make informed decisions.
					</p>
					<a href="/properties" class="text-primary-600 font-semibold hover:underline">
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
			<div class="grid md:grid-cols-3 gap-6">
				<div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
					<h3 class="text-xl font-bold mb-2 text-gray-800">West Summerlin</h3>
					<p class="text-gray-600 mb-4">Luxury homes in one of Las Vegas's most prestigious master-planned communities.</p>
					<a href="/properties?neighborhood=west-summerlin" class="text-primary-600 font-semibold hover:underline">
						View Properties →
					</a>
				</div>
				<div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
					<h3 class="text-xl font-bold mb-2 text-gray-800">The Ridges</h3>
					<p class="text-gray-600 mb-4">Exclusive gated community with stunning mountain views and luxury amenities.</p>
					<a href="/properties?neighborhood=the-ridges" class="text-primary-600 font-semibold hover:underline">
						View Properties →
					</a>
				</div>
				<div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
					<h3 class="text-xl font-bold mb-2 text-gray-800">Red Rock Country Club</h3>
					<p class="text-gray-600 mb-4">Premier golf course community with luxury estates and world-class amenities.</p>
					<a href="/properties?neighborhood=red-rock" class="text-primary-600 font-semibold hover:underline">
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
				Let's discuss your real estate goals and how I can help you achieve them.
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="/contact" class="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
					Schedule Consultation
				</a>
				<a href="/home-value" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
					Get Free Home Valuation
				</a>
			</div>
		</div>
	</div>
</section>
