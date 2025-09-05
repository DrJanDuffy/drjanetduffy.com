<script>
	// Simple sitemap page
	const pages = [
		{ url: '/', title: 'Home' },
		{ url: '/properties', title: 'Properties' },
		{ url: '/home-value', title: 'Home Value' },
		{ url: '/rentals', title: 'Rentals' },
		{ url: '/about', title: 'About' },
		{ url: '/contact', title: 'Contact' },
		{ url: '/listings-embedded', title: 'Property Grid View' },
		{ url: '/listings-list', title: 'Property List View' },
		{ url: '/past-sales', title: 'Past Sales' },
		{ url: '/privacy', title: 'Privacy Policy' },
		{ url: '/terms', title: 'Terms of Service' }
	];
</script>

<svelte:head>
	<title>Sitemap | Dr. Janet Duffy, REALTOR® | Berkshire Hathaway Nevada Properties</title>
	<meta name="description" content="Site map for Dr. Janet Duffy, REALTOR® luxury Las Vegas real estate website. Find all pages and sections easily." />
	<meta name="robots" content="noindex, follow" />
</svelte:head>

<div class="container mx-auto px-4 py-16">
	<div class="max-w-4xl mx-auto">
		<h1 class="text-4xl font-bold mb-8 text-vegas-deep-900">Sitemap</h1>
		<p class="text-lg text-vegas-deep-700 mb-12">
			Find all pages and sections of our luxury real estate website.
		</p>
		
		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each pages as page}
				<div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
					<a 
						href={page.url} 
						class="text-vegas-gold-600 hover:text-vegas-gold-700 font-semibold text-lg"
					>
						{page.title}
					</a>
					<p class="text-gray-600 text-sm mt-1">
						{page.url}
					</p>
				</div>
			{/each}
		</div>
		
		<div class="mt-12 bg-vegas-gold-50 p-8 rounded-lg">
			<h2 class="text-2xl font-bold mb-4 text-vegas-deep-900">Contact Information</h2>
			<div class="space-y-2 text-vegas-deep-700">
				<p><strong>Dr. Janet Duffy, REALTOR®</strong></p>
				<p>Berkshire Hathaway Nevada Properties</p>
				<p>Phone: <a href="tel:+17022221964" class="text-vegas-gold-600 hover:text-vegas-gold-700">702-222-1964</a></p>
				<p>Email: <a href="mailto:drduffy@bhhsnv.com" class="text-vegas-gold-600 hover:text-vegas-gold-700">drduffy@bhhsnv.com</a></p>
				<p>Serving West Summerlin (89138, 89144, 89135)</p>
			</div>
		</div>
	</div>
</div>
