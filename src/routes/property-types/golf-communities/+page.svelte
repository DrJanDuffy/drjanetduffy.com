<script>
	import { Home, Award, CheckCircle, DollarSign, Users, Flag } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	
	let mounted = false;
	
	onMount(() => {
		mounted = true;
	});
	
	const benefits = [
		'Championship golf courses',
		'Resort-style amenities',
		'Prestigious lifestyle',
		'Strong property values',
		'Social community',
		'Beautiful landscaping',
		'Country club access',
		'Exclusive neighborhoods'
	];
	
	const communities = [
		{ name: 'Red Rock Country Club', avgPrice: '$950K+', description: 'Championship golf course community' },
		{ name: 'Anthem Country Club', avgPrice: '$800K+', description: 'Premier golf community' },
		{ name: 'Southern Highlands', avgPrice: '$850K+', description: 'Golf and country club living' },
		{ name: 'The Ridges', avgPrice: '$1.2M+', description: 'Luxury golf community' }
	];
</script>

<svelte:head>
	<title>Golf Communities | Las Vegas | Dr. Janet Duffy REALTOR®</title>
	<meta name="description" content="Browse homes in golf communities in Las Vegas. Championship courses, resort amenities, and prestigious lifestyle in premier golf communities." />
</svelte:head>

<section class="section bg-gradient-to-b from-white via-gray-50 to-white">
	<div class="container-premium">
		<div class="text-center mb-16">
			<h1 class="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900">
				Discover Golf Communities in Las Vegas
			</h1>
			<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-6"></div>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
				Championship courses, resort amenities, and prestigious lifestyle
			</p>
		</div>

		<!-- Stats -->
		<div class="grid md:grid-cols-4 gap-6 mb-16">
			<div class="bg-white rounded-xl p-6 shadow-lg text-center">
				<div class="text-3xl font-bold text-primary-600 mb-2">$950K+</div>
				<p class="text-gray-600 text-sm">Average Price</p>
			</div>
			<div class="bg-white rounded-xl p-6 shadow-lg text-center">
				<div class="text-3xl font-bold text-primary-600 mb-2">50+</div>
				<p class="text-gray-600 text-sm">Golf Courses</p>
			</div>
			<div class="bg-white rounded-xl p-6 shadow-lg text-center">
				<div class="text-3xl font-bold text-primary-600 mb-2">Resort</div>
				<p class="text-gray-600 text-sm">Amenities</p>
			</div>
			<div class="bg-white rounded-xl p-6 shadow-lg text-center">
				<div class="text-3xl font-bold text-primary-600 mb-2">Premium</div>
				<p class="text-gray-600 text-sm">Lifestyle</p>
			</div>
		</div>

		<!-- Benefits -->
		<div class="mb-16">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Why Should You Choose a Golf Community in Las Vegas?</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto text-center">
				Las Vegas golf communities offer championship golf courses, resort-style amenities, prestigious lifestyle, strong property values, social community, beautiful landscaping, country club access, and exclusive neighborhoods that make them ideal for golf enthusiasts, luxury buyers, and those seeking an active, resort-style lifestyle.
			</p>
		</div>

		<div class="grid md:grid-cols-2 gap-12 mb-16">
			<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-lg border border-gray-100">
				<h3 class="text-2xl font-bold text-gray-900 mb-6">Key Benefits</h3>
				<ul class="space-y-4">
					{#each benefits as benefit}
						<li class="flex items-start gap-3">
							<CheckCircle class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
							<span class="text-gray-700">{benefit}</span>
						</li>
					{/each}
				</ul>
			</div>

			<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-lg border border-gray-100">
				<h3 class="text-2xl font-bold text-gray-900 mb-6">Golf Community Features</h3>
				<div class="space-y-6">
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<Flag class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Championship Golf Courses</h3>
							<p class="text-gray-700">World-class golf courses designed by renowned architects provide exceptional golfing experiences</p>
						</div>
					</div>
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<Award class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Exclusive Country Club Access</h3>
							<p class="text-gray-700">Fine dining, spa, fitness centers, and social events create a resort-style lifestyle</p>
						</div>
					</div>
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<DollarSign class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Strong Property Values</h3>
							<p class="text-gray-700">Golf course properties maintain strong resale values and excellent investment potential</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Featured Communities -->
		<div class="mb-16">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Which Las Vegas Golf Communities Offer Premier Golf Living?</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto text-center">
				Las Vegas premier golf communities include Red Rock Country Club, Anthem Country Club, Southern Highlands, and The Ridges. Each community offers championship golf courses, exclusive country club access, resort-style amenities, and prestigious lifestyles that attract golf enthusiasts and luxury buyers.
			</p>
			<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
				{#each communities as community}
					<div class="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all">
						<h3 class="text-lg font-bold text-gray-900 mb-2">{community.name}</h3>
						<p class="text-primary-600 font-semibold mb-2">{community.avgPrice}</p>
						<p class="text-gray-600 text-sm">{community.description}</p>
					</div>
				{/each}
			</div>
		</div>

		<!-- Properties -->
		<div class="mb-16">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">What Homes Are Available in Las Vegas Golf Communities?</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto text-center">
				Las Vegas golf communities offer luxury homes, custom estates, and upscale properties featuring golf course views, championship golf access, resort-style amenities, and country club living. Properties range from upscale homes to multi-million dollar estates in premier golf communities throughout the Las Vegas Valley.
			</p>
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
				<a href="/properties?type=golf" class="btn-primary">View All Golf Community Homes</a>
			</div>
		</div>

		<!-- CTA Section -->
		<div class="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-center text-white">
			<h2 class="text-3xl md:text-4xl font-bold mb-4">Ready to Find Your Dream Home in a Las Vegas Golf Community?</h2>
			<p class="text-lg text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
				Let me help you find your perfect home in a premier golf community. With deep knowledge of Las Vegas golf communities, championship courses, and luxury properties, I'll guide you through every step of your home buying journey.
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="/contact" class="btn-primary bg-white text-primary-600 hover:bg-gray-100">Contact Me</a>
				<a href="/properties?type=golf" class="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">View Properties</a>
			</div>
		</div>
	</div>
</section>

<style>
	.realscout-wrapper {
		min-height: 400px;
		width: 100%;
		contain: layout style paint;
		position: relative;
	}

	.loading-skeleton {
		min-height: 400px;
		width: 100%;
	}
</style>


