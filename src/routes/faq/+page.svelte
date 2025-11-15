<script>
	import { HelpCircle, ChevronDown } from 'lucide-svelte';
	
	const faqs = [
		{
			category: 'Buying a Home',
			questions: [
				{
					q: 'How do I get started with buying a home in Las Vegas?',
					a: 'Start by getting pre-approved for a mortgage, then work with me to identify your needs, budget, and preferred neighborhoods. I\'ll help you search properties, schedule viewings, and guide you through the entire process.'
				},
				{
					q: 'What should I look for when viewing properties?',
					a: 'Focus on location, condition, size, and potential. I\'ll help you evaluate each property, check for issues, and compare properties to find the best fit for your needs and budget.'
				},
				{
					q: 'How long does it take to buy a home?',
					a: 'Typically 30-45 days from accepted offer to closing, but this can vary based on financing, inspections, and other factors. I\'ll keep you informed throughout the process.'
				},
				{
					q: 'Do I need a real estate agent to buy a home?',
					a: 'While not legally required, working with a professional agent provides valuable expertise, negotiation skills, and protection throughout the transaction. I represent your interests and help you avoid costly mistakes.'
				}
			]
		},
		{
			category: 'Selling a Home',
			questions: [
				{
					q: 'How do you determine my home\'s value?',
					a: 'I conduct a comprehensive market analysis comparing your home to recent sales of similar properties in your area, considering factors like location, size, condition, and current market trends.'
				},
				{
					q: 'What should I do to prepare my home for sale?',
					a: 'Declutter, deep clean, make minor repairs, and consider staging. I\'ll provide specific recommendations based on your property and market conditions to maximize your sale price.'
				},
				{
					q: 'How long will it take to sell my home?',
					a: 'In Las Vegas, well-priced homes typically sell within 19-30 days. Pricing strategy, property condition, and market conditions all affect time on market.'
				},
				{
					q: 'What are the costs of selling a home?',
					a: 'Typical costs include agent commissions (usually 5-6%), closing costs, repairs, staging, and marketing. I\'ll provide a detailed breakdown of all expected costs upfront.'
				}
			]
		},
		{
			category: 'Financing & Mortgages',
			questions: [
				{
					q: 'How much do I need for a down payment?',
					a: 'Down payments vary by loan type: conventional loans typically require 20%, FHA loans require 3.5%, and VA loans may require 0% for qualified veterans. I can connect you with lenders to explore options.'
				},
				{
					q: 'What credit score do I need to buy a home?',
					a: 'Minimum scores vary: FHA loans require 580+, conventional loans typically require 620+, and better rates are available with scores of 740+. I can help you understand your options.'
				},
				{
					q: 'Should I get pre-approved before house hunting?',
					a: 'Yes! Pre-approval shows sellers you\'re serious, helps you understand your budget, and speeds up the process once you find a home. I can recommend trusted lenders.'
				}
			]
		},
		{
			category: 'Las Vegas Market',
			questions: [
				{
					q: 'What are the best neighborhoods in Las Vegas?',
					a: 'Popular areas include Summerlin, Henderson, Green Valley, The Ridges, and Red Rock Country Club. Each offers unique amenities and lifestyle options. I can help you find the perfect fit.'
				},
				{
					q: 'Is Las Vegas a good place to invest in real estate?',
					a: 'Las Vegas offers strong rental demand, growing population, and relatively affordable prices compared to other major markets. I provide investment analysis and portfolio guidance.'
				},
				{
					q: 'What\'s the current Las Vegas real estate market like?',
					a: 'The market is dynamic with median home prices around $575K, average days on market of 19 days, and strong buyer demand. Check our Market Insights page for current statistics.'
				}
			]
		},
		{
			category: 'Working With Me',
			questions: [
				{
					q: 'What makes you different from other real estate agents?',
					a: 'With 15+ years of experience, 150+ properties sold, and $50M+ in sales volume, I bring deep Las Vegas market knowledge, proven negotiation skills, and personalized service to every transaction.'
				},
				{
					q: 'How do you communicate with clients?',
					a: 'I\'m available via phone, email, text, and in-person meetings. I provide regular updates throughout the process and respond promptly to all inquiries.'
				},
				{
					q: 'Do you work with first-time buyers?',
					a: 'Absolutely! I specialize in helping first-time buyers navigate the process, understand financing options, and find homes that fit their budget and lifestyle.'
				},
				{
					q: 'What areas do you serve?',
					a: 'I serve the entire Las Vegas Valley including Las Vegas, Henderson, North Las Vegas, Summerlin, and surrounding communities throughout Clark County.'
				}
			]
		}
	];
	
	let openCategory = null;
	let openQuestion = null;
	
	function toggleCategory(category) {
		openCategory = openCategory === category ? null : category;
	}
	
	function toggleQuestion(categoryIndex, questionIndex) {
		const key = `${categoryIndex}-${questionIndex}`;
		openQuestion = openQuestion === key ? null : key;
	}
</script>

<svelte:head>
	<title>Frequently Asked Questions | Dr. Janet Duffy REALTOR®</title>
	<meta name="description" content="Get answers to common questions about buying, selling, and investing in Las Vegas real estate. Expert guidance from Dr. Janet Duffy." />
</svelte:head>

<section class="section bg-gradient-to-b from-white via-gray-50 to-white">
	<div class="container-premium">
		<div class="text-center mb-16">
			<h1 class="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900">
				Frequently Asked Questions
			</h1>
			<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-6"></div>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
				Get answers to common questions about buying, selling, and investing in Las Vegas real estate
			</p>
		</div>

		<div class="max-w-4xl mx-auto space-y-6">
			{#each faqs as category, categoryIndex}
				<div class="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
					<button
						on:click={() => toggleCategory(categoryIndex)}
						class="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
					>
						<div class="flex items-center gap-4">
							<HelpCircle class="w-6 h-6 text-primary-600" />
							<h2 class="text-2xl font-bold text-gray-900">{category.category}</h2>
						</div>
						<ChevronDown class="w-5 h-5 text-gray-500 transition-transform {openCategory === categoryIndex ? 'rotate-180' : ''}" />
					</button>
					
					{#if openCategory === categoryIndex}
						<div class="px-6 pb-6 space-y-4">
							{#each category.questions as question, questionIndex}
								<div class="border-t border-gray-200 pt-4">
									<button
										on:click={() => toggleQuestion(categoryIndex, questionIndex)}
										class="w-full flex items-start justify-between text-left gap-4"
									>
										<h3 class="text-lg font-semibold text-gray-900 flex-1">{question.q}</h3>
										<ChevronDown class="w-5 h-5 text-gray-400 flex-shrink-0 mt-1 transition-transform {openQuestion === `${categoryIndex}-${questionIndex}` ? 'rotate-180' : ''}" />
									</button>
									{#if openQuestion === `${categoryIndex}-${questionIndex}`}
										<p class="text-gray-700 mt-3 leading-relaxed pl-0">{question.a}</p>
									{/if}
								</div>
							{/each}
						</div>
					{/if}
				</div>
			{/each}
		</div>

		<div class="mt-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-center text-white">
			<h2 class="text-3xl font-bold mb-4">Still Have Questions?</h2>
			<p class="text-lg text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
				I'm here to help! Contact me directly for personalized answers to your specific real estate questions.
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="/contact" class="btn-primary bg-white text-primary-600 hover:bg-gray-100">Contact Me</a>
				<a href="tel:+17025001955" class="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">Call 702-500-1955</a>
			</div>
		</div>
	</div>
</section>

