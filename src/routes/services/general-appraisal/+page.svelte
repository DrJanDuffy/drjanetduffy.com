<script>
	import { FileText, Award, CheckCircle, DollarSign } from 'lucide-svelte';
</script>

<svelte:head>
	<title>General Appraisal Services | Dr. Janet Duffy REALTOR®</title>
	<meta name="description" content="Comprehensive property appraisals exceeding state certification requirements. Professional general appraisal services for Las Vegas properties." />
</svelte:head>

<section class="section bg-gradient-to-b from-white via-gray-50 to-white">
	<div class="container-premium">
		<div class="text-center mb-16">
			<h1 class="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900">
				Professional General Appraisal Services in Las Vegas
			</h1>
			<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-6"></div>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
				Comprehensive property appraisals exceeding state certification requirements
			</p>
		</div>

		<div class="mb-16">
			<h2 class="text-3xl font-bold text-gray-900 mb-6">What General Appraisal Services Are Available for Las Vegas Properties?</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl">
				General appraisal services for Las Vegas properties include residential property appraisals, commercial property valuations, land and development appraisals, and specialized property assessments. These comprehensive appraisals exceed state certification requirements and provide accurate valuations for various property types throughout the Las Vegas area.
			</p>
			<div class="grid md:grid-cols-2 gap-12">
				<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-lg border border-gray-100">
					<div class="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
						<FileText class="w-8 h-8 text-primary-600" />
					</div>
					<h3 class="text-2xl font-bold text-gray-900 mb-4">Appraisal Types</h3>
					<p class="text-gray-700 leading-relaxed mb-6">
						Comprehensive appraisal services for various property types:
					</p>
				<ul class="space-y-3 text-gray-700">
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Residential property appraisals</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Commercial property valuations</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Land and development appraisals</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Specialized property assessments</span>
					</li>
				</ul>
			</div>

				<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-lg border border-gray-100">
					<div class="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
						<Award class="w-8 h-8 text-primary-600" />
					</div>
					<h3 class="text-2xl font-bold text-gray-900 mb-4">Certification & Standards</h3>
					<p class="text-gray-700 leading-relaxed mb-6">
						Appraisals that meet and exceed professional standards:
					</p>
				<ul class="space-y-3 text-gray-700">
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>USPAP compliant appraisals</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>State-certified appraisers</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Detailed market analysis and comparables</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Comprehensive documentation and reports</span>
					</li>
				</ul>
			</div>
		</div>

		<div class="mb-16">
			<h2 class="text-3xl font-bold text-gray-900 mb-6">What Are the Benefits of Professional General Appraisals?</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl">
				Professional general appraisals provide accurate valuations through professional, unbiased property assessment, lender acceptance with appraisals accepted by all major lenders, and detailed reports with comprehensive documentation for your records. These benefits ensure you receive reliable property valuations that meet all professional standards.
			</p>
			<div class="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-white">
			<div class="grid md:grid-cols-3 gap-8">
				<div class="text-center">
					<DollarSign class="w-12 h-12 mx-auto mb-4 text-white opacity-90" />
					<h3 class="text-xl font-bold mb-2">Accurate Valuation</h3>
					<p class="text-white text-opacity-90">Professional, unbiased property assessment</p>
				</div>
				<div class="text-center">
					<CheckCircle class="w-12 h-12 mx-auto mb-4 text-white opacity-90" />
					<h3 class="text-xl font-bold mb-2">Lender Acceptance</h3>
					<p class="text-white text-opacity-90">Appraisals accepted by all major lenders</p>
				</div>
				<div class="text-center">
					<FileText class="w-12 h-12 mx-auto mb-4 text-white opacity-90" />
					<h3 class="text-xl font-bold mb-2">Detailed Reports</h3>
					<p class="text-white text-opacity-90">Comprehensive documentation for your records</p>
				</div>
			</div>
		</div>

		<div class="text-center">
			<a href="/contact" class="btn-primary">Request Appraisal</a>
		</div>
	</div>
</section>

