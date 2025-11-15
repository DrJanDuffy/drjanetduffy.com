<script>
	import { Home, Shield, Smartphone, Wifi } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Smart Home Technology Services | Dr. Janet Duffy REALTOR®</title>
	<meta name="description" content="Expertise in smart home features, privacy, and technology integration for Las Vegas properties. Learn about smart home technology in real estate." />
</svelte:head>

<section class="section bg-gradient-to-b from-white via-gray-50 to-white">
	<div class="container-premium">
		<div class="text-center mb-16">
			<h1 class="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900">
				Smart Home Technology
			</h1>
			<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-6"></div>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
				Expertise in smart home features, privacy, and technology integration for Las Vegas properties
			</p>
		</div>

		<div class="grid md:grid-cols-2 gap-12 mb-16">
			<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-lg border border-gray-100">
				<div class="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
					<Smartphone class="w-8 h-8 text-primary-600" />
				</div>
				<h2 class="text-3xl font-bold text-gray-900 mb-4">Smart Home Features</h2>
				<p class="text-gray-700 leading-relaxed mb-6">
					Today's homebuyers increasingly value smart home technology. I help you understand and evaluate smart home features including:
				</p>
				<ul class="space-y-3 text-gray-700">
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Smart thermostats and HVAC systems</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Automated lighting and security systems</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Voice-activated assistants and controls</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Smart appliances and energy monitoring</span>
					</li>
				</ul>
			</div>

			<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-10 shadow-lg border border-gray-100">
				<div class="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
					<Shield class="w-8 h-8 text-primary-600" />
				</div>
				<h2 class="text-3xl font-bold text-gray-900 mb-4">Privacy & Security</h2>
				<p class="text-gray-700 leading-relaxed mb-6">
					Understanding privacy implications and security considerations is crucial when evaluating smart home technology:
				</p>
				<ul class="space-y-3 text-gray-700">
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Data privacy and device security</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Network security and encryption</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Device compatibility and integration</span>
					</li>
					<li class="flex items-start gap-3">
						<span class="text-primary-600 mt-1">✓</span>
						<span>Future-proofing your investment</span>
					</li>
				</ul>
			</div>
		</div>

		<div class="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-white mb-16">
			<h2 class="text-3xl font-bold mb-6 text-center">How I Can Help</h2>
			<div class="grid md:grid-cols-3 gap-8">
				<div class="text-center">
					<Home class="w-12 h-12 mx-auto mb-4 text-white opacity-90" />
					<h3 class="text-xl font-bold mb-2">Buyer Guidance</h3>
					<p class="text-white text-opacity-90">Evaluate smart home features when viewing properties</p>
				</div>
				<div class="text-center">
					<Wifi class="w-12 h-12 mx-auto mb-4 text-white opacity-90" />
					<h3 class="text-xl font-bold mb-2">Technology Assessment</h3>
					<p class="text-white text-opacity-90">Understand the value and functionality of existing systems</p>
				</div>
				<div class="text-center">
					<Shield class="w-12 h-12 mx-auto mb-4 text-white opacity-90" />
					<h3 class="text-xl font-bold mb-2">Privacy Consultation</h3>
					<p class="text-white text-opacity-90">Navigate privacy and security considerations</p>
				</div>
			</div>
		</div>

		<div class="text-center">
			<a href="/contact" class="btn-primary">Get Started</a>
		</div>
	</div>
</section>

