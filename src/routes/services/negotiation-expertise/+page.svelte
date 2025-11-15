<script>
	import { TrendingUp, Target, Award, Handshake } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Negotiation Expertise | Dr. Janet Duffy REALTOR®</title>
	<meta name="description" content="Advanced negotiation strategies to achieve optimal outcomes for clients. Expert real estate negotiation services in Las Vegas." />
</svelte:head>

<section class="section bg-gradient-to-b from-white via-gray-50 to-white">
	<div class="container-premium">
		<div class="text-center mb-16">
			<h1 class="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900">
				Negotiation Expertise
			</h1>
			<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-6"></div>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
				Advanced negotiation strategies to achieve optimal outcomes for clients
			</p>
		</div>

		<div class="grid md:grid-cols-2 gap-12 mb-16">
			<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-lg border border-gray-100">
				<div class="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
					<Target class="w-8 h-8 text-primary-600" />
				</div>
				<h2 class="text-3xl font-bold text-gray-900 mb-4">Buyer Negotiations</h2>
				<p class="text-gray-700 leading-relaxed mb-6">
					Strategic negotiation on behalf of buyers to secure the best terms:
				</p>
				<ul class="space-y-3 text-gray-700">
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Purchase price negotiation</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Repair and inspection negotiations</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Closing cost and concession strategies</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Contingency and timeline negotiations</span>
					</li>
				</ul>
			</div>

			<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-lg border border-gray-100">
				<div class="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
					<TrendingUp class="w-8 h-8 text-primary-600" />
				</div>
				<h2 class="text-3xl font-bold text-gray-900 mb-4">Seller Negotiations</h2>
				<p class="text-gray-700 leading-relaxed mb-6">
					Expert negotiation to maximize seller value and minimize risk:
				</p>
				<ul class="space-y-3 text-gray-700">
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Multiple offer strategies</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Counter-offer development</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Terms and condition optimization</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Protecting seller interests throughout</span>
					</li>
				</ul>
			</div>
		</div>

		<div class="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-white mb-16">
			<h2 class="text-3xl font-bold mb-6 text-center">Negotiation Results</h2>
			<div class="grid md:grid-cols-3 gap-8">
				<div class="text-center">
					<Award class="w-12 h-12 mx-auto mb-4 text-white opacity-90" />
					<h3 class="text-xl font-bold mb-2">Better Prices</h3>
					<p class="text-white text-opacity-90">Secure optimal pricing for clients</p>
				</div>
				<div class="text-center">
					<Handshake class="w-12 h-12 mx-auto mb-4 text-white opacity-90" />
					<h3 class="text-xl font-bold mb-2">Favorable Terms</h3>
					<p class="text-white text-opacity-90">Negotiate terms that work for you</p>
				</div>
				<div class="text-center">
					<Target class="w-12 h-12 mx-auto mb-4 text-white opacity-90" />
					<h3 class="text-xl font-bold mb-2">Successful Closings</h3>
					<p class="text-white text-opacity-90">Close deals that benefit all parties</p>
				</div>
			</div>
		</div>

		<div class="text-center">
			<a href="/contact" class="btn-primary">Learn More</a>
		</div>
	</div>
</section>

