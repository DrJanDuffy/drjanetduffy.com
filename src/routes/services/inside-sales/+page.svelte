<script>
	import { Phone, Mail, MessageSquare, Clock } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Inside Sales Services | Dr. Janet Duffy REALTOR®</title>
	<meta name="description" content="Professional phone, email, and online sales support for real estate transactions. Inside sales services for Las Vegas real estate." />
</svelte:head>

<section class="section bg-gradient-to-b from-white via-gray-50 to-white">
	<div class="container-premium">
		<div class="text-center mb-16">
			<h1 class="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900">
				Inside Sales Services
			</h1>
			<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-6"></div>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
				Professional phone, email, and online sales support for real estate transactions
			</p>
		</div>

		<div class="grid md:grid-cols-2 gap-12 mb-16">
			<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-lg border border-gray-100">
				<div class="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
					<Phone class="w-8 h-8 text-primary-600" />
				</div>
				<h2 class="text-3xl font-bold text-gray-900 mb-4">Phone Support</h2>
				<p class="text-gray-700 leading-relaxed mb-6">
					Professional phone-based sales and support services:
				</p>
				<ul class="space-y-3 text-gray-700">
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Lead qualification and follow-up calls</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Appointment scheduling and confirmation</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Client consultation and needs assessment</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Transaction support and coordination</span>
					</li>
				</ul>
			</div>

			<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-lg border border-gray-100">
				<div class="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
					<Mail class="w-8 h-8 text-primary-600" />
				</div>
				<h2 class="text-3xl font-bold text-gray-900 mb-4">Email & Online Support</h2>
				<p class="text-gray-700 leading-relaxed mb-6">
					Comprehensive digital communication and sales support:
				</p>
				<ul class="space-y-3 text-gray-700">
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Email marketing campaigns and follow-ups</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Online chat and instant messaging support</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Document preparation and digital signatures</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>CRM management and lead tracking</span>
					</li>
				</ul>
			</div>
		</div>

		<div class="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-white mb-16">
			<h2 class="text-3xl font-bold mb-6 text-center">Inside Sales Benefits</h2>
			<div class="grid md:grid-cols-3 gap-8">
				<div class="text-center">
					<Clock class="w-12 h-12 mx-auto mb-4 text-white opacity-90" />
					<h3 class="text-xl font-bold mb-2">24/7 Availability</h3>
					<p class="text-white text-opacity-90">Always available for your clients</p>
				</div>
				<div class="text-center">
					<MessageSquare class="w-12 h-12 mx-auto mb-4 text-white opacity-90" />
					<h3 class="text-xl font-bold mb-2">Quick Response</h3>
					<p class="text-white text-opacity-90">Immediate follow-up on inquiries</p>
				</div>
				<div class="text-center">
					<Phone class="w-12 h-12 mx-auto mb-4 text-white opacity-90" />
					<h3 class="text-xl font-bold mb-2">Professional Service</h3>
					<p class="text-white text-opacity-90">Consistent, high-quality communication</p>
				</div>
			</div>
		</div>

		<div class="text-center">
			<a href="/contact" class="btn-primary">Learn More</a>
		</div>
	</div>
</section>

