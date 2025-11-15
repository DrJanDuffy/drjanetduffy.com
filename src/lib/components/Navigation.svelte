<script>
	import { page } from '$app/stores';
	
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
			<a href="/" class="flex items-center space-x-2 sm:space-x-3 group flex-shrink-0">
				<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary-600 to-primary-800 shadow-md transition-transform group-hover:scale-105">
					<span class="text-sm font-bold text-white">JD</span>
				</div>
				<div class="hidden sm:block">
					<div class="text-lg font-display font-bold text-gray-900 group-hover:text-primary-700 transition-colors">Dr. Jan Duffy</div>
					<div class="text-xs text-gray-600">REALTOR®</div>
				</div>
			</a>
			
			<!-- Navigation Menu - Always Visible -->
			<div class="hidden md:flex items-center flex-1 justify-center mx-8">
				<nav class="flex items-center space-x-1">
					{#each navItems as item}
						<a
							href={item.href}
							class="relative px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-200 rounded-lg hover:text-primary-600 hover:bg-primary-50 whitespace-nowrap {$page.url.pathname === item.href ? 'text-primary-600 bg-primary-50' : ''}"
						>
							{item.label}
							{#if $page.url.pathname === item.href}
								<span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-primary-600 rounded-full"></span>
							{/if}
						</a>
					{/each}
				</nav>
			</div>
			
			<!-- Mobile Navigation - Scrollable -->
			<div class="md:hidden flex items-center flex-1 justify-center overflow-x-auto scrollbar-hide -mx-4 px-4">
				<nav class="flex items-center space-x-2">
					{#each navItems as item}
						<a
							href={item.href}
							class="relative px-3 py-2 text-xs font-medium text-gray-700 transition-all duration-200 rounded-lg hover:text-primary-600 hover:bg-primary-50 whitespace-nowrap flex-shrink-0 {$page.url.pathname === item.href ? 'text-primary-600 bg-primary-50' : ''}"
						>
							{item.label}
							{#if $page.url.pathname === item.href}
								<span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-primary-600 rounded-full"></span>
							{/if}
						</a>
					{/each}
				</nav>
			</div>
			
			<!-- Call Now Button -->
			<div class="flex items-center flex-shrink-0 ml-4">
				<a
					href="tel:+17022221964"
					class="flex items-center justify-center rounded-lg bg-gradient-to-r from-primary-600 to-primary-700 px-4 sm:px-6 py-2 text-xs sm:text-sm font-semibold text-white shadow-md transition-all duration-200 hover:from-primary-700 hover:to-primary-800 hover:shadow-lg hover:scale-105 whitespace-nowrap"
				>
					<span class="hidden sm:inline">Call Now</span>
					<span class="sm:hidden">Call</span>
				</a>
			</div>
		</div>
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
