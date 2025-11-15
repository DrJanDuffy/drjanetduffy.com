<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
</script>

<svelte:head>
	<title>Jung H. Kim, REALTOR® | #1 Summerlin Las Vegas Real Estate Agent</title>
	<meta name="description" content="Jung H. Kim, award-winning REALTOR® and #1 agent at BHHS Summerlin with $38.9M+ in sales. Expert guidance for buying, selling, and investing in Summerlin, The Ridges, and Las Vegas luxury communities. Korean-speaking agent available." />
	<meta name="keywords" content="Jung Kim realtor, Las Vegas real estate, luxury homes Summerlin, Korean realtor Las Vegas, BHHS Summerlin agent, Las Vegas homes for sale" />
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
	<div class="container mx-auto px-4">
		<div class="max-w-4xl mx-auto text-center">
			<h1 class="text-5xl md:text-6xl font-bold mb-6">Jung H. Kim</h1>
			<p class="text-2xl md:text-3xl font-semibold mb-4">Licensed REALTOR® | ABR, CNHS, SRES</p>
			<p class="text-xl md:text-2xl mb-8 text-primary-100">
				#1 Agent at BHHS Summerlin | Your Trusted Las Vegas Real Estate Expert
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="/jung-kim/properties" class="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
					View Properties
				</a>
				<a href="/jung-kim/home-value" class="bg-primary-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-400 transition-colors">
					Get Home Value
				</a>
				<a href="/jung-kim/contact" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
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
					<div class="text-4xl font-bold mb-2">$38.9M+</div>
					<div class="text-blue-100">Sales Volume 2024</div>
				</div>
				<div>
					<div class="text-4xl font-bold mb-2">#1</div>
					<div class="text-blue-100">BHHS Summerlin Agent</div>
				</div>
				<div>
					<div class="text-4xl font-bold mb-2">Top 0.3%</div>
					<div class="text-blue-100">Nationwide Realtors</div>
				</div>
				<div>
					<div class="text-4xl font-bold mb-2">Bilingual</div>
					<div class="text-blue-100">English & Korean</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Why Choose Section -->
<section class="py-16 bg-gray-50">
	<div class="container mx-auto px-4">
		<div class="max-w-6xl mx-auto">
			<h2 class="text-4xl font-bold text-center mb-12 text-gray-800">Why Choose Jung H. Kim?</h2>
			<div class="grid md:grid-cols-3 gap-8">
				<div class="bg-white rounded-lg shadow-lg p-8 text-center">
					<div class="text-5xl mb-4">🏆</div>
					<h3 class="text-2xl font-bold mb-4 text-gray-800">Award-Winning Excellence</h3>
					<p class="text-gray-600">
						Recognized as the #1 individual sales executive for 2024 at Berkshire Hathaway HomeServices Nevada Properties, with over $38.9 million in sales volume. Consistently ranked in the top 0.3% of realtors nationwide.
					</p>
				</div>
				<div class="bg-white rounded-lg shadow-lg p-8 text-center">
					<div class="text-5xl mb-4">🎯</div>
					<h3 class="text-2xl font-bold mb-4 text-gray-800">Expert Certifications</h3>
					<p class="text-gray-600">
						Accredited Buyer's Representative® (ABR), Certified New Home Specialist™ (CNHS), and Seniors Real Estate Specialist® (SRES). Specialized training ensures you receive the highest level of professional service.
					</p>
				</div>
				<div class="bg-white rounded-lg shadow-lg p-8 text-center">
					<div class="text-5xl mb-4">🌏</div>
					<h3 class="text-2xl font-bold mb-4 text-gray-800">Bilingual Service</h3>
					<p class="text-gray-600">
						Fluent in both English and Korean, providing seamless communication and cultural understanding for diverse clients in the Las Vegas real estate market.
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
						Whether you're a first-time homebuyer or experienced investor, I provide expert guidance through every step of the buying process. With specialized CNHS certification, I'm particularly skilled at helping clients navigate new construction purchases in Summerlin and throughout Las Vegas.
					</p>
					<a href="/jung-kim/properties" class="text-primary-600 font-semibold hover:underline">
						Browse Properties →
					</a>
				</div>
				<div class="bg-primary-50 rounded-lg p-8">
					<h3 class="text-2xl font-bold mb-4 text-gray-800">💰 Selling Your Home</h3>
					<p class="text-gray-600 mb-4">
						Maximize your home's value with strategic marketing, professional staging advice, and expert negotiation backed by proven results. My track record of $38.9M+ in sales demonstrates my ability to achieve exceptional outcomes for sellers.
					</p>
					<a href="/jung-kim/home-value" class="text-primary-600 font-semibold hover:underline">
						Get Free Valuation →
					</a>
				</div>
				<div class="bg-primary-50 rounded-lg p-8">
					<h3 class="text-2xl font-bold mb-4 text-gray-800">👴 Senior Real Estate Services</h3>
					<p class="text-gray-600 mb-4">
						As an SRES-certified specialist, I understand the unique needs of seniors and their families. From downsizing to retirement communities, I provide compassionate guidance for life's transitions.
					</p>
					<a href="/jung-kim/contact" class="text-primary-600 font-semibold hover:underline">
						Learn More →
					</a>
				</div>
				<div class="bg-primary-50 rounded-lg p-8">
					<h3 class="text-2xl font-bold mb-4 text-gray-800">📊 Investment Properties</h3>
					<p class="text-gray-600 mb-4">
						Build your real estate portfolio with strategic investment opportunities in Las Vegas. Expert analysis and market insights to help you make informed decisions for long-term wealth building.
					</p>
					<a href="/jung-kim/properties" class="text-primary-600 font-semibold hover:underline">
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
					<h3 class="text-xl font-bold mb-2 text-gray-800">Summerlin</h3>
					<p class="text-gray-600 mb-4">Master-planned community with resort-style living, world-class amenities, and stunning Red Rock Canyon views. As the #1 agent in Summerlin, I have unparalleled expertise in this premier Las Vegas community.</p>
					<a href="/jung-kim/properties?neighborhood=summerlin" class="text-primary-600 font-semibold hover:underline">
						View Properties →
					</a>
				</div>
				<div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
					<h3 class="text-xl font-bold mb-2 text-gray-800">The Ridges</h3>
					<p class="text-gray-600 mb-4">Exclusive gated community within Summerlin featuring custom luxury estates, championship golf, and breathtaking mountain vistas. Experience the pinnacle of Las Vegas luxury living.</p>
					<a href="/jung-kim/properties?neighborhood=the-ridges" class="text-primary-600 font-semibold hover:underline">
						View Properties →
					</a>
				</div>
				<div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
					<h3 class="text-xl font-bold mb-2 text-gray-800">Tournament Hills</h3>
					<p class="text-gray-600 mb-4">Prestigious guard-gated community offering luxury homes with exceptional golf course and mountain views in the northwest Las Vegas valley.</p>
					<a href="/jung-kim/properties?neighborhood=tournament-hills" class="text-primary-600 font-semibold hover:underline">
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
			<h2 class="text-4xl font-bold text-center mb-12 text-gray-800">Client Success Stories</h2>
			<div class="bg-white rounded-lg shadow-lg p-8 mb-8">
				<div class="text-primary-600 text-5xl mb-4">"</div>
				<p class="text-xl text-gray-700 mb-6">
					Jung Kim's expertise and dedication were instrumental in helping us find our dream home in Summerlin. Her knowledge of the local market and attention to detail made the entire process smooth and stress-free. We highly recommend her to anyone looking for a top-tier real estate professional.
				</p>
				<p class="text-gray-600 font-semibold">- Summerlin Homebuyer</p>
			</div>
			<div class="bg-white rounded-lg shadow-lg p-8">
				<div class="text-primary-600 text-5xl mb-4">"</div>
				<p class="text-xl text-gray-700 mb-6">
					한국어로 소통할 수 있어서 너무 편했고, 정 김 에이전트의 전문성과 세심한 배려 덕분에 집을 빠르게 팔 수 있었습니다. 라스베가스 부동산 거래를 고려하신다면 강력히 추천드립니다!
				</p>
				<p class="text-gray-600 font-semibold">- Korean-speaking Client</p>
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
				Let's discuss your real estate goals and how my award-winning service can help you achieve them.
				English and Korean language services available.
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="/jung-kim/contact" class="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
					Schedule Consultation
				</a>
				<a href="/jung-kim/home-value" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
					Get Free Home Valuation
				</a>
			</div>
		</div>
	</div>
</section>
