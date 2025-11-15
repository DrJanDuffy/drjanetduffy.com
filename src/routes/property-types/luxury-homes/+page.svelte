<script>
	import { Home, Award, TrendingUp, Key, CheckCircle, Camera, Shield } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	
	let mounted = false;
	
	onMount(() => {
		mounted = true;
	});
	
	const luxuryFeatures = [
		'High-end finishes and materials',
		'Premium locations and views',
		'Custom architecture and design',
		'Resort-style amenities',
		'Gated communities',
		'Privacy and security',
		'Smart home technology',
		'Professional landscaping'
	];
	
	const luxuryAreas = [
		{ name: 'The Ridges', avgPrice: '$1.2M+', description: 'Exclusive gated community' },
		{ name: 'Red Rock Country Club', avgPrice: '$950K+', description: 'Luxury golf community' },
		{ name: 'Southern Highlands', avgPrice: '$850K+', description: 'Upscale master-planned' },
		{ name: 'Seven Hills', avgPrice: '$750K+', description: 'Custom luxury homes' }
	];
</script>

<svelte:head>
	<title>Luxury Homes for Sale | Las Vegas | Dr. Janet Duffy REALTOR®</title>
	<meta name="description" content="Browse luxury homes for sale in Las Vegas. Exclusive properties in The Ridges, Red Rock Country Club, Southern Highlands, and other premier communities." />
</svelte:head>

<section class="section bg-gradient-to-b from-white via-gray-50 to-white">
	<div class="container-premium">
		<div class="text-center mb-16">
			<h1 class="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900">
				Luxury Homes for Sale
			</h1>
			<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-6"></div>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
				Exclusive luxury properties in Las Vegas's most prestigious communities
			</p>
		</div>

		<!-- Luxury Stats -->
		<div class="grid md:grid-cols-4 gap-6 mb-16">
			<div class="bg-white rounded-xl p-6 shadow-lg text-center">
				<div class="text-3xl font-bold text-primary-600 mb-2">$1M+</div>
				<p class="text-gray-600 text-sm">Starting Price Range</p>
			</div>
			<div class="bg-white rounded-xl p-6 shadow-lg text-center">
				<div class="text-3xl font-bold text-primary-600 mb-2">5000+</div>
				<p class="text-gray-600 text-sm">Sq. Ft. Average</p>
			</div>
			<div class="bg-white rounded-xl p-6 shadow-lg text-center">
				<div class="text-3xl font-bold text-primary-600 mb-2">4+</div>
				<p class="text-gray-600 text-sm">Bedrooms</p>
			</div>
			<div class="bg-white rounded-xl p-6 shadow-lg text-center">
				<div class="text-3xl font-bold text-primary-600 mb-2">Gated</div>
				<p class="text-gray-600 text-sm">Communities</p>
			</div>
		</div>

		<!-- Luxury Features -->
		<div class="grid md:grid-cols-2 gap-12 mb-16">
			<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-lg border border-gray-100">
				<h2 class="text-3xl font-bold text-gray-900 mb-6">Luxury Home Features</h2>
				<ul class="space-y-4">
					{#each luxuryFeatures as feature}
						<li class="flex items-start gap-3">
							<CheckCircle class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
							<span class="text-gray-700">{feature}</span>
						</li>
					{/each}
				</ul>
			</div>

			<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-lg border border-gray-100">
				<h2 class="text-3xl font-bold text-gray-900 mb-6">Why Invest in Luxury?</h2>
				<div class="space-y-6">
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<TrendingUp class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Strong Appreciation</h3>
							<p class="text-gray-700">Luxury properties maintain and increase value over time</p>
						</div>
					</div>
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<Shield class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Privacy & Security</h3>
							<p class="text-gray-700">Gated communities and exclusive locations</p>
						</div>
					</div>
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<Award class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Premium Lifestyle</h3>
							<p class="text-gray-700">Resort-style amenities and world-class facilities</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Luxury Areas -->
		<div class="mb-16">
			<h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Premier Luxury Communities</h2>
			<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
				{#each luxuryAreas as area}
					<div class="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all">
						<h3 class="text-lg font-bold text-gray-900 mb-2">{area.name}</h3>
						<p class="text-primary-600 font-semibold mb-2">{area.avgPrice}</p>
						<p class="text-gray-600 text-sm">{area.description}</p>
					</div>
				{/each}
			</div>
		</div>

		<!-- Luxury Properties -->
		<div class="mb-16">
			<h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Luxury Properties</h2>
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
				<a href="/properties?type=luxury" class="btn-primary">View All Luxury Properties</a>
			</div>
		</div>

		<!-- CTA Section -->
		<div class="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-center text-white">
			<h2 class="text-3xl font-bold mb-4">Interested in Luxury Real Estate?</h2>
			<p class="text-lg text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
				Let me help you find your perfect luxury home in Las Vegas
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="/contact" class="btn-primary bg-white text-primary-600 hover:bg-gray-100">Contact Me</a>
				<a href="/services/luxury-homes" class="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">Luxury Services</a>
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

