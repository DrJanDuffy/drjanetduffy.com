<script>
	import { TrendingUp, DollarSign, BarChart3, Home, Key, CheckCircle, Building2 } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Real Estate Investment Guide | Las Vegas | Dr. Janet Duffy REALTOR®</title>
	<meta name="description" content="Complete guide to real estate investing in Las Vegas. Learn about investment strategies, ROI, cap rates, and building your property portfolio." />
</svelte:head>

<section class="section bg-gradient-to-b from-white via-gray-50 to-white">
	<div class="container-premium">
		<div class="text-center mb-16">
			<h1 class="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900">
				Complete Guide to Las Vegas Real Estate Investing
			</h1>
			<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-6"></div>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
				Your complete guide to real estate investing in Las Vegas
			</p>
		</div>

		<!-- Investment Types -->
		<div class="mb-16">
			<h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Types of Real Estate Investments</h2>
			<div class="grid md:grid-cols-3 gap-6">
				<div class="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
					<div class="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mb-4">
						<Home class="w-6 h-6 text-primary-600" />
					</div>
					<h3 class="text-lg font-bold text-gray-900 mb-2">Rental Properties</h3>
					<p class="text-gray-600 text-sm mb-4">Generate passive income through long-term rentals</p>
					<ul class="space-y-2 text-sm text-gray-600">
						<li class="flex items-start gap-2">
							<span class="text-primary-600">•</span>
							<span>Steady monthly cash flow</span>
						</li>
						<li class="flex items-start gap-2">
							<span class="text-primary-600">•</span>
							<span>Property appreciation</span>
						</li>
						<li class="flex items-start gap-2">
							<span class="text-primary-600">•</span>
							<span>Tax benefits</span>
						</li>
					</ul>
				</div>

				<div class="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
					<div class="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mb-4">
						<Key class="w-6 h-6 text-primary-600" />
					</div>
					<h3 class="text-lg font-bold text-gray-900 mb-2">Fix & Flip</h3>
					<p class="text-gray-600 text-sm mb-4">Buy, renovate, and sell for profit</p>
					<ul class="space-y-2 text-sm text-gray-600">
						<li class="flex items-start gap-2">
							<span class="text-primary-600">•</span>
							<span>Quick returns</span>
						</li>
						<li class="flex items-start gap-2">
							<span class="text-primary-600">•</span>
							<span>Value-add opportunities</span>
						</li>
						<li class="flex items-start gap-2">
							<span class="text-primary-600">•</span>
							<span>Market timing flexibility</span>
						</li>
					</ul>
				</div>

				<div class="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
					<div class="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mb-4">
						<Building2 class="w-6 h-6 text-primary-600" />
					</div>
					<h3 class="text-lg font-bold text-gray-900 mb-2">Commercial Properties</h3>
					<p class="text-gray-600 text-sm mb-4">Office, retail, and industrial investments</p>
					<ul class="space-y-2 text-sm text-gray-600">
						<li class="flex items-start gap-2">
							<span class="text-primary-600">•</span>
							<span>Higher income potential</span>
						</li>
						<li class="flex items-start gap-2">
							<span class="text-primary-600">•</span>
							<span>Long-term leases</span>
						</li>
						<li class="flex items-start gap-2">
							<span class="text-primary-600">•</span>
							<span>Portfolio diversification</span>
						</li>
					</ul>
				</div>
			</div>
		</div>

		<!-- Investment Metrics -->
		<div class="grid md:grid-cols-2 gap-12 mb-16">
			<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-lg border border-gray-100">
				<h2 class="text-3xl font-bold text-gray-900 mb-6">Key Investment Metrics</h2>
				<div class="space-y-6">
					<div>
						<h3 class="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
							<BarChart3 class="w-5 h-5 text-primary-600" />
							Cap Rate
						</h3>
						<p class="text-gray-700">Net operating income divided by property value. Las Vegas typically sees 5-8% cap rates.</p>
					</div>
					<div>
						<h3 class="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
							<TrendingUp class="w-5 h-5 text-primary-600" />
							Cash-on-Cash Return
						</h3>
						<p class="text-gray-700">Annual cash flow divided by total cash invested. Helps evaluate investment performance.</p>
					</div>
					<div>
						<h3 class="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
							<DollarSign class="w-5 h-5 text-primary-600" />
							ROI (Return on Investment)
						</h3>
						<p class="text-gray-700">Total return including appreciation, cash flow, and tax benefits over time.</p>
					</div>
				</div>
			</div>

			<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-lg border border-gray-100">
				<h2 class="text-3xl font-bold text-gray-900 mb-6">Why Invest in Las Vegas?</h2>
				<ul class="space-y-4">
					<li class="flex items-start gap-3">
						<CheckCircle class="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
						<div>
							<h3 class="font-bold text-gray-900 mb-1">Strong Rental Demand</h3>
							<p class="text-gray-700">Growing population and tourism create consistent rental demand</p>
						</div>
					</li>
					<li class="flex items-start gap-3">
						<CheckCircle class="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
						<div>
							<h3 class="font-bold text-gray-900 mb-1">Affordable Entry Point</h3>
							<p class="text-gray-700">Lower property prices compared to other major markets</p>
						</div>
					</li>
					<li class="flex items-start gap-3">
						<CheckCircle class="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
						<div>
							<h3 class="font-bold text-gray-900 mb-1">Tax Benefits</h3>
							<p class="text-gray-700">No state income tax and favorable property tax rates</p>
						</div>
					</li>
					<li class="flex items-start gap-3">
						<CheckCircle class="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
						<div>
							<h3 class="font-bold text-gray-900 mb-1">Growth Potential</h3>
							<p class="text-gray-700">Expanding economy and infrastructure development</p>
						</div>
					</li>
				</ul>
			</div>
		</div>

		<!-- Investment Strategy -->
		<div class="bg-white rounded-2xl p-10 shadow-lg border border-gray-100 mb-16">
			<h2 class="text-3xl font-bold text-gray-900 mb-6 text-center">Investment Strategy</h2>
			<div class="grid md:grid-cols-2 gap-8">
				<div>
					<h3 class="text-xl font-bold text-gray-900 mb-4">Getting Started</h3>
					<ol class="space-y-3 text-gray-700">
						<li class="flex items-start gap-3">
							<span class="font-bold text-primary-600">1.</span>
							<span>Define your investment goals and timeline</span>
						</li>
						<li class="flex items-start gap-3">
							<span class="font-bold text-primary-600">2.</span>
							<span>Assess your financial situation and risk tolerance</span>
						</li>
						<li class="flex items-start gap-3">
							<span class="font-bold text-primary-600">3.</span>
							<span>Research Las Vegas market trends and neighborhoods</span>
						</li>
						<li class="flex items-start gap-3">
							<span class="font-bold text-primary-600">4.</span>
							<span>Work with me to identify investment opportunities</span>
						</li>
					</ol>
				</div>
				<div>
					<h3 class="text-xl font-bold text-gray-900 mb-4">Building Your Portfolio</h3>
					<ul class="space-y-3 text-gray-700">
						<li class="flex items-start gap-3">
							<CheckCircle class="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
							<span>Start with one property and scale gradually</span>
						</li>
						<li class="flex items-start gap-3">
							<CheckCircle class="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
							<span>Diversify across property types and locations</span>
						</li>
						<li class="flex items-start gap-3">
							<CheckCircle class="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
							<span>Reinvest profits to grow your portfolio</span>
						</li>
						<li class="flex items-start gap-3">
							<CheckCircle class="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
							<span>Consider property management for passive income</span>
						</li>
					</ul>
				</div>
			</div>
		</div>

		<!-- CTA Section -->
		<div class="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-center text-white">
			<h2 class="text-3xl font-bold mb-4">Ready to Start Investing?</h2>
			<p class="text-lg text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
				Let me help you build a successful real estate investment portfolio in Las Vegas
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="/contact" class="btn-primary bg-white text-primary-600 hover:bg-gray-100">Schedule Consultation</a>
				<a href="/services/real-estate-investing" class="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">Investment Services</a>
			</div>
		</div>
	</div>
</section>

