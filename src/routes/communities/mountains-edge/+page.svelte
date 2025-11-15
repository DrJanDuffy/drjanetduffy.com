<script>
	import { MapPin, Home, Award, CheckCircle, DollarSign, Users, Mountain } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	
	let mounted = false;
	
	onMount(() => {
		mounted = true;
	});
	
	const features = [
		'Master-planned community',
		'Family-friendly',
		'Parks and trails',
		'Top-rated schools',
		'Community centers',
		'Affordable pricing',
		'Growing area',
		'Great location'
	];
</script>

<svelte:head>
	<title>Mountains Edge Real Estate | Las Vegas | Dr. Janet Duffy REALTOR®</title>
	<meta name="description" content="Explore Mountains Edge real estate. Master-planned community with family-friendly atmosphere, parks, trails, and affordable housing in Las Vegas." />
</svelte:head>

<section class="section bg-gradient-to-b from-white via-gray-50 to-white">
	<div class="container-premium">
		<div class="text-center mb-16">
			<h1 class="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900">
				Mountains Edge Real Estate
			</h1>
			<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-6"></div>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
				Master-planned community with family-friendly atmosphere, parks, trails, and affordable housing
			</p>
		</div>

		<!-- Hero Stats -->
		<div class="grid md:grid-cols-4 gap-6 mb-16">
			<div class="bg-white rounded-xl p-6 shadow-lg text-center">
				<div class="text-3xl font-bold text-primary-600 mb-2">$500K</div>
				<p class="text-gray-600 text-sm">Average Home Price</p>
			</div>
			<div class="bg-white rounded-xl p-6 shadow-lg text-center">
				<div class="text-3xl font-bold text-primary-600 mb-2">3,500</div>
				<p class="text-gray-600 text-sm">Acres</p>
			</div>
			<div class="bg-white rounded-xl p-6 shadow-lg text-center">
				<div class="text-3xl font-bold text-primary-600 mb-2">Family</div>
				<p class="text-gray-600 text-sm">Friendly</p>
			</div>
			<div class="bg-white rounded-xl p-6 shadow-lg text-center">
				<div class="text-3xl font-bold text-primary-600 mb-2">Growing</div>
				<p class="text-gray-600 text-sm">Community</p>
			</div>
		</div>

		<!-- About Mountains Edge -->
		<div class="grid md:grid-cols-2 gap-12 mb-16">
			<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-lg border border-gray-100">
				<h2 class="text-3xl font-bold text-gray-900 mb-6">About Mountains Edge</h2>
				<p class="text-gray-700 leading-relaxed mb-4">
					Mountains Edge is a master-planned community located in southwest Las Vegas, offering affordable housing and a family-friendly atmosphere. The community spans over 3,500 acres and features numerous parks, walking trails, and community amenities.
				</p>
				<p class="text-gray-700 leading-relaxed mb-6">
					The area is known for its excellent schools, safe neighborhoods, and convenient access to shopping, dining, and employment centers. With new construction and established neighborhoods, Mountains Edge appeals to first-time buyers, growing families, and investors seeking value.
				</p>
				<ul class="space-y-3">
					{#each features as feature}
						<li class="flex items-start gap-3">
							<CheckCircle class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
							<span class="text-gray-700">{feature}</span>
						</li>
					{/each}
				</ul>
			</div>

			<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-lg border border-gray-100">
				<h2 class="text-3xl font-bold text-gray-900 mb-6">Why Choose Mountains Edge?</h2>
				<div class="space-y-6">
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<DollarSign class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Affordability</h3>
							<p class="text-gray-700">Great value with affordable home prices</p>
						</div>
					</div>
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<Award class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Excellent Schools</h3>
							<p class="text-gray-700">Top-rated schools serving the community</p>
						</div>
					</div>
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<Mountain class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Outdoor Recreation</h3>
							<p class="text-gray-700">Parks, trails, and recreational facilities</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Properties -->
		<div class="mb-16">
			<h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Properties in Mountains Edge</h2>
			{#if mounted && browser}
				<div class="realscout-wrapper">
					<realscout-office-listings 
						agent-encoded-id="QWdlbnQtMjI1MDUw"
						sort-order="STATUS_AND_SIGNIFICANT_CHANGE"
						listing-status="For Sale"
						property-types="SFR,MF,TC"
						max-results="6">
					</realscout-office-listings>
				</div>
			{:else}
				<div class="loading-skeleton">
					<div class="grid md:grid-cols-3 gap-6">
						{#each Array(3) as _}
							<div class="animate-pulse bg-white rounded-2xl shadow-lg overflow-hidden">
								<div class="bg-gray-200 h-64"></div>
								<div class="p-6 space-y-4">
									<div class="h-6 bg-gray-200 rounded w-3/4"></div>
									<div class="h-5 bg-gray-200 rounded w-1/2"></div>
								</div>
							</div>
						{/each}
					</div>
				</div>
			{/if}
			<div class="text-center mt-8">
				<a href="/properties?neighborhood=mountains-edge" class="btn-primary">View All Mountains Edge Properties</a>
			</div>
		</div>

		<!-- CTA Section -->
		<div class="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-center text-white">
			<h2 class="text-3xl font-bold mb-4">Interested in Mountains Edge Real Estate?</h2>
			<p class="text-lg text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
				Let me help you find your perfect home in this family-friendly community
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="/contact" class="btn-primary bg-white text-primary-600 hover:bg-gray-100">Contact Me</a>
				<a href="/properties?neighborhood=mountains-edge" class="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">View Properties</a>
			</div>
		</div>
	</div>
</section>

<style>
	.realscout-wrapper {
		min-height: 400px;
		width: 100%;
	}
</style>

