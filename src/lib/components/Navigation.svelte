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

<header class="sticky top-0 z-50 w-full bg-white/95 backdrop-blur border-b border-gray-100">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex flex-wrap items-center justify-between gap-3 py-3">
			<!-- Logo -->
			<a
				href="/"
				class="flex items-center space-x-2 sm:space-x-3 flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded no-underline"
				aria-label="Dr. Janet Duffy Home"
			>
				<div class="w-9 h-9 sm:w-11 sm:h-11 bg-primary-600 rounded-full flex items-center justify-center shadow-sm">
					<span class="text-white font-bold text-sm sm:text-lg tracking-tight">JD</span>
				</div>
				<div class="leading-tight">
					<span class="block text-lg sm:text-xl font-bold text-gray-900">Dr. Janet Duffy</span>
					<span class="block text-xs sm:text-sm text-gray-500 tracking-wide">REALTOR<sup>®</sup></span>
				</div>
			</a>

			<!-- Navigation Menu -->
			<nav
				class="flex-1 flex items-center justify-center order-3 lg:order-none w-full lg:w-auto"
				aria-label="Main navigation"
			>
				<div class="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8">
					{#each navItems as item}
						<a
							href={item.href}
							class="text-sm sm:text-base font-medium text-gray-700 hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-md px-3 py-2 transition-colors whitespace-nowrap no-underline {$page.url.pathname === item.href ? 'text-primary-600 font-semibold bg-primary-50' : ''}"
							aria-current={$page.url.pathname === item.href ? 'page' : undefined}
						>
							{item.label}
						</a>
					{/each}
				</div>
			</nav>

			<!-- Contact shortcut -->
			<div class="flex items-center gap-3">
				<a href="mailto:info@DrJanetDuffy.com" class="hidden sm:flex text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors no-underline">
					info@DrJanetDuffy.com
				</a>
				<a
					href="tel:+17025001955"
					class="inline-flex items-center gap-2 rounded-full border border-primary-500 px-4 py-2 text-sm font-semibold text-primary-600 hover:bg-primary-50 transition-colors no-underline"
				>
					<span>Call</span>
					<span class="hidden sm:inline">702-500-1955</span>
				</a>
			</div>
		</div>
	</div>
</header>

<style>
	.scrollbar-hide {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
	.scrollbar-hide::-webkit-scrollbar {
		display: none;
	}
</style>

