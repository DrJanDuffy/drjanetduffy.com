<script>
import { browser } from '$app/env';
import { page } from '$app/stores';
import Navigation from '$lib/components/Navigation.svelte';
import { webVitals } from '$lib/vitals';
import '../app.css';

const analyticsId = import.meta.env.VERCEL_ANALYTICS_ID;

$: if (browser && analyticsId) {
  webVitals({
    path: $page.url.pathname,
    params: $page.params,
    analyticsId,
  });
}
</script>

<Navigation />

<main>
	<slot />
</main>

<footer class="bg-gray-800 text-white py-12">
	<div class="container mx-auto px-4">
		<div class="grid md:grid-cols-4 gap-8">
			<div class="md:col-span-2">
				<div class="flex items-center space-x-2 mb-4">
					<div class="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
						<span class="text-white font-bold text-sm">JD</span>
					</div>
					<div>
						<h3 class="text-xl font-bold">Dr. Jan Duffy</h3>
						<p class="text-gray-300">REALTOR</p>
					</div>
				</div>
				<p class="text-gray-300 mb-4">
					Your trusted Las Vegas real estate expert. Helping you find your dream home or sell your property with confidence.
				</p>
				<div class="flex space-x-4">
					<a href="tel:+17025551234" class="text-primary-400 hover:text-primary-300 transition-colors">
						(702) 555-1234
					</a>
					<a href="mailto:jan@drjanduffy.com" class="text-primary-400 hover:text-primary-300 transition-colors">
						jan@drjanduffy.com
					</a>
				</div>
			</div>
			
			<div>
				<h4 class="text-lg font-semibold mb-4">Quick Links</h4>
				<ul class="space-y-2">
					<li><a href="/" class="text-gray-300 hover:text-white transition-colors">Home</a></li>
					<li><a href="/properties" class="text-gray-300 hover:text-white transition-colors">Properties</a></li>
					<li><a href="/home-value" class="text-gray-300 hover:text-white transition-colors">Home Value</a></li>
					<li><a href="/rentals" class="text-gray-300 hover:text-white transition-colors">Rentals</a></li>
					<li><a href="/about" class="text-gray-300 hover:text-white transition-colors">About</a></li>
					<li><a href="/contact" class="text-gray-300 hover:text-white transition-colors">Contact</a></li>
				</ul>
			</div>
			
			<div>
				<h4 class="text-lg font-semibold mb-4">Services</h4>
				<ul class="space-y-2">
					<li class="text-gray-300">Home Buying</li>
					<li class="text-gray-300">Home Selling</li>
					<li class="text-gray-300">Market Analysis</li>
					<li class="text-gray-300">Property Valuation</li>
					<li class="text-gray-300">Investment Properties</li>
				</ul>
			</div>
		</div>
		
		<div class="border-t border-gray-700 mt-8 pt-8 text-center">
			<p class="text-gray-400">
				&copy; 2024 Dr. Jan Duffy REALTOR. All rights reserved. | 
				<a href="/privacy" class="hover:text-white transition-colors">Privacy Policy</a> | 
				<a href="/terms" class="hover:text-white transition-colors">Terms of Service</a>
			</p>
		</div>
	</div>
</footer>
