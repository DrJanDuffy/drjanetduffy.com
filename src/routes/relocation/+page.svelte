<script>
	import { MapPin, Plane, Home, Users, CheckCircle, Building2 } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Relocation Services | Moving to Las Vegas | Dr. Janet Duffy REALTOR®</title>
	<meta name="description" content="Expert relocation services for moving to Las Vegas. Comprehensive support for families, executives, and military relocating to Las Vegas." />
</svelte:head>

<section class="section bg-gradient-to-b from-white via-gray-50 to-white">
	<div class="container-premium">
		<div class="text-center mb-16">
			<h1 class="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900">
				Relocation Services
			</h1>
			<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-6"></div>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
				Expert relocation services for moving to Las Vegas
			</p>
		</div>

		<!-- Why Las Vegas -->
		<div class="mb-16">
			<h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Why Relocate to Las Vegas?</h2>
			<div class="grid md:grid-cols-3 gap-6">
				<div class="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
					<div class="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mb-4">
						<DollarSign class="w-6 h-6 text-primary-600" />
					</div>
					<h3 class="text-lg font-bold text-gray-900 mb-2">No State Income Tax</h3>
					<p class="text-gray-600 text-sm">Keep more of your income with Nevada's tax-friendly policies</p>
				</div>

				<div class="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
					<div class="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mb-4">
						<Home class="w-6 h-6 text-primary-600" />
					</div>
					<h3 class="text-lg font-bold text-gray-900 mb-2">Affordable Housing</h3>
					<p class="text-gray-600 text-sm">More home for your money compared to other major cities</p>
				</div>

				<div class="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
					<div class="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mb-4">
						<Building2 class="w-6 h-6 text-primary-600" />
					</div>
					<h3 class="text-lg font-bold text-gray-900 mb-2">Growing Economy</h3>
					<p class="text-gray-600 text-sm">Diverse job market with opportunities across industries</p>
				</div>
			</div>
		</div>

		<!-- Relocation Services -->
		<div class="grid md:grid-cols-2 gap-12 mb-16">
			<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-lg border border-gray-100">
				<div class="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
					<Plane class="w-8 h-8 text-primary-600" />
				</div>
				<h2 class="text-3xl font-bold text-gray-900 mb-6">Relocation Support</h2>
				<ul class="space-y-4">
					<li class="flex items-start gap-3">
						<CheckCircle class="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
						<span class="text-gray-700">Pre-move neighborhood research and virtual tours</span>
					</li>
					<li class="flex items-start gap-3">
						<CheckCircle class="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
						<span class="text-gray-700">School district information and recommendations</span>
					</li>
					<li class="flex items-start gap-3">
						<CheckCircle class="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
						<span class="text-gray-700">Area orientation and community introductions</span>
					</li>
					<li class="flex items-start gap-3">
						<CheckCircle class="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
						<span class="text-gray-700">Coordination with moving companies</span>
					</li>
				</ul>
			</div>

			<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-lg border border-gray-100">
				<div class="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
					<MapPin class="w-8 h-8 text-primary-600" />
				</div>
				<h2 class="text-3xl font-bold text-gray-900 mb-6">Neighborhood Matching</h2>
				<ul class="space-y-4">
					<li class="flex items-start gap-3">
						<CheckCircle class="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
						<span class="text-gray-700">Lifestyle and commute analysis</span>
					</li>
					<li class="flex items-start gap-3">
						<CheckCircle class="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
						<span class="text-gray-700">Amenities and services mapping</span>
					</li>
					<li class="flex items-start gap-3">
						<CheckCircle class="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
						<span class="text-gray-700">Budget-appropriate area recommendations</span>
					</li>
					<li class="flex items-start gap-3">
						<CheckCircle class="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
						<span class="text-gray-700">Future growth and investment potential</span>
					</li>
				</ul>
			</div>
		</div>

		<!-- Specialized Relocation -->
		<div class="mb-16">
			<h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Specialized Relocation Services</h2>
			<div class="grid md:grid-cols-3 gap-6">
				<div class="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
					<h3 class="text-xl font-bold text-gray-900 mb-3">Executive Relocation</h3>
					<p class="text-gray-600 mb-4">Fast-track relocation for corporate executives with tight timelines</p>
					<a href="/services/military-relocation" class="text-primary-600 font-semibold">Learn More →</a>
				</div>

				<div class="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
					<h3 class="text-xl font-bold text-gray-900 mb-3">Military Relocation</h3>
					<p class="text-gray-600 mb-4">Dedicated support for military families relocating to Las Vegas</p>
					<a href="/services/military-relocation" class="text-primary-600 font-semibold">Learn More →</a>
				</div>

				<div class="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
					<h3 class="text-xl font-bold text-gray-900 mb-3">Family Relocation</h3>
					<p class="text-gray-600 mb-4">Comprehensive support for families moving to Las Vegas</p>
					<a href="/contact" class="text-primary-600 font-semibold">Get Started →</a>
				</div>
			</div>
		</div>

		<!-- CTA Section -->
		<div class="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-center text-white">
			<h2 class="text-3xl font-bold mb-4">Ready to Relocate to Las Vegas?</h2>
			<p class="text-lg text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
				Let me help make your move to Las Vegas smooth and stress-free
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="/contact" class="btn-primary bg-white text-primary-600 hover:bg-gray-100">Start Your Relocation</a>
				<a href="/neighborhoods" class="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">Explore Neighborhoods</a>
			</div>
		</div>
	</div>
</section>

