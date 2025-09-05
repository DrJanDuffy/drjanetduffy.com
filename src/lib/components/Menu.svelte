<script>
	import { page } from '$app/stores';
	
	let mobileMenuOpen = false;
	let searchOpen = false;
	let searchQuery = '';
	
	const mainMenu = [
		{ name: 'Home', href: '/', icon: '🏠' },
		{ name: 'Properties', href: '/properties', icon: '🏘️' },
		{ name: 'Home Value', href: '/home-value', icon: '💰' },
		{ name: 'Rentals', href: '/rentals', icon: '🔑' },
		{ name: 'About', href: '/about', icon: '👩‍💼' },
		{ name: 'Contact', href: '/contact', icon: '📞' }
	];
	
	const propertySubmenu = [
		{ name: 'All Properties', href: '/properties', icon: '🏘️' },
		{ name: 'Grid View', href: '/listings-embedded', icon: '⊞' },
		{ name: 'List View', href: '/listings-list', icon: '☰' },
		{ name: 'Past Sales', href: '/past-sales', icon: '📈' }
	];
	
	const quickLinks = [
		{ name: 'Market Analysis', href: '/home-value', icon: '📊' },
		{ name: 'Investment Properties', href: '/properties?type=investment', icon: '🏢' },
		{ name: 'First Time Buyers', href: '/about#first-time-buyers', icon: '🔑' },
		{ name: 'Relocation Services', href: '/about#relocation', icon: '✈️' }
	];
	
	const neighborhoods = [
		{ name: 'Summerlin', href: '/properties?neighborhood=summerlin', icon: '🌴' },
		{ name: 'Henderson', href: '/properties?neighborhood=henderson', icon: '🏞️' },
		{ name: 'Green Valley', href: '/properties?neighborhood=green-valley', icon: '🌳' },
		{ name: 'Anthem', href: '/properties?neighborhood=anthem', icon: '🏰' }
	];
	
	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}
	
	function closeMobileMenu() {
		mobileMenuOpen = false;
	}
	
	function toggleSearch() {
		searchOpen = !searchOpen;
	}
	
	function closeSearch() {
		searchOpen = false;
		searchQuery = '';
	}
	
	function handleSearch(event) {
		event.preventDefault();
		if (searchQuery.trim()) {
			console.log('Searching for:', searchQuery);
		}
	}
</script>

<nav class="bg-white shadow-lg sticky top-0 z-50">
	<div class="container mx-auto px-4">
		<div class="flex justify-between items-center h-16">
			<!-- Logo -->
			<div class="flex items-center space-x-3">
				<div class="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
					<span class="text-white font-bold text-lg">JD</span>
				</div>
				<div>
					<h1 class="text-xl font-bold text-gray-800">Dr. Jan Duffy</h1>
					<p class="text-sm text-gray-600">REALTOR</p>
				</div>
			</div>
			
			<!-- Desktop Navigation -->
			<div class="hidden lg:flex items-center space-x-1">
				{#each mainMenu as item}
					<div class="relative group">
						<a 
							href={item.href} 
							class="px-4 py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors rounded-lg hover:bg-gray-50 {$page.url.pathname === item.href ? 'text-primary-600 bg-primary-50' : ''}"
						>
							<span class="mr-1">{item.icon}</span>
							{item.name}
						</a>
						
						{#if item.name === 'Properties'}
							<div class="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
								<div class="p-6">
									<h3 class="text-lg font-semibold text-gray-800 mb-4">Property Search</h3>
									
									<div class="mb-6">
										<h4 class="text-sm font-semibold text-gray-700 mb-3">Browse Properties</h4>
										<div class="space-y-2">
											{#each propertySubmenu as subItem}
												<a 
													href={subItem.href} 
													class="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors"
												>
													<span class="text-lg">{subItem.icon}</span>
													<span class="font-medium text-sm">{subItem.name}</span>
												</a>
											{/each}
										</div>
									</div>
									
									<div class="border-t border-gray-200 pt-4">
										<h4 class="text-sm font-semibold text-gray-700 mb-3">Quick Access</h4>
										<div class="grid grid-cols-2 gap-2">
											{#each quickLinks as link}
												<a 
													href={link.href} 
													class="flex items-center space-x-2 px-3 py-2 text-sm text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors"
												>
													<span class="text-lg">{link.icon}</span>
													<span>{link.name}</span>
												</a>
											{/each}
										</div>
									</div>
								</div>
							</div>
						{/if}
					</div>
				{/each}
				
				<!-- Search Button -->
				<div class="relative search-container">
					<button 
						type="button"
						on:click={toggleSearch}
						class="p-2 text-gray-700 hover:text-primary-600 transition-colors"
						aria-label="Search properties"
					>
						<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
						</svg>
					</button>
					
					{#if searchOpen}
						<div class="absolute top-full right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
							<form on:submit={handleSearch} class="p-4">
								<div class="flex space-x-2">
									<input
										type="text"
										bind:value={searchQuery}
										placeholder="Search properties, neighborhoods..."
										class="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
									/>
									<button
										type="submit"
										class="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
									>
										Search
									</button>
								</div>
								<div class="mt-3 text-sm text-gray-500">
									Try: "Henderson", "Summerlin", "3 bedroom", "pool"
								</div>
							</form>
						</div>
					{/if}
				</div>
				
				<!-- CTA Button -->
				<a 
					href="tel:+17025551234" 
					class="ml-4 bg-primary-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors"
				>
					Call Now
				</a>
			</div>
			
			<!-- Mobile menu button -->
			<div class="lg:hidden flex items-center space-x-2">
				<button 
					type="button"
					on:click={toggleSearch}
					class="p-2 text-gray-700 hover:text-primary-600 transition-colors"
					aria-label="Search"
				>
					<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
					</svg>
				</button>
				
				<button 
					type="button"
					on:click={toggleMobileMenu}
					class="p-2 text-gray-700 hover:text-primary-600 focus:outline-none focus:text-primary-600"
					aria-label="Toggle mobile menu"
				>
					<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						{#if mobileMenuOpen}
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
						{:else}
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
						{/if}
					</svg>
				</button>
			</div>
		</div>
		
		<!-- Mobile Search -->
		{#if searchOpen}
			<div class="lg:hidden border-t border-gray-200 bg-gray-50 p-4">
				<form on:submit={handleSearch} class="flex space-x-2">
					<input
						type="text"
						bind:value={searchQuery}
						placeholder="Search properties..."
						class="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
					/>
					<button
						type="submit"
						class="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
					>
						Search
					</button>
				</form>
			</div>
		{/if}
		
		<!-- Mobile Navigation -->
		{#if mobileMenuOpen}
			<div class="lg:hidden border-t border-gray-200 bg-gray-50">
				<div class="px-4 py-2 space-y-1">
					<!-- Main Menu -->
					{#each mainMenu as item}
						<a 
							href={item.href} 
							class="flex items-center space-x-3 px-3 py-3 text-gray-700 hover:text-primary-600 font-medium transition-colors rounded-lg hover:bg-white {$page.url.pathname === item.href ? 'text-primary-600 bg-white' : ''}"
							on:click={closeMobileMenu}
						>
							<span class="text-lg">{item.icon}</span>
							<span class="font-medium">{item.name}</span>
						</a>
					{/each}
					
					<!-- Property Submenu for Mobile -->
					<div class="border-t border-gray-200 my-2"></div>
					<div class="px-3 py-2">
						<h4 class="text-sm font-semibold text-gray-700 mb-3">Property Search</h4>
						<div class="space-y-1">
							{#each propertySubmenu as subItem}
								<a 
									href={subItem.href} 
									class="flex items-center space-x-3 px-3 py-2 text-sm text-gray-600 hover:text-primary-600 hover:bg-white transition-colors rounded-md"
									on:click={closeMobileMenu}
								>
									<span class="text-lg">{subItem.icon}</span>
									<span class="font-medium">{subItem.name}</span>
								</a>
							{/each}
						</div>
					</div>
					
					<!-- Quick Links for Mobile -->
					<div class="border-t border-gray-200 my-2"></div>
					<div class="px-3 py-2">
						<h4 class="text-sm font-semibold text-gray-700 mb-3">Quick Access</h4>
						<div class="grid grid-cols-1 gap-2">
							{#each quickLinks as link}
								<a 
									href={link.href} 
									class="flex items-center space-x-3 px-3 py-2 text-sm text-gray-600 hover:text-primary-600 hover:bg-white rounded-md transition-colors"
									on:click={closeMobileMenu}
								>
									<span class="text-lg">{link.icon}</span>
									<span class="font-medium">{link.name}</span>
								</a>
							{/each}
						</div>
					</div>
					
					<!-- Neighborhoods for Mobile -->
					<div class="border-t border-gray-200 my-2"></div>
					<div class="px-3 py-2">
						<h4 class="text-sm font-semibold text-gray-700 mb-3">Popular Neighborhoods</h4>
						<div class="grid grid-cols-2 gap-2">
							{#each neighborhoods as neighborhood}
								<a 
									href={neighborhood.href} 
									class="flex items-center space-x-2 px-3 py-2 text-sm text-gray-600 hover:text-primary-600 hover:bg-white rounded-md transition-colors"
									on:click={closeMobileMenu}
								>
									<span class="text-lg">{neighborhood.icon}</span>
									<span class="font-medium">{neighborhood.name}</span>
								</a>
							{/each}
						</div>
					</div>
					
					<!-- Contact Options for Mobile -->
					<div class="border-t border-gray-200 my-2"></div>
					<div class="px-3 py-2">
						<h4 class="text-sm font-semibold text-gray-700 mb-3">Get In Touch</h4>
						<div class="space-y-2">
							<a 
								href="tel:+17025551234" 
								class="flex items-center space-x-3 px-3 py-2 text-sm bg-primary-600 text-white hover:bg-primary-700 transition-colors rounded-md"
								on:click={closeMobileMenu}
							>
								<span class="text-lg">📞</span>
								<span class="font-medium">Call Now - (702) 555-1234</span>
							</a>
							<a 
								href="mailto:jan@drjanduffy.com" 
								class="flex items-center space-x-3 px-3 py-2 text-sm text-gray-600 hover:text-primary-600 hover:bg-white transition-colors rounded-md"
								on:click={closeMobileMenu}
							>
								<span class="text-lg">✉️</span>
								<span class="font-medium">Email Us</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		{/if}
	</div>
</nav>

<style>
	.group:hover .group-hover\:opacity-100 {
		z-index: 50;
	}
</style>