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
	<div class="container mx-auto px-2 sm:px-4 lg:px-8">
		<div class="flex h-16 items-center justify-between gap-2">
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
			<div class="flex items-center flex-1 justify-center gap-0.5 sm:gap-1 min-w-0 overflow-x-auto">
				{#each navItems as item}
					<a
						href={item.href}
						class="relative px-2 sm:px-3 md:px-4 py-2 text-xs sm:text-sm font-medium text-gray-700 transition-colors hover:text-primary-600 rounded-md hover:bg-primary-50 whitespace-nowrap {$page.url.pathname === item.href ? 'text-primary-600 bg-primary-50' : ''}"
					>
						{item.label}
						{#if $page.url.pathname === item.href}
							<span class="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600 rounded-full"></span>
						{/if}
					</a>
				{/each}
			</div>
			
			<!-- Call Now Button -->
			<div class="flex items-center flex-shrink-0">
				<a
					href="tel:+17022221964"
					class="flex items-center justify-center rounded-lg bg-gradient-to-r from-primary-600 to-primary-700 px-3 sm:px-5 py-2 text-xs sm:text-sm font-semibold text-white shadow-md transition-all hover:from-primary-700 hover:to-primary-800 hover:shadow-lg hover:scale-105 whitespace-nowrap"
				>
					<span class="hidden sm:inline">Call Now</span>
					<span class="sm:hidden">Call</span>
				</a>
			</div>
		</div>
	</div>
</nav>
