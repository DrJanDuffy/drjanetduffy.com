<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navigation from '$lib/components/Navigation.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Navigation />

<main>
	{@render children?.()}
</main>

<footer class="bg-gray-900 text-white py-16 mt-16">
	<div class="container mx-auto px-4">
		<div class="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
			<!-- About Section -->
			<div class="lg:col-span-2">
				<h3 class="text-xl font-display font-bold mb-4 text-white">Dr. Janet Duffy</h3>
				<p class="text-gray-400 mb-4">Licensed REALTOR®</p>
				<p class="text-gray-400 mb-6 text-sm">Your trusted Las Vegas real estate expert with 15+ years of experience serving buyers, sellers, and investors.</p>
				<div class="flex gap-4">
					<a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page" class="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
						<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.86c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
						</svg>
					</a>
					<a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our LinkedIn page" class="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
						<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
						</svg>
					</a>
					<a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Twitter page" class="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
						<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
						</svg>
					</a>
				</div>
			</div>
			
			<!-- Main Pages -->
			<div>
				<h3 class="text-lg font-display font-bold mb-4 text-white">Main</h3>
				<ul class="space-y-2 text-sm">
					<li><a href="/" class="text-gray-400 hover:text-white transition-colors">Home</a></li>
					<li><a href="/properties" class="text-gray-400 hover:text-white transition-colors">Properties</a></li>
					<li><a href="/about" class="text-gray-400 hover:text-white transition-colors">About</a></li>
					<li><a href="/contact" class="text-gray-400 hover:text-white transition-colors">Contact</a></li>
					<li><a href="/blog" class="text-gray-400 hover:text-white transition-colors">Blog</a></li>
				</ul>
			</div>
			
					<!-- Properties -->
					<div>
						<h3 class="text-lg font-display font-bold mb-4 text-white">Properties</h3>
						<ul class="space-y-2 text-sm">
							<li><a href="/rentals" class="text-gray-400 hover:text-white transition-colors">Rentals</a></li>
							<li><a href="/listings-embedded" class="text-gray-400 hover:text-white transition-colors">Grid View</a></li>
							<li><a href="/listings-list" class="text-gray-400 hover:text-white transition-colors">List View</a></li>
							<li><a href="/past-sales" class="text-gray-400 hover:text-white transition-colors">Past Sales</a></li>
							<li><a href="/properties?type=single-family" class="text-gray-400 hover:text-white transition-colors">Single Family</a></li>
							<li><a href="/properties?type=condos" class="text-gray-400 hover:text-white transition-colors">Condos</a></li>
							<li><a href="/properties?type=townhomes" class="text-gray-400 hover:text-white transition-colors">Townhomes</a></li>
							<li><a href="/properties?type=new-construction" class="text-gray-400 hover:text-white transition-colors">New Construction</a></li>
							<li><a href="/properties?type=luxury" class="text-gray-400 hover:text-white transition-colors">Luxury Estates</a></li>
							<li><a href="/properties?type=gated" class="text-gray-400 hover:text-white transition-colors">Gated Communities</a></li>
							<li><a href="/properties?type=golf" class="text-gray-400 hover:text-white transition-colors">Golf Communities</a></li>
							<li><a href="/properties?type=55-plus" class="text-gray-400 hover:text-white transition-colors">55+ Communities</a></li>
							<li><a href="/properties?type=foreclosures" class="text-gray-400 hover:text-white transition-colors">Foreclosures</a></li>
							<li><a href="/properties?type=short-sales" class="text-gray-400 hover:text-white transition-colors">Short Sales</a></li>
						</ul>
					</div>
			
			<!-- Communities -->
			<div>
				<h3 class="text-lg font-display font-bold mb-4 text-white">Communities</h3>
				<ul class="space-y-2 text-sm">
					<li><a href="/properties?neighborhood=summerlin" class="text-gray-400 hover:text-white transition-colors">Summerlin</a></li>
					<li><a href="/properties?neighborhood=henderson" class="text-gray-400 hover:text-white transition-colors">Henderson</a></li>
					<li><a href="/properties?neighborhood=green-valley" class="text-gray-400 hover:text-white transition-colors">Green Valley</a></li>
					<li><a href="/properties?neighborhood=north-las-vegas" class="text-gray-400 hover:text-white transition-colors">North Las Vegas</a></li>
					<li><a href="/properties?neighborhood=boulder-city" class="text-gray-400 hover:text-white transition-colors">Boulder City</a></li>
					<li><a href="/properties?neighborhood=seven-hills" class="text-gray-400 hover:text-white transition-colors">Seven Hills</a></li>
					<li><a href="/properties?neighborhood=southern-highlands" class="text-gray-400 hover:text-white transition-colors">Southern Highlands</a></li>
					<li><a href="/properties?neighborhood=mountains-edge" class="text-gray-400 hover:text-white transition-colors">Mountains Edge</a></li>
					<li><a href="/properties?neighborhood=anthem" class="text-gray-400 hover:text-white transition-colors">Anthem</a></li>
					<li><a href="/sitemap" class="text-gray-400 hover:text-white transition-colors text-primary-400">View All →</a></li>
				</ul>
			</div>
			
			<!-- Services & Contact -->
			<div>
						<h3 class="text-lg font-display font-bold mb-4 text-white">Services</h3>
						<ul class="space-y-2 text-sm mb-6">
							<li><a href="/home-value" class="text-gray-400 hover:text-white transition-colors">Home Value</a></li>
							<li><a href="/about#buying" class="text-gray-400 hover:text-white transition-colors">Buying Guide</a></li>
							<li><a href="/about#selling" class="text-gray-400 hover:text-white transition-colors">Selling Guide</a></li>
							<li><a href="/about#mortgage" class="text-gray-400 hover:text-white transition-colors">Mortgage Calculator</a></li>
							<li><a href="/about#testimonials" class="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
						</ul>
				
				<h3 class="text-lg font-display font-bold mb-4 text-white mt-6">Contact</h3>
				<div class="space-y-3 text-sm text-gray-400">
					<div>
						<p class="font-semibold text-white mb-1">Phone</p>
						<a href="tel:+17022221964" class="hover:text-white transition-colors">702-222-1964</a>
					</div>
					<div>
						<p class="font-semibold text-white mb-1">Email</p>
						<a href="mailto:drduffy@bhhsnv.com" class="hover:text-white transition-colors">drduffy@bhhsnv.com</a>
					</div>
					<div>
						<p class="font-semibold text-white mb-1">Location</p>
						<p>Las Vegas, Nevada</p>
						<p class="text-xs mt-1">Serving West Summerlin & The Ridges</p>
					</div>
				</div>
			</div>
		</div>
		
		<div class="border-t border-gray-800 pt-8">
			<div class="flex flex-col md:flex-row justify-between items-center gap-4">
				<p class="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Dr. Janet Duffy, REALTOR®. All rights reserved.</p>
				<div class="flex flex-wrap gap-4 text-sm justify-center">
					<a href="/privacy" class="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
					<a href="/terms" class="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
					<a href="/sitemap" class="text-gray-400 hover:text-white transition-colors">Sitemap</a>
				</div>
			</div>
		</div>
	</div>
</footer>
