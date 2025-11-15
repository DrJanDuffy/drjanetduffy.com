<script>
	import { Users, Heart, Shield, Handshake } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Inclusive Real Estate Services | Dr. Janet Duffy REALTOR®</title>
	<meta name="description" content="Comprehensive real estate services serving all communities in Las Vegas. Inclusive, equitable real estate representation for everyone." />
</svelte:head>

<section class="section bg-gradient-to-b from-white via-gray-50 to-white">
	<div class="container-premium">
		<div class="text-center mb-16">
			<h1 class="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900">
				Inclusive Real Estate Services for All Las Vegas Clients
			</h1>
			<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-6"></div>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
				Comprehensive real estate services serving all communities in Las Vegas
			</p>
		</div>

		<div class="mb-16">
			<h2 class="text-3xl font-bold text-gray-900 mb-6">What Inclusive Real Estate Services Do We Provide in Las Vegas?</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl">
				Inclusive real estate services in Las Vegas include equal service for all clients with fair and equitable representation, cultural sensitivity, accessible services, and multilingual support when needed. We also provide community commitment through first-time homebuyer assistance, affordable housing resources, support for underserved communities, and fair housing advocacy.
			</p>
			<div class="grid md:grid-cols-2 gap-12">
				<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-lg border border-gray-100">
					<div class="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
						<Users class="w-8 h-8 text-primary-600" />
					</div>
					<h3 class="text-2xl font-bold text-gray-900 mb-4">Equal Service for All</h3>
					<p class="text-gray-700 leading-relaxed mb-6">
						Committed to providing exceptional real estate services to everyone:
					</p>
				<ul class="space-y-3 text-gray-700">
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Fair and equitable representation</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Cultural sensitivity and understanding</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Accessible services and accommodations</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Multilingual support when needed</span>
					</li>
				</ul>
			</div>

				<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-lg border border-gray-100">
					<div class="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
						<Heart class="w-8 h-8 text-primary-600" />
					</div>
					<h3 class="text-2xl font-bold text-gray-900 mb-4">Community Commitment</h3>
					<p class="text-gray-700 leading-relaxed mb-6">
						Dedicated to serving diverse communities throughout Las Vegas:
					</p>
				<ul class="space-y-3 text-gray-700">
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>First-time homebuyer assistance programs</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Affordable housing resources and guidance</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Support for underserved communities</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Fair housing advocacy and education</span>
					</li>
				</ul>
			</div>
		</div>

		<div class="mb-16">
			<h2 class="text-3xl font-bold text-gray-900 mb-6">What Is Our Commitment to Inclusive Real Estate?</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl">
				Our commitment to inclusive real estate includes fair housing principles, equal treatment ensuring every client receives exceptional service, and community focus serving all Las Vegas communities. This commitment ensures everyone has access to professional real estate services regardless of background, income, or circumstances.
			</p>
			<div class="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-white">
			<div class="grid md:grid-cols-3 gap-8">
				<div class="text-center">
					<Shield class="w-12 h-12 mx-auto mb-4 text-white opacity-90" />
					<h3 class="text-xl font-bold mb-2">Fair Housing</h3>
					<p class="text-white text-opacity-90">Committed to fair housing principles</p>
				</div>
				<div class="text-center">
					<Handshake class="w-12 h-12 mx-auto mb-4 text-white opacity-90" />
					<h3 class="text-xl font-bold mb-2">Equal Treatment</h3>
					<p class="text-white text-opacity-90">Every client receives exceptional service</p>
				</div>
				<div class="text-center">
					<Heart class="w-12 h-12 mx-auto mb-4 text-white opacity-90" />
					<h3 class="text-xl font-bold mb-2">Community Focus</h3>
					<p class="text-white text-opacity-90">Serving all Las Vegas communities</p>
				</div>
			</div>
		</div>

		<div class="text-center">
			<a href="/contact" class="btn-primary">Get Started</a>
		</div>
	</div>
</section>

