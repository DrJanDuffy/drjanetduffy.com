<script>
	import { MapPin, Home } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Popular Neighborhoods in Las Vegas | Dr. Janet Duffy REALTOR®</title>
	<meta name="description" content="Discover the best places to live in Las Vegas. Explore popular neighborhoods including West Summerlin, The Ridges, and Red Rock Country Club." />
</svelte:head>

<!-- Popular Neighborhoods -->
<section class="section bg-gray-50">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-7xl mx-auto">
			<div class="text-center mb-12">
				<h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Popular Neighborhoods</h1>
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

