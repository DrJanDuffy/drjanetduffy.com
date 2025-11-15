<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
</script>

<svelte:head>
	<title>Maria Martin, REALTOR® | Henderson Las Vegas Real Estate Expert</title>
	<meta name="description" content="Maria Martin, experienced REALTOR® specializing in Henderson, Nevada real estate. Expert guidance for buying, selling, and investing in Henderson, Green Valley, Anthem, and surrounding Las Vegas communities." />
	<meta name="keywords" content="Maria Martin realtor, Henderson real estate, Green Valley homes, Anthem Las Vegas, Henderson homes for sale, Las Vegas real estate agent" />
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
	<div class="container mx-auto px-4">
		<div class="max-w-4xl mx-auto text-center">
			<h1 class="text-5xl md:text-6xl font-bold mb-6">Maria Martin</h1>
			<p class="text-2xl md:text-3xl font-semibold mb-4">Licensed REALTOR®</p>
			<p class="text-xl md:text-2xl mb-8 text-primary-100">
				Your Trusted Henderson & Las Vegas Real Estate Expert
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="/maria-martin/properties" class="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
					View Properties
				</a>
				<a href="/maria-martin/home-value" class="bg-primary-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-400 transition-colors">
					Get Home Value
				</a>
				<a href="/maria-martin/contact" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
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
					<div class="text-4xl font-bold mb-2">10+ Years</div>
					<div class="text-blue-100">Real Estate Experience</div>
				</div>
				<div>
					<div class="text-4xl font-bold mb-2">Henderson</div>
					<div class="text-blue-100">Market Specialist</div>
				</div>
				<div>
					<div class="text-4xl font-bold mb-2">100+</div>
					<div class="text-blue-100">Happy Clients</div>
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
			<h2 class="text-4xl font-bold text-center mb-12 text-gray-800">Why Choose Maria Martin?</h2>
			<div class="grid md:grid-cols-3 gap-8">
				<div class="bg-white rounded-lg shadow-lg p-8 text-center">
					<div class="text-5xl mb-4">🏆</div>
					<h3 class="text-2xl font-bold mb-4 text-gray-800">Henderson Expert</h3>
					<p class="text-gray-600">
						Deep knowledge of Henderson neighborhoods, market trends, and community amenities. From Green Valley to Anthem, I know Henderson inside and out.
					</p>
				</div>
				<div class="bg-white rounded-lg shadow-lg p-8 text-center">
					<div class="text-5xl mb-4">🎯</div>
					<h3 class="text-2xl font-bold mb-4 text-gray-800">Personalized Service</h3>
					<p class="text-gray-600">
						Every client receives dedicated attention tailored to their unique needs, whether buying your first home, upgrading, or investing in Henderson real estate.
					</p>
				</div>
				<div class="bg-white rounded-lg shadow-lg p-8 text-center">
					<div class="text-5xl mb-4">📍</div>
					<h3 class="text-2xl font-bold mb-4 text-gray-800">Proven Results</h3>
					<p class="text-gray-600">
						Consistently helps clients achieve their real estate goals with expert negotiation, market knowledge, and comprehensive service from start to finish.
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
						Find your perfect Henderson or Las Vegas home with expert guidance through every step of the buying process. From property search to closing, I'll help you navigate the market with confidence.
					</p>
					<a href="/maria-martin/properties" class="text-primary-600 font-semibold hover:underline">
						Browse Properties →
					</a>
				</div>
				<div class="bg-primary-50 rounded-lg p-8">
					<h3 class="text-2xl font-bold mb-4 text-gray-800">💰 Selling Your Home</h3>
					<p class="text-gray-600 mb-4">
						Maximize your Henderson home's value with strategic marketing, professional staging advice, and expert negotiation. Get a free home valuation to start.
					</p>
					<a href="/maria-martin/home-value" class="text-primary-600 font-semibold hover:underline">
						Get Free Valuation →
					</a>
				</div>
				<div class="bg-primary-50 rounded-lg p-8">
					<h3 class="text-2xl font-bold mb-4 text-gray-800">🔑 First-Time Buyers</h3>
					<p class="text-gray-600 mb-4">
						Guiding first-time buyers through the home purchasing process with patience, education, and expert support every step of the way.
					</p>
					<a href="/maria-martin/contact" class="text-primary-600 font-semibold hover:underline">
						Learn More →
					</a>
				</div>
				<div class="bg-primary-50 rounded-lg p-8">
					<h3 class="text-2xl font-bold mb-4 text-gray-800">📊 Investment Properties</h3>
					<p class="text-gray-600 mb-4">
						Build your real estate portfolio with strategic investment opportunities in Henderson and Las Vegas. Expert analysis and market insights for informed decisions.
					</p>
					<a href="/maria-martin/properties" class="text-primary-600 font-semibold hover:underline">
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
			<h2 class="text-4xl font-bold text-center mb-12 text-gray-800">Featured Henderson Communities</h2>
			<div class="grid md:grid-cols-3 gap-6">
				<div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
					<h3 class="text-xl font-bold mb-2 text-gray-800">Green Valley</h3>
					<p class="text-gray-600 mb-4">Master-planned community with parks, trails, shopping, and top-rated schools in the heart of Henderson.</p>
					<a href="/maria-martin/properties?neighborhood=green-valley" class="text-primary-600 font-semibold hover:underline">
						View Properties →
					</a>
				</div>
				<div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
					<h3 class="text-xl font-bold mb-2 text-gray-800">Anthem</h3>
					<p class="text-gray-600 mb-4">Beautiful hillside community with stunning views, parks, and resort-style amenities.</p>
					<a href="/maria-martin/properties?neighborhood=anthem" class="text-primary-600 font-semibold hover:underline">
						View Properties →
					</a>
				</div>
				<div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
					<h3 class="text-xl font-bold mb-2 text-gray-800">Lake Las Vegas</h3>
					<p class="text-gray-600 mb-4">Luxury waterfront community offering resort living with golf courses and lakefront properties.</p>
					<a href="/maria-martin/properties?neighborhood=lake-las-vegas" class="text-primary-600 font-semibold hover:underline">
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
				Let's discuss your Henderson or Las Vegas real estate goals and how I can help you achieve them.
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="/maria-martin/contact" class="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
					Schedule Consultation
				</a>
				<a href="/maria-martin/home-value" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
					Get Free Home Valuation
				</a>
			</div>
		</div>
	</div>
</section>
