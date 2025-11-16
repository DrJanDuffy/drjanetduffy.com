<script lang="ts">
	import { Home, Award, MapPin, Star, DollarSign, BookOpen, HelpCircle } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	interface NavLink {
		href: string;
		label: string;
	}

	const tocItems: NavLink[] = [
		{ href: '#faq', label: 'Buyer & Seller FAQs' },
		{ href: '#trust', label: 'Why Clients Trust Dr. Duffy' },
		{ href: '#resources', label: 'Digital Resources' },
		{ href: '#seller-strategy', label: 'Seller Strategy' },
		{ href: '#buyer-roadmap', label: 'Buyer Roadmap' },
		{ href: '#community-fit', label: 'Neighborhood Fit' },
		{ href: '#concierge-service', label: 'Concierge Service' },
		{ href: '#featured-properties', label: 'Featured Properties' },
		{ href: '#market-trends', label: 'Market Trends 2025' },
		{ href: '#services-resources', label: 'Services & Resources' }
	];

	const searchLinks: NavLink[] = [
		// Views
		{ href: '/listings-embedded', label: 'Grid View' },
		{ href: '/listings-list', label: 'List View' },
		{ href: '/past-sales', label: 'Past Sales' },
		// Property types
		{ href: '/property-types/single-family', label: 'Single Family' },
		{ href: '/property-types/condos', label: 'Condos' },
		{ href: '/property-types/townhomes', label: 'Townhomes' },
		{ href: '/property-types/new-construction', label: 'New Construction' },
		{ href: '/property-types/luxury-homes', label: 'Luxury Estates' },
		{ href: '/property-types/gated-communities', label: 'Gated Communities' },
		{ href: '/property-types/golf-communities', label: 'Golf Communities' },
		{ href: '/property-types/55-plus-communities', label: '55+ Communities' },
		{ href: '/property-types/foreclosures', label: 'Foreclosures' },
		{ href: '/property-types/short-sales', label: 'Short Sales' }
	];

	const servicesLinks: NavLink[] = [
		{ href: '/services', label: 'All Services' },
		{ href: '/home-value', label: 'Home Value' },
		{ href: '/buying-guide', label: 'Buying Guide' },
		{ href: '/selling-guide', label: 'Selling Guide' },
		{ href: '/first-time-buyers', label: 'First-Time Buyers' },
		{ href: '/investment-guide', label: 'Investment Guide' },
		{ href: '/relocation', label: 'Relocation' },
		{ href: '/resources', label: 'Resources' },
		{ href: '/faq', label: 'FAQ' },
		{ href: '/mortgage-calculator', label: 'Mortgage Calculator' },
		{ href: '/testimonials', label: 'Testimonials' },
		{ href: '/market-insights', label: 'Market Insights' }
	];

	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>Las Vegas Luxury &amp; Relocation REALTOR | Dr. Janet Duffy</title>
	<meta name="description" content="Las Vegas Luxury & Relocation REALTOR helping executives, medical professionals, military families, and investors buy and sell homes with concierge-level service across Summerlin, Skye Canyon, Henderson, and the greater Las Vegas Valley." />
	<meta name="keywords" content="Las Vegas real estate, Summerlin homes, Skye Canyon real estate, Centennial Hills, North Las Vegas, Henderson, real estate agent, REALTOR, home buying, home selling, property search" />
	<meta name="author" content="Dr. Janet Duffy" />
	<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
	<meta name="googlebot" content="index, follow" />
	
	<!-- Canonical URL -->
	<link rel="canonical" href="https://www.drjanetduffy.com/" />
	
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.drjanetduffy.com/" />
	<meta property="og:title" content="Las Vegas Luxury &amp; Relocation REALTOR | Dr. Janet Duffy" />
	<meta property="og:description" content="Las Vegas Luxury & Relocation REALTOR providing concierge-level real estate services for buyers, sellers, and relocating families across the Las Vegas Valley." />
	<meta property="og:site_name" content="Las Vegas Luxury & Relocation REALTOR" />
	<meta property="og:locale" content="en_US" />
	
	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content="https://www.drjanetduffy.com/" />
	<meta name="twitter:title" content="Las Vegas Luxury &amp; Relocation REALTOR | Dr. Janet Duffy" />
	<meta name="twitter:description" content="Las Vegas Luxury & Relocation REALTOR offering calm, strategic guidance for Las Vegas buyers, sellers, and relocation clients." />
	
	<!-- Structured Data - Organization -->
	<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "RealEstateAgent",
		"name": "Dr. Janet Duffy",
		"alternateName": "Las Vegas Luxury & Relocation REALTOR",
		"description": "Las Vegas Luxury & Relocation REALTOR with 15+ years of experience, specializing in luxury homes, executive relocation, military moves, and investment properties across Summerlin, Skye Canyon, Centennial Hills, Henderson, and North Las Vegas",
		"url": "https://www.drjanetduffy.com",
		"logo": "https://www.drjanetduffy.com/favicon.png",
		"image": "https://www.drjanetduffy.com/favicon.png",
		"telephone": "702-500-1955",
		"email": "info@DrJanetDuffy.com",
		"address": {
			"@type": "PostalAddress",
			"streetAddress": "1980 Festival Plaza Drive, Suite 300",
			"addressLocality": "Las Vegas",
			"addressRegion": "NV",
			"postalCode": "89135",
			"addressCountry": "US"
		},
		"geo": {
			"@type": "GeoCoordinates",
			"latitude": "36.1699",
			"longitude": "-115.1398"
		},
		"areaServed": [
			{
				"@type": "City",
				"name": "Las Vegas",
				"addressRegion": "NV"
			},
			{
				"@type": "City",
				"name": "Summerlin",
				"addressRegion": "NV"
			},
			{
				"@type": "City",
				"name": "Henderson",
				"addressRegion": "NV"
			}
		],
		"hasCredential": [
			"Licensed REALTOR in Nevada",
			"Certified Residential Specialist (CRS)",
			"Accredited Buyer's Representative (ABR)",
			"Graduate, REALTOR Institute (GRI)",
			"Luxury Home Marketing Specialist",
			"Certified Negotiation Expert (CNE)"
		],
		"sameAs": [
			"https://twitter.com/drjanetduffy",
			"https://facebook.com/drjanetduffy",
			"https://linkedin.com/in/drjanetduffy"
		]
	}
	</script>
	
	<!-- Structured Data - WebSite -->
	<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "WebSite",
		"name": "Las Vegas Luxury & Relocation REALTOR",
		"alternateName": "Las Vegas Luxury & Relocation | Dr. Janet Duffy REALTOR®",
		"url": "https://www.drjanetduffy.com",
		"description": "Las Vegas real estate expert specializing in Summerlin, Skye Canyon, Centennial Hills, and North Las Vegas",
		"publisher": {
			"@type": "RealEstateAgent",
			"name": "Dr. Janet Duffy"
		},
		"potentialAction": {
			"@type": "SearchAction",
			"target": {
				"@type": "EntryPoint",
				"urlTemplate": "https://www.drjanetduffy.com/properties?q={search_term_string}"
			},
			"query-input": "required name=search_term_string"
		}
	}
	</script>
</svelte:head>

<!-- Hero Section with Search -->
<section class="hero-section bg-gradient-to-b from-gray-50 to-white">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-7xl mx-auto py-10 md:py-16">
			<div class="grid gap-10 lg:gap-14 md:grid-cols-2 items-center mb-10">
				<div class="text-center md:text-left">
					<h1 class="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 md:mb-5">
						Las Vegas Luxury &amp; Relocation REALTOR® for Summerlin, Skye Canyon &amp; Beyond
					</h1>
					<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto md:mx-0 mb-5"></div>
					<p class="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto md:mx-0 leading-relaxed mb-6">
						Your dedicated Las Vegas real estate professional providing comprehensive, personalized service across the valley's most desirable communities. Serving Summerlin, Skye Canyon, Centennial Hills, Henderson, and North Las Vegas, Dr. Janet Duffy Real Estate functions like a personal concierge desk: I book private showings, coordinate vendor access, analyze multiple offers, and keep you informed with real-time market intelligence so you never wonder what comes next. From managing pool inspections and solar transfers to translating HOA bylaws and master-plan design guidelines, every logistical detail is handled with calm precision. Let me introduce you to neighborhoods locals love, unlock builder incentives that rarely appear online, and negotiate with the confidence that only 15+ years of desert market experience can provide.
					</p>
					<div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
						<a href="/contact" class="btn-primary">
							Schedule a Consultation
						</a>
						<a href="/properties" class="btn-secondary">
							Browse Las Vegas Homes
						</a>
					</div>
					<p class="mt-4 text-sm sm:text-base text-gray-600">
						Planning a move to Las Vegas? Explore dedicated <a href="/relocation" class="text-primary-600 font-semibold hover:underline">luxury &amp; relocation services</a> tailored for executives, medical professionals, military families, and remote workers.
					</p>
				</div>
				<div class="relative">
					<div class="rounded-2xl shadow-xl overflow-hidden bg-white border border-gray-100 h-64 md:h-80">
						<!-- Placeholder hero imagery container -->
						<div class="w-full h-full bg-gradient-to-tr from-primary-100 via-vegas-gold-100 to-white flex items-center justify-center">
							<p class="text-center text-gray-600 px-6 text-sm sm:text-base">
								Visual hero area showcasing Las Vegas neighborhoods, luxury homes, and concierge-level service.
							</p>
						</div>
					</div>
				</div>
			</div>

			<!-- Property Search Form -->
		<div class="max-w-5xl mx-auto">
				<div class="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100">
					{#if mounted && browser}
						<realscout-advanced-search 
							agent-encoded-id="QWdlbnQtMjI1MDUw">
						</realscout-advanced-search>
					{:else}
						<p class="text-sm text-gray-600 text-center">
							Loading advanced property search...
						</p>
					{/if}
				</div>

				<!-- Quick links to views & property types -->
				<div class="mt-6 bg-gray-50 border border-gray-100 rounded-2xl p-4 md:p-5">
					<p class="text-xs sm:text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
						Browse by view or property type
					</p>
					<div class="flex flex-wrap gap-2">
						{#each searchLinks as link}
							<a
								href={link.href}
								class="px-3 py-1.5 rounded-full border border-gray-200 bg-white text-xs sm:text-sm text-gray-700 hover:text-primary-600 hover:border-primary-300 hover:bg-primary-50 transition-colors whitespace-nowrap"
							>
								{link.label}
							</a>
						{/each}
					</div>
				</div>
			</div>

			<!-- On-page navigation summary -->
			<nav class="mt-10 border-t border-gray-200 pt-6">
				<div class="flex items-center justify-between mb-3">
					<p class="text-sm font-semibold text-gray-700 uppercase tracking-wide">On this page</p>
				</div>
				<div class="flex gap-3 overflow-x-auto scrollbar-hide py-1">
					{#each tocItems as item}
						<a
							href={item.href}
							class="flex-shrink-0 px-4 py-2 rounded-full border border-gray-200 bg-white text-xs sm:text-sm font-medium text-gray-700 hover:text-primary-600 hover:border-primary-300 hover:bg-primary-50 transition-colors whitespace-nowrap"
						>
							{item.label}
						</a>
					{/each}
				</div>
			</nav>
		</div>
	</div>
</section>

<!-- FAQ Section -->
<section id="faq" class="section bg-gray-50">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-5xl mx-auto">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">What Questions Do Las Vegas Buyers and Sellers Ask Most Often?</h2>
			<p class="text-lg text-gray-700 leading-relaxed mb-8 text-center">
				Every conversation introduces new variables, yet these core questions appear in almost every strategy call. Use the answers below as a starting point, then reach out so we can tailor guidance to your timeline, budget, and lifestyle.
			</p>
			<div class="space-y-6">
				<div class="bg-white rounded-2xl shadow-lg p-6">
					<h3 class="text-2xl font-bold text-gray-900 mb-3">How long does it really take to buy a home in Las Vegas?</h3>
					<p class="text-gray-700 leading-relaxed">
						Most financed purchases close in 30-35 days once we are under contract. Cash deals can wrap in 10-15 days if title is clear. The variable is pre-offer preparation—clients who complete underwriting in advance, review HOA budgets, and tour multiple communities up front often secure their home within 45 days of contacting me. I provide weekly timelines so you always know what is expected next.
					</p>
				</div>
				<div class="bg-white rounded-2xl shadow-lg p-6">
					<h3 class="text-2xl font-bold text-gray-900 mb-3">What incentives are builders offering right now?</h3>
					<p class="text-gray-700 leading-relaxed">
						Builder incentives change monthly, but current trends include rate buydowns, $10K-$30K design-center credits, and free backyard packages on spec homes that have been standing for 60+ days. I maintain relationships with sales managers across Toll Brothers, Pulte, Richmond American, Lennar, and Tri Pointe, allowing my clients to access unpublished incentives or cancellations before they are marketed publicly.
					</p>
				</div>
				<div class="bg-white rounded-2xl shadow-lg p-6">
					<h3 class="text-2xl font-bold text-gray-900 mb-3">Do sellers still need to stage in a low-inventory market?</h3>
					<p class="text-gray-700 leading-relaxed">
						Yes—professionally staged homes capture more traffic within the first 72 hours and typically sell with at least one backup offer. Staging highlights architectural features, disguises furniture wear, and makes photos scroll-stopping for remote buyers. I cover the consultation, manage the install, and coordinate removal so the process feels effortless.
					</p>
				</div>
				<div class="bg-white rounded-2xl shadow-lg p-6">
					<h3 class="text-2xl font-bold text-gray-900 mb-3">How do we compete if we need to sell before we buy?</h3>
					<p class="text-gray-700 leading-relaxed">
						We can deploy bridge-loan products, rent-back agreements, or contingent offers supported by proof of funds and aggressive listing timelines. I map both transactions on a single calendar, coordinate simultaneous closings, and negotiate temporary occupancy so you never feel rushed out of one property while searching for the next.
					</p>
				</div>
			</div>

			<div class="mt-10 text-center">
				<a href="/faq" class="btn-secondary">
					View Full Las Vegas Luxury &amp; Relocation FAQ
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Trust Section -->
<section id="trust" class="section bg-white">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-5xl mx-auto">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Why Do Executives, Military Families, and Investors Trust Dr. Janet Duffy?</h2>
			<p class="text-lg text-gray-700 leading-relaxed mb-6">
				My business is built on referrals from people whose livelihoods depend on accuracy—healthcare executives relocating to Summerlin Hospital, Nellis Air Force families needing fast closing timelines, and entrepreneurs seeking 1031 exchange opportunities. They value transparent communication, clear metrics, and the ability to adapt quickly when corporate timelines shift. I am known for responding within hours, not days, and for presenting solutions rather than problems whenever an appraisal, inspection, or lending issue surfaces.
			</p>
			<p class="text-lg text-gray-700 leading-relaxed mb-6">
				Testimonials highlight the same themes: proactive planning, calm negotiation style, and an uncanny ability to connect clients with vetted service providers—from estate planners and tax strategists to pool resurfacing crews and desert landscapers. I track every vendor’s performance and rotate as needed so you only work with professionals who deliver excellence. After closing, I check in quarterly to ensure warranties are registered, tax records are accurate, and investment assumptions still hold.
			</p>
			<p class="text-lg text-gray-700 leading-relaxed">
				Trust is also reinforced by credentials: CRS, ABR, GRI, Luxury Home Marketing Specialist, and Certified Negotiation Expert. Education matters because it keeps me sharp on contract law, risk mitigation, and marketing innovation. Pair that with deep local roots and you have an advisor who treats your goals with the same care I apply to my own portfolio.
			</p>
		</div>
	</div>
</section>

<!-- Resource Support -->
<section id="resources" class="section bg-gray-50">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-5xl mx-auto">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Which Digital Resources Keep You Confident Between Showings and Closings?</h2>
			<p class="text-lg text-gray-700 leading-relaxed mb-6">
				Clients stay calm when information is easy to access. I provide a personalized dashboard that houses lender quotes, inspection summaries, title commitments, and contingency deadlines. You can message me directly in the portal, upload receipts, or download HOA docs without digging through email threads. Weekly market snapshots summarize interest-rate trends, new inventory, and comparable closings so you always know whether to accelerate or pause.
			</p>
			<p class="text-lg text-gray-700 leading-relaxed mb-6">
				Prefer a more conversational approach? I record Loom videos after every major milestone to explain what happened, what is next, and which documents need signatures. Relocating clients share those videos with spouses, financial advisors, or relocation reps to keep everyone aligned. Investors receive quarterly rent projections and maintenance schedules, while luxury buyers get curated lifestyle guides covering private clubs, social memberships, and concierge services.
			</p>
			<p class="text-lg text-gray-700 leading-relaxed">
				This digital backbone supplements, not replaces, human connection. You can still call, text, or meet in person, but you will never wonder where a contract lives or whether an earnest-money extension was filed. Empowered clients make faster decisions, negotiate with confidence, and ultimately enjoy the process more.
			</p>
		</div>
	</div>
</section>

<!-- Seller Strategy -->
<section id="seller-strategy" class="section bg-white">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-5xl mx-auto">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">How Do We Position Your Las Vegas Home for Multiple Offers and Record Equity?</h2>
			<p class="text-lg text-gray-700 leading-relaxed mb-6">
				Selling in 2025 requires precise storytelling. I start with a pre-list appraisal-style analysis that measures your home against the top five closed comps plus active competitors so we can price within 1.5% of the sweet spot that triggers showings. Then we deploy my “seven-day shine” program: day one repairs and paint touch-ups, day two landscaping refresh, day three deep clean, day four designer staging or merchandising, day five cinematic photography, day six social teasers, and day seven MLS launch with reverse prospecting to buyer agents who already have clients in your price band.
			</p>
			<p class="text-lg text-gray-700 leading-relaxed mb-6">
				Marketing collaterals include 4K video tours, interactive floor plans, lifestyle reels for Instagram and LinkedIn, and geo-targeted email blasts to relocation partners across California and the Pacific Northwest. Because many buyers shop remotely, I create “live-in guides” that explain utility costs, SMART home integrations, community fee schedules, and local hotspots within a ten-minute drive. These micro-guides reduce buyer hesitation and inspire sight-unseen offers with higher earnest money.
			</p>
			<p class="text-lg text-gray-700 leading-relaxed">
				During negotiations, I focus on net proceeds rather than brag-worthy list-to-sale ratios. We evaluate every offer for appraisal risk, repair caps, backup buyer strength, and timeline certainty. If it benefits you, I craft rent-back agreements so you can shop for your next home without feeling rushed. My sellers regularly close with fewer contingencies and stronger terms because the process is engineered for clarity, not chaos.
			</p>
			<div class="mt-6 text-center">
				<a href="/selling-guide" class="btn-secondary">
					View the Full Selling Guide
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Buyer Roadmap -->
<section id="buyer-roadmap" class="section bg-gray-50">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-5xl mx-auto">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">How Does Our Buyer Roadmap Turn a Desert Dream Into Keys in Hand?</h2>
			<p class="text-lg text-gray-700 leading-relaxed mb-6">
				My buyer roadmap unfolds in five phases: discovery, touring, offer crafting, due diligence, and smooth closing. During discovery we build a decision matrix that ranks must-haves (lot size, school zoning, commute) against nice-to-haves (three-car garage, casita, backyard kitchen). Touring days are optimized to show a blend of MLS listings, private office exclusives, and builder VIP releases so you understand the full spectrum of options before writing an offer. I summarize each home in a shared dashboard with pros, cons, and estimated maintenance costs, making recap conversations fast and factual.
			</p>
			<p class="text-lg text-gray-700 leading-relaxed mb-6">
				When it is time to submit an offer, I analyze absorption metrics and seller motivation to calibrate price, earnest money, appraisal gaps, and post-occupancy terms. Need to compete with multiple offers? We lean on escalation clauses, inspection waivers with pre-inspection data, or direct conversations with listing agents who already know my track record. Prefer a value play? I identify homes that have crossed the 21-day mark and craft concession-based strategies that trim your cash-to-close.
			</p>
			<p class="text-lg text-gray-700 leading-relaxed">
				Once under contract, weekly check-ins keep you informed about appraisal scheduling, title reports, and loan milestones. I coordinate contractors for specialized inspections—think irrigation audits, solar transfers, or commercial-grade appliance checks—while you review digital records from anywhere. By the time we reach the signing table, you understand every line item and feel confident that nothing slipped through the cracks.
			</p>
			<div class="mt-6 text-center">
				<a href="/buying-guide" class="btn-secondary">
					View the Full Buying Guide
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Community Fit Section -->
<section id="community-fit" class="section bg-white">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-6xl mx-auto">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Which Las Vegas Neighborhood Fits Your Lifestyle and Long-Term Goals?</h2>
			<p class="text-lg text-gray-700 leading-relaxed mb-6">
				Matching you with the right master plan is part science, part storytelling. We begin by evaluating commute expectations, school preferences, climate preferences (yes, Summerlin is three to five degrees cooler than Inspirada), and HOA appetite. Next, I layer in micro-level factors: trail access for morning runners, dedicated pickleball courts, dog parks, guard-gated security, or proximity to the future Brightline station. The result is a short list of villages—from The Canyons and The Vistas to Skye Hills and Tule Springs—that align with your lifestyle instead of forcing you to compromise.
			</p>
			<p class="text-lg text-gray-700 leading-relaxed mb-6">
				To make the comparison intuitive, I prepare neighborhood scorecards that outline price ranges, appreciation history, HOA structures, and typical lot sizes. For example, The Ridges commands a 20-30% premium for Jack Nicklaus golf frontage, while Skye Canyon’s Innovation series attracts outdoor enthusiasts who crave quick escapes to Mount Charleston. I also show you “insider” nuances: which Summerlin streets enjoy unobstructed Red Rock sunsets, where the newest charter campuses are opening, and how traffic patterns shift once Formula 1 events or major conventions arrive. With this level of detail, you can confidently choose the village that will feel like home for years to come.
			</p>
			<p class="text-lg text-gray-700 leading-relaxed">
				Already own in Las Vegas? I deliver the same neighborhood intelligence to sellers. Understanding who is most likely to buy your home—move-up locals, California tax refugees, or remote workers—allows us to tailor marketing narratives that resonate. We emphasize the backyard orientation that captures afternoon shade, the dual offices that support hybrid work, or the upgraded insulation that keeps garages cooler than 100°F. Neighborhood storytelling is the difference between listing data and an emotional connection that inspires premium offers.
			</p>
			<div class="mt-6 text-center">
				<a href="/neighborhoods" class="btn-secondary">
					Explore All Neighborhood Guides
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Concierge Service Overview -->
<section id="concierge-service" class="section bg-white">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-5xl mx-auto">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">How Does Dr. Janet Duffy Deliver Concierge-Level Real Estate Service Across Las Vegas?</h2>
			<p class="text-lg text-gray-700 leading-relaxed mb-6">
				Concierge real estate means every stage of your move is orchestrated for you. I begin with a two-part strategy session: first we define your lifestyle, commute, school, and recreation goals; then we map those goals to precisely researched neighborhoods stretching from Downtown Summerlin to Lake Las Vegas. You receive curated property dossiers that summarize HOA costs, recent comparables, solar ownership status, and walkability scores so you can compare homes at a glance. When you are ready to tour, I stage efficient routes that minimize backtracking and highlight hidden amenities such as community gardens, private trailheads, or residents-only fitness clubs.
			</p>
			<p class="text-lg text-gray-700 leading-relaxed mb-6">
				Once you fall in love with a property, concierge service shifts into logistical overdrive. I coordinate same-day lender introductions, schedule inspectors familiar with desert-specific systems, and pre-negotiate repairs with trusted vendors before surprises derail timelines. Sellers benefit from white-glove listing preparation that covers landscapers, pool techs, staging pros, and cinematographers. Every update is summarized in shared dashboards and voice notes so relocating executives, military families, and investors can make decisions from any time zone. Concierge is not a buzzword—it is a promise that I will anticipate the next three tasks before you even think to ask.
			</p>
			<p class="text-lg text-gray-700 leading-relaxed">
				The final piece is advocacy. I maintain ongoing relationships with builders, HOA boards, and escrow officers, which means your file never stalls on someone’s desk. Whether you are pursuing a $350K townhome or a $3M custom estate, you receive the same proactive communication, luxury-level marketing, and negotiation rigor. My role is to remove friction so you can focus on picturing your life in the desert—not on paperwork pileups or unanswered calls.
			</p>
			<div class="mt-6 text-center">
				<a href="/services" class="btn-secondary">
					View All Luxury &amp; Relocation Services
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Featured Properties -->
<section id="featured-properties" class="section bg-white">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-7xl mx-auto">
			<div class="text-center mb-12">
				<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What Featured Las Vegas Properties Are Available?</h2>
				<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto">
					Featured Las Vegas properties include hand-picked premium homes, luxury estates, single-family homes, condos, and townhomes across Summerlin, Skye Canyon, Centennial Hills, Henderson, and other premier communities. These properties feature exceptional value, prime locations, and quality amenities that make them stand out in the Las Vegas real estate market. Browse Las Vegas's most sought-after luxury homes, single-family residences, modern townhomes, and lock-and-leave condos across Summerlin, Skye Canyon, Centennial Hills, and other planned communities.
				</p>
				<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto">
					Every showcase lineup refreshes weekly to highlight price improvements, designer remodels, and new-construction releases before they flood the open market. Expect to see golf-front estates in The Ridges, Sky-View lots in Skye Canyon, half-acre ranches in North Las Vegas, and smartly renovated bungalows near the Las Vegas Medical District. Each featured property includes context that algorithms miss—sunset orientation, pet restrictions, door-to-strip commute times, and anticipated HOA capital projects—so you can evaluate livability as well as aesthetics. Use the gallery below to bookmark favorites, then reach out for private video tours or in-person experiences tailored to your schedule.
				</p>
			</div>

			{#if mounted && browser}
				<div class="realscout-wrapper">
					<realscout-office-listings 
						agent-encoded-id="QWdlbnQtMjI1MDUw"
						sort-order="STATUS_AND_SIGNIFICANT_CHANGE"
						listing-status="For Sale"
						property-types="SFR,MF,TC"
						max-results="6">
					</realscout-office-listings>
				</div>
			{:else}
				<div class="loading-skeleton">
					<div class="grid md:grid-cols-3 gap-6">
						{#each Array(3) as _}
							<div class="animate-pulse bg-white rounded-2xl shadow-lg overflow-hidden">
								<div class="bg-gray-200 h-64"></div>
								<div class="p-6 space-y-4">
									<div class="h-6 bg-gray-200 rounded w-3/4"></div>
									<div class="h-5 bg-gray-200 rounded w-1/2"></div>
									<div class="h-4 bg-gray-200 rounded w-2/3"></div>
								</div>
							</div>
						{/each}
					</div>
					<p class="text-center text-gray-600 mt-8 text-lg">Loading featured properties...</p>
				</div>
			{/if}
			
			<div class="text-center mt-8">
				<a href="/properties" class="btn-primary">View All Properties</a>
			</div>
		</div>
	</div>
</section>

<!-- Market Trends -->
<section id="market-trends" class="section bg-gray-50">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-6xl mx-auto">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">What Market Trends Should Las Vegas Buyers and Sellers Watch in 2025?</h2>
			<p class="text-lg text-gray-700 leading-relaxed mb-6">
				Las Vegas continues to balance migration-fueled demand with limited inventory. As of Q1 2025, we are tracking 7,200 active listings valley-wide—down 14% from last spring—while average days on market sits at 28 for properties under $900K and 42 for luxury inventory. Mortgage rates hovering between 5.9% and 6.4% have nudged some buyers to wait, yet well-prepared clients still secure homes with modest seller credits and rate buydowns. I keep you updated with weekly MLS absorption reports segmented by price band, so you can decide when to act versus when to negotiate aggressively.
			</p>
			<p class="text-lg text-gray-700 leading-relaxed mb-6">
				Summerlin, Skye Canyon, and Henderson master plans remain appreciation leaders because of school rankings, amenity packages, and access to the 215 Beltway. Meanwhile, North Las Vegas and Centennial Hills attract cash-flow investors thanks to larger lot sizes, VA-friendly builders, and rental yields exceeding 6.2%. Sellers should note that properly staged homes with modernized desert landscaping still command 3-5% premiums even when overall appreciation cools. That is why my listing prep checklist includes water-smart plant palettes, garage insulation updates, and pre-list pool inspections that eliminate buyer objections before they shrink your proceeds.
			</p>
			<p class="text-lg text-gray-700 leading-relaxed">
				Finally, remote-work relocations from California, Arizona, and the Mountain West continue to reshape our market. These buyers often tour virtually before their first flight, so digital storytelling matters. I produce narrated walkthroughs, neighborhood drive videos, and data-backed comparisons that answer the questions they would ask in person. Whether you are upsizing locally or investing from afar, you gain a clear playbook that aligns with the realities of inventory, incentives, and seasonal demand cycles.
			</p>
			<div class="mt-6 text-center">
				<a href="/market-insights" class="btn-secondary">
					View Detailed Market Insights
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Quick Links to Other Sections -->
<section id="services-resources" class="section bg-gray-50">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-7xl mx-auto">
			<div class="text-center mb-12">
				<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What Services and Resources Are Available for Your Las Vegas Real Estate Journey?</h2>
				<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto">
					Services and resources available for your Las Vegas real estate journey include expert buyer and seller representation, comprehensive guides for buying and selling, neighborhood exploration tools, client testimonials, buying and selling guides, helpful resources, and frequently asked questions that provide everything you need to successfully navigate Las Vegas real estate transactions. My concierge service includes HOA document coordination across master-planned communities, pool inspection coordination, desert-specific home considerations, and personalized neighborhood tours showing parks, schools, shopping, and hidden gems locals love.
				</p>
				<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto">
					Think of this page as your control center. Each tile below unlocks deeper content—step-by-step guides, relocation checklists, closing-cost calculators, and neighborhood cheat sheets that explain why a $900K home appreciates faster in The Paseos than in Mountains Edge. I refreshed every resource in 2025 to reflect the newest water authority regulations, energy incentives, and resort-corridor developments so you are reading current intel, not outdated blog posts. Bookmark the sections you need now, then return whenever new questions pop up during inspections, appraisal gaps, or lease-back negotiations.
				</p>

				<div class="mt-6 bg-white border border-gray-100 rounded-2xl p-4 md:p-5">
					<p class="text-xs sm:text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
						Quick access to key services & guides
					</p>
					<div class="flex flex-wrap gap-2 justify-center">
						{#each servicesLinks as link}
							<a
								href={link.href}
								class="px-3 py-1.5 rounded-full border border-gray-200 bg-white text-xs sm:text-sm text-gray-700 hover:text-primary-600 hover:border-primary-300 hover:bg-primary-50 transition-colors whitespace-nowrap"
							>
								{link.label}
							</a>
						{/each}
					</div>
				</div>
			</div>
			
			<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
				<a href="/about" class="card text-center hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-300 group">
					<div class="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4 group-hover:bg-primary-200 group-hover:scale-110 transition-all">
						<Award class="w-8 h-8 text-primary-600" />
					</div>
					<h3 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">Why Choose Us</h3>
					<p class="text-gray-600 text-sm">Experience the difference</p>
				</a>

				<a href="/services" class="card text-center hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-300 group">
					<div class="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4 group-hover:bg-primary-200 group-hover:scale-110 transition-all">
						<Home class="w-8 h-8 text-primary-600" />
					</div>
					<h3 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">Our Services</h3>
					<p class="text-gray-600 text-sm">Comprehensive solutions</p>
				</a>

				<a href="/neighborhoods" class="card text-center hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-300 group">
					<div class="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4 group-hover:bg-primary-200 group-hover:scale-110 transition-all">
						<MapPin class="w-8 h-8 text-primary-600" />
					</div>
					<h3 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">Neighborhoods</h3>
					<p class="text-gray-600 text-sm">Explore Las Vegas</p>
				</a>

				<a href="/testimonials" class="card text-center hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-300 group">
					<div class="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4 group-hover:bg-primary-200 group-hover:scale-110 transition-all">
						<Star class="w-8 h-8 text-primary-600" />
					</div>
					<h3 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">Testimonials</h3>
					<p class="text-gray-600 text-sm">Client success stories</p>
				</a>
			</div>
			
			<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
				<a href="/buying-guide" class="card text-center hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-300 group">
					<div class="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4 group-hover:bg-primary-200 group-hover:scale-110 transition-all">
						<Home class="w-8 h-8 text-primary-600" />
					</div>
					<h3 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">Buying Guide</h3>
					<p class="text-gray-600 text-sm">Step-by-step home buying</p>
				</a>

				<a href="/selling-guide" class="card text-center hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-300 group">
					<div class="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4 group-hover:bg-primary-200 group-hover:scale-110 transition-all">
						<DollarSign class="w-8 h-8 text-primary-600" />
					</div>
					<h3 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">Selling Guide</h3>
					<p class="text-gray-600 text-sm">Maximize your sale price</p>
				</a>

				<a href="/resources" class="card text-center hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-300 group">
					<div class="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4 group-hover:bg-primary-200 group-hover:scale-110 transition-all">
						<BookOpen class="w-8 h-8 text-primary-600" />
					</div>
					<h3 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">Resources</h3>
					<p class="text-gray-600 text-sm">Guides and tools</p>
				</a>

				<a href="/faq" class="card text-center hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-300 group">
					<div class="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4 group-hover:bg-primary-200 group-hover:scale-110 transition-all">
						<HelpCircle class="w-8 h-8 text-primary-600" />
					</div>
					<h3 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">FAQ</h3>
					<p class="text-gray-600 text-sm">Common questions</p>
				</a>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="section bg-white">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-4xl mx-auto text-center">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to Explore Summerlin, Skye Canyon, Centennial Hills, or North Las Vegas?</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed">
				I'll provide personalized neighborhood tours and handle every detail of your transaction. From coordinating pool inspections to managing HOA documents across multiple master-planned communities, Dr. Janet Duffy ensures your Vegas home buying or selling experience is seamless. With 15+ years of Las Vegas real estate experience, deep knowledge of every HOA, every builder, and every neighborhood intimately, I'll help you find your perfect home in Summerlin, Skye Canyon, Centennial Hills, or North Las Vegas.
			</p>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed">
				Whether you are moving across town, across the country, or upgrading an investment portfolio, you deserve a trusted ally who understands both the emotional and financial stakes. I am ready to listen, strategize, and execute with the professionalism you expect from a concierge advisor. Let’s schedule a consultation, align on goals, and build the exact roadmap that leads you home.
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="/contact" class="btn-primary">Schedule a Consultation</a>
				<a href="/home-value" class="btn-secondary">Get a Home Valuation</a>
			</div>
		</div>
	</div>
</section>

<style>
	.realscout-wrapper {
		min-height: 400px;
		width: 100%;
		contain: layout style paint;
		position: relative;
	}
	
	/* Ensure loading skeleton matches RealScout dimensions */
	.loading-skeleton {
		min-height: 400px;
		width: 100%;
	}
	
	/* Override RealScout styles for homepage */
	.realscout-wrapper :global(realscout-office-listings) {
		--rs-grid-columns: 3;
		--rs-card-hover-shadow: 0 10px 20px rgba(0,0,0,0.15);
	}
	
	/* Style RealScout search widget */
	:global(realscout-advanced-search) {
		width: 100%;
	}
</style>
