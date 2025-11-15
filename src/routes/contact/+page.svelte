<script>
import ContactForm from '$lib/components/ContactForm.svelte';
</script>

<svelte:head>
	<title>Contact Dr. Janet Duffy, REALTOR® | Berkshire Hathaway Nevada Properties</title>
	<meta name="description" content="Contact Dr. Janet Duffy, REALTOR® for luxury Las Vegas real estate expertise. Direct: 702-222-1964 | drduffy@bhhsnv.com. West Summerlin specialist for executives and California relocations." />
	<meta name="keywords" content="Dr. Janet Duffy REALTOR, Berkshire Hathaway Nevada Properties, luxury Las Vegas real estate, West Summerlin, executive relocation, 702-222-1964" />
	
	<!-- Schema.org structured data -->
	<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "ContactPage",
		"mainEntity": {
			"@type": "RealEstateAgent",
					"name": "Dr. Janet Duffy",
		"telephone": "702-222-1964",
		"email": "drduffy@bhhsnv.com",
			"address": {
				"@type": "PostalAddress",
				"addressLocality": "Las Vegas",
				"addressRegion": "NV",
				"addressCountry": "US"
			}
		}
	}
	</script>
</svelte:head>

<svelte:head>
	<title>Contact Dr. Janet Duffy, REALTOR® | Berkshire Hathaway Nevada Properties</title>
	<meta name="description" content="Contact Dr. Janet Duffy, REALTOR® for luxury Las Vegas real estate expertise. Direct: 702-222-1964 | drduffy@bhhsnv.com. West Summerlin specialist for executives and California relocations." />
	<meta name="keywords" content="Dr. Janet Duffy REALTOR, Berkshire Hathaway Nevada Properties, luxury Las Vegas real estate, West Summerlin, executive relocation, 702-222-1964" />
	
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://drjanetduffy.com/contact" />
	<meta property="og:title" content="Contact Dr. Janet Duffy, REALTOR® | Berkshire Hathaway Nevada Properties" />
	<meta property="og:description" content="Contact Dr. Janet Duffy, REALTOR® for luxury Las Vegas real estate expertise. Direct: 702-222-1964" />
	
	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://drjanetduffy.com/contact" />
	<meta property="twitter:title" content="Contact Dr. Janet Duffy, REALTOR®" />
	<meta property="twitter:description" content="Contact Dr. Janet Duffy, REALTOR® for luxury Las Vegas real estate expertise." />
	
	<!-- Schema.org structured data -->
	<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "ContactPage",
		"mainEntity": {
			"@type": "RealEstateAgent",
			"name": "Dr. Janet Duffy",
			"telephone": "702-222-1964",
			"email": "drduffy@bhhsnv.com",
			"address": {
				"@type": "PostalAddress",
				"addressLocality": "Las Vegas",
				"addressRegion": "NV",
				"addressCountry": "US"
			}
		}
	}
	</script>
</svelte:head>

<section class="section relative" style="background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);">
	<div class="container-premium">
		<div class="text-center mb-16">
			<h1 class="font-display text-5xl md:text-6xl font-bold mb-6 text-gray-900" style="letter-spacing: -0.03em;">Contact Dr. Janet Duffy, REALTOR<sup>®</sup></h1>
			<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-6"></div>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
				Ready to discover your next Summerlin address? Let's discuss your luxury real estate needs.
			</p>
		</div>
		
		<div class="grid-premium md:grid-cols-2 gap-12">
			<!-- Contact Form -->
			<div class="bg-white rounded-2xl shadow-xl p-10 border border-gray-100">
				<ContactForm 
					title="Send a Message" 
					subtitle="Ready to start your real estate journey? Contact me today!"
					showPhone={true}
				/>
			</div>
			
			<!-- Contact Information -->
			<div class="space-y-8">
				<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl shadow-lg p-8 border border-gray-100">
					<h2 class="font-display text-3xl font-bold mb-8 text-gray-900" style="letter-spacing: -0.02em;">Get in Touch</h2>
					
					<div class="space-y-8">
						<div class="flex items-start gap-4">
							<div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-md">
								<svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
								</svg>
							</div>
							<div>
								<h3 class="font-display text-xl font-bold mb-2 text-gray-900">Phone</h3>
								<a href="tel:+17022221964" class="text-primary-600 hover:text-primary-700 font-semibold text-xl transition-colors">702-222-1964</a>
								<p class="text-sm text-gray-600 mt-1">Available 7 days a week</p>
							</div>
						</div>
						
						<div class="flex items-start gap-4">
							<div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-md">
								<svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
								</svg>
							</div>
							<div>
								<h3 class="font-display text-xl font-bold mb-2 text-gray-900">Email</h3>
								<a href="mailto:drduffy@bhhsnv.com" class="text-primary-600 hover:text-primary-700 font-semibold transition-colors break-all">drduffy@bhhsnv.com</a>
								<p class="text-sm text-gray-600 mt-1">Response within 24 hours</p>
							</div>
						</div>
						
						<div class="flex items-start gap-4">
							<div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-md">
								<svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
								</svg>
							</div>
							<div>
								<h3 class="font-display text-xl font-bold mb-2 text-gray-900">Office Location</h3>
								<p class="text-gray-700 font-medium">Berkshire Hathaway Nevada Properties</p>
								<p class="text-sm text-gray-600 mt-1">Serving West Summerlin (89138, 89144, 89135)</p>
							</div>
						</div>
						
						<div class="flex items-start gap-4">
							<div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-md">
								<svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
							</div>
							<div>
								<h3 class="font-display text-xl font-bold mb-2 text-gray-900">Office Hours</h3>
								<div class="text-gray-700 space-y-1">
									<p class="font-medium">Monday - Friday: 9:00 AM - 6:00 PM</p>
									<p class="font-medium">Saturday: 10:00 AM - 4:00 PM</p>
									<p class="font-medium">Sunday: By Appointment</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl shadow-lg p-8 border border-gray-100">
					<h3 class="font-display text-2xl font-bold mb-6 text-gray-900">Why Choose Dr. Jan Duffy?</h3>
					<ul class="space-y-4">
						<li class="flex items-center gap-3">
							<svg class="w-6 h-6 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
							</svg>
							<span class="text-gray-700 font-medium">Local market expertise</span>
						</li>
						<li class="flex items-center gap-3">
							<svg class="w-6 h-6 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
							</svg>
							<span class="text-gray-700 font-medium">Proven track record</span>
						</li>
						<li class="flex items-center gap-3">
							<svg class="w-6 h-6 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
							</svg>
							<span class="text-gray-700 font-medium">Personalized service</span>
						</li>
						<li class="flex items-center gap-3">
							<svg class="w-6 h-6 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
							</svg>
							<span class="text-gray-700 font-medium">Free consultation</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>
