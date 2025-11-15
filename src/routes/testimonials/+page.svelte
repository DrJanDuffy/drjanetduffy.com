<script>
	import { Star, Quote } from 'lucide-svelte';
	
	const testimonials = [
		{
			quote: "Dr. Duffy helped us find our dream home in West Summerlin. Her expertise and attention to detail made the entire process smooth and stress-free.",
			author: "Sarah Johnson",
			location: "Las Vegas, NV",
			rating: 5,
			type: "Buyer"
		},
		{
			quote: "We sold our home above asking price thanks to Dr. Duffy's strategic marketing and negotiation skills. Highly recommend!",
			author: "Michael Chen",
			location: "Henderson, NV",
			rating: 5,
			type: "Seller"
		},
		{
			quote: "Professional, knowledgeable, and always available. Dr. Duffy is the best real estate agent in Las Vegas!",
			author: "Jennifer Martinez",
			location: "Las Vegas, NV",
			rating: 5,
			type: "Buyer"
		},
		{
			quote: "As a first-time homebuyer, I was nervous about the process. Dr. Duffy guided me through every step and made me feel confident in my decisions.",
			author: "David Thompson",
			location: "North Las Vegas, NV",
			rating: 5,
			type: "First-Time Buyer"
		},
		{
			quote: "We've worked with Dr. Duffy on multiple investment properties. Her market knowledge and negotiation skills are unmatched.",
			author: "Robert & Lisa Anderson",
			location: "Las Vegas, NV",
			rating: 5,
			type: "Investor"
		},
		{
			quote: "Dr. Duffy went above and beyond to help us find the perfect home. She truly cares about her clients and their success.",
			author: "Maria Rodriguez",
			location: "Henderson, NV",
			rating: 5,
			type: "Buyer"
		}
	];
</script>

<svelte:head>
	<title>Client Testimonials | Dr. Janet Duffy REALTOR®</title>
	<meta name="description" content="Hear what our satisfied clients have to say about working with Dr. Janet Duffy. Read real testimonials from Las Vegas homebuyers and sellers." />
	
	<!-- Structured Data -->
	<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "CollectionPage",
		"name": "Client Testimonials",
		"description": "Client testimonials and reviews for Dr. Janet Duffy",
		"url": "https://www.drjanetduffy.com/testimonials",
		"aggregateRating": {
			"@type": "AggregateRating",
			"ratingValue": "4.9",
			"reviewCount": "150"
		}
	}
	</script>
</svelte:head>

<!-- Hero Section -->
<section class="hero-section bg-gradient-to-b from-primary-50 to-white">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-7xl mx-auto py-12 md:py-16">
			<div class="text-center mb-8">
				<h1 class="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
					What Our Las Vegas Real Estate Clients Say
				</h1>
				<p class="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
					Hear what our satisfied clients have to say
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Client Testimonials -->
<section class="section bg-white">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-7xl mx-auto">
			<div class="mb-12 text-center">
				<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What Do Las Vegas Real Estate Clients Say About Dr. Janet Duffy?</h2>
				<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto">
					Las Vegas real estate clients consistently praise Dr. Janet Duffy for helping find dream homes in West Summerlin, selling homes above asking price through strategic marketing and negotiation, professional and knowledgeable service, guiding first-time buyers through every step, unmatched market knowledge for investment properties, and going above and beyond to ensure client success.
				</p>
			</div>
			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
				{#each testimonials as testimonial}
					<div class="card relative">
						<div class="absolute top-4 right-4 opacity-10">
							<Quote class="w-16 h-16 text-primary-600" />
						</div>
						<div class="flex gap-1 mb-4 justify-center">
							{#each Array(testimonial.rating) as _}
								<Star class="w-5 h-5 text-yellow-500 fill-yellow-500" />
							{/each}
						</div>
						<p class="text-gray-700 mb-4 italic text-center relative z-10">"{testimonial.quote}"</p>
						<div class="border-t border-gray-200 pt-4">
							<p class="font-semibold text-gray-900 text-center">{testimonial.author}</p>
							<p class="text-sm text-gray-600 text-center">{testimonial.location}</p>
							<p class="text-xs text-primary-600 text-center mt-1 font-medium">{testimonial.type}</p>
						</div>
					</div>
				{/each}
			</div>
			
			<!-- Overall Rating -->
			<div class="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-center text-white mb-12">
				<div class="flex justify-center gap-1 mb-4">
					{#each Array(5) as _}
						<Star class="w-8 h-8 text-yellow-300 fill-yellow-300" />
					{/each}
				</div>
				<p class="text-3xl font-bold mb-2">4.9/5.0</p>
				<p class="text-lg text-white text-opacity-90">Average Rating from 150+ Clients</p>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="section bg-gray-50">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-4xl mx-auto text-center">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ready to Join Our Satisfied Clients?</h2>
			<p class="text-lg text-gray-600 mb-8">Experience the same exceptional service that earned us 5-star reviews</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="/contact" class="btn-primary">Get Started Today</a>
				<a href="/about" class="btn-secondary">Learn More About Us</a>
			</div>
		</div>
	</div>
</section>

