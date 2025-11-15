<script>
	import { DollarSign, Calendar, Home } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Las Vegas Market Insights | Dr. Janet Duffy REALTOR®</title>
	<meta name="description" content="Stay informed with the latest Las Vegas real estate trends. Current market statistics including median home prices, days on market, and inventory levels." />
</svelte:head>

<!-- Market Insights -->
<section class="section bg-primary-600 text-white">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-7xl mx-auto">
			<div class="text-center mb-12">
				<h1 class="text-3xl md:text-4xl font-bold mb-4">Market Insights</h1>
				<p class="text-lg text-white text-opacity-90">Current Las Vegas real estate statistics</p>
			</div>

			<div class="grid md:grid-cols-3 gap-8">
				<div class="text-center">
					<div class="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-4">
						<DollarSign class="w-8 h-8 text-white" />
					</div>
					<div class="text-4xl md:text-5xl font-bold mb-2">$575K</div>
					<p class="text-white text-opacity-90">Median Home Price</p>
				</div>

				<div class="text-center">
					<div class="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-4">
						<Calendar class="w-8 h-8 text-white" />
					</div>
					<div class="text-4xl md:text-5xl font-bold mb-2">19</div>
					<p class="text-white text-opacity-90">Days on Market</p>
				</div>

				<div class="text-center">
					<div class="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-4">
						<Home class="w-8 h-8 text-white" />
					</div>
					<div class="text-4xl md:text-5xl font-bold mb-2">450</div>
					<p class="text-white text-opacity-90">Homes for Sale</p>
				</div>
			</div>
		</div>
	</div>
</section>

