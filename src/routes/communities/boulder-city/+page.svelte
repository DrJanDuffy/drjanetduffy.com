<script>
	import { MapPin, Home, Award, CheckCircle, DollarSign, Users, Mountain } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	
	let mounted = false;
	
	onMount(() => {
		mounted = true;
	});
	
	const features = [
		'Small town charm',
		'Historic downtown',
		'Lake Mead access',
		'Outdoor recreation',
		'Low crime rate',
		'Strong community',
		'Scenic mountain views',
		'Peaceful lifestyle'
	];
</script>

<svelte:head>
	<title>Boulder City Real Estate | Dr. Janet Duffy REALTOR®</title>
	<meta name="description" content="Explore Boulder City real estate. Small town charm with historic downtown, Lake Mead access, and peaceful lifestyle just 30 minutes from Las Vegas." />
</svelte:head>

<section class="section bg-gradient-to-b from-white via-gray-50 to-white">
	<div class="container-premium">
		<div class="text-center mb-16">
			<h1 class="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900">
				Boulder City Real Estate
			</h1>
			<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-6"></div>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
				Small town charm with historic downtown, Lake Mead access, and peaceful lifestyle
			</p>
		</div>

		<!-- Hero Stats -->
		<div class="grid md:grid-cols-4 gap-6 mb-16">
			<div class="bg-white rounded-xl p-6 shadow-lg text-center">
				<div class="text-3xl font-bold text-primary-600 mb-2">$500K</div>
				<p class="text-gray-600 text-sm">Average Home Price</p>
			</div>
			<div class="bg-white rounded-xl p-6 shadow-lg text-center">
				<div class="text-3xl font-bold text-primary-600 mb-2">15K</div>
				<p class="text-gray-600 text-sm">Residents</p>
			</div>
			<div class="bg-white rounded-xl p-6 shadow-lg text-center">
				<div class="text-3xl font-bold text-primary-600 mb-2">30 Min</div>
				<p class="text-gray-600 text-sm">From Las Vegas</p>
			</div>
			<div class="bg-white rounded-xl p-6 shadow-lg text-center">
				<div class="text-3xl font-bold text-primary-600 mb-2">1931</div>
				<p class="text-gray-600 text-sm">Founded</p>
			</div>
		</div>

		<!-- About Boulder City -->
		<div class="grid md:grid-cols-2 gap-12 mb-16">
			<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-lg border border-gray-100">
				<h2 class="text-3xl font-bold text-gray-900 mb-6">About Boulder City</h2>
				<p class="text-gray-700 leading-relaxed mb-4">
					Boulder City is a unique community located just 30 minutes southeast of Las Vegas, offering a peaceful small-town atmosphere with easy access to big city amenities. Founded in 1931 during the construction of Hoover Dam, Boulder City maintains its historic charm while providing modern conveniences.
				</p>
				<p class="text-gray-700 leading-relaxed mb-6">
					The city is known for its prohibition on gambling, creating a family-friendly environment. With Lake Mead National Recreation Area nearby, residents enjoy world-class outdoor recreation including boating, fishing, hiking, and water sports. The historic downtown features unique shops, restaurants, and community events.
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
				<h2 class="text-3xl font-bold text-gray-900 mb-6">Why Choose Boulder City?</h2>
				<div class="space-y-6">
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<Mountain class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Outdoor Paradise</h3>
							<p class="text-gray-700">Lake Mead access, hiking trails, and scenic mountain views</p>
						</div>
					</div>
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<Award class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Historic Charm</h3>
							<p class="text-gray-700">Preserved historic downtown with unique character</p>
						</div>
					</div>
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<Users class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Strong Community</h3>
							<p class="text-gray-700">Tight-knit community with low crime and friendly neighbors</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Properties -->
		<div class="mb-16">
			<h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Properties in Boulder City</h2>
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
				<a href="/properties?neighborhood=boulder-city" class="btn-primary">View All Boulder City Properties</a>
			</div>
		</div>

		<!-- CTA Section -->
		<div class="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-center text-white">
			<h2 class="text-3xl font-bold mb-4">Interested in Boulder City Real Estate?</h2>
			<p class="text-lg text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
				Let me help you find your perfect home in this peaceful community
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="/contact" class="btn-primary bg-white text-primary-600 hover:bg-gray-100">Contact Me</a>
				<a href="/properties?neighborhood=boulder-city" class="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">View Properties</a>
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

