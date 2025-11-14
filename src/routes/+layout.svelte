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
		<div class="grid md:grid-cols-3 gap-8">
			<div>
				<h3 class="text-xl font-bold mb-4">Dr. Janet Duffy</h3>
				<p class="text-gray-300">Licensed REALTOR®</p>
				<p class="text-gray-300 mt-2">Your trusted Las Vegas real estate expert</p>
			</div>
			<div>
				<h3 class="text-xl font-bold mb-4">Quick Links</h3>
				<ul class="space-y-2">
					<li><a href="/properties" class="text-gray-300 hover:text-white transition-colors">Properties</a></li>
					<li><a href="/home-value" class="text-gray-300 hover:text-white transition-colors">Home Value</a></li>
					<li><a href="/rentals" class="text-gray-300 hover:text-white transition-colors">Rentals</a></li>
					<li><a href="/about" class="text-gray-300 hover:text-white transition-colors">About</a></li>
					<li><a href="/contact" class="text-gray-300 hover:text-white transition-colors">Contact</a></li>
				</ul>
			</div>
			<div>
				<h3 class="text-xl font-bold mb-4">Contact</h3>
				<p class="text-gray-300">Las Vegas, Nevada</p>
				<p class="text-gray-300 mt-2">
					<a href="/contact" class="text-primary-400 hover:text-primary-300 transition-colors">
						Get in Touch →
					</a>
				</p>
			</div>
		</div>
		<div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
			<p>&copy; {new Date().getFullYear()} Dr. Janet Duffy, REALTOR®. All rights reserved.</p>
		</div>
	</div>
</footer>
