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

<nav class="bg-white/95 backdrop-blur-premium shadow-premium sticky top-0 z-50 border-b border-gray-100">
	<div class="container-premium">
		<div class="flex justify-between items-center h-20">
			<!-- Logo -->
			<div class="flex items-center space-x-3">
				<div class="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-800 rounded-full flex items-center justify-center shadow-lg">
					<span class="text-white font-bold text-sm">JD</span>
				</div>
				<div>
					<h1 class="text-xl font-display font-bold text-gray-900">Dr. Jan Duffy</h1>
					<p class="text-xs text-gray-600 font-medium">REALTOR®</p>
				</div>
			</div>
			
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
					class="btn-primary px-6 py-2.5"
				>
					Call Now
				</a>
			</div>
			
			<!-- Mobile menu button -->
			<div class="md:hidden">
				<button 
					on:click={toggleMobileMenu}
					class="text-gray-700 hover:text-primary-600 focus:outline-none focus:text-primary-600"
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
		
		<!-- Mobile Navigation -->
		{#if mobileMenuOpen}
			<div class="md:hidden">
				<div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 border-t">
					<a 
						href="/" 
						class="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors {$page.url.pathname === '/' ? 'text-primary-600' : ''}"
						on:click={closeMobileMenu}
					>
						Home
					</a>
					<a 
						href="/properties" 
						class="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors {$page.url.pathname === '/properties' ? 'text-primary-600' : ''}"
						on:click={closeMobileMenu}
					>
						Properties
					</a>
					<a 
						href="/home-value" 
						class="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors {$page.url.pathname === '/home-value' ? 'text-primary-600' : ''}"
						on:click={closeMobileMenu}
					>
						Home Value
					</a>
					<a 
						href="/rentals" 
						class="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors {$page.url.pathname === '/rentals' ? 'text-primary-600' : ''}"
						on:click={closeMobileMenu}
					>
						Rentals
					</a>
							<a 
								href="/blog" 
								class="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors {$page.url.pathname === '/blog' ? 'text-primary-600' : ''}"
								on:click={closeMobileMenu}
							>
								Blog
							</a>
							<a 
								href="/about" 
								class="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors {$page.url.pathname === '/about' ? 'text-primary-600' : ''}"
								on:click={closeMobileMenu}
							>
								About
							</a>
							<a 
								href="/contact" 
								class="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors {$page.url.pathname === '/contact' ? 'text-primary-600' : ''}"
								on:click={closeMobileMenu}
							>
								Contact
							</a>
					<a 
						href="tel:+17025551234" 
						class="block px-3 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors text-center"
						on:click={closeMobileMenu}
					>
						Call Now
					</a>
				</div>
			</div>
		{/if}
	</div>
</nav>
