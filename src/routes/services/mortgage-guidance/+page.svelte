<script>
	import { DollarSign, FileText, TrendingDown, CheckCircle } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Mortgage Guidance Services | Dr. Janet Duffy REALTOR®</title>
	<meta name="description" content="Expert guidance through home financing options to improve outcomes and build relationships. Professional mortgage guidance for Las Vegas homebuyers." />
</svelte:head>

<section class="section bg-gradient-to-b from-white via-gray-50 to-white">
	<div class="container-premium">
		<div class="text-center mb-16">
			<h1 class="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900">
				Mortgage Guidance
			</h1>
			<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-6"></div>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
				Expert guidance through home financing options to improve outcomes and build relationships
			</p>
		</div>

		<div class="grid md:grid-cols-2 gap-12 mb-16">
			<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-lg border border-gray-100">
				<div class="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
					<FileText class="w-8 h-8 text-primary-600" />
				</div>
				<h2 class="text-3xl font-bold text-gray-900 mb-4">Loan Types & Options</h2>
				<p class="text-gray-700 leading-relaxed mb-6">
					Understanding different mortgage options available:
				</p>
				<ul class="space-y-3 text-gray-700">
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Conventional loans and FHA programs</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>VA loans for military families</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>USDA rural development loans</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Jumbo loans for luxury properties</span>
					</li>
				</ul>
			</div>

			<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-lg border border-gray-100">
				<div class="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
					<DollarSign class="w-8 h-8 text-primary-600" />
				</div>
				<h2 class="text-3xl font-bold text-gray-900 mb-4">Pre-Approval & Process</h2>
				<p class="text-gray-700 leading-relaxed mb-6">
					Guidance through the mortgage application process:
				</p>
				<ul class="space-y-3 text-gray-700">
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Pre-approval and pre-qualification</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Credit score improvement strategies</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Down payment assistance programs</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Closing cost estimation and planning</span>
					</li>
				</ul>
			</div>
		</div>

		<div class="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-white mb-16">
			<h2 class="text-3xl font-bold mb-6 text-center">Mortgage Guidance Benefits</h2>
			<div class="grid md:grid-cols-3 gap-8">
				<div class="text-center">
					<TrendingDown class="w-12 h-12 mx-auto mb-4 text-white opacity-90" />
					<h3 class="text-xl font-bold mb-2">Better Rates</h3>
					<p class="text-white text-opacity-90">Find the best mortgage rates available</p>
				</div>
				<div class="text-center">
					<CheckCircle class="w-12 h-12 mx-auto mb-4 text-white opacity-90" />
					<h3 class="text-xl font-bold mb-2">Smooth Process</h3>
					<p class="text-white text-opacity-90">Navigate financing with confidence</p>
				</div>
				<div class="text-center">
					<FileText class="w-12 h-12 mx-auto mb-4 text-white opacity-90" />
					<h3 class="text-xl font-bold mb-2">Expert Advice</h3>
					<p class="text-white text-opacity-90">Professional guidance every step</p>
				</div>
			</div>
		</div>

		<div class="text-center">
			<a href="/contact" class="btn-primary">Get Started</a>
		</div>
	</div>
</section>

