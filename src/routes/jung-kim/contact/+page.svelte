<script>
import ContactForm from '$lib/components/ContactForm.svelte';
</script>

<svelte:head>
	<title>Contact Jung H. Kim, REALTOR® | #1 BHHS Summerlin Agent | 702-224-4978</title>
	<meta name="description" content="Contact Jung H. Kim, award-winning REALTOR® and #1 agent at BHHS Summerlin. Direct: 702-224-4978. ABR, CNHS, SRES certified. Bilingual English & Korean services for luxury Las Vegas real estate." />
	<meta name="keywords" content="Jung H. Kim REALTOR, Jung Kim contact, BHHS Summerlin, Korean realtor Las Vegas, Summerlin real estate agent, 702-224-4978, luxury Las Vegas homes" />

	<!-- Schema.org structured data -->
	<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "ContactPage",
		"mainEntity": {
			"@type": "RealEstateAgent",
			"name": "Jung H. Kim",
			"telephone": "702-224-4978",
			"address": {
				"@type": "PostalAddress",
				"streetAddress": "1490 Center Crossing Road",
				"addressLocality": "Las Vegas",
				"addressRegion": "NV",
				"postalCode": "89144",
				"addressCountry": "US"
			},
			"memberOf": {
				"@type": "Organization",
				"name": "Berkshire Hathaway HomeServices Nevada Properties"
			},
			"knowsLanguage": ["en", "ko"],
			"hasCredential": ["ABR", "CNHS", "SRES"]
		}
	}
	</script>
</svelte:head>

<div class="container mx-auto px-4 py-16">
	<div class="max-w-4xl mx-auto">
		<div class="text-center mb-12">
			<h1 class="text-4xl font-bold mb-4 text-vegas-deep-900">Contact Jung H. Kim, REALTOR<sup>®</sup></h1>
			<p class="text-xl text-vegas-deep-700">
				Work with the #1 agent at BHHS Summerlin. Award-winning service in English & Korean.
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
						<a href="tel:+17022244978" class="text-vegas-gold-600 hover:text-vegas-gold-700 font-semibold text-lg">702-224-4978</a>
						<p class="text-sm text-gray-500">Direct line - available 7 days a week</p>
					</div>

					<div>
						<h3 class="font-semibold text-gray-800">Office</h3>
						<a href="tel:+17023127070" class="text-vegas-gold-600 hover:text-vegas-gold-700">702-312-7070</a>
						<p class="text-sm text-gray-500">Main office line</p>
					</div>

					<div>
						<h3 class="font-semibold text-gray-800">Office Location</h3>
						<p class="text-gray-600">Berkshire Hathaway HomeServices Nevada Properties</p>
						<p class="text-gray-600">1490 Center Crossing Road</p>
						<p class="text-gray-600">Las Vegas, NV 89144</p>
						<p class="text-sm text-gray-500 mt-2">Serving Summerlin, The Ridges, Tournament Hills & Las Vegas</p>
					</div>

					<div>
						<h3 class="font-semibold text-gray-800">Languages</h3>
						<div class="text-sm text-gray-600 space-y-1">
							<p>• English</p>
							<p>• Korean (한국어)</p>
						</div>
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

				<div class="mt-8 p-6 bg-blue-50 rounded-lg border-2 border-blue-200">
					<h3 class="font-semibold text-gray-800 mb-3">Why Choose Jung H. Kim?</h3>
					<ul class="space-y-2 text-sm text-gray-600">
						<li>✓ #1 agent at BHHS Summerlin</li>
						<li>✓ $38.9M+ in 2024 sales</li>
						<li>✓ Top 0.3% nationwide</li>
						<li>✓ ABR, CNHS, SRES certified</li>
						<li>✓ Bilingual English & Korean</li>
						<li>✓ Free consultation</li>
					</ul>
				</div>

				<div class="mt-8 p-6 bg-primary-50 rounded-lg">
					<h3 class="font-semibold text-gray-800 mb-3">한국어 서비스 안내</h3>
					<p class="text-sm text-gray-600">
						한국어로 편하게 상담하실 수 있습니다. 라스베가스 부동산 구매, 판매, 투자에 대해 전문적인 서비스를 제공합니다.
						전화 또는 이메일로 연락주시면 신속하게 답변드리겠습니다.
					</p>
				</div>
			</div>
		</div>

		<!-- Service Areas -->
		<div class="mt-16">
			<h2 class="text-3xl font-bold text-center mb-8 text-gray-800">Service Areas</h2>
			<div class="grid md:grid-cols-4 gap-6">
				<div class="bg-white rounded-lg shadow-md p-6 text-center">
					<h3 class="font-bold text-lg mb-2 text-gray-800">Summerlin</h3>
					<p class="text-sm text-gray-600">All villages & communities</p>
				</div>
				<div class="bg-white rounded-lg shadow-md p-6 text-center">
					<h3 class="font-bold text-lg mb-2 text-gray-800">The Ridges</h3>
					<p class="text-sm text-gray-600">Luxury gated community</p>
				</div>
				<div class="bg-white rounded-lg shadow-md p-6 text-center">
					<h3 class="font-bold text-lg mb-2 text-gray-800">Tournament Hills</h3>
					<p class="text-sm text-gray-600">Guard-gated luxury homes</p>
				</div>
				<div class="bg-white rounded-lg shadow-md p-6 text-center">
					<h3 class="font-bold text-lg mb-2 text-gray-800">Greater Las Vegas</h3>
					<p class="text-sm text-gray-600">All metropolitan areas</p>
				</div>
			</div>
		</div>

		<!-- CTA -->
		<div class="mt-12 bg-primary-600 text-white rounded-lg p-8 text-center">
			<h2 class="text-2xl font-bold mb-4">Schedule Your Free Consultation Today</h2>
			<p class="text-lg mb-6">
				Experience award-winning real estate service from the #1 agent at BHHS Summerlin.
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="tel:+17022244978" class="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
					Call (702) 224-4978
				</a>
				<a href="/jung-kim/home-value" class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
					Get Free Home Valuation
				</a>
			</div>
		</div>
	</div>
</div>
