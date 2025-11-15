<script>
	import { page } from '$app/stores';
	import { Menu, X } from 'lucide-svelte';
	
	let mobileMenuOpen = false;
	
	const navItems = [
		{ href: '/', label: 'Home' },
		{ href: '/properties', label: 'Properties' },
		{ href: '/home-value', label: 'Home Value' },
		{ href: '/rentals', label: 'Rentals' },
		{ href: '/blog', label: 'Blog' },
		{ href: '/about', label: 'About' },
		{ href: '/contact', label: 'Contact' }
	];
	
	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}
</script>

<nav class="sticky top-0 z-50 w-full bg-white shadow-sm">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<!-- Logo -->
			<a href="/" class="flex items-center space-x-3 flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded" aria-label="Dr. Janet Duffy Home">
				<div class="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
					<span class="text-white font-bold text-lg">JD</span>
				</div>
				<div>
					<h1 class="text-xl font-bold text-gray-800">Dr. Janet Duffy</h1>
					<p class="text-sm text-gray-600">REALTOR<sup>®</sup></p>
				</div>
			</a>
			
			<!-- Navigation Menu -->
			<div class="hidden md:flex items-center flex-1 justify-center mx-8">
				<nav class="flex items-center space-x-6" role="navigation" aria-label="Main navigation">
					{#each navItems as item}
						<a
							href={item.href}
							class="text-sm font-medium text-gray-700 hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded px-2 py-1 transition-colors {$page.url.pathname === item.href ? 'text-primary-600 font-semibold' : ''}"
							aria-current={$page.url.pathname === item.href ? 'page' : undefined}
						>
							{item.label}
						</a>
					{/each}
				</nav>
			</div>
			
			<!-- Mobile Menu Button -->
			<div class="flex items-center flex-shrink-0">
				<button 
					on:click={toggleMobileMenu}
					class="md:hidden p-2 text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded transition-colors"
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
							class="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded transition-colors {$page.url.pathname === item.href ? 'text-primary-600 font-semibold bg-primary-50' : ''}"
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
