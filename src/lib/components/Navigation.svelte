<script lang="ts">
	import { page } from '$app/stores';

	let mobileMenuOpen = false;
	let openDropdown: string | null = null;

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMobileMenu() {
		mobileMenuOpen = false;
	}

	function handleDropdownEnter(menu: string) {
		openDropdown = menu;
	}

	function handleDropdownLeave() {
		openDropdown = null;
	}
</script>

<!-- Top Bar -->
<div class="bg-primary-700 text-white py-2">
	<div class="container mx-auto px-4">
		<div class="flex justify-between items-center text-sm">
			<p>Welcome to DrJanetDuffy.com! Call Dr. Janet Duffy directly at (702) 555-1234</p>
			<div class="hidden md:flex space-x-4">
				<a href="/contact" class="hover:underline">Contact Us</a>
			</div>
		</div>
	</div>
</div>

<!-- Main Navigation -->
<nav class="bg-white shadow-lg sticky top-0 z-50">
	<div class="container mx-auto px-4">
		<div class="flex justify-between items-center py-4">
			<!-- Logo -->
			<div class="flex items-center">
				<a href="/" class="flex items-center space-x-3">
					<div class="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
						<span class="text-white font-bold text-lg">JD</span>
					</div>
					<div>
						<h1 class="text-2xl font-bold text-gray-800">Dr. Janet Duffy</h1>
						<p class="text-sm text-gray-600">REALTOR®</p>
					</div>
				</a>
			</div>

			<!-- Desktop Navigation -->
			<div class="hidden lg:flex items-center space-x-1">
				<!-- Sell Dropdown -->
				<div class="relative group" on:mouseenter={() => handleDropdownEnter('sell')} on:mouseleave={handleDropdownLeave}>
					<a href="/selling" class="px-4 py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors flex items-center">
						<div>
							<strong>SELL</strong>
							<small class="block text-xs">Sell Your Home</small>
						</div>
					</a>
					{#if openDropdown === 'sell'}
					<div class="absolute left-0 mt-0 w-56 bg-white shadow-lg rounded-b-lg py-2 z-50">
						<a href="/home-value" class="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50">What's My Home Worth?</a>
						<a href="/about" class="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50">About Dr. Janet Duffy</a>
						<a href="/testimonials" class="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50">Testimonials</a>
					</div>
					{/if}
				</div>

				<!-- Buy Dropdown -->
				<div class="relative group" on:mouseenter={() => handleDropdownEnter('buy')} on:mouseleave={handleDropdownLeave}>
					<a href="/properties" class="px-4 py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors flex items-center">
						<div>
							<strong>BUY</strong>
							<small class="block text-xs">Search Listings</small>
						</div>
					</a>
					{#if openDropdown === 'buy'}
					<div class="absolute left-0 mt-0 w-64 bg-white shadow-lg rounded-b-lg py-2 z-50">
						<a href="/las-vegas-homes" class="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50">Las Vegas Homes</a>
						<a href="/las-vegas-condos" class="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50">Las Vegas Condos</a>
						<a href="/summerlin" class="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50">Summerlin</a>
						<a href="/henderson" class="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50">Henderson</a>
						<a href="/las-vegas-luxury-homes" class="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50">Luxury Estates</a>
						<a href="/las-vegas-neighborhoods" class="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50">Las Vegas Neighborhoods</a>
						<a href="/las-vegas-gated-communities" class="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50">Gated Communities</a>
					</div>
					{/if}
				</div>

				<!-- Homes Dropdown -->
				<div class="relative group" on:mouseenter={() => handleDropdownEnter('homes')} on:mouseleave={handleDropdownLeave}>
					<a href="/las-vegas-homes" class="px-4 py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors flex items-center">
						<div>
							<strong>HOMES</strong>
							<small class="block text-xs">Las Vegas Homes</small>
						</div>
					</a>
					{#if openDropdown === 'homes'}
					<div class="absolute left-0 mt-0 w-64 bg-white shadow-lg rounded-b-lg py-2 z-50">
						<a href="/summerlin" class="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50">Summerlin</a>
						<a href="/henderson" class="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50">Henderson</a>
						<a href="/las-vegas-retirement-communities" class="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50">55+ Communities</a>
						<a href="/las-vegas-golf-communities" class="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50">Golf Communities</a>
						<a href="/las-vegas-luxury-homes" class="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50">Luxury Estates</a>
					</div>
					{/if}
				</div>

				<!-- Condos Dropdown -->
				<div class="relative group" on:mouseenter={() => handleDropdownEnter('condos')} on:mouseleave={handleDropdownLeave}>
					<a href="/las-vegas-condos" class="px-4 py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors flex items-center">
						<div>
							<strong>CONDOS</strong>
							<small class="block text-xs">Las Vegas Condos</small>
						</div>
					</a>
					{#if openDropdown === 'condos'}
					<div class="absolute left-0 mt-0 w-64 bg-white shadow-lg rounded-b-lg py-2 z-50">
						<a href="/las-vegas-high-rises" class="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50">High Rise Condos</a>
						<a href="/las-vegas-luxury-condos" class="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50">Luxury Condos</a>
						<a href="/henderson-condos" class="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50">Henderson Condos</a>
						<a href="/summerlin-condos" class="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50">Summerlin Condos</a>
					</div>
					{/if}
				</div>

				<!-- About Dropdown -->
				<div class="relative group" on:mouseenter={() => handleDropdownEnter('about')} on:mouseleave={handleDropdownLeave}>
					<a href="/about" class="px-4 py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors flex items-center">
						<div>
							<strong>ABOUT</strong>
							<small class="block text-xs">Dr. Janet Duffy</small>
						</div>
					</a>
					{#if openDropdown === 'about'}
					<div class="absolute left-0 mt-0 w-56 bg-white shadow-lg rounded-b-lg py-2 z-50">
						<a href="/testimonials" class="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50">Testimonials</a>
						<a href="/contact" class="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50">Contact</a>
					</div>
					{/if}
				</div>
			</div>

			<!-- Mobile menu button -->
			<div class="lg:hidden">
				<button
					on:click={toggleMobileMenu}
					class="text-gray-700 hover:text-primary-600 focus:outline-none"
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
			<div class="lg:hidden border-t">
				<div class="px-2 pt-2 pb-3 space-y-1 bg-gray-50">
					<a href="/" class="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium" on:click={closeMobileMenu}>Home</a>
					<a href="/selling" class="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium" on:click={closeMobileMenu}>Sell</a>
					<a href="/properties" class="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium" on:click={closeMobileMenu}>Buy</a>
					<a href="/las-vegas-homes" class="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium" on:click={closeMobileMenu}>Homes</a>
					<a href="/las-vegas-condos" class="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium" on:click={closeMobileMenu}>Condos</a>
					<a href="/about" class="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium" on:click={closeMobileMenu}>About</a>
					<a href="/contact" class="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium" on:click={closeMobileMenu}>Contact</a>
					<a href="tel:+17025551234" class="block px-3 py-2 bg-primary-600 text-white rounded-lg font-medium text-center" on:click={closeMobileMenu}>Call Now</a>
				</div>
			</div>
		{/if}
	</div>
</nav>
