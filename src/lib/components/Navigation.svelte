<script>
	import { page } from '$app/stores';
	
	let mobileMenuOpen = false;
	
	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}
	
	function closeMobileMenu() {
		mobileMenuOpen = false;
	}
	
	const navItems = [
		{ href: '/', label: 'Home' },
		{ href: '/properties', label: 'Properties' },
		{ href: '/home-value', label: 'Home Value' },
		{ href: '/rentals', label: 'Rentals' },
		{ href: '/blog', label: 'Blog' },
		{ href: '/about', label: 'About' },
		{ href: '/contact', label: 'Contact' }
	];
</script>

<nav class="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<!-- Logo -->
			<a href="/" class="flex items-center space-x-3 group flex-shrink-0">
				<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary-600 to-primary-800 shadow-md transition-transform group-hover:scale-105">
					<span class="text-sm font-bold text-white">JD</span>
				</div>
				<div class="hidden sm:block">
					<div class="text-lg font-display font-bold text-gray-900 group-hover:text-primary-700 transition-colors">Dr. Jan Duffy</div>
					<div class="text-xs text-gray-600">REALTOR®</div>
				</div>
			</a>
			
			<!-- Desktop Navigation -->
			<div class="hidden md:flex md:items-center md:space-x-1 md:flex-1 md:justify-center md:max-w-2xl md:mx-auto">
				{#each navItems as item}
					<a
						href={item.href}
						class="relative px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-primary-600 rounded-md hover:bg-primary-50 {$page.url.pathname === item.href ? 'text-primary-600 bg-primary-50' : ''}"
					>
						{item.label}
						{#if $page.url.pathname === item.href}
							<span class="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600 rounded-full"></span>
						{/if}
					</a>
				{/each}
			</div>
			
			<!-- Call Now Button & Mobile Menu Toggle -->
			<div class="flex items-center gap-4">
				<a
					href="tel:+17025551234"
					class="hidden md:flex items-center justify-center rounded-lg bg-gradient-to-r from-primary-600 to-primary-700 px-5 py-2 text-sm font-semibold text-white shadow-md transition-all hover:from-primary-700 hover:to-primary-800 hover:shadow-lg hover:scale-105 whitespace-nowrap"
				>
					Call Now
				</a>
				
				<!-- Mobile menu button -->
				<button
					on:click={toggleMobileMenu}
					class="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 transition-colors"
					aria-label="Toggle menu"
				>
					<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
						{#if mobileMenuOpen}
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
						{:else}
							<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
						{/if}
					</svg>
				</button>
			</div>
		</div>
		
		<!-- Mobile Navigation -->
		{#if mobileMenuOpen}
			<div class="md:hidden border-t border-gray-200">
				<div class="space-y-1 px-2 pt-2 pb-3">
					{#each navItems as item}
						<a
							href={item.href}
							on:click={closeMobileMenu}
							class="block rounded-md px-3 py-2 text-base font-medium text-gray-700 transition-colors hover:bg-primary-50 hover:text-primary-600 {$page.url.pathname === item.href ? 'bg-primary-50 text-primary-600' : ''}"
						>
							{item.label}
						</a>
					{/each}
					<a
						href="tel:+17025551234"
						on:click={closeMobileMenu}
						class="block rounded-md bg-gradient-to-r from-primary-600 to-primary-700 px-3 py-2 text-center text-base font-semibold text-white shadow-md transition-all hover:from-primary-700 hover:to-primary-800 mt-2"
					>
						Call Now
					</a>
				</div>
			</div>
		{/if}
	</div>
</nav>
