<script lang="ts">
	import { onMount } from 'svelte';
	import { format } from 'date-fns';

	interface RSSItem {
		title: string;
		link: string;
		description: string;
		pubDate: string;
		author?: string;
		guid?: string;
	}

	interface RSSFeed {
		title: string;
		link: string;
		description: string;
		items: RSSItem[];
	}

	let feed: RSSFeed | null = null;
	let loading = true;
	let error: string | null = null;
	let feedUrl = 'https://www.drjanetduffy.com/blog/rss/';

	onMount(async () => {
		await loadFeed();
	});

	async function loadFeed() {
		loading = true;
		error = null;
		
		try {
			const response = await fetch(`/api/rss?url=${encodeURIComponent(feedUrl)}`);
			const data = await response.json();
			
			if (!response.ok) {
				throw new Error(data.error || 'Failed to load RSS feed');
			}
			
			feed = data;
		} catch (err) {
			error = err instanceof Error ? err.message : 'Unknown error occurred';
		} finally {
			loading = false;
		}
	}

	function formatDate(dateString: string): string {
		try {
			const date = new Date(dateString);
			return format(date, 'MMMM d, yyyy');
		} catch {
			return dateString;
		}
	}

	function stripHTML(html: string): string {
		const tmp = document.createElement('DIV');
		tmp.innerHTML = html;
		return tmp.textContent || tmp.innerText || '';
	}

	function truncateText(text: string, maxLength: number = 200): string {
		const clean = stripHTML(text);
		if (clean.length <= maxLength) return clean;
		return clean.substring(0, maxLength).trim() + '...';
	}
</script>

<svelte:head>
	<title>Las Vegas Real Estate Blog | Dr. Janet Duffy</title>
	<meta name="description" content="Stay up-to-date with the latest Las Vegas real estate news, market trends, and community insights." />
	<meta name="keywords" content="Las Vegas real estate blog, Las Vegas market trends, real estate news, Las Vegas community insights, property market updates" />
	<meta name="robots" content="index, follow" />
	
	<!-- Canonical URL -->
	<link rel="canonical" href="https://www.drjanetduffy.com/blog" />
	
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.drjanetduffy.com/blog" />
	<meta property="og:title" content="Las Vegas Real Estate Blog | Dr. Janet Duffy" />
	<meta property="og:description" content="Stay up-to-date with the latest Las Vegas real estate news, market trends, and community insights." />
	<meta property="og:site_name" content="Homes by Dr. Duffy" />
	
	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content="https://www.drjanetduffy.com/blog" />
	<meta name="twitter:title" content="Las Vegas Real Estate Blog | Dr. Janet Duffy" />
	<meta name="twitter:description" content="Stay up-to-date with the latest Las Vegas real estate news, market trends, and community insights." />
	
	<!-- Structured Data -->
	<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "Blog",
		"name": "Las Vegas Real Estate Blog",
		"description": "Stay up-to-date with the latest Las Vegas real estate news, market trends, and community insights",
		"url": "https://www.drjanetduffy.com/blog",
		"publisher": {
			"@type": "RealEstateAgent",
			"name": "Dr. Janet Duffy"
		}
	}
	</script>
</svelte:head>

<div class="container mx-auto px-4 py-10 max-w-6xl">
	<div class="mb-10">
		<h1 class="text-4xl sm:text-5xl font-bold mb-6 text-gray-900">Las Vegas Real Estate News & Market Insights</h1>
		<p class="text-gray-600 text-lg mb-6 leading-relaxed max-w-4xl">
			This blog is your always-on briefing room for the Las Vegas housing market. Here you will find hyper-local updates on Summerlin and Skye Canyon inventory, deep dives into appreciation trends, builder incentive breakdowns, and practical advice drawn from real transactions I negotiate every week. Whether you are browsing casually or preparing to buy, sell, invest, or relocate within the next 12 months, these articles are designed to give you context, confidence, and language you can use when speaking with lenders, CPAs, relocation reps, or family members who are part of your decision.
		</p>
		<p class="text-gray-600 text-lg mb-10 leading-relaxed max-w-4xl">
			Every post follows a simple promise: clear explanations, real numbers, and actionable takeaways specific to Las Vegas—not generic national headlines. Use the sections below to understand which topics we cover, how often new posts are added, and how to turn this blog into a personal research assistant for your move or investment strategy.
		</p>

		<div class="mb-10">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What Las Vegas Real Estate News and Market Insights Are Available?</h2>
			<p class="text-lg text-gray-700 mb-6 leading-relaxed max-w-4xl">
				Las Vegas real estate news and market insights on this blog include monthly market snapshots, neighborhood spotlights, builder and HOA updates, interest-rate commentary, and strategy guides for buyers, sellers, and investors. You will see articles that explain why Summerlin villages appreciate differently, how Skye Canyon’s new phases are priced, what rental yields look like in North Las Vegas, and which Henderson communities are trending with remote workers and medical professionals.
			</p>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl">
				I combine MLS data, title reports, builder releases, and conversations with lenders, appraisers, and fellow top agents to translate numbers into plain English. Articles often include real-world case studies—multiple-offer scenarios, appraisal challenges, relocation timelines—so you can learn from other clients’ experiences before you make your own moves. If you only read a few posts per month, you will still have a better feel for the Las Vegas market than most casual browsers on national portals.
			</p>
		</div>

		<!-- Section: Market Themes -->
		<div class="mb-12">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Which 2025 Market Themes Are Most Important for Las Vegas Buyers and Sellers?</h2>
			<p class="text-lg text-gray-700 mb-6 leading-relaxed">
				Several themes shape the 2025 Las Vegas real estate story: inventory remains tighter than pre-2020 norms, interest rates hover in the high-5% to mid-6% range, and migration from higher-cost states continues to support demand in well-located communities. Blog posts in this section unpack how those forces show up in your neighborhood—days on market, list-to-sale ratios, price reductions, and which property types are moving fastest. Instead of broad generalizations, you will see ZIP-code level evidence backed by charts and anecdotes from current deals.
			</p>
			<p class="text-lg text-gray-700 mb-6 leading-relaxed">
				For sellers, I break down what “proper pricing” means in a market where overpricing by just 3–5% can stall activity, while underpricing by the same amount can leave equity on the table. For buyers, I highlight opportunities in communities where new construction competes with resale listings, creating leverage for well-prepared offers. Posts also explore how seasonal tourism, major events like Formula 1 or the Super Bowl, and large employer announcements influence certain submarkets more than others.
			</p>
			<p class="text-lg text-gray-700 leading-relaxed">
				These theme articles help you understand the “why” behind the numbers so that individual listing decisions feel like part of a coherent strategy—not isolated guesses.
			</p>
		</div>

		<!-- Section: Neighborhood & Community Guides -->
		<div class="mb-12">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">How Do Neighborhood & Community Guides Help You Compare Las Vegas Areas?</h2>
			<p class="text-lg text-gray-700 mb-6 leading-relaxed">
				Neighborhood posts focus on what it actually feels like to live in each community—far beyond the bullet points on a listing sheet. You will find articles that compare Summerlin’s villages, outline the pros and cons of Skye Canyon versus Centennial Hills, and explain which Henderson neighborhoods offer the best mix of schools, trail access, and commute routes. Each guide typically covers home styles, price ranges, HOA structure, amenities, appreciation history, and “insider” details like traffic patterns, elevation-based temperature differences, and where locals go for coffee or weekend hikes.
			</p>
			<p class="text-lg text-gray-700 mb-6 leading-relaxed">
				These guides are especially valuable for relocation clients who can only spend a few days touring in person. By reading the neighborhood posts ahead of time, you can arrive with a short list of communities that match your lifestyle and budget. That allows our in-person tours to focus on confirming fit and evaluating specific homes instead of starting from scratch.
			</p>
			<p class="text-lg text-gray-700 leading-relaxed">
				If you do not see your current neighborhood featured yet, reach out—your request often becomes the next guide I publish.
			</p>
		</div>

		<!-- Section: Buyer & Seller Playbooks -->
		<div class="mb-12">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What Practical Playbooks Are Available for Las Vegas Buyers and Sellers?</h2>
			<p class="text-lg text-gray-700 mb-6 leading-relaxed">
				Strategy posts function like mini-workshops you can revisit at any time. Buyer-focused articles walk you through pre-approval preparation, crafting competitive offers without overpaying, navigating appraisals, and deciding when to ask for repairs versus credits. Seller playbooks cover pre-listing checklists, staging ideas specific to desert homes, pricing psychology, and how to evaluate multiple offers beyond just the top-line price.
			</p>
			<p class="text-lg text-gray-700 mb-6 leading-relaxed">
				Many posts include sample timelines, email scripts, and question lists you can use when interviewing lenders, inspectors, or contractors. My goal is to give you tools you can reuse, not just opinions to read once and forget. Clients often tell me that a single article—such as one explaining appraisal gaps or rate buydowns—calmed nerves and helped them negotiate more confidently.
			</p>
			<p class="text-lg text-gray-700 leading-relaxed">
				You can treat these articles as a free coaching library that complements our one-on-one strategy sessions during your actual transaction.
			</p>
		</div>

		<!-- Section: Investor & Second-Home Articles -->
		<div class="mb-12">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">How Does the Blog Support Investors and Second-Home Buyers in Las Vegas?</h2>
			<p class="text-lg text-gray-700 mb-6 leading-relaxed">
				Investors and second-home buyers have unique questions: Which communities allow long-term rentals? How strong are current rent-to-price ratios? What does a realistic cap rate look like after HOA fees and maintenance? This blog answers those questions with market snapshots focused on cash flow, vacancy trends, and neighborhood-specific regulations. You will also see posts about 1031 exchange timelines, furnished executive rental strategies near hospitals and the Strip, and seasonal considerations for vacation-home owners.
			</p>
			<p class="text-lg text-gray-700 mb-6 leading-relaxed">
				For second-home owners, articles explore topics like “owning in Las Vegas while living elsewhere,” property management options, and which upgrades matter most for both personal enjoyment and future resale. You will learn how to think like both a homeowner and an investor so your desert getaway supports your long-term financial plan.
			</p>
			<p class="text-lg text-gray-700 leading-relaxed">
				If you are considering adding Las Vegas to your portfolio, start with these posts, then we can schedule a call to build a custom acquisition plan.
			</p>
		</div>

		<!-- Section: Using the Blog as a Research Tool -->
		<div class="mb-12">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">How Can You Use This Blog as a Research Tool Before You Make a Move?</h2>
			<p class="text-lg text-gray-700 mb-6 leading-relaxed">
				The easiest way to use this blog is to read by scenario. If you plan to buy within six months, start with market updates and buyer strategy posts. If you are two years out, focus on neighborhood guides and trend pieces so you can narrow your search area well in advance. Sellers should bookmark staging, pricing, and marketing articles, while investors can create a folder for posts on cap rates, rent growth, and financing structures.
			</p>
			<p class="text-lg text-gray-700 mb-6 leading-relaxed">
				Many clients build a simple “move notebook” in their favorite app and paste links or screenshots from the posts that resonate most. When we meet for a consultation, we can use that notebook to quickly understand your priorities and questions. This turns our first conversation into a strategy session instead of a basic orientation.
			</p>
			<p class="text-lg text-gray-700 leading-relaxed">
				If you ever feel overwhelmed by the amount of information online, remember that you do not have to synthesize it alone. Bring your questions and bookmarked posts—I will help you translate them into a clear, step-by-step plan.
			</p>
		</div>

		<!-- FAQs -->
		<div class="mb-12">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What Questions Do Readers Ask About the Las Vegas Real Estate Blog?</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl">
				These quick answers explain how often the blog is updated, how to request topics, and how to turn posts into personalized advice for your situation.
			</p>
			<div class="space-y-6">
				<div class="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
					<h3 class="text-2xl font-bold text-gray-900 mb-3">How often is the blog updated?</h3>
					<p class="text-gray-700 leading-relaxed">
						New posts are typically published two to four times per month, with additional quick updates when there are sudden rate changes, major builder announcements, or policy shifts that affect HOAs or rental rules. If you subscribe via RSS or email, you will see new content automatically without needing to check manually.
					</p>
				</div>
				<div class="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
					<h3 class="text-2xl font-bold text-gray-900 mb-3">Can I request a topic for a future article?</h3>
					<p class="text-gray-700 leading-relaxed">
						Absolutely. Many of the most useful posts began as client questions about appraisals, inspections, or specific neighborhoods. Send me a message through the contact page with your question, and I will either answer directly, turn it into a blog topic, or both.
					</p>
				</div>
				<div class="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
					<h3 class="text-2xl font-bold text-gray-900 mb-3">Does reading this blog replace working with an agent?</h3>
					<p class="text-gray-700 leading-relaxed">
						No blog can replace customized advice based on your finances, timing, and risk tolerance, but it can dramatically improve the quality of your questions and decisions. Think of these articles as a foundation; when you are ready to act, we will layer in property-specific and contract-specific guidance.
					</p>
				</div>
				<div class="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
					<h3 class="text-2xl font-bold text-gray-900 mb-3">What if I am already working with another agent?</h3>
					<p class="text-gray-700 leading-relaxed">
						You are still welcome to read and share the articles. If you are under an active representation agreement, please direct transaction-specific questions to your current agent; my posts are meant to educate the entire Las Vegas community, not interfere with existing relationships.
					</p>
				</div>
			</div>
		</div>

	{#if loading}
		<div class="text-center py-12">
			<div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
			<p class="mt-4 text-gray-600">Loading blog posts...</p>
		</div>
	{:else if error}
		<div class="bg-red-50 border border-red-200 rounded-lg p-6">
			<h2 class="text-xl font-bold text-red-800 mb-2">Error Loading Feed</h2>
			<p class="text-red-600">{error}</p>
			<button
				on:click={loadFeed}
				class="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
			>
				Try Again
			</button>
		</div>
	{:else if feed && feed.items.length > 0}
		<div class="mb-6 p-4 bg-gray-50 rounded-lg">
			<h2 class="text-2xl font-bold mb-2">{feed.title}</h2>
			<p class="text-gray-600 mb-2">{feed.description}</p>
			<a
				href={feed.link}
				target="_blank"
				rel="noopener noreferrer"
				class="text-primary-600 hover:text-primary-700 underline"
			>
				Visit Source →
			</a>
		</div>

		<div class="space-y-6">
			{#each feed.items as item (item.guid || item.link)}
				<article class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
					<header class="mb-4">
						<h2 class="text-2xl font-bold mb-2">
							<a
								href={item.link}
								target="_blank"
								rel="noopener noreferrer"
								class="text-gray-800 hover:text-primary-600 transition-colors"
							>
								{item.title}
							</a>
						</h2>
						<div class="flex flex-wrap items-center gap-4 text-sm text-gray-500">
							<time datetime={item.pubDate}>
								📅 {formatDate(item.pubDate)}
							</time>
							{#if item.author}
								<span>✍️ {item.author}</span>
							{/if}
						</div>
					</header>
					
					<div class="prose max-w-none mb-4">
						<p class="text-gray-700 leading-relaxed">
							{@html truncateText(item.description, 300)}
						</p>
					</div>
					
					<a
						href={item.link}
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
					>
						Read More →
					</a>
				</article>
			{/each}
		</div>
	{:else}
		<div class="text-center py-12">
			<p class="text-gray-600">No blog posts found.</p>
		</div>
	{/if}
</div>

