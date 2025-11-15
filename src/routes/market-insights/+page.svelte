<script>
	import { DollarSign, Calendar, Home, TrendingUp, TrendingDown, BarChart3 } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Las Vegas Market Insights | Dr. Janet Duffy REALTOR®</title>
	<meta name="description" content="Stay informed with the latest Las Vegas real estate trends. Current market statistics including median home prices, days on market, and inventory levels." />
	
	<!-- Structured Data -->
	<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "WebPage",
		"name": "Las Vegas Market Insights",
		"description": "Current Las Vegas real estate market statistics and trends",
		"url": "https://www.drjanetduffy.com/market-insights"
	}
	</script>
</svelte:head>

<!-- Hero Section -->
<section class="hero-section bg-gradient-to-b from-primary-600 to-primary-700 text-white">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-7xl mx-auto py-12 md:py-16">
			<div class="text-center mb-8">
				<h1 class="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
					Las Vegas Real Estate Market Trends & Insights
				</h1>
				<p class="text-lg sm:text-xl text-white text-opacity-90 max-w-2xl mx-auto">
					Current Las Vegas real estate statistics and trends
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Key Statistics -->
<section class="section bg-primary-600 text-white">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-7xl mx-auto">
			<div class="grid md:grid-cols-3 gap-8 mb-12">
				<div class="text-center bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
					<div class="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-4">
						<DollarSign class="w-8 h-8 text-white" />
					</div>
					<div class="text-4xl md:text-5xl font-bold mb-2">$575K</div>
					<p class="text-white text-opacity-90 mb-2">Median Home Price</p>
					<div class="flex items-center justify-center gap-1 text-green-300">
						<TrendingUp class="w-4 h-4" />
						<span class="text-sm">+8.5% YoY</span>
					</div>
				</div>

				<div class="text-center bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm hover:bg-opacity-15 transition-all duration-300">
					<div class="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-4">
						<Calendar class="w-8 h-8 text-white" />
					</div>
					<div class="text-4xl md:text-5xl font-bold mb-2">19</div>
					<p class="text-white text-opacity-90 mb-2">Days on Market</p>
					<div class="flex items-center justify-center gap-1 text-green-300">
						<TrendingDown class="w-4 h-4" />
						<span class="text-sm">-12% YoY</span>
					</div>
				</div>

				<div class="text-center bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm hover:bg-opacity-15 transition-all duration-300">
					<div class="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-4">
						<Home class="w-8 h-8 text-white" />
					</div>
					<div class="text-4xl md:text-5xl font-bold mb-2">450</div>
					<p class="text-white text-opacity-90 mb-2">Homes for Sale</p>
					<div class="flex items-center justify-center gap-1 text-yellow-300">
						<BarChart3 class="w-4 h-4" />
						<span class="text-sm">Stable Inventory</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Additional Market Data -->
<section class="section bg-white">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-7xl mx-auto">
			<div class="text-center mb-12">
				<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Market Trends</h2>
				<p class="text-lg text-gray-600">Key indicators for Las Vegas real estate</p>
			</div>
			
			<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
				<div class="card text-center">
					<div class="text-3xl font-bold text-primary-600 mb-2">2.1%</div>
					<p class="text-gray-600 text-sm">Price Appreciation (Monthly)</p>
				</div>
				<div class="card text-center">
					<div class="text-3xl font-bold text-primary-600 mb-2">98%</div>
					<p class="text-gray-600 text-sm">List-to-Sale Ratio</p>
				</div>
				<div class="card text-center">
					<div class="text-3xl font-bold text-primary-600 mb-2">1.2</div>
					<p class="text-gray-600 text-sm">Months of Inventory</p>
				</div>
				<div class="card text-center">
					<div class="text-3xl font-bold text-primary-600 mb-2">$285</div>
					<p class="text-gray-600 text-sm">Price per Sq. Ft.</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="section bg-gray-50">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-4xl mx-auto text-center">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get Your Personalized Market Analysis</h2>
			<p class="text-lg text-gray-600 mb-8">Understand your property's value in today's Las Vegas market</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="/home-value" class="btn-primary">Get Home Valuation</a>
				<a href="/contact" class="btn-secondary">Schedule Consultation</a>
			</div>
		</div>
	</div>
</section>

