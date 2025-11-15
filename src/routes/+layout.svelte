<script lang="ts">
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

<footer class="bg-gray-800 text-white py-12 mt-16">
	<div class="container mx-auto px-4">
		<div class="grid md:grid-cols-5 gap-8">
			<!-- Testimonial Section -->
			<div>
				<h4 class="text-lg font-bold mb-4">Testimonial</h4>
				<blockquote class="text-gray-300 text-sm mb-4">
					<p class="italic">"Dr. Janet Duffy provided exceptional service throughout our home buying process..."</p>
					<small class="block mt-2 text-gray-400">— Happy Client</small>
				</blockquote>
				<a href="/testimonials" class="inline-block bg-primary-600 text-white px-4 py-2 rounded text-sm hover:bg-primary-700 transition-colors">Read All Testimonials</a>
			</div>

			<!-- Buying Links -->
			<div>
				<h4 class="text-lg font-bold mb-4"><a href="/buying" class="hover:text-primary-400">Buying</a></h4>
				<ul class="space-y-2 text-sm">
					<li><a href="/home-finder" class="text-gray-300 hover:text-white transition-colors">Home Finder</a></li>
					<li><a href="/buying-guide" class="text-gray-300 hover:text-white transition-colors">Buying Guide</a></li>
					<li><a href="/properties" class="text-gray-300 hover:text-white transition-colors">Search Listings</a></li>
				</ul>
			</div>

			<!-- Selling Links -->
			<div>
				<h4 class="text-lg font-bold mb-4"><a href="/selling" class="hover:text-primary-400">Selling</a></h4>
				<ul class="space-y-2 text-sm">
					<li><a href="/about" class="text-gray-300 hover:text-white transition-colors">About Me</a></li>
					<li><a href="/home-value" class="text-gray-300 hover:text-white transition-colors">Free Home Evaluation</a></li>
					<li><a href="/selling-guide" class="text-gray-300 hover:text-white transition-colors">Selling Guide</a></li>
				</ul>
			</div>

			<!-- Follow Us -->
			<div>
				<h4 class="text-lg font-bold mb-4">Follow Us</h4>
				<ul class="space-y-2 text-sm">
					<li>
						<a href="https://www.facebook.com/" target="_blank" rel="noopener" class="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
							<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
							Facebook
						</a>
					</li>
					<li>
						<a href="https://twitter.com/" target="_blank" rel="noopener" class="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
							<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
							Twitter
						</a>
					</li>
					<li>
						<a href="https://www.linkedin.com/" target="_blank" rel="noopener" class="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
							<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
							LinkedIn
						</a>
					</li>
				</ul>
			</div>

			<!-- Contact Info -->
			<div itemscope itemtype="https://schema.org/RealEstateAgent">
				<h4 class="text-lg font-bold mb-4">Contact Info</h4>
				<div class="text-sm text-gray-300 space-y-2">
					<p><span itemprop="name">Dr. Janet Duffy</span></p>
					<div itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
						<p>
							<span itemprop="addressLocality">Las Vegas</span>,
							<span itemprop="addressRegion">NV</span>
						</p>
					</div>
					<p>Phone: <span itemprop="telephone">(702) 555-1234</span></p>
					<p>
						<a href="/contact" class="text-primary-400 hover:text-primary-300">Contact Me</a>
					</p>
				</div>
			</div>
		</div>

		<div class="border-t border-gray-700 mt-8 pt-8">
			<div class="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 space-y-4 md:space-y-0">
				<div>
					<p>&copy; {new Date().getFullYear()} Dr. Janet Duffy, REALTOR®. All rights reserved.</p>
				</div>
				<div class="flex flex-wrap gap-4">
					<a href="/sitemap" class="hover:text-white transition-colors">Sitemap</a>
					<a href="/privacy" class="hover:text-white transition-colors">Privacy Policy</a>
					<a href="/terms" class="hover:text-white transition-colors">Terms</a>
				</div>
			</div>
		</div>
	</div>
</footer>
