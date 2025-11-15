<script>
import ContactForm from '$lib/components/ContactForm.svelte';
</script>

<svelte:head>
	<title>Contact Maria Martin, REALTOR® | Henderson Las Vegas Real Estate | 702-458-8888</title>
	<meta name="description" content="Contact Maria Martin, experienced REALTOR® for Henderson and Las Vegas real estate. Direct: 702-458-8888. Expert service for Green Valley, Anthem, and Henderson communities." />
	<meta name="keywords" content="Maria Martin REALTOR, contact Maria Martin, Henderson realtor, Green Valley agent, 702-458-8888, BHHS Nevada Properties" />

	<!-- Schema.org structured data -->
	<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "ContactPage",
		"mainEntity": {
			"@type": "RealEstateAgent",
			"name": "Maria Martin",
			"telephone": "702-458-8888",
			"address": {
				"@type": "PostalAddress",
				"streetAddress": "3185 St. Rose Pkwy. Ste. 100",
				"addressLocality": "Henderson",
				"addressRegion": "NV",
				"postalCode": "89052",
				"addressCountry": "US"
			},
			"memberOf": {
				"@type": "Organization",
				"name": "Berkshire Hathaway HomeServices Nevada Properties"
			}
		}
	}
	</script>
</svelte:head>

<div class="container mx-auto px-4 py-16">
	<div class="max-w-4xl mx-auto">
		<div class="text-center mb-12">
			<h1 class="text-4xl font-bold mb-4 text-vegas-deep-900">Contact Maria Martin, REALTOR<sup>®</sup></h1>
			<p class="text-xl text-vegas-deep-700">
				Your Henderson real estate expert ready to help you find your perfect home.
			</p>
		</div>

		<div class="grid md:grid-cols-2 gap-12">
			<!-- Contact Form -->
			<div>
				<ContactForm
					title="Send a Message"
					subtitle="Ready to start your real estate journey? Contact me today!"
					showPhone={true}
				/>
			</div>

			<!-- Contact Information -->
			<div>
				<h2 class="text-2xl font-semibold mb-6 text-gray-800">Get in Touch</h2>

				<div class="space-y-6">
					<div>
						<h3 class="font-semibold text-gray-800">Phone</h3>
						<a href="tel:+17024588888" class="text-vegas-gold-600 hover:text-vegas-gold-700 font-semibold text-lg">702-458-8888</a>
						<p class="text-sm text-gray-500">Available 7 days a week</p>
					</div>

					<div>
						<h3 class="font-semibold text-gray-800">Office Location</h3>
						<p class="text-gray-600">Berkshire Hathaway HomeServices Nevada Properties</p>
						<p class="text-gray-600">3185 St. Rose Pkwy. Ste. 100</p>
						<p class="text-gray-600">Henderson, NV 89052</p>
						<p class="text-sm text-gray-500 mt-2">Serving Henderson, Green Valley, Anthem & Las Vegas</p>
					</div>

					<div>
						<h3 class="font-semibold text-gray-800">Office Hours</h3>
						<div class="text-sm text-gray-600 space-y-1">
							<p>Monday - Friday: 9:00 AM - 6:00 PM</p>
							<p>Saturday: 10:00 AM - 4:00 PM</p>
							<p>Sunday: By Appointment</p>
						</div>
					</div>
				</div>

				<div class="mt-8 p-6 bg-primary-50 rounded-lg">
					<h3 class="font-semibold text-gray-800 mb-3">Why Choose Maria Martin?</h3>
					<ul class="space-y-2 text-sm text-gray-600">
						<li>✓ Henderson market specialist</li>
						<li>✓ 10+ years of experience</li>
						<li>✓ Proven track record</li>
						<li>✓ Personalized service</li>
						<li>✓ Free consultation</li>
					</ul>
				</div>
			</div>
		</div>

		<!-- Service Areas -->
		<div class="mt-16">
			<h2 class="text-3xl font-bold text-center mb-8 text-gray-800">Service Areas</h2>
			<div class="grid md:grid-cols-4 gap-6">
				<div class="bg-white rounded-lg shadow-md p-6 text-center">
					<h3 class="font-bold text-lg mb-2 text-gray-800">Henderson</h3>
					<p class="text-sm text-gray-600">All neighborhoods</p>
				</div>
				<div class="bg-white rounded-lg shadow-md p-6 text-center">
					<h3 class="font-bold text-lg mb-2 text-gray-800">Green Valley</h3>
					<p class="text-sm text-gray-600">Master-planned community</p>
				</div>
				<div class="bg-white rounded-lg shadow-md p-6 text-center">
					<h3 class="font-bold text-lg mb-2 text-gray-800">Anthem</h3>
					<p class="text-sm text-gray-600">Hillside community</p>
				</div>
				<div class="bg-white rounded-lg shadow-md p-6 text-center">
					<h3 class="font-bold text-lg mb-2 text-gray-800">Las Vegas</h3>
					<p class="text-sm text-gray-600">Greater metro area</p>
				</div>
			</div>
		</div>

		<!-- CTA -->
		<div class="mt-12 bg-primary-600 text-white rounded-lg p-8 text-center">
			<h2 class="text-2xl font-bold mb-4">Schedule Your Free Consultation Today</h2>
			<p class="text-lg mb-6">
				Experience professional Henderson real estate service with Maria Martin.
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="tel:+17024588888" class="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
					Call (702) 458-8888
				</a>
				<a href="/maria-martin/home-value" class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
					Get Free Home Valuation
				</a>
			</div>
		</div>
	</div>
</div>
