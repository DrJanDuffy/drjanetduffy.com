<script>
	import { Home, Award, MapPin, Star, DollarSign, BookOpen, HelpCircle } from 'lucide-svelte';
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
					Find Your Dream Home in Las Vegas Today
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
			
			<div class="text-center mt-8">
				<a href="/properties" class="btn-primary">View All Properties</a>
			</div>
		</div>
	</div>
</section>

<!-- Quick Links to Other Sections -->
<section class="section bg-gray-50">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-7xl mx-auto">
			<div class="text-center mb-12">
				<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Explore Our Services & Resources</h2>
				<p class="text-lg text-gray-600">Everything you need for your Las Vegas real estate journey</p>
			</div>
			
			<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
				<a href="/about" class="card text-center hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-300 group">
					<div class="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4 group-hover:bg-primary-200 group-hover:scale-110 transition-all">
						<Award class="w-8 h-8 text-primary-600" />
					</div>
					<h3 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">Why Choose Us</h3>
					<p class="text-gray-600 text-sm">Experience the difference</p>
				</a>

				<a href="/services" class="card text-center hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-300 group">
					<div class="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4 group-hover:bg-primary-200 group-hover:scale-110 transition-all">
						<Home class="w-8 h-8 text-primary-600" />
					</div>
					<h3 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">Our Services</h3>
					<p class="text-gray-600 text-sm">Comprehensive solutions</p>
				</a>

				<a href="/neighborhoods" class="card text-center hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-300 group">
					<div class="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4 group-hover:bg-primary-200 group-hover:scale-110 transition-all">
						<MapPin class="w-8 h-8 text-primary-600" />
					</div>
					<h3 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">Neighborhoods</h3>
					<p class="text-gray-600 text-sm">Explore Las Vegas</p>
				</a>

				<a href="/testimonials" class="card text-center hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-300 group">
					<div class="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4 group-hover:bg-primary-200 group-hover:scale-110 transition-all">
						<Star class="w-8 h-8 text-primary-600" />
					</div>
					<h3 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">Testimonials</h3>
					<p class="text-gray-600 text-sm">Client success stories</p>
				</a>
			</div>
			
			<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
				<a href="/buying-guide" class="card text-center hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-300 group">
					<div class="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4 group-hover:bg-primary-200 group-hover:scale-110 transition-all">
						<Home class="w-8 h-8 text-primary-600" />
					</div>
					<h3 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">Buying Guide</h3>
					<p class="text-gray-600 text-sm">Step-by-step home buying</p>
				</a>

				<a href="/selling-guide" class="card text-center hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-300 group">
					<div class="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4 group-hover:bg-primary-200 group-hover:scale-110 transition-all">
						<DollarSign class="w-8 h-8 text-primary-600" />
					</div>
					<h3 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">Selling Guide</h3>
					<p class="text-gray-600 text-sm">Maximize your sale price</p>
				</a>

				<a href="/resources" class="card text-center hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-300 group">
					<div class="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4 group-hover:bg-primary-200 group-hover:scale-110 transition-all">
						<BookOpen class="w-8 h-8 text-primary-600" />
					</div>
					<h3 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">Resources</h3>
					<p class="text-gray-600 text-sm">Guides and tools</p>
				</a>

				<a href="/faq" class="card text-center hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-300 group">
					<div class="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4 group-hover:bg-primary-200 group-hover:scale-110 transition-all">
						<HelpCircle class="w-8 h-8 text-primary-600" />
					</div>
					<h3 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">FAQ</h3>
					<p class="text-gray-600 text-sm">Common questions</p>
				</a>
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
