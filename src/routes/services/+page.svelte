<script>
	import { Search, Home, Briefcase, TrendingUp, Users, DollarSign, MapPin, Building2, Key, BarChart3 } from 'lucide-svelte';
	
	const services = [
		// Buyer Services
		{
			category: 'Buyer Services',
			icon: Home,
			items: [
				{
					title: 'Expert Buyer Representation',
					url: '/services/buyer-representation',
					description: 'Comprehensive guidance for homebuyers throughout the entire purchasing process in Las Vegas'
				},
				{
					title: 'Senior Housing Solutions',
					url: '/services/senior-housing',
					description: 'Specialized services for buyers 50+ looking to downsize, invest, or relocate in Las Vegas'
				},
				{
					title: 'Military Relocation Services',
					url: '/services/military-relocation',
					description: 'Dedicated support for military families relocating to or from Las Vegas and surrounding areas'
				}
			]
		},
		// Seller Services
		{
			category: 'Seller Services',
			icon: Briefcase,
			items: [
				{
					title: 'Professional Seller Representation',
					url: '/services/seller-representation',
					description: 'Expert strategies to maximize your home\'s value and streamline the selling process'
				},
				{
					title: 'Pricing Strategy Services',
					url: '/services/pricing-strategy',
					description: 'Accurate property pricing based on comprehensive Las Vegas market analysis'
				},
				{
					title: 'Distressed Property Solutions',
					url: '/services/distressed-properties',
					description: 'Expert guidance for short sales and foreclosure transactions in Las Vegas'
				}
			]
		},
		// Specialized Markets
		{
			category: 'Specialized Markets',
			icon: Building2,
			items: [
				{
					title: 'Luxury Homes',
					url: '/services/luxury-homes',
					description: 'Exclusive representation for luxury properties in Las Vegas\'s most prestigious communities'
				},
				{
					title: 'Resort & Second Home Properties',
					url: '/services/resort-properties',
					description: 'Specialized services for vacation homes and investment properties in Las Vegas area'
				},
				{
					title: 'Eco-Friendly Homes',
					url: '/services/eco-friendly-homes',
					description: 'Sustainable housing solutions and energy-efficient properties in Las Vegas'
				},
				{
					title: 'Smart Home Technology',
					url: '/services/smart-home-technology',
					description: 'Expertise in smart home features, privacy, and technology integration for Las Vegas properties'
				}
			]
		},
		// Commercial & Investment
		{
			category: 'Commercial & Investment',
			icon: TrendingUp,
			items: [
				{
					title: 'Commercial Real Estate',
					url: '/services/commercial-real-estate',
					description: 'Industrial and office market expertise for commercial property transactions'
				},
				{
					title: 'Commercial Investment Services',
					url: '/services/commercial-investment',
					description: 'Strategic commercial real estate investment guidance for Las Vegas market'
				},
				{
					title: 'Real Estate Investing',
					url: '/services/real-estate-investing',
					description: 'Comprehensive investment property consulting and portfolio development'
				},
				{
					title: 'Land Investment',
					url: '/services/land-investment',
					description: 'Expert land acquisition and development consulting throughout Las Vegas and surrounding areas'
				},
				{
					title: 'Property Management',
					url: '/services/property-management',
					description: 'Professional property management services for Las Vegas rental properties'
				},
				{
					title: 'Commercial Consulting',
					url: '/services/commercial-consulting',
					description: 'Objective real property advice and consulting for commercial transactions'
				}
			]
		},
		// Appraisal & Valuation
		{
			category: 'Appraisal & Valuation',
			icon: DollarSign,
			items: [
				{
					title: 'Residential Appraisal Services',
					url: '/services/residential-appraisal',
					description: 'Professional residential property valuations for Las Vegas homes'
				},
				{
					title: 'General Appraisal Services',
					url: '/services/general-appraisal',
					description: 'Comprehensive property appraisals exceeding state certification requirements'
				}
			]
		},
		// Marketing & Technology
		{
			category: 'Marketing & Technology',
			icon: BarChart3,
			items: [
				{
					title: 'Digital Marketing Services',
					url: '/services/digital-marketing',
					description: 'Advanced digital marketing strategies to maximize property visibility and generate leads'
				},
				{
					title: 'Social Media Marketing',
					url: '/services/social-media-marketing',
					description: 'Expert social media strategies for real estate promotion and client engagement'
				},
				{
					title: 'Inside Sales Services',
					url: '/services/inside-sales',
					description: 'Professional phone, email, and online sales support for real estate transactions'
				}
			]
		},
		// Specialized Services
		{
			category: 'Specialized Services',
			icon: Users,
			items: [
				{
					title: 'International Property Services',
					url: '/services/international-property',
					description: 'Global real estate expertise for international buyers and sellers in Las Vegas'
				},
				{
					title: 'Inclusive Real Estate Services',
					url: '/services/inclusive-real-estate',
					description: 'Comprehensive real estate services serving all communities in Las Vegas'
				},
				{
					title: 'Negotiation Expertise',
					url: '/services/negotiation-expertise',
					description: 'Advanced negotiation strategies to achieve optimal outcomes for clients'
				},
				{
					title: 'Mortgage Guidance',
					url: '/services/mortgage-guidance',
					description: 'Expert guidance through home financing options to improve outcomes and build relationships'
				},
				{
					title: 'Residential Specialist Services',
					url: '/services/residential-specialist',
					description: 'Comprehensive residential real estate expertise for Las Vegas homebuyers and sellers'
				},
				{
					title: 'Real Estate Education',
					url: '/services/real-estate-education',
					description: 'In-depth knowledge in legal, regulatory, technology, and sales process matters'
				}
			]
		}
	];
	
	let searchQuery = '';
	
	$: filteredServices = services.map(category => ({
		...category,
		items: category.items.filter(item => 
			item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
			item.description.toLowerCase().includes(searchQuery.toLowerCase())
		)
	})).filter(category => category.items.length > 0);
</script>

<svelte:head>
	<title>Real Estate Services in Las Vegas | Dr. Janet Duffy</title>
	<meta name="description" content="Comprehensive real estate services in Las Vegas including buyer representation, seller services, luxury homes, commercial real estate, and specialized market expertise." />
	<meta name="keywords" content="Las Vegas real estate services, buyer representation, seller services, luxury homes Las Vegas, commercial real estate, property management" />
	
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.drjanetduffy.com/services" />
	<meta property="og:title" content="Real Estate Services in Las Vegas | Dr. Janet Duffy" />
	<meta property="og:description" content="Comprehensive real estate services for Las Vegas homebuyers, sellers, and investors." />
	
	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://www.drjanetduffy.com/services" />
	<meta property="twitter:title" content="Real Estate Services in Las Vegas | Dr. Janet Duffy" />
	<meta property="twitter:description" content="Comprehensive real estate services for Las Vegas homebuyers, sellers, and investors." />
</svelte:head>

<section class="section bg-gradient-to-b from-white via-gray-50 to-white">
	<div class="container-premium">
		<!-- Header -->
		<div class="text-center mb-12 sm:mb-16">
			<h1 class="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900">
				Our Services
			</h1>
			<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-6"></div>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
				Comprehensive real estate solutions tailored to your needs
			</p>
		</div>

		<!-- Our Services Overview -->
		<div class="mb-16">
			<div class="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto">
				<div class="card text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
					<div class="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4 group-hover:bg-primary-200 group-hover:scale-110 transition-all">
						<Home class="w-8 h-8 text-primary-600" />
					</div>
					<h3 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">Buying</h3>
					<p class="text-gray-600 text-sm">Expert guidance to find your perfect home</p>
				</div>

				<div class="card text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
					<div class="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4 group-hover:bg-primary-200 group-hover:scale-110 transition-all">
						<DollarSign class="w-8 h-8 text-primary-600" />
					</div>
					<h3 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">Selling</h3>
					<p class="text-gray-600 text-sm">Maximize your home's value and sell faster</p>
				</div>

				<div class="card text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
					<div class="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4 group-hover:bg-primary-200 group-hover:scale-110 transition-all">
						<Building2 class="w-8 h-8 text-primary-600" />
					</div>
					<h3 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">Rentals</h3>
					<p class="text-gray-600 text-sm">Find the perfect rental property</p>
				</div>

				<div class="card text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
					<div class="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4 group-hover:bg-primary-200 group-hover:scale-110 transition-all">
						<TrendingUp class="w-8 h-8 text-primary-600" />
					</div>
					<h3 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">Investments</h3>
					<p class="text-gray-600 text-sm">Strategic real estate investment advice</p>
				</div>
			</div>
		</div>
		
		<!-- Search Bar -->
		<div class="max-w-2xl mx-auto mb-12">
			<div class="relative">
				<Search class="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
				<input
					type="text"
					placeholder="Search services..."
					bind:value={searchQuery}
					class="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-900 placeholder-gray-400 transition-all"
					aria-label="Search services"
				/>
			</div>
		</div>
		
		<!-- Services by Category -->
		<div class="space-y-16">
			{#each filteredServices as category}
				<div>
					<div class="flex items-center gap-3 mb-8">
						<svelte:component this={category.icon} class="w-8 h-8 text-primary-600" />
						<h2 class="text-3xl md:text-4xl font-bold text-gray-900">{category.category}</h2>
					</div>
					
					<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{#each category.items as service}
							<a
								href={service.url}
								class="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-primary-300 transform hover:-translate-y-1"
							>
								<h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
									{service.title}
								</h3>
								<p class="text-gray-600 leading-relaxed mb-4">
									{service.description}
								</p>
								<span class="text-primary-600 font-semibold text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all">
									Learn More
									<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
									</svg>
								</span>
							</a>
						{/each}
					</div>
				</div>
			{/each}
		</div>
		
		<!-- CTA Section -->
		<div class="mt-16 text-center bg-primary-600 rounded-2xl p-8 md:p-12 text-white">
			<h2 class="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
			<p class="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
				Whether you're buying, selling, or investing in Las Vegas real estate, we're here to help you achieve your goals.
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="/contact" class="btn-primary bg-white text-primary-600 hover:bg-gray-100">
					Schedule Consultation
				</a>
				<a href="/properties" class="btn-primary bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600">
					View Properties
				</a>
			</div>
		</div>
	</div>
</section>

