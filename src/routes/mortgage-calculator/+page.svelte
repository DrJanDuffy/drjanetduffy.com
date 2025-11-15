<script>
	import { Calculator, DollarSign, TrendingUp, Home, CheckCircle } from 'lucide-svelte';
	
	let homePrice = 575000;
	let downPayment = 20;
	let interestRate = 6.5;
	let loanTerm = 30;
	
	$: downPaymentAmount = (homePrice * downPayment) / 100;
	$: loanAmount = homePrice - downPaymentAmount;
	$: monthlyRate = interestRate / 100 / 12;
	$: numPayments = loanTerm * 12;
	$: monthlyPayment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1);
	$: totalInterest = (monthlyPayment * numPayments) - loanAmount;
	$: totalCost = homePrice + totalInterest;
	
	function formatCurrency(amount) {
		return new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD',
			maximumFractionDigits: 0
		}).format(amount);
	}
</script>

<svelte:head>
	<title>Mortgage Calculator | Las Vegas | Dr. Janet Duffy REALTOR®</title>
	<meta name="description" content="Calculate your monthly mortgage payment with our free mortgage calculator. Estimate payments for Las Vegas homes." />
</svelte:head>

<section class="section bg-gradient-to-b from-white via-gray-50 to-white">
	<div class="container-premium">
		<div class="text-center mb-16">
			<h1 class="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900">
				Mortgage Calculator
			</h1>
			<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-6"></div>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
				Calculate your monthly mortgage payment and understand your financing options
			</p>
		</div>

		<div class="grid md:grid-cols-2 gap-12 mb-16">
			<!-- Calculator Form -->
			<div class="bg-white rounded-2xl p-10 shadow-lg border border-gray-100">
				<h2 class="text-2xl font-bold text-gray-900 mb-6">Loan Details</h2>
				<div class="space-y-6">
					<div>
						<label for="homePrice" class="block text-sm font-semibold text-gray-700 mb-2">
							Home Price
						</label>
						<div class="relative">
							<span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
							<input
								type="number"
								id="homePrice"
								bind:value={homePrice}
								min="0"
								step="1000"
								class="w-full pl-8 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-900"
							/>
						</div>
					</div>

					<div>
						<label for="downPayment" class="block text-sm font-semibold text-gray-700 mb-2">
							Down Payment ({downPayment}%)
						</label>
						<input
							type="range"
							id="downPayment"
							bind:value={downPayment}
							min="0"
							max="50"
							step="1"
							class="w-full"
						/>
						<div class="flex justify-between text-sm text-gray-600 mt-1">
							<span>0%</span>
							<span>50%</span>
						</div>
						<p class="text-sm text-gray-600 mt-2">Amount: {formatCurrency(downPaymentAmount)}</p>
					</div>

					<div>
						<label for="interestRate" class="block text-sm font-semibold text-gray-700 mb-2">
							Interest Rate ({interestRate}%)
						</label>
						<input
							type="range"
							id="interestRate"
							bind:value={interestRate}
							min="2"
							max="10"
							step="0.1"
							class="w-full"
						/>
						<div class="flex justify-between text-sm text-gray-600 mt-1">
							<span>2%</span>
							<span>10%</span>
						</div>
					</div>

					<div>
						<label for="loanTerm" class="block text-sm font-semibold text-gray-700 mb-2">
							Loan Term ({loanTerm} years)
						</label>
						<div class="flex gap-4">
							<button
								on:click={() => loanTerm = 15}
								class="flex-1 py-2 px-4 rounded-lg border-2 transition-colors {loanTerm === 15 ? 'border-primary-600 bg-primary-50 text-primary-700 font-semibold' : 'border-gray-200 text-gray-700 hover:border-primary-300'}"
							>
								15 years
							</button>
							<button
								on:click={() => loanTerm = 30}
								class="flex-1 py-2 px-4 rounded-lg border-2 transition-colors {loanTerm === 30 ? 'border-primary-600 bg-primary-50 text-primary-700 font-semibold' : 'border-gray-200 text-gray-700 hover:border-primary-300'}"
							>
								30 years
							</button>
						</div>
					</div>
				</div>
			</div>

			<!-- Results -->
			<div class="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-10 shadow-lg text-white">
				<h2 class="text-2xl font-bold mb-6">Monthly Payment</h2>
				<div class="text-5xl font-bold mb-8">{formatCurrency(monthlyPayment)}</div>
				
				<div class="space-y-4 bg-white/10 rounded-xl p-6 backdrop-blur-sm">
					<div class="flex justify-between">
						<span class="text-white text-opacity-90">Loan Amount</span>
						<span class="font-semibold">{formatCurrency(loanAmount)}</span>
					</div>
					<div class="flex justify-between">
						<span class="text-white text-opacity-90">Down Payment</span>
						<span class="font-semibold">{formatCurrency(downPaymentAmount)}</span>
					</div>
					<div class="flex justify-between">
						<span class="text-white text-opacity-90">Total Interest</span>
						<span class="font-semibold">{formatCurrency(totalInterest)}</span>
					</div>
					<div class="flex justify-between border-t border-white/20 pt-4">
						<span class="text-white text-opacity-90 font-semibold">Total Cost</span>
						<span class="font-bold text-lg">{formatCurrency(totalCost)}</span>
					</div>
				</div>
			</div>
		</div>

		<!-- Loan Types Info -->
		<div class="grid md:grid-cols-3 gap-6 mb-16">
			<div class="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
				<h3 class="text-lg font-bold text-gray-900 mb-3">Conventional Loans</h3>
				<p class="text-gray-600 text-sm mb-2">20% down payment typically required</p>
				<p class="text-primary-600 font-semibold">Best for: Qualified buyers with good credit</p>
			</div>

			<div class="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
				<h3 class="text-lg font-bold text-gray-900 mb-3">FHA Loans</h3>
				<p class="text-gray-600 text-sm mb-2">3.5% down payment</p>
				<p class="text-primary-600 font-semibold">Best for: First-time buyers</p>
			</div>

			<div class="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
				<h3 class="text-lg font-bold text-gray-900 mb-3">VA Loans</h3>
				<p class="text-gray-600 text-sm mb-2">0% down payment</p>
				<p class="text-primary-600 font-semibold">Best for: Veterans and active military</p>
			</div>
		</div>

		<!-- CTA Section -->
		<div class="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-center text-white">
			<h2 class="text-3xl font-bold mb-4">Need Help With Financing?</h2>
			<p class="text-lg text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
				I can connect you with trusted lenders and help you understand your financing options
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="/contact" class="btn-primary bg-white text-primary-600 hover:bg-gray-100">Get Pre-Approved</a>
				<a href="/services/mortgage-guidance" class="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">Mortgage Guidance</a>
			</div>
		</div>
	</div>
</section>

