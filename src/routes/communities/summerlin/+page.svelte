<script>
	import { MapPin, Home, Award, TrendingUp, DollarSign, Users, Camera, CheckCircle } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	
	let mounted = false;
	
	onMount(() => {
		mounted = true;
	});
	
	const features = [
		'Master-planned community',
		'World-class golf courses',
		'Top-rated schools',
		'Parks and trails',
		'Shopping centers',
		'Community centers',
		'Gated communities available',
		'Luxury amenities'
	];
	
	const neighborhoods = [
		{ name: 'West Summerlin', avgPrice: '$850K', description: 'Upscale homes with mountain views' },
		{ name: 'The Ridges', avgPrice: '$1.2M', description: 'Exclusive gated community' },
		{ name: 'Red Rock Country Club', avgPrice: '$950K', description: 'Luxury golf community' },
		{ name: 'The Trails', avgPrice: '$650K', description: 'Family-friendly neighborhood' }
	];
</script>

<svelte:head>
	<title>Summerlin Real Estate | Las Vegas | Dr. Janet Duffy REALTOR®</title>
	<meta name="description" content="Explore Summerlin real estate. Master-planned community with luxury homes, golf courses, top schools, and world-class amenities in Las Vegas." />
</svelte:head>

<section class="section bg-gradient-to-b from-white via-gray-50 to-white">
	<div class="container-premium">
		<div class="text-center mb-16">
			<h1 class="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900">
				Find Your Dream Home in Summerlin, Las Vegas
			</h1>
			<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-6"></div>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
				Las Vegas's premier master-planned community with luxury homes, world-class amenities, and exceptional lifestyle
			</p>
		</div>

		<!-- Hero Stats -->
		<div class="grid md:grid-cols-4 gap-6 mb-16">
			<div class="bg-white rounded-xl p-6 shadow-lg text-center">
				<div class="text-3xl font-bold text-primary-600 mb-2">$850K</div>
				<p class="text-gray-600 text-sm">Average Home Price</p>
			</div>
			<div class="bg-white rounded-xl p-6 shadow-lg text-center">
				<div class="text-3xl font-bold text-primary-600 mb-2">22K+</div>
				<p class="text-gray-600 text-sm">Acres</p>
			</div>
			<div class="bg-white rounded-xl p-6 shadow-lg text-center">
				<div class="text-3xl font-bold text-primary-600 mb-2">150+</div>
				<p class="text-gray-600 text-sm">Parks & Trails</p>
			</div>
			<div class="bg-white rounded-xl p-6 shadow-lg text-center">
				<div class="text-3xl font-bold text-primary-600 mb-2">10</div>
				<p class="text-gray-600 text-sm">Golf Courses</p>
			</div>
		</div>

		<!-- About Summerlin -->
		<div class="mb-16">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">What Makes Summerlin Las Vegas's Premier Community?</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto text-center">
				Summerlin is Las Vegas's premier master-planned community, spanning over 22,500 acres in the western Las Vegas Valley. Developed by The Howard Hughes Corporation, Summerlin offers a unique blend of luxury living, world-class amenities, and natural beauty through multiple villages, top-rated schools, extensive parks and trails, championship golf courses, and premier shopping.
			</p>
		</div>

		<div class="grid md:grid-cols-2 gap-12 mb-16">
			<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-lg border border-gray-100">
				<h3 class="text-2xl font-bold text-gray-900 mb-6">Community Overview</h3>
				<p class="text-gray-700 leading-relaxed mb-4">
					Summerlin features multiple villages, each with its own character and amenities, from upscale gated communities to family-friendly neighborhoods. The community represents the pinnacle of Las Vegas living with carefully planned development, exceptional amenities, and strong property values.
				</p>
				<p class="text-gray-700 leading-relaxed mb-6">
					With over 22,500 acres of master-planned development, Summerlin offers diverse housing options from luxury estates to family homes, all within a beautifully maintained environment with extensive parks, trails, and community facilities.
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
				<h3 class="text-2xl font-bold text-gray-900 mb-6">Key Benefits</h3>
				<div class="space-y-6">
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<Award class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Top-Rated Schools</h3>
							<p class="text-gray-700">Excellent public and private schools serving the community with high academic performance and comprehensive programs</p>
						</div>
					</div>
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<TrendingUp class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Strong Investment Potential</h3>
							<p class="text-gray-700">Consistent appreciation and strong resale values make Summerlin properties excellent long-term investments</p>
						</div>
					</div>
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<Users class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Active Lifestyle Opportunities</h3>
							<p class="text-gray-700">Parks, trails, recreation centers, and community events provide endless opportunities for active living</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Summerlin Neighborhoods -->
		<div class="mb-16">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Which Neighborhoods Are Available in Summerlin?</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto text-center">
				Summerlin features diverse neighborhoods from exclusive gated communities like The Ridges to family-friendly areas like The Trails. Each neighborhood offers unique character, amenities, and price points to match different lifestyles and budgets.
			</p>
			<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
				{#each neighborhoods as neighborhood}
					<div class="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all">
						<h3 class="text-lg font-bold text-gray-900 mb-2">{neighborhood.name}</h3>
						<p class="text-primary-600 font-semibold mb-2">{neighborhood.avgPrice}</p>
						<p class="text-gray-600 text-sm">{neighborhood.description}</p>
					</div>
				{/each}
			</div>
		</div>

		<!-- Properties in Summerlin -->
		<div class="mb-16">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">What Properties Are Available in Summerlin?</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto text-center">
				Summerlin offers diverse property types including luxury estates, single-family homes, townhomes, and condos. Properties range from affordable family homes to multi-million dollar estates, all within master-planned communities with exceptional amenities.
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
				<a href="/properties?neighborhood=summerlin" class="btn-primary">View All Summerlin Properties</a>
			</div>
		</div>

		<!-- CTA Section -->
		<div class="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-center text-white">
			<h2 class="text-3xl md:text-4xl font-bold mb-4">Ready to Find Your Dream Home in Summerlin?</h2>
			<p class="text-lg text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
				Let me help you find your perfect home in Summerlin. With deep knowledge of the community, neighborhoods, and market conditions, I'll guide you through every step of your home buying journey.
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="/contact" class="btn-primary bg-white text-primary-600 hover:bg-gray-100">Contact Me</a>
				<a href="/properties?neighborhood=summerlin" class="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">View Properties</a>
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

