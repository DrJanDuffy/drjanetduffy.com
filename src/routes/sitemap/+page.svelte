<script>
	// Updated sitemap page with all current routes
	const pages = [
		// Main Pages
		{ url: '/', title: 'Home', description: 'Luxury Las Vegas Real Estate Expert', category: 'Main' },
		{ url: '/properties', title: 'Properties', description: 'Browse available properties', category: 'Main' },
		{ url: '/home-value', title: 'Home Value', description: 'Get your free home valuation', category: 'Services' },
		{ url: '/rentals', title: 'Rentals', description: 'Luxury rental properties', category: 'Properties' },
		{ url: '/blog', title: 'Blog', description: 'Real estate news and insights', category: 'Resources' },
		{ url: '/about', title: 'About', description: 'Learn about Dr. Janet Duffy', category: 'Main' },
		{ url: '/contact', title: 'Contact', description: 'Get in touch with us', category: 'Main' },
		
		// Property Search
		{ url: '/listings-embedded', title: 'Property Grid View', description: 'View properties in grid format', category: 'Properties' },
		{ url: '/listings-list', title: 'Property List View', description: 'View properties in list format', category: 'Properties' },
		{ url: '/past-sales', title: 'Past Sales', description: 'View past sales history', category: 'Properties' },
		
		// Communities
		{ url: '/communities/summerlin', title: 'Summerlin', description: 'Luxury homes in Summerlin', category: 'Communities' },
		{ url: '/communities/henderson', title: 'Henderson', description: 'Henderson real estate', category: 'Communities' },
		{ url: '/communities/green-valley', title: 'Green Valley', description: 'Green Valley homes', category: 'Communities' },
		
		// Property Types
		{ url: '/properties/homes', title: 'Single Family Homes', description: 'Browse single family homes', category: 'Properties' },
		{ url: '/properties/condos', title: 'Condos', description: 'Browse condos and townhomes', category: 'Properties' },
		{ url: '/properties/new-construction', title: 'New Construction', description: 'New home construction', category: 'Properties' },
		{ url: '/properties/luxury', title: 'Luxury Estates', description: 'Luxury real estate', category: 'Properties' },
		
		// Legal
		{ url: '/privacy', title: 'Privacy Policy', description: 'Privacy policy and data protection', category: 'Legal' },
		{ url: '/terms', title: 'Terms of Service', description: 'Terms and conditions', category: 'Legal' }
	];
	
	const categories = ['Main', 'Properties', 'Communities', 'Services', 'Resources', 'Legal'];
</script>

<svelte:head>
	<title>Sitemap | Dr. Janet Duffy, REALTOR® | Luxury Las Vegas Real Estate</title>
	<meta name="description" content="Site map for Dr. Janet Duffy, REALTOR® luxury Las Vegas real estate website. Find all pages and sections easily." />
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href="https://drjanetduffy.com/sitemap" />
</svelte:head>

<section class="section">
	<div class="container-premium">
		<div class="text-center mb-12">
			<h1 class="font-display text-4xl md:text-5xl font-bold mb-4 text-gray-900">Sitemap</h1>
			<p class="text-xl text-gray-600 max-w-2xl mx-auto">
				Find all pages and sections of our luxury real estate website.
			</p>
		</div>
		
		{#each categories as category}
			<div class="mb-12">
				<h2 class="text-2xl font-display font-bold mb-6 text-gray-900 border-b border-gray-200 pb-2">
					{category}
				</h2>
				<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{#each pages.filter(p => p.category === category) as page}
						<a 
							href={page.url}
							class="group relative bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
						>
							<h3 class="text-lg font-display font-bold mb-2 text-gray-900 group-hover:text-primary-600 transition-colors">
								{page.title}
							</h3>
							{#if page.description}
								<p class="text-sm text-gray-600 mb-2">
									{page.description}
								</p>
							{/if}
							<p class="text-xs text-gray-500 font-mono">
								{page.url}
							</p>
							<div class="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
								<svg class="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
								</svg>
							</div>
						</a>
					{/each}
				</div>
			</div>
		{/each}
		
		<div class="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 border border-primary-100">
			<h2 class="text-2xl font-display font-bold mb-6 text-gray-900">XML Sitemap</h2>
			<p class="text-gray-700 mb-4">
				For search engines, we also provide an XML sitemap:
			</p>
			<a 
				href="/sitemap.xml" 
				class="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
			>
				View XML Sitemap
				<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
				</svg>
			</a>
		</div>
	</div>
</section>
