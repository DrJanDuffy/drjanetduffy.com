<script>
	import { BarChart3, TrendingUp, TrendingDown, DollarSign, Home, Calendar } from 'lucide-svelte';
	
	const marketData = [
		{
			period: 'Q4 2024',
			medianPrice: '$575K',
			change: '+8.5%',
			trend: 'up',
			daysOnMarket: 19,
			daysChange: '-12%',
			inventory: 450,
			monthsSupply: 1.2
		},
		{
			period: 'Q3 2024',
			medianPrice: '$560K',
			change: '+6.2%',
			trend: 'up',
			daysOnMarket: 22,
			daysChange: '-8%',
			inventory: 420,
			monthsSupply: 1.3
		},
		{
			period: 'Q2 2024',
			medianPrice: '$545K',
			change: '+4.8%',
			trend: 'up',
			daysOnMarket: 25,
			daysChange: '-5%',
			inventory: 400,
			monthsSupply: 1.4
		}
	];
	
	const trends = [
		{
			title: 'Price Appreciation',
			value: '+8.5% YoY',
			description: 'Strong price growth continues',
			icon: TrendingUp,
			color: 'green'
		},
		{
			title: 'Days on Market',
			value: '19 Days',
			description: 'Fast-moving market',
			icon: TrendingDown,
			color: 'green'
		},
		{
			title: 'Inventory Levels',
			value: '1.2 Months',
			description: 'Low inventory, seller\'s market',
			icon: Home,
			color: 'yellow'
		},
		{
			title: 'Sales Volume',
			value: 'Stable',
			description: 'Consistent transaction activity',
			icon: BarChart3,
			color: 'blue'
		}
	];
</script>

<svelte:head>
	<title>Las Vegas Market Reports | Real Estate Trends | Dr. Janet Duffy REALTOR®</title>
	<meta name="description" content="Latest Las Vegas real estate market reports and trends. Current statistics on home prices, inventory, days on market, and sales volume." />
</svelte:head>

<section class="section bg-gradient-to-b from-white via-gray-50 to-white">
	<div class="container-premium">
		<div class="text-center mb-16">
			<h1 class="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900">
				Las Vegas Market Reports
			</h1>
			<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-6"></div>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
				Latest real estate trends and statistics for the Las Vegas market
			</p>
		</div>

		<!-- Current Market Trends -->
		<div class="mb-16">
			<h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Current Market Trends</h2>
			<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
				{#each trends as trend}
					<div class="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
						<div class="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mb-4">
							<svelte:component this={trend.icon} class="w-6 h-6 text-primary-600" />
						</div>
						<h3 class="text-lg font-bold text-gray-900 mb-2">{trend.title}</h3>
						<div class="text-2xl font-bold text-primary-600 mb-2">{trend.value}</div>
						<p class="text-sm text-gray-600">{trend.description}</p>
					</div>
				{/each}
			</div>
		</div>

		<!-- Quarterly Data -->
		<div class="mb-16">
			<h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Quarterly Market Data</h2>
			<div class="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
				<div class="overflow-x-auto">
					<table class="w-full">
						<thead class="bg-gray-50">
							<tr>
								<th class="px-6 py-4 text-left text-sm font-bold text-gray-900">Period</th>
								<th class="px-6 py-4 text-left text-sm font-bold text-gray-900">Median Price</th>
								<th class="px-6 py-4 text-left text-sm font-bold text-gray-900">YoY Change</th>
								<th class="px-6 py-4 text-left text-sm font-bold text-gray-900">Days on Market</th>
								<th class="px-6 py-4 text-left text-sm font-bold text-gray-900">Inventory</th>
								<th class="px-6 py-4 text-left text-sm font-bold text-gray-900">Months Supply</th>
							</tr>
						</thead>
						<tbody class="divide-y divide-gray-200">
							{#each marketData as data}
								<tr class="hover:bg-gray-50 transition-colors">
									<td class="px-6 py-4 text-sm font-semibold text-gray-900">{data.period}</td>
									<td class="px-6 py-4 text-sm text-gray-900 font-bold">{data.medianPrice}</td>
									<td class="px-6 py-4 text-sm">
										<span class="inline-flex items-center gap-1 text-green-600 font-semibold">
											<TrendingUp class="w-4 h-4" />
											{data.change}
										</span>
									</td>
									<td class="px-6 py-4 text-sm text-gray-700">{data.daysOnMarket} days</td>
									<td class="px-6 py-4 text-sm text-gray-700">{data.inventory} homes</td>
									<td class="px-6 py-4 text-sm text-gray-700">{data.monthsSupply} months</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</div>
		</div>

		<!-- Market Analysis -->
		<div class="grid md:grid-cols-2 gap-12 mb-16">
			<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-lg border border-gray-100">
				<h2 class="text-3xl font-bold text-gray-900 mb-6">Market Outlook</h2>
				<p class="text-gray-700 leading-relaxed mb-4">
					The Las Vegas real estate market continues to show strong fundamentals with steady price appreciation and low inventory levels. The market remains favorable for sellers, with homes selling quickly and often above asking price.
				</p>
				<p class="text-gray-700 leading-relaxed">
					Buyers face competitive conditions but benefit from historically low interest rates and a diverse selection of properties across price ranges. The market shows resilience and continued growth potential.
				</p>
			</div>

			<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-lg border border-gray-100">
				<h2 class="text-3xl font-bold text-gray-900 mb-6">Key Factors</h2>
				<ul class="space-y-4">
					<li class="flex items-start gap-3">
						<DollarSign class="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
						<span class="text-gray-700">Strong job growth and economic expansion</span>
					</li>
					<li class="flex items-start gap-3">
						<Home class="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
						<span class="text-gray-700">Limited new construction keeping inventory low</span>
					</li>
					<li class="flex items-start gap-3">
						<TrendingUp class="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
						<span class="text-gray-700">Continued population growth and demand</span>
					</li>
					<li class="flex items-start gap-3">
						<Calendar class="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
						<span class="text-gray-700">Seasonal patterns affecting market activity</span>
					</li>
				</ul>
			</div>
		</div>

		<!-- CTA Section -->
		<div class="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-center text-white">
			<h2 class="text-3xl font-bold mb-4">Need Personalized Market Analysis?</h2>
			<p class="text-lg text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
				Get a detailed market report for your specific property or neighborhood
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="/home-value" class="btn-primary bg-white text-primary-600 hover:bg-gray-100">Get Home Value</a>
				<a href="/contact" class="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">Contact Me</a>
			</div>
		</div>
	</div>
</section>

