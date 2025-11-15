<script>
	import { page } from '$app/stores';
	
	let mobileMenuOpen = false;
	
	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}
	
	function closeMobileMenu() {
		mobileMenuOpen = false;
	}
</script>

<nav class="bg-white/98 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-200/50" style="backdrop-filter: blur(20px) saturate(180%); -webkit-backdrop-filter: blur(20px) saturate(180%);">
	<div class="container-premium">
		<div class="flex justify-between items-center h-20">
			<!-- Logo -->
			<a href="/" class="flex items-center space-x-3 group">
				<div class="w-12 h-12 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
					<span class="text-white font-bold text-sm">JD</span>
				</div>
				<div>
					<h1 class="text-xl font-display font-bold text-gray-900 group-hover:text-primary-700 transition-colors duration-300">Dr. Jan Duffy</h1>
					<p class="text-xs text-gray-600 font-medium">REALTOR®</p>
				</div>
			</a>
			
			<!-- Desktop Navigation -->
			<div class="hidden md:flex items-center space-x-8">
				<a 
					href="/" 
					class="nav-link {$page.url.pathname === '/' ? 'active text-primary-600' : ''}"
				>
					Home
				</a>
				<a 
					href="/properties" 
					class="nav-link {$page.url.pathname === '/properties' ? 'active text-primary-600' : ''}"
				>
					Properties
				</a>
				<a 
					href="/home-value" 
					class="nav-link {$page.url.pathname === '/home-value' ? 'active text-primary-600' : ''}"
				>
					Home Value
				</a>
				<a 
					href="/rentals" 
					class="nav-link {$page.url.pathname === '/rentals' ? 'active text-primary-600' : ''}"
				>
					Rentals
				</a>
				<a 
					href="/blog" 
					class="nav-link {$page.url.pathname === '/blog' ? 'active text-primary-600' : ''}"
				>
					Blog
				</a>
				<a 
					href="/about" 
					class="nav-link {$page.url.pathname === '/about' ? 'active text-primary-600' : ''}"
				>
					About
				</a>
				<a 
					href="/contact" 
					class="nav-link {$page.url.pathname === '/contact' ? 'active text-primary-600' : ''}"
				>
					Contact
				</a>
				<a 
					href="tel:+17025551234" 
					class="group relative overflow-hidden bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-2.5 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
				>
					<span class="relative z-10">Call Now</span>
					<div class="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
				</a>
			</div>
			
			<!-- Mobile menu button -->
			<div class="md:hidden">
				<button 
					on:click={toggleMobileMenu}
					class="text-gray-700 hover:text-primary-600 focus:outline-none focus:text-primary-600 transition-colors"
					aria-label="Toggle mobile menu"
				>
					<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
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
				<div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
					<a 
						href="/" 
						class="block px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-primary-50 font-medium transition-colors rounded-lg {$page.url.pathname === '/' ? 'text-primary-600 bg-primary-50' : ''}"
						on:click={closeMobileMenu}
					>
						Home
					</a>
					<a 
						href="/properties" 
						class="block px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-primary-50 font-medium transition-colors rounded-lg {$page.url.pathname === '/properties' ? 'text-primary-600 bg-primary-50' : ''}"
						on:click={closeMobileMenu}
					>
						Properties
					</a>
					<a 
						href="/home-value" 
						class="block px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-primary-50 font-medium transition-colors rounded-lg {$page.url.pathname === '/home-value' ? 'text-primary-600 bg-primary-50' : ''}"
						on:click={closeMobileMenu}
					>
						Home Value
					</a>
					<a 
						href="/rentals" 
						class="block px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-primary-50 font-medium transition-colors rounded-lg {$page.url.pathname === '/rentals' ? 'text-primary-600 bg-primary-50' : ''}"
						on:click={closeMobileMenu}
					>
						Rentals
					</a>
					<a 
						href="/blog" 
						class="block px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-primary-50 font-medium transition-colors rounded-lg {$page.url.pathname === '/blog' ? 'text-primary-600 bg-primary-50' : ''}"
						on:click={closeMobileMenu}
					>
						Blog
					</a>
					<a 
						href="/about" 
						class="block px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-primary-50 font-medium transition-colors rounded-lg {$page.url.pathname === '/about' ? 'text-primary-600 bg-primary-50' : ''}"
						on:click={closeMobileMenu}
					>
						About
					</a>
					<a 
						href="/contact" 
						class="block px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-primary-50 font-medium transition-colors rounded-lg {$page.url.pathname === '/contact' ? 'text-primary-600 bg-primary-50' : ''}"
						on:click={closeMobileMenu}
					>
						Contact
					</a>
					<a 
						href="tel:+17025551234" 
						class="block px-3 py-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg font-semibold hover:from-primary-700 hover:to-primary-800 transition-all text-center shadow-lg mt-2"
						on:click={closeMobileMenu}
					>
						Call Now
					</a>
				</div>
			</div>
		{/if}
	</div>
</nav>
