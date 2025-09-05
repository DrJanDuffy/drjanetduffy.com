<script>
	const motivationalQuotes = [
		{
			quote: "The only place success comes before work is in the dictionary.",
			author: "Vince Lombardi",
			title: "Former Football Coach",
			category: "Mindset",
			description: "A reminder that there's no shortcut to results. The grind may feel thankless now, but the payoff is coming."
		},
		{
			quote: "Your past doesn't define you. It prepares you.",
			author: "Darren Hardy",
			title: "Author & Former Publisher of SUCCESS Magazine",
			category: "Mindset",
			description: "That expired listing, failed offer, or demanding client? It's not baggage — it's training. You're stronger now because of it."
		},
		{
			quote: "The highest levels of success don't come from more grinding. They come from more alignment.",
			author: "Brett Jennings",
			title: "Founder of Real Estate Experts",
			category: "Strategy",
			description: "Hustle is important, but direction matters more. Work that aligns with your values and strengths leads to better results."
		},
		{
			quote: "Success is walking from failure to failure with no loss of enthusiasm.",
			author: "Winston Churchill",
			title: "Former British Prime Minister",
			category: "Persistence",
			description: "Wins are fleeting, losses are temporary. What really matters is your capacity to keep showing up with purpose."
		},
		{
			quote: "Don't wait to buy real estate. Buy real estate and wait.",
			author: "Will Rogers",
			title: "Actor and Social Commentator",
			category: "Investment",
			description: "A reminder to think long term — not just in your career, but in how you coach clients and newer agents."
		},
		{
			quote: "To be successful in real estate, you must always and consistently put your clients' best interests first.",
			author: "Anthony Hitt",
			title: "Real Estate Executive & CEO of Engel & Völkers Americas",
			category: "Client Service",
			description: "True leadership — on a team or with clients — is built on service. Put people first, and success follows."
		},
		{
			quote: "In the middle of difficulty lies opportunity.",
			author: "Albert Einstein",
			title: "Theoretical Physicist",
			category: "Opportunity",
			description: "When deals fall apart or markets slow down, your mindset determines whether you see obstacles or openings."
		},
		{
			quote: "Make a customer, not a sale.",
			author: "Katherine Barchetti",
			title: "Retail Expert",
			category: "Client Service",
			description: "This reframes real estate as a relationship-driven business, not a transaction game."
		},
		{
			quote: "Buy land; they're not making it anymore.",
			author: "Mark Twain",
			title: "Writer and Humorist",
			category: "Investment",
			description: "A witty, concise reminder of real estate's scarcity and enduring value."
		},
		{
			quote: "Owning a home is a keystone of wealth, both financial affluence and emotional security.",
			author: "Suze Orman",
			title: "Financial Advisor and Author",
			category: "Homeownership",
			description: "This quote hits the emotional and financial reasons people buy homes, perfect for educating while inspiring."
		},
		{
			quote: "If you aim for nothing, you'll hit it every time.",
			author: "Zig Ziglar",
			title: "Motivational Speaker",
			category: "Goals",
			description: "A great reminder that intention drives results."
		},
		{
			quote: "The best investment on Earth is earth.",
			author: "Louis Glickman",
			title: "Real Estate Investor",
			category: "Investment",
			description: "Land remains the original asset even in a digital-first world. Tech may change how we market or sell, but the core value never fades."
		}
	];

	const categories = ['All', 'Mindset', 'Strategy', 'Persistence', 'Investment', 'Client Service', 'Opportunity', 'Homeownership', 'Goals'];
	let selectedCategory = 'All';

	$: filteredQuotes = selectedCategory === 'All' 
		? motivationalQuotes 
		: motivationalQuotes.filter(quote => quote.category === selectedCategory);
</script>

<svelte:head>
	<title>Motivational Real Estate Quotes | Dr. Janet Duffy, REALTOR®</title>
	<meta name="description" content="Inspirational real estate quotes to motivate agents, build client trust, and drive success. Curated collection from industry leaders and thought leaders." />
	<meta name="keywords" content="real estate quotes, motivational quotes, real estate inspiration, agent motivation, client trust, real estate success" />
	
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://drjanetduffy.com/quotes" />
	<meta property="og:title" content="Motivational Real Estate Quotes | Dr. Janet Duffy, REALTOR®" />
	<meta property="og:description" content="Inspirational real estate quotes to motivate agents, build client trust, and drive success." />
	
	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://drjanetduffy.com/quotes" />
	<meta property="twitter:title" content="Motivational Real Estate Quotes | Dr. Janet Duffy, REALTOR®" />
	<meta property="twitter:description" content="Inspirational real estate quotes to motivate agents, build client trust, and drive success." />
</svelte:head>

<div class="container mx-auto px-4 py-16">
	<div class="max-w-6xl mx-auto">
		<!-- Header Section -->
		<div class="text-center mb-16">
			<h1 class="text-4xl md:text-5xl font-bold mb-6 text-vegas-deep-900">
				Motivational Real Estate Quotes
			</h1>
			<p class="text-xl text-vegas-deep-700 max-w-4xl mx-auto mb-8">
				Inspirational quotes from industry leaders, thought leaders, and successful real estate professionals to motivate, inspire, and guide your real estate journey.
			</p>
			
			<!-- Category Filter -->
			<div class="flex flex-wrap justify-center gap-2 mb-8">
				{#each categories as category}
					<button
						on:click={() => selectedCategory = category}
						class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 {
							selectedCategory === category 
								? 'bg-vegas-gold-600 text-vegas-deep-900 shadow-lg' 
								: 'bg-gray-100 text-gray-700 hover:bg-vegas-gold-100 hover:text-vegas-gold-700'
						}"
					>
						{category}
					</button>
				{/each}
			</div>
		</div>

		<!-- Quotes Grid -->
		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each filteredQuotes as quote, index}
				<div class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border-l-4 border-vegas-gold-600">
					<div class="mb-6">
						<span class="inline-block bg-vegas-gold-100 text-vegas-gold-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
							{quote.category}
						</span>
						<blockquote class="text-lg text-vegas-deep-900 font-medium leading-relaxed mb-4">
							"{quote.quote}"
						</blockquote>
					</div>
					
					<div class="border-t border-gray-100 pt-4">
						<div class="font-semibold text-vegas-deep-900">{quote.author}</div>
						<div class="text-sm text-vegas-gold-600 mb-3">{quote.title}</div>
						<p class="text-sm text-gray-600 leading-relaxed">{quote.description}</p>
					</div>
				</div>
			{/each}
		</div>

		<!-- How to Use Section -->
		<div class="mt-20 bg-gradient-to-r from-vegas-deep-900 to-vegas-gold-600 text-white rounded-2xl p-12">
			<div class="max-w-4xl mx-auto text-center">
				<h2 class="text-3xl font-bold mb-8">How to Use These Quotes</h2>
				<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
					<div>
						<h3 class="text-xl font-semibold mb-4 text-vegas-gold-300">Email Signatures</h3>
						<p class="text-vegas-gold-100">Add a motivational quote to your email signature to show clients your values and stay optimistic.</p>
					</div>
					<div>
						<h3 class="text-xl font-semibold mb-4 text-vegas-gold-300">Social Media</h3>
						<p class="text-vegas-gold-100">Use quotes as scroll-stoppers in Instagram Stories, carousels, and captions to engage your audience.</p>
					</div>
					<div>
						<h3 class="text-xl font-semibold mb-4 text-vegas-gold-300">Client Communications</h3>
						<p class="text-vegas-gold-100">Include quotes in buyer guides, listing presentations, and thank-you cards to add warmth.</p>
					</div>
					<div>
						<h3 class="text-xl font-semibold mb-4 text-vegas-gold-300">Team Motivation</h3>
						<p class="text-vegas-gold-100">Share quotes in team meetings, Slack messages, and training sessions to boost morale.</p>
					</div>
					<div>
						<h3 class="text-xl font-semibold mb-4 text-vegas-gold-300">Listing Descriptions</h3>
						<p class="text-vegas-gold-100">Add emotional quotes to property descriptions to set the tone for potential buyers.</p>
					</div>
					<div>
						<h3 class="text-xl font-semibold mb-4 text-vegas-gold-300">Content Strategy</h3>
						<p class="text-vegas-gold-100">Let quotes inspire your next blog post, video, or newsletter to create engaging content.</p>
					</div>
				</div>
			</div>
		</div>

		<!-- CTA Section -->
		<div class="mt-16 text-center">
			<h2 class="text-3xl font-bold mb-6 text-vegas-deep-900">Ready to Apply These Insights?</h2>
			<p class="text-xl text-vegas-deep-700 mb-8 max-w-3xl mx-auto">
				Let Dr. Janet Duffy, REALTOR® help you turn inspiration into action with luxury real estate expertise in West Summerlin.
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a 
					href="/contact" 
					class="bg-vegas-gold-600 text-vegas-deep-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-vegas-gold-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
				>
					Schedule Consultation
				</a>
				<a 
					href="tel:+17022221964" 
					class="border-2 border-vegas-gold-600 text-vegas-gold-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-vegas-gold-600 hover:text-vegas-deep-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
				>
					Call: 702-222-1964
				</a>
			</div>
		</div>
	</div>
</div>
