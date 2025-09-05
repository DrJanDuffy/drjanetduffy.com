<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	
	export let title: string = 'Get In Touch';
	export let subtitle: string = 'Ready to start your real estate journey? Contact me today!';
	export let showPhone: boolean = true;
	
	const dispatch = createEventDispatcher();
	
	let formData = {
		name: '',
		email: '',
		phone: '',
		message: '',
		propertyType: '',
		budget: '',
		timeframe: ''
	};
	
	let isSubmitting = false;
	let submitStatus: 'idle' | 'success' | 'error' = 'idle';
	
	async function handleSubmit(event: Event) {
		event.preventDefault();
		isSubmitting = true;
		submitStatus = 'idle';
		
		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData)
			});
			
			if (response.ok) {
				submitStatus = 'success';
				formData = {
					name: '',
					email: '',
					phone: '',
					message: '',
					propertyType: '',
					budget: '',
					timeframe: ''
				};
				dispatch('success');
			} else {
				submitStatus = 'error';
			}
		} catch (error) {
			console.error('Form submission error:', error);
			submitStatus = 'error';
		} finally {
			isSubmitting = false;
		}
	}
</script>

<div class="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
	<div class="text-center mb-8">
		<h3 class="text-3xl font-bold text-gray-800 mb-2">{title}</h3>
		<p class="text-gray-600">{subtitle}</p>
	</div>
	
	{#if showPhone}
		<div class="text-center mb-8">
								<a 
						href="tel:+17022221964" 
						class="inline-flex items-center text-2xl font-bold text-vegas-gold-600 hover:text-vegas-gold-700 transition-colors"
					>
						<svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
							<path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
						</svg>
						Direct: 702-222-1964
					</a>
		</div>
	{/if}
	
	<form on:submit={handleSubmit} class="space-y-6">
		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			<div>
				<label for="name" class="block text-sm font-semibold text-gray-700 mb-2">
					Full Name *
				</label>
				<input
					type="text"
					id="name"
					bind:value={formData.name}
					required
					class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vegas-gold-500 focus:border-vegas-gold-500 transition-colors"
					placeholder="Your full name"
				/>
			</div>
			
			<div>
				<label for="email" class="block text-sm font-semibold text-gray-700 mb-2">
					Email Address *
				</label>
				<input
					type="email"
					id="email"
					bind:value={formData.email}
					required
					class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vegas-gold-500 focus:border-vegas-gold-500 transition-colors"
					placeholder="your.email@example.com"
				/>
			</div>
		</div>
		
		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			<div>
				<label for="phone" class="block text-sm font-semibold text-gray-700 mb-2">
					Phone Number
				</label>
				<input
					type="tel"
					id="phone"
					bind:value={formData.phone}
					class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vegas-gold-500 focus:border-vegas-gold-500 transition-colors"
					placeholder="(702) 555-1234"
				/>
			</div>
			
			<div>
				<label for="propertyType" class="block text-sm font-semibold text-gray-700 mb-2">
					Property Type
				</label>
				<select
					id="propertyType"
					bind:value={formData.propertyType}
					class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vegas-gold-500 focus:border-vegas-gold-500 transition-colors"
				>
					<option value="">Select property type</option>
					<option value="single-family">Single Family Home</option>
					<option value="condo">Condominium</option>
					<option value="townhouse">Townhouse</option>
					<option value="investment">Investment Property</option>
					<option value="land">Land/Lot</option>
				</select>
			</div>
		</div>
		
		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			<div>
				<label for="budget" class="block text-sm font-semibold text-gray-700 mb-2">
					Budget Range
				</label>
				<select
					id="budget"
					bind:value={formData.budget}
					class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vegas-gold-500 focus:border-vegas-gold-500 transition-colors"
				>
					<option value="">Select budget range</option>
					<option value="under-300k">Under $300,000</option>
					<option value="300k-500k">$300,000 - $500,000</option>
					<option value="500k-750k">$500,000 - $750,000</option>
					<option value="750k-1m">$750,000 - $1,000,000</option>
					<option value="over-1m">Over $1,000,000</option>
				</select>
			</div>
			
			<div>
				<label for="timeframe" class="block text-sm font-semibold text-gray-700 mb-2">
					Timeframe
				</label>
				<select
					id="timeframe"
					bind:value={formData.timeframe}
					class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vegas-gold-500 focus:border-vegas-gold-500 transition-colors"
				>
					<option value="">Select timeframe</option>
					<option value="immediately">Immediately</option>
					<option value="1-3-months">1-3 months</option>
					<option value="3-6-months">3-6 months</option>
					<option value="6-12-months">6-12 months</option>
					<option value="just-looking">Just looking</option>
				</select>
			</div>
		</div>
		
		<div>
			<label for="message" class="block text-sm font-semibold text-gray-700 mb-2">
				Message
			</label>
			<textarea
				id="message"
				bind:value={formData.message}
				rows="4"
				class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vegas-gold-500 focus:border-vegas-gold-500 transition-colors resize-none"
				placeholder="Tell me about your real estate needs..."
			></textarea>
		</div>
		
		{#if submitStatus === 'success'}
			<div class="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
				<div class="flex items-center justify-center mb-2">
					<svg class="w-6 h-6 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
					</svg>
					<span class="text-green-800 font-semibold">Message sent successfully!</span>
				</div>
				<p class="text-green-700 text-sm">I'll get back to you within 24 hours.</p>
			</div>
		{:else if submitStatus === 'error'}
			<div class="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
				<div class="flex items-center justify-center mb-2">
					<svg class="w-6 h-6 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
					</svg>
					<span class="text-red-800 font-semibold">Error sending message</span>
				</div>
				<p class="text-red-700 text-sm">Please try again or call 702-222-1964 directly.</p>
			</div>
		{/if}
		
		<button
			type="submit"
			disabled={isSubmitting}
			class="w-full bg-vegas-gold-600 text-white py-4 px-6 rounded-xl font-semibold hover:bg-vegas-gold-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:transform-none"
		>
			{#if isSubmitting}
				<div class="flex items-center justify-center">
					<svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
						<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
						<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
					</svg>
					Sending...
				</div>
			{:else}
				Send Message
			{/if}
		</button>
	</form>
</div>
