<script>
	import { Home, TrendingUp, Award, MapPin, Star, DollarSign, Calendar, Building2 } from 'lucide-svelte';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	
	let mounted = false;
	
	onMount(() => {
		mounted = true;
	});

	function handleSearch(event) {
		event.preventDefault();
		const formData = new FormData(event.target);
		const params = new URLSearchParams();
		
		const location = formData.get('location');
		const propertyType = formData.get('property-type');
		const priceRange = formData.get('price-range');
		const bedrooms = formData.get('bedrooms');
		
		if (location) params.set('location', location);
		if (propertyType) params.set('type', propertyType);
		if (priceRange) {
			const [min, max] = priceRange.split('-');
			if (min) params.set('minPrice', min);
			if (max) params.set('maxPrice', max);
		}
		if (bedrooms) params.set('bedrooms', bedrooms);
		
		const queryString = params.toString();
		goto(`/properties${queryString ? '?' + queryString : ''}`);
	}
</script>

<svelte:head>
	<title>Dr. Janet Duffy | Las Vegas Real Estate Expert | REALTOR®</title>
	<meta name="description" content="Find your dream home in Las Vegas with Dr. Janet Duffy, a trusted REALTOR® with 15+ years of experience. Browse properties, get home valuations, and expert real estate guidance." />
</svelte:head>

<!-- Hero Section with Search -->
<section class="hero-section bg-gradient-to-b from-gray-50 to-white">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-7xl mx-auto py-12 md:py-16">
			<div class="text-center mb-8">
				<h1 class="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
					Find Your Dream Home in <span class="text-primary-600">Las Vegas</span>
				</h1>
				<p class="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
					Your trusted REALTOR® for buying, selling, and investing in Las Vegas real estate
				</p>
			</div>

			<!-- Property Search Form -->
			<div class="max-w-4xl mx-auto">
				<div class="bg-white rounded-xl shadow-lg p-6 md:p-8">
					{#if mounted && browser}
						<realscout-advanced-search 
							agent-encoded-id="QWdlbnQtMjI1MDUw">
						</realscout-advanced-search>
					{:else}
						<form on:submit={handleSearch} class="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
							<div>
								<label for="location" class="form-label">Location</label>
								<input type="text" id="location" name="location" placeholder="City, Zip, or Area" class="form-input" />
							</div>
							<div>
								<label for="property-type" class="form-label">Property Type</label>
								<select id="property-type" name="property-type" class="form-select">
									<option value="">All Types</option>
									<option value="single-family">Single Family</option>
									<option value="condo">Condo</option>
									<option value="townhome">Townhome</option>
									<option value="luxury">Luxury</option>
								</select>
							</div>
							<div>
								<label for="price-range" class="form-label">Price Range</label>
								<select id="price-range" name="price-range" class="form-select">
									<option value="">Any Price</option>
									<option value="0-300000">Under $300K</option>
									<option value="300000-500000">$300K - $500K</option>
									<option value="500000-750000">$500K - $750K</option>
									<option value="750000-1000000">$750K - $1M</option>
									<option value="1000000+">$1M+</option>
								</select>
							</div>
							<div>
								<label for="bedrooms" class="form-label">Bedrooms</label>
								<select id="bedrooms" name="bedrooms" class="form-select">
									<option value="">Any</option>
									<option value="1">1+</option>
									<option value="2">2+</option>
									<option value="3">3+</option>
									<option value="4">4+</option>
									<option value="5">5+</option>
								</select>
							</div>
							<div class="flex items-end">
								<button type="submit" class="btn-primary w-full">
									Search Properties
								</button>
							</div>
						</form>
					{/if}
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Featured Properties -->
<section class="section bg-white">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-7xl mx-auto">
			<div class="text-center mb-12">
				<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Properties</h2>
				<p class="text-lg text-gray-600">Explore our hand-picked selection of premium homes</p>
			</div>

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
									<div class="h-4 bg-gray-200 rounded w-2/3"></div>
								</div>
							</div>
						{/each}
					</div>
					<p class="text-center text-gray-600 mt-8 text-lg">Loading featured properties...</p>
				</div>
			{/if}
		</div>
	</div>
</section>

<!-- Why Choose Dr. Janet Duffy -->
<section class="section bg-gray-50">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-7xl mx-auto">
			<div class="text-center mb-12">
				<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Dr. Janet Duffy?</h2>
				<p class="text-lg text-gray-600">Experience the difference of working with a dedicated expert</p>
			</div>

			<div class="grid md:grid-cols-3 gap-8">
				<div class="text-center">
					<div class="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
						<Award class="w-8 h-8 text-primary-600" />
					</div>
					<h3 class="text-xl font-bold text-gray-900 mb-2">15+ Years Experience</h3>
					<p class="text-gray-600">Extensive knowledge of the Las Vegas real estate market</p>
				</div>

				<div class="text-center">
					<div class="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
						<TrendingUp class="w-8 h-8 text-primary-600" />
					</div>
					<h3 class="text-xl font-bold text-gray-900 mb-2">Expert Guidance</h3>
					<p class="text-gray-600">Personalized service tailored to your unique needs</p>
				</div>

				<div class="text-center">
					<div class="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
						<MapPin class="w-8 h-8 text-primary-600" />
					</div>
					<h3 class="text-xl font-bold text-gray-900 mb-2">Local Expertise</h3>
					<p class="text-gray-600">Deep understanding of Las Vegas neighborhoods and communities</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Our Services -->
<section class="section bg-white">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-7xl mx-auto">
			<div class="text-center mb-12">
				<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
				<p class="text-lg text-gray-600">Comprehensive real estate solutions tailored to your needs</p>
			</div>

			<div class="grid md:grid-cols-4 gap-6">
				<div class="card text-center">
					<div class="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
						<Home class="w-8 h-8 text-primary-600" />
					</div>
					<h3 class="text-lg font-bold text-gray-900 mb-2">Buying</h3>
					<p class="text-gray-600 text-sm">Expert guidance to find your perfect home</p>
				</div>

				<div class="card text-center">
					<div class="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
						<DollarSign class="w-8 h-8 text-primary-600" />
					</div>
					<h3 class="text-lg font-bold text-gray-900 mb-2">Selling</h3>
					<p class="text-gray-600 text-sm">Maximize your home's value and sell faster</p>
				</div>

				<div class="card text-center">
					<div class="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
						<Building2 class="w-8 h-8 text-primary-600" />
					</div>
					<h3 class="text-lg font-bold text-gray-900 mb-2">Rentals</h3>
					<p class="text-gray-600 text-sm">Find the perfect rental property</p>
				</div>

				<div class="card text-center">
					<div class="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
						<TrendingUp class="w-8 h-8 text-primary-600" />
					</div>
					<h3 class="text-lg font-bold text-gray-900 mb-2">Investments</h3>
					<p class="text-gray-600 text-sm">Strategic real estate investment advice</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Popular Neighborhoods -->
<section class="section bg-gray-50">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-7xl mx-auto">
			<div class="text-center mb-12">
				<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Popular Neighborhoods</h2>
				<p class="text-lg text-gray-600">Discover the best places to live in Las Vegas</p>
			</div>

			<div class="grid md:grid-cols-3 gap-6">
				<div class="card">
					<h3 class="text-xl font-bold text-gray-900 mb-2">West Summerlin</h3>
					<p class="text-gray-600 mb-4">Master-planned community with luxury homes and world-class amenities</p>
					<a href="/properties?neighborhood=west-summerlin" class="link-primary">View Properties →</a>
				</div>

				<div class="card">
					<h3 class="text-xl font-bold text-gray-900 mb-2">The Ridges</h3>
					<p class="text-gray-600 mb-4">Exclusive gated community with stunning mountain views</p>
					<a href="/properties?neighborhood=the-ridges" class="link-primary">View Properties →</a>
				</div>

				<div class="card">
					<h3 class="text-xl font-bold text-gray-900 mb-2">Red Rock Country Club</h3>
					<p class="text-gray-600 mb-4">Luxury golf community with resort-style living</p>
					<a href="/properties?neighborhood=red-rock" class="link-primary">View Properties →</a>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Client Testimonials -->
<section class="section bg-white">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-7xl mx-auto">
			<div class="text-center mb-12">
				<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
				<p class="text-lg text-gray-600">Hear what our satisfied clients have to say</p>
			</div>

			<div class="grid md:grid-cols-3 gap-6">
				<div class="card">
					<div class="flex gap-1 mb-4 justify-center">
						{#each Array(5) as _}
							<Star class="w-5 h-5 text-yellow-500 fill-yellow-500" />
						{/each}
					</div>
					<p class="text-gray-700 mb-4 italic text-center">"Dr. Duffy helped us find our dream home in West Summerlin. Her expertise and attention to detail made the entire process smooth and stress-free."</p>
					<p class="font-semibold text-gray-900 text-center">Sarah Johnson</p>
					<p class="text-sm text-gray-600 text-center">Las Vegas, NV</p>
				</div>

				<div class="card">
					<div class="flex gap-1 mb-4 justify-center">
						{#each Array(5) as _}
							<Star class="w-5 h-5 text-yellow-500 fill-yellow-500" />
						{/each}
					</div>
					<p class="text-gray-700 mb-4 italic text-center">"We sold our home above asking price thanks to Dr. Duffy's strategic marketing and negotiation skills. Highly recommend!"</p>
					<p class="font-semibold text-gray-900 text-center">Michael Chen</p>
					<p class="text-sm text-gray-600 text-center">Henderson, NV</p>
				</div>

				<div class="card">
					<div class="flex gap-1 mb-4 justify-center">
						{#each Array(5) as _}
							<Star class="w-5 h-5 text-yellow-500 fill-yellow-500" />
						{/each}
					</div>
					<p class="text-gray-700 mb-4 italic text-center">"Professional, knowledgeable, and always available. Dr. Duffy is the best real estate agent in Las Vegas!"</p>
					<p class="font-semibold text-gray-900 text-center">Jennifer Martinez</p>
					<p class="text-sm text-gray-600 text-center">Las Vegas, NV</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Market Insights -->
<section class="section bg-primary-600 text-white">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-7xl mx-auto">
			<div class="text-center mb-12">
				<h2 class="text-3xl md:text-4xl font-bold mb-4">Market Insights</h2>
				<p class="text-lg text-white text-opacity-90">Current Las Vegas real estate statistics</p>
			</div>

			<div class="grid md:grid-cols-3 gap-8">
				<div class="text-center">
					<div class="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-4">
						<DollarSign class="w-8 h-8 text-white" />
					</div>
					<div class="text-4xl md:text-5xl font-bold mb-2">$575K</div>
					<p class="text-white text-opacity-90">Median Home Price</p>
				</div>

				<div class="text-center">
					<div class="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-4">
						<Calendar class="w-8 h-8 text-white" />
					</div>
					<div class="text-4xl md:text-5xl font-bold mb-2">19</div>
					<p class="text-white text-opacity-90">Days on Market</p>
				</div>

				<div class="text-center">
					<div class="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-4">
						<Home class="w-8 h-8 text-white" />
					</div>
					<div class="text-4xl md:text-5xl font-bold mb-2">450</div>
					<p class="text-white text-opacity-90">Homes for Sale</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="section bg-white">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-4xl mx-auto text-center">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ready to Find Your Dream Home?</h2>
			<p class="text-lg text-gray-600 mb-8">Contact Dr. Janet Duffy today for personalized assistance</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="/contact" class="btn-primary">Schedule a Consultation</a>
				<a href="/home-value" class="btn-secondary">Get a Home Valuation</a>
			</div>
		</div>
	</div>
</section>

<style>
	.realscout-wrapper {
		min-height: 400px;
		width: 100%;
	}
	
	/* Override RealScout styles for homepage */
	.realscout-wrapper :global(realscout-office-listings) {
		--rs-grid-columns: 3;
		--rs-card-hover-shadow: 0 10px 20px rgba(0,0,0,0.15);
	}
	
	/* Style RealScout search widget */
	:global(realscout-advanced-search) {
		width: 100%;
	}
</style>
