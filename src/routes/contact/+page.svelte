<script>
import ContactForm from '$lib/components/ContactForm.svelte';
import { Phone, Mail, MapPin, Clock, CheckCircle, MessageCircle } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Contact Dr. Janet Duffy, REALTOR® | Berkshire Hathaway Nevada Properties</title>
	<meta name="description" content="Contact Dr. Jan Duffy, REALTOR® for luxury Las Vegas real estate expertise. Direct: 702-500-1955 | info@drjanetduffy.com. West Summerlin specialist for executives and California relocations." />
	<meta name="keywords" content="Dr. Jan Duffy REALTOR, luxury Las Vegas real estate, West Summerlin, executive relocation, 702-500-1955" />
	
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.drjanetduffy.com/contact" />
	<meta property="og:title" content="Contact Dr. Janet Duffy, REALTOR® | Berkshire Hathaway Nevada Properties" />
	<meta property="og:description" content="Contact Dr. Jan Duffy, REALTOR® for luxury Las Vegas real estate expertise. Direct: 702-500-1955" />
	
	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://www.drjanetduffy.com/contact" />
	<meta property="twitter:title" content="Contact Dr. Janet Duffy, REALTOR®" />
	<meta property="twitter:description" content="Contact Dr. Janet Duffy, REALTOR® for luxury Las Vegas real estate expertise." />
	
	<!-- Schema.org structured data -->
	<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "ContactPage",
		"mainEntity": {
			"@type": "RealEstateAgent",
			"name": "Dr. Jan Duffy",
			"telephone": "702-500-1955",
			"email": "info@drjanetduffy.com",
			"address": {
				"@type": "PostalAddress",
				"streetAddress": "1980 Festival Plaza Drive, Suite 300",
				"addressLocality": "Las Vegas",
				"addressRegion": "NV",
				"postalCode": "89135",
				"addressCountry": "US"
			}
		}
	}
	</script>
</svelte:head>

<section class="section relative overflow-hidden" style="background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);">
	<!-- Decorative background elements -->
	<div class="absolute inset-0 overflow-hidden pointer-events-none">
		<div class="absolute top-20 right-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-10"></div>
		<div class="absolute bottom-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-10"></div>
	</div>
	
	<div class="container-premium relative z-10">
		<div class="text-center mb-16">
			<div class="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-6">
				<MessageCircle class="w-4 h-4" />
				<span>Let's Connect</span>
			</div>
			<h1 class="font-display text-5xl md:text-6xl font-bold mb-6 text-gray-900" style="letter-spacing: -0.03em;">
				Contact Your Las Vegas Real Estate Expert Today
			</h1>
			<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-6"></div>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
				Ready to discover your next Summerlin address? Let's discuss your luxury real estate needs and make your dream home a reality.
			</p>
		</div>
		
		<div class="grid-premium md:grid-cols-2 gap-8 lg:gap-12">
			<!-- Enhanced Contact Form -->
			<div class="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-200/50 transform transition-all duration-300 hover:shadow-3xl">
				<ContactForm 
					title="Send a Message" 
					subtitle="Ready to start your real estate journey? Contact me today!"
					showPhone={true}
				/>
			</div>
			
			<!-- Enhanced Contact Information -->
			<div class="space-y-6">
				<div class="bg-gradient-to-br from-white via-primary-50/20 to-white rounded-3xl shadow-xl p-8 border border-gray-200/50 backdrop-blur-sm">
					<h2 class="font-display text-3xl font-bold mb-8 text-gray-900" style="letter-spacing: -0.02em;">Get in Touch</h2>
					
					<div class="space-y-6">
						<a href="tel:+17025001955" class="group flex items-start gap-4 p-4 rounded-2xl hover:bg-white/80 transition-all duration-300 hover:shadow-md">
							<div class="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
								<Phone class="w-7 h-7 text-white" />
							</div>
							<div class="flex-1">
								<h3 class="font-display text-xl font-bold mb-1 text-gray-900">Phone</h3>
								<p class="text-primary-600 hover:text-primary-700 font-bold text-xl transition-colors">702-500-1955</p>
								<p class="text-sm text-gray-600 mt-1">Available 7 days a week</p>
							</div>
						</a>
						
						<a href="mailto:info@drjanetduffy.com" class="group flex items-start gap-4 p-4 rounded-2xl hover:bg-white/80 transition-all duration-300 hover:shadow-md">
							<div class="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
								<Mail class="w-7 h-7 text-white" />
							</div>
							<div class="flex-1">
								<h3 class="font-display text-xl font-bold mb-1 text-gray-900">Email</h3>
								<p class="text-primary-600 hover:text-primary-700 font-semibold transition-colors break-all">info@drjanetduffy.com</p>
								<p class="text-sm text-gray-600 mt-1">Response within 24 hours</p>
							</div>
						</a>
						
						<div class="flex items-start gap-4 p-4 rounded-2xl">
							<div class="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
								<MapPin class="w-7 h-7 text-white" />
							</div>
							<div class="flex-1">
								<h3 class="font-display text-xl font-bold mb-1 text-gray-900">Office Location</h3>
								<p class="text-gray-700 font-semibold">1980 Festival Plaza Drive, Suite 300</p>
								<p class="text-sm text-gray-600 mt-1">Las Vegas, NV 89135</p>
							</div>
						</div>
						
						<div class="flex items-start gap-4 p-4 rounded-2xl">
							<div class="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
								<Clock class="w-7 h-7 text-white" />
							</div>
							<div class="flex-1">
								<h3 class="font-display text-xl font-bold mb-2 text-gray-900">Office Hours</h3>
								<div class="text-gray-700 space-y-1.5">
									<p class="font-medium flex items-center gap-2">
										<span class="w-2 h-2 bg-green-500 rounded-full"></span>
										Monday - Friday: 9:00 AM - 6:00 PM
									</p>
									<p class="font-medium flex items-center gap-2">
										<span class="w-2 h-2 bg-green-500 rounded-full"></span>
										Saturday: 10:00 AM - 4:00 PM
									</p>
									<p class="font-medium flex items-center gap-2">
										<span class="w-2 h-2 bg-yellow-500 rounded-full"></span>
										Sunday: By Appointment
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				<div class="bg-gradient-to-br from-white via-primary-50/20 to-white rounded-3xl shadow-xl p-8 border border-gray-200/50 backdrop-blur-sm">
					<h3 class="font-display text-2xl font-bold mb-6 text-gray-900">Why Choose Dr. Jan Duffy?</h3>
					<ul class="space-y-4">
						<li class="flex items-center gap-4 p-3 rounded-xl hover:bg-white/50 transition-colors">
							<div class="flex-shrink-0 w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
								<CheckCircle class="w-6 h-6 text-green-600" />
							</div>
							<span class="text-gray-700 font-semibold">Local market expertise</span>
						</li>
						<li class="flex items-center gap-4 p-3 rounded-xl hover:bg-white/50 transition-colors">
							<div class="flex-shrink-0 w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
								<CheckCircle class="w-6 h-6 text-green-600" />
							</div>
							<span class="text-gray-700 font-semibold">Proven track record</span>
						</li>
						<li class="flex items-center gap-4 p-3 rounded-xl hover:bg-white/50 transition-colors">
							<div class="flex-shrink-0 w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
								<CheckCircle class="w-6 h-6 text-green-600" />
							</div>
							<span class="text-gray-700 font-semibold">Personalized service</span>
						</li>
						<li class="flex items-center gap-4 p-3 rounded-xl hover:bg-white/50 transition-colors">
							<div class="flex-shrink-0 w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
								<CheckCircle class="w-6 h-6 text-green-600" />
							</div>
							<span class="text-gray-700 font-semibold">Free consultation</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>
