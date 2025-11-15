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

<nav class="sticky top-0 z-50 w-full bg-white shadow-sm">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between gap-2 sm:gap-4">
			<!-- Logo -->
			<a href="/" class="flex items-center space-x-2 sm:space-x-3 flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded" aria-label="Dr. Janet Duffy Home">
				<div class="w-8 h-8 sm:w-10 sm:h-10 bg-primary-600 rounded-full flex items-center justify-center">
					<span class="text-white font-bold text-sm sm:text-lg">JD</span>
				</div>
				<div>
					<h1 class="text-base sm:text-xl font-bold text-gray-800">Dr. Janet Duffy</h1>
					<p class="text-xs sm:text-sm text-gray-600">REALTOR<sup>®</sup></p>
				</div>
			</a>
			
			<!-- Navigation Menu - Always visible horizontally -->
			<nav class="flex items-center flex-1 justify-center mx-2 sm:mx-4 lg:mx-8 overflow-x-auto scrollbar-hide" aria-label="Main navigation">
				<div class="flex items-center space-x-3 sm:space-x-4 md:space-x-6 lg:space-x-8">
					{#each navItems as item}
						<a
							href={item.href}
							class="text-sm sm:text-base font-medium text-gray-700 hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-md px-2 sm:px-3 py-2 transition-colors whitespace-nowrap {$page.url.pathname === item.href ? 'text-primary-600 font-semibold' : ''}"
							aria-current={$page.url.pathname === item.href ? 'page' : undefined}
						>
							{item.label}
						</a>
					{/each}
				</div>
			</nav>
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

