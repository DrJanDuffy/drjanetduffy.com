<script>
	import { page } from '$app/stores';
	import { ShoppingCart, Search, Menu, X } from 'lucide-svelte';
	
	let mobileMenuOpen = false;
	
	const navItems = [
		{ href: '/', label: 'HOME' },
		{ href: '/properties', label: 'PAGES' },
		{ href: '/about', label: 'FEATURES' },
		{ href: '/contact', label: 'ELEMENTS' },
		{ href: '/blog', label: 'BLOG' },
		{ href: '/properties', label: 'SHOP' }
	];
	
	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}
</script>

<nav class="sticky top-0 z-50 w-full bg-white shadow-sm">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<!-- Logo -->
			<a href="/" class="flex items-center flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded" aria-label="PARALLEL Home">
				<span class="text-2xl font-bold text-gray-800">PARALLEL</span>
			</a>
			
			<!-- Navigation Menu -->
			<div class="hidden md:flex items-center flex-1 justify-center mx-8">
				<nav class="flex items-center space-x-6" role="navigation" aria-label="Main navigation">
					{#each navItems as item}
						<a
							href={item.href}
							class="text-sm font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded px-2 py-1 transition-colors uppercase tracking-wide {$page.url.pathname === item.href ? 'text-gray-900 font-semibold' : ''}"
							aria-current={$page.url.pathname === item.href ? 'page' : undefined}
						>
							{item.label}
						</a>
					{/each}
				</nav>
			</div>
			
			<!-- Right Icons -->
			<div class="flex items-center space-x-4 flex-shrink-0">
				<!-- Shopping Cart with Badge -->
				<button 
					class="relative p-2 text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded transition-colors"
					aria-label="Shopping cart with 3 items"
					aria-describedby="cart-count"
				>
					<ShoppingCart class="w-6 h-6" aria-hidden="true" />
					<span id="cart-count" class="absolute -top-1 -right-1 bg-orange-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center" aria-label="3 items in cart">3</span>
				</button>
				
				<!-- Search Icon -->
				<button 
					class="p-2 text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded transition-colors"
					aria-label="Search"
				>
					<Search class="w-6 h-6" aria-hidden="true" />
				</button>
				
				<!-- Mobile Menu Button -->
				<button 
					on:click={toggleMobileMenu}
					class="md:hidden p-2 text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded transition-colors"
					aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
					aria-expanded={mobileMenuOpen}
					aria-controls="mobile-menu"
				>
					{#if mobileMenuOpen}
						<X class="w-6 h-6" aria-hidden="true" />
					{:else}
						<Menu class="w-6 h-6" aria-hidden="true" />
					{/if}
				</button>
			</div>
		</div>
		
		<!-- Mobile Menu -->
		{#if mobileMenuOpen}
			<div id="mobile-menu" class="md:hidden border-t border-gray-200 py-4" role="navigation" aria-label="Mobile navigation">
				<nav class="flex flex-col space-y-2">
					{#each navItems as item}
						<a
							href={item.href}
							class="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded transition-colors uppercase tracking-wide {$page.url.pathname === item.href ? 'text-gray-900 font-semibold bg-gray-50' : ''}"
							on:click={() => mobileMenuOpen = false}
							aria-current={$page.url.pathname === item.href ? 'page' : undefined}
						>
							{item.label}
						</a>
					{/each}
				</nav>
			</div>
		{/if}
	</div>
</nav>

<style>
	.scrollbar-hide {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
	.scrollbar-hide::-webkit-scrollbar {
		display: none;
	}
</style>
