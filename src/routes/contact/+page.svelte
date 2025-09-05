<script>
	let formData = {
		name: '',
		email: '',
		phone: '',
		message: '',
		propertyInterest: ''
	};
	
	let submitted = false;
	
	function handleSubmit() {
		// In a real implementation, this would send data to FollowUp Boss
		console.log('Form submitted:', formData);
		submitted = true;
	}
</script>

<svelte:head>
	<title>Contact Dr. Jan Duffy REALTOR | Las Vegas Real Estate</title>
	<meta name="description" content="Get in touch with Dr. Jan Duffy for expert real estate guidance in Las Vegas. Free consultation for buyers and sellers." />
	<meta name="keywords" content="contact real estate agent, Las Vegas REALTOR, real estate consultation, Dr. Jan Duffy" />
</svelte:head>

<div class="container mx-auto px-4 py-16">
	<div class="max-w-4xl mx-auto">
		<div class="text-center mb-12">
			<h1 class="text-4xl font-bold mb-4 text-gray-800">Contact Dr. Jan Duffy</h1>
			<p class="text-xl text-gray-600">
				Ready to start your real estate journey? Let's discuss your needs and goals.
			</p>
		</div>
		
		<div class="grid md:grid-cols-2 gap-12">
			<!-- Contact Form -->
			<div>
				<h2 class="text-2xl font-semibold mb-6 text-gray-800">Send a Message</h2>
				
				{#if submitted}
					<div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
						Thank you for your message! I'll get back to you within 24 hours.
					</div>
				{/if}
				
				<form on:submit|preventDefault={handleSubmit} class="space-y-6">
					<div>
						<label for="name" class="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
						<input
							type="text"
							id="name"
							bind:value={formData.name}
							required
							class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
						/>
					</div>
					
					<div>
						<label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email *</label>
						<input
							type="email"
							id="email"
							bind:value={formData.email}
							required
							class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
						/>
					</div>
					
					<div>
						<label for="phone" class="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
						<input
							type="tel"
							id="phone"
							bind:value={formData.phone}
							class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
						/>
					</div>
					
					<div>
						<label for="propertyInterest" class="block text-sm font-medium text-gray-700 mb-2">Property Interest</label>
						<select
							id="propertyInterest"
							bind:value={formData.propertyInterest}
							class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
						>
							<option value="">Select an option</option>
							<option value="buying">I'm looking to buy</option>
							<option value="selling">I'm looking to sell</option>
							<option value="both">I'm looking to buy and sell</option>
							<option value="investment">I'm interested in investment properties</option>
							<option value="general">General real estate questions</option>
						</select>
					</div>
					
					<div>
						<label for="message" class="block text-sm font-medium text-gray-700 mb-2">Message *</label>
						<textarea
							id="message"
							bind:value={formData.message}
							required
							rows="4"
							class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
							placeholder="Tell me about your real estate needs..."
						></textarea>
					</div>
					
					<button
						type="submit"
						class="w-full bg-primary-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
					>
						Send Message
					</button>
				</form>
			</div>
			
			<!-- Contact Information -->
			<div>
				<h2 class="text-2xl font-semibold mb-6 text-gray-800">Get in Touch</h2>
				
				<div class="space-y-6">
					<div class="flex items-start space-x-4">
						<div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
							<svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
							</svg>
						</div>
						<div>
							<h3 class="font-semibold text-gray-800">Phone</h3>
							<p class="text-gray-600">(702) 555-1234</p>
							<p class="text-sm text-gray-500">Available 7 days a week</p>
						</div>
					</div>
					
					<div class="flex items-start space-x-4">
						<div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
							<svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
							</svg>
						</div>
						<div>
							<h3 class="font-semibold text-gray-800">Email</h3>
							<p class="text-gray-600">jan@drjanduffy.com</p>
							<p class="text-sm text-gray-500">Response within 24 hours</p>
						</div>
					</div>
					
					<div class="flex items-start space-x-4">
						<div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
							<svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
							</svg>
						</div>
						<div>
							<h3 class="font-semibold text-gray-800">Office Location</h3>
							<p class="text-gray-600">Las Vegas, NV</p>
							<p class="text-sm text-gray-500">Serving the greater Las Vegas area</p>
						</div>
					</div>
				</div>
				
				<div class="mt-8 p-6 bg-gray-50 rounded-lg">
					<h3 class="font-semibold text-gray-800 mb-3">Why Choose Dr. Jan Duffy?</h3>
					<ul class="space-y-2 text-sm text-gray-600">
						<li class="flex items-center">
							<svg class="w-4 h-4 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
							</svg>
							Local market expertise
						</li>
						<li class="flex items-center">
							<svg class="w-4 h-4 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
							</svg>
							Proven track record
						</li>
						<li class="flex items-center">
							<svg class="w-4 h-4 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
							</svg>
							Personalized service
						</li>
						<li class="flex items-center">
							<svg class="w-4 h-4 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
							</svg>
							Free consultation
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>
