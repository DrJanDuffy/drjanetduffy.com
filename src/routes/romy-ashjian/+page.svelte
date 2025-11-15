<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
</script>

<svelte:head>
	<title>Romy Ashjian, REALTOR® | Luxury Las Vegas Real Estate Specialist</title>
	<meta name="description" content="Romy Ashjian, luxury real estate specialist in Las Vegas. Expert in Tournament Hills, Summerlin, and premier Las Vegas luxury properties. Sophisticated service for discerning clients." />
	<meta name="keywords" content="Romy Ashjian realtor, luxury Las Vegas real estate, Tournament Hills homes, Summerlin luxury, high-end properties Las Vegas, luxury realtor" />
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
	<div class="container mx-auto px-4">
		<div class="max-w-4xl mx-auto text-center">
			<h1 class="text-5xl md:text-6xl font-bold mb-6">Romy Ashjian</h1>
			<p class="text-2xl md:text-3xl font-semibold mb-4">Luxury Real Estate Specialist | REALTOR®</p>
			<p class="text-xl md:text-2xl mb-8 text-primary-100">
				Sophisticated Service for Discerning Clients in Las Vegas
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="/romy-ashjian/properties" class="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
					View Luxury Properties
				</a>
				<a href="/romy-ashjian/home-value" class="bg-primary-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-400 transition-colors">
					Get Home Value
				</a>
				<a href="/romy-ashjian/contact" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
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
					<div class="text-4xl font-bold mb-2">Luxury</div>
					<div class="text-blue-100">Property Specialist</div>
				</div>
				<div>
					<div class="text-4xl font-bold mb-2">$1M+</div>
					<div class="text-blue-100">Properties Expertise</div>
				</div>
				<div>
					<div class="text-4xl font-bold mb-2">Elite</div>
					<div class="text-blue-100">Clientele Service</div>
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
			<h2 class="text-4xl font-bold text-center mb-12 text-gray-800">Why Choose Romy Ashjian?</h2>
			<div class="grid md:grid-cols-3 gap-8">
				<div class="bg-white rounded-lg shadow-lg p-8 text-center">
					<div class="text-5xl mb-4">💎</div>
					<h3 class="text-2xl font-bold mb-4 text-gray-800">Luxury Market Expert</h3>
					<p class="text-gray-600">
						Specialized expertise in high-end properties throughout Tournament Hills, Summerlin, and Las Vegas's most prestigious communities. Deep understanding of luxury market dynamics.
					</p>
				</div>
				<div class="bg-white rounded-lg shadow-lg p-8 text-center">
					<div class="text-5xl mb-4">🎯</div>
					<h3 class="text-2xl font-bold mb-4 text-gray-800">Sophisticated Service</h3>
					<p class="text-gray-600">
						White-glove service tailored to discerning clients who expect the highest level of professionalism, discretion, and attention to detail in their real estate transactions.
					</p>
				</div>
				<div class="bg-white rounded-lg shadow-lg p-8 text-center">
					<div class="text-5xl mb-4">🏰</div>
					<h3 class="text-2xl font-bold mb-4 text-gray-800">Exclusive Access</h3>
					<p class="text-gray-600">
						Access to exclusive luxury listings, off-market opportunities, and premier properties in Las Vegas's most sought-after neighborhoods and gated communities.
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
			<h2 class="text-4xl font-bold text-center mb-12 text-gray-800">Luxury Real Estate Services</h2>
			<div class="grid md:grid-cols-2 gap-8">
				<div class="bg-primary-50 rounded-lg p-8">
					<h3 class="text-2xl font-bold mb-4 text-gray-800">💎 Luxury Home Acquisitions</h3>
					<p class="text-gray-600 mb-4">
						Expert guidance for acquiring prestigious properties in Tournament Hills, The Ridges, and other elite Las Vegas communities. Discreet service and exclusive access to premium listings.
					</p>
					<a href="/romy-ashjian/properties" class="text-primary-600 font-semibold hover:underline">
						Browse Luxury Properties →
					</a>
				</div>
				<div class="bg-primary-50 rounded-lg p-8">
					<h3 class="text-2xl font-bold mb-4 text-gray-800">🏰 Estate Sales</h3>
					<p class="text-gray-600 mb-4">
						Sophisticated marketing strategies for luxury estates. Professional presentation, strategic pricing, and targeted marketing to qualified buyers worldwide.
					</p>
					<a href="/romy-ashjian/home-value" class="text-primary-600 font-semibold hover:underline">
						Get Luxury Home Valuation →
					</a>
				</div>
				<div class="bg-primary-50 rounded-lg p-8">
					<h3 class="text-2xl font-bold mb-4 text-gray-800">🌟 Investment Properties</h3>
					<p class="text-gray-600 mb-4">
						Strategic guidance for luxury real estate investments. Market analysis, ROI projections, and portfolio diversification strategies for high-net-worth clients.
					</p>
					<a href="/romy-ashjian/contact" class="text-primary-600 font-semibold hover:underline">
						Explore Investment Opportunities →
					</a>
				</div>
				<div class="bg-primary-50 rounded-lg p-8">
					<h3 class="text-2xl font-bold mb-4 text-gray-800">🎨 New Construction Luxury</h3>
					<p class="text-gray-600 mb-4">
						Specialized service for custom luxury home construction. Builder negotiations, design consultations, and quality oversight throughout the building process.
					</p>
					<a href="/romy-ashjian/properties" class="text-primary-600 font-semibold hover:underline">
						View New Construction →
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Featured Luxury Communities -->
<section class="py-16 bg-gray-50">
	<div class="container mx-auto px-4">
		<div class="max-w-6xl mx-auto">
			<h2 class="text-4xl font-bold text-center mb-12 text-gray-800">Premier Las Vegas Luxury Communities</h2>
			<div class="grid md:grid-cols-3 gap-6">
				<div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
					<h3 class="text-xl font-bold mb-2 text-gray-800">Tournament Hills</h3>
					<p class="text-gray-600 mb-4">Guard-gated luxury community with exceptional golf course and mountain views. Custom estates and premium amenities.</p>
					<a href="/romy-ashjian/properties?neighborhood=tournament-hills" class="text-primary-600 font-semibold hover:underline">
						View Properties →
					</a>
				</div>
				<div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
					<h3 class="text-xl font-bold mb-2 text-gray-800">The Ridges</h3>
					<p class="text-gray-600 mb-4">Exclusive gated community in Summerlin featuring multi-million dollar estates, championship golf, and stunning Red Rock views.</p>
					<a href="/romy-ashjian/properties?neighborhood=the-ridges" class="text-primary-600 font-semibold hover:underline">
						View Properties →
					</a>
				</div>
				<div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
					<h3 class="text-xl font-bold mb-2 text-gray-800">MacDonald Highlands</h3>
					<p class="text-gray-600 mb-4">Ultra-luxury guard-gated community in Henderson with panoramic Las Vegas Strip and mountain views.</p>
					<a href="/romy-ashjian/properties?neighborhood=macdonald-highlands" class="text-primary-600 font-semibold hover:underline">
						View Properties →
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Testimonial Section -->
<section class="py-16">
	<div class="container mx-auto px-4">
		<div class="max-w-4xl mx-auto">
			<h2 class="text-4xl font-bold text-center mb-12 text-gray-800">Client Testimonials</h2>
			<div class="bg-white rounded-lg shadow-lg p-8">
				<div class="text-primary-600 text-5xl mb-4">"</div>
				<p class="text-xl text-gray-700 mb-6">
					Romy's expertise in luxury properties is exceptional. She understood our specific requirements for a Tournament Hills estate and found us the perfect home. Her professionalism, market knowledge, and attention to detail made the entire process seamless.
				</p>
				<p class="text-gray-600 font-semibold">- Luxury Homebuyer, Tournament Hills</p>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="py-16 bg-primary-600 text-white">
	<div class="container mx-auto px-4">
		<div class="max-w-4xl mx-auto text-center">
			<h2 class="text-4xl font-bold mb-6">Experience Exceptional Luxury Real Estate Service</h2>
			<p class="text-xl mb-8 text-primary-100">
				Let's discuss your luxury real estate goals and find the perfect property in Las Vegas's most prestigious communities.
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="/romy-ashjian/contact" class="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
					Schedule Private Consultation
				</a>
				<a href="/romy-ashjian/home-value" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
					Get Luxury Home Valuation
				</a>
			</div>
		</div>
	</div>
</section>
