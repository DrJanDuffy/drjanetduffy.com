<script>
	import { Star } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Client Testimonials | Dr. Janet Duffy REALTOR®</title>
	<meta name="description" content="Hear what our satisfied clients have to say about working with Dr. Janet Duffy. Read real testimonials from Las Vegas homebuyers and sellers." />
</svelte:head>

<!-- Client Testimonials -->
<section class="section bg-white">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-7xl mx-auto">
			<div class="text-center mb-12">
				<h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h1>
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

