<script>
	import { Home, AlertCircle, CheckCircle, DollarSign, TrendingUp, FileText } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	
	let mounted = false;
	
	onMount(() => {
		mounted = true;
	});
	
	const benefits = [
		'Below market prices',
		'Negotiated with lender',
		'Potential savings',
		'Investment opportunities',
		'Less competition',
		'Longer timeline',
		'Lender approval required',
		'Professional guidance needed'
	];
</script>

<svelte:head>
	<title>Short Sale Properties | Las Vegas | Dr. Janet Duffy REALTOR®</title>
	<meta name="description" content="Browse short sale properties in Las Vegas. Below market prices with lender approval, requiring specialized expertise to navigate." />
</svelte:head>

<section class="section bg-gradient-to-b from-white via-gray-50 to-white">
	<div class="container-premium">
		<div class="text-center mb-16">
			<h1 class="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900">
				Explore Short Sale Properties in Las Vegas
			</h1>
			<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-6"></div>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
				Below market prices with lender approval, requiring specialized expertise
			</p>
		</div>

		<!-- Important Notice -->
		<div class="bg-blue-50 border-l-4 border-blue-400 p-6 mb-16 rounded-r-lg">
			<div class="flex items-start gap-4">
				<AlertCircle class="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
				<div>
					<h3 class="text-lg font-bold text-gray-900 mb-2">Understanding Short Sales</h3>
					<p class="text-gray-700 mb-2">
						A short sale occurs when a property is sold for less than the amount owed on the mortgage. The sale requires lender approval and can be a complex process. These transactions typically take longer than traditional sales but can offer significant savings for buyers.
					</p>
					<p class="text-gray-700">
						<strong>Important:</strong> Short sales require patience and expertise. The lender must approve the sale price, which can take 60-90 days or longer. Working with an experienced agent is essential.
					</p>
				</div>
			</div>
		</div>

		<!-- Stats -->
		<div class="grid md:grid-cols-4 gap-6 mb-16">
			<div class="bg-white rounded-xl p-6 shadow-lg text-center">
				<div class="text-3xl font-bold text-primary-600 mb-2">15-25%</div>
				<p class="text-gray-600 text-sm">Below Market</p>
			</div>
			<div class="bg-white rounded-xl p-6 shadow-lg text-center">
				<div class="text-3xl font-bold text-primary-600 mb-2">60-90</div>
				<p class="text-gray-600 text-sm">Days Process</p>
			</div>
			<div class="bg-white rounded-xl p-6 shadow-lg text-center">
				<div class="text-3xl font-bold text-primary-600 mb-2">Lender</div>
				<p class="text-gray-600 text-sm">Approval Required</p>
			</div>
			<div class="bg-white rounded-xl p-6 shadow-lg text-center">
				<div class="text-3xl font-bold text-primary-600 mb-2">Complex</div>
				<p class="text-gray-600 text-sm">Transaction</p>
			</div>
		</div>

		<!-- Benefits -->
		<div class="grid md:grid-cols-2 gap-12 mb-16">
			<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-lg border border-gray-100">
				<h2 class="text-3xl font-bold text-gray-900 mb-6">Why Consider Short Sales?</h2>
				<ul class="space-y-4">
					{#each benefits as benefit}
						<li class="flex items-start gap-3">
							<CheckCircle class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
							<span class="text-gray-700">{benefit}</span>
						</li>
					{/each}
				</ul>
			</div>

			<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-lg border border-gray-100">
				<h2 class="text-3xl font-bold text-gray-900 mb-6">The Short Sale Process</h2>
				<div class="space-y-6">
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<FileText class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">1. Offer Submission</h3>
							<p class="text-gray-700">Submit offer to seller, who presents to lender</p>
						</div>
					</div>
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<AlertCircle class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">2. Lender Review</h3>
							<p class="text-gray-700">Lender evaluates offer and seller's financial hardship</p>
						</div>
					</div>
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
							<TrendingUp class="w-6 h-6 text-primary-600" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">3. Approval & Closing</h3>
							<p class="text-gray-700">Once approved, proceed to closing (typically 30-45 days)</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Properties -->
		<div class="mb-16">
			<h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Short Sale Properties Available</h2>
			{#if mounted && browser}
				<div class="realscout-wrapper">
					<realscout-office-listings 
						agent-encoded-id="QWdlbnQtMjI1MDUw"
						sort-order="STATUS_AND_SIGNIFICANT_CHANGE"
						listing-status="For Sale"
						property-types="SFR,MF,TC"
						max-results="6">
					</realscout-office-listings>
				</div>
			{:else}
				<div class="loading-skeleton">
					<div class="grid md:grid-cols-3 gap-6">
						{#each Array(3) as _}
							<div class="animate-pulse bg-white rounded-2xl shadow-lg overflow-hidden">
								<div class="bg-gray-200 h-64"></div>
								<div class="p-6 space-y-4">
									<div class="h-6 bg-gray-200 rounded w-3/4"></div>
									<div class="h-5 bg-gray-200 rounded w-1/2"></div>
								</div>
							</div>
						{/each}
					</div>
				</div>
			{/if}
			<div class="text-center mt-8">
				<a href="/properties?type=short-sales" class="btn-primary">View All Short Sale Properties</a>
			</div>
		</div>

		<!-- CTA Section -->
		<div class="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-center text-white">
			<h2 class="text-3xl font-bold mb-4">Interested in Short Sale Properties?</h2>
			<p class="text-lg text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
				I have extensive experience navigating short sales and can help you through the process
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="/contact" class="btn-primary bg-white text-primary-600 hover:bg-gray-100">Contact Me</a>
				<a href="/services/distressed-properties" class="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">Distressed Property Services</a>
			</div>
		</div>
	</div>
</section>

<style>
	.realscout-wrapper {
		min-height: 400px;
		width: 100%;
	}
</style>

