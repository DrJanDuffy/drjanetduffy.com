<script>
	import { Home, CheckCircle, DollarSign, Key, Shield, TrendingUp, Users } from 'lucide-svelte';
</script>

<svelte:head>
	<title>First-Time Home Buyer Guide | Dr. Janet Duffy REALTOR®</title>
	<meta name="description" content="Complete guide for first-time home buyers in Las Vegas. Expert guidance on financing, finding your dream home, and navigating the buying process." />
</svelte:head>

<section class="section bg-gradient-to-b from-white via-gray-50 to-white">
	<div class="container-premium">
		<div class="text-center mb-16">
			<h1 class="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900">
				First-Time Home Buyer Guide for Las Vegas
			</h1>
			<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-6"></div>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
				Your complete guide to buying your first home in Las Vegas
			</p>
		</div>

		<!-- Steps Section -->
		<div class="mb-16">
			<h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">The Home Buying Process</h2>
			<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
				<div class="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
					<div class="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
						<DollarSign class="w-8 h-8 text-primary-600" />
					</div>
					<div class="text-2xl font-bold text-primary-600 mb-2">1</div>
					<h3 class="text-lg font-bold text-gray-900 mb-2">Get Pre-Approved</h3>
					<p class="text-gray-600 text-sm">Understand your budget and get financing pre-approved</p>
				</div>

				<div class="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
					<div class="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
						<Home class="w-8 h-8 text-primary-600" />
					</div>
					<div class="text-2xl font-bold text-primary-600 mb-2">2</div>
					<h3 class="text-lg font-bold text-gray-900 mb-2">Find Your Home</h3>
					<p class="text-gray-600 text-sm">Search properties and schedule viewings</p>
				</div>

				<div class="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
					<div class="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
						<Shield class="w-8 h-8 text-primary-600" />
					</div>
					<div class="text-2xl font-bold text-primary-600 mb-2">3</div>
					<h3 class="text-lg font-bold text-gray-900 mb-2">Make an Offer</h3>
					<p class="text-gray-600 text-sm">Negotiate terms and submit your offer</p>
				</div>

				<div class="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
					<div class="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
						<Key class="w-8 h-8 text-primary-600" />
					</div>
					<div class="text-2xl font-bold text-primary-600 mb-2">4</div>
					<h3 class="text-lg font-bold text-gray-900 mb-2">Close & Move In</h3>
					<p class="text-gray-600 text-sm">Complete inspections, finalize financing, and close</p>
				</div>
			</div>
		</div>

		<!-- First-Time Buyer Benefits -->
		<div class="grid md:grid-cols-2 gap-12 mb-16">
			<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-lg border border-gray-100">
				<h2 class="text-3xl font-bold text-gray-900 mb-6">First-Time Buyer Programs</h2>
				<ul class="space-y-4">
					<li class="flex items-start gap-3">
						<CheckCircle class="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
						<div>
							<h3 class="font-bold text-gray-900 mb-1">FHA Loans</h3>
							<p class="text-gray-700">Low down payment (3.5%) and flexible credit requirements</p>
						</div>
					</li>
					<li class="flex items-start gap-3">
						<CheckCircle class="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
						<div>
							<h3 class="font-bold text-gray-900 mb-1">Down Payment Assistance</h3>
							<p class="text-gray-700">Nevada offers programs to help with down payments</p>
						</div>
					</li>
					<li class="flex items-start gap-3">
						<CheckCircle class="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
						<div>
							<h3 class="font-bold text-gray-900 mb-1">Tax Benefits</h3>
							<p class="text-gray-700">Mortgage interest and property tax deductions</p>
						</div>
					</li>
				</ul>
			</div>

			<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-lg border border-gray-100">
				<h2 class="text-3xl font-bold text-gray-900 mb-6">What to Expect</h2>
				<ul class="space-y-4">
					<li class="flex items-start gap-3">
						<TrendingUp class="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0" />
						<div>
							<h3 class="font-bold text-gray-900 mb-1">Timeline</h3>
							<p class="text-gray-700">30-45 days from accepted offer to closing</p>
						</div>
					</li>
					<li class="flex items-start gap-3">
						<DollarSign class="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0" />
						<div>
							<h3 class="font-bold text-gray-900 mb-1">Costs</h3>
							<p class="text-gray-700">Down payment, closing costs, inspections, and moving expenses</p>
						</div>
					</li>
					<li class="flex items-start gap-3">
						<Users class="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0" />
						<div>
							<h3 class="font-bold text-gray-900 mb-1">Support</h3>
							<p class="text-gray-700">I'll guide you through every step of the process</p>
						</div>
					</li>
				</ul>
			</div>
		</div>

		<!-- CTA Section -->
		<div class="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-center text-white">
			<h2 class="text-3xl font-bold mb-4">Ready to Buy Your First Home?</h2>
			<p class="text-lg text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
				Let me help you navigate the home buying process and find your perfect Las Vegas home
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="/contact" class="btn-primary bg-white text-primary-600 hover:bg-gray-100">Get Started</a>
				<a href="/services/buyer-representation" class="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">Learn More</a>
			</div>
		</div>
	</div>
</section>

