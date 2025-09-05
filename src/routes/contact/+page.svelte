<script>
const formData = {
  name: '',
  email: '',
  phone: '',
  message: '',
  propertyInterest: '',
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
					<div>
						<h3 class="font-semibold text-gray-800">Phone</h3>
						<p class="text-gray-600">(702) 555-1234</p>
						<p class="text-sm text-gray-500">Available 7 days a week</p>
					</div>
					
					<div>
						<h3 class="font-semibold text-gray-800">Email</h3>
						<p class="text-gray-600">jan@drjanduffy.com</p>
						<p class="text-sm text-gray-500">Response within 24 hours</p>
					</div>
					
					<div>
						<h3 class="font-semibold text-gray-800">Office Location</h3>
						<p class="text-gray-600">Las Vegas, NV</p>
						<p class="text-sm text-gray-500">Serving the greater Las Vegas area</p>
					</div>
				</div>
				
				<div class="mt-8 p-6 bg-gray-50 rounded-lg">
					<h3 class="font-semibold text-gray-800 mb-3">Why Choose Dr. Jan Duffy?</h3>
					<ul class="space-y-2 text-sm text-gray-600">
						<li>Local market expertise</li>
						<li>Proven track record</li>
						<li>Personalized service</li>
						<li>Free consultation</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>
