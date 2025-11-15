<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { Search, ChevronRight, Heart, MapPin, Home, Bath, Square, Phone, Mail, Clock, CheckCircle, Star, Trophy, Target, DollarSign, Key, BarChart3, Award } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Dr. Janet Duffy, REALTOR® | Luxury Las Vegas Real Estate Expert</title>
	<meta name="description" content="Dr. Janet Duffy, licensed REALTOR® specializing in luxury Las Vegas real estate. Expert guidance for buying, selling, and investing in West Summerlin, The Ridges, and premier Las Vegas communities." />
	<meta name="keywords" content="Las Vegas real estate, luxury homes Las Vegas, West Summerlin realtor, Dr. Janet Duffy, Las Vegas homes for sale" />
	
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.drjanetduffy.com/" />
	<meta property="og:title" content="Dr. Janet Duffy, REALTOR® | Luxury Las Vegas Real Estate Expert" />
	<meta property="og:description" content="Expert guidance for buying, selling, and investing in Las Vegas real estate. 15+ years of experience serving West Summerlin, The Ridges, and premier communities." />
	
	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://www.drjanetduffy.com/" />
	<meta property="twitter:title" content="Dr. Janet Duffy, REALTOR® | Luxury Las Vegas Real Estate Expert" />
	<meta property="twitter:description" content="Expert guidance for buying, selling, and investing in Las Vegas real estate." />
	
	<!-- Structured Data -->
	<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "RealEstateAgent",
		"name": "Dr. Jan Duffy",
		"url": "https://www.drjanetduffy.com",
		"email": "info@drjanetduffy.com",
		"telephone": "702-500-1955",
		"address": {
			"@type": "PostalAddress",
			"streetAddress": "1980 Festival Plaza Drive, Suite 300",
			"addressLocality": "Las Vegas",
			"addressRegion": "NV",
			"postalCode": "89135",
			"addressCountry": "US"
		}
	}
	</script>
	<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "WebSite",
		"name": "Dr. Janet Duffy, REALTOR®",
		"url": "https://www.drjanetduffy.com",
		"potentialAction": {
			"@type": "SearchAction",
			"target": "https://www.drjanetduffy.com/properties?search={search_term_string}",
			"query-input": "required name=search_term_string"
		}
	}
	</script>
</svelte:head>

<!-- Hero Section with Search -->
<section class="relative bg-gradient-to-b from-white via-primary-50/30 to-white pt-20 pb-20 overflow-hidden">
	<!-- Decorative background elements -->
	<div class="absolute inset-0 overflow-hidden pointer-events-none">
		<div class="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
		<div class="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
	</div>
	
	<div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
		<div class="max-w-6xl mx-auto">
			<!-- Hero Content -->
			<div class="text-center mb-12 animate-fade-in">
				<div class="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-6">
					<Trophy class="w-4 h-4" />
					<span>15+ Years of Excellence</span>
				</div>
				<h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
					Find Your Dream Home in
					<span class="bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">Las Vegas</span>
				</h1>
				<p class="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
					Expert real estate guidance from Dr. Janet Duffy, REALTOR®. Your trusted partner for luxury homes in West Summerlin, The Ridges, and premier Las Vegas communities.
				</p>
			</div>
			
			<!-- Enhanced Search Form Card -->
			<div class="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-200/50 p-8 md:p-10 mb-12 transform transition-all duration-300 hover:shadow-3xl">
				<form class="space-y-6" on:submit|preventDefault={() => {}}>
					<div class="grid md:grid-cols-4 gap-4">
						<div class="md:col-span-2">
							<label class="block text-sm font-semibold text-gray-700 mb-2">
								<span class="flex items-center gap-2">
									<MapPin class="w-4 h-4" />
									Location
								</span>
							</label>
							<input 
								type="text" 
								placeholder="Enter city, neighborhood, or ZIP"
								class="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-900 placeholder-gray-400 transition-all duration-200 hover:border-gray-300"
							/>
						</div>
						<div>
							<label class="block text-sm font-semibold text-gray-700 mb-2">
								<span class="flex items-center gap-2">
									<Home class="w-4 h-4" />
									Property Type
								</span>
							</label>
							<select class="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-900 bg-white transition-all duration-200 hover:border-gray-300 cursor-pointer">
								<option>All Types</option>
								<option>Single Family</option>
								<option>Condos</option>
								<option>Townhomes</option>
								<option>Luxury Estates</option>
							</select>
						</div>
						<div>
							<label class="block text-sm font-semibold text-gray-700 mb-2">
								<span class="flex items-center gap-2">
									<DollarSign class="w-4 h-4" />
									Price Range
								</span>
							</label>
							<select class="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-900 bg-white transition-all duration-200 hover:border-gray-300 cursor-pointer">
								<option>Any Price</option>
								<option>Under $300K</option>
								<option>$300K - $500K</option>
								<option>$500K - $750K</option>
								<option>$750K - $1M</option>
								<option>Over $1M</option>
							</select>
						</div>
					</div>
					<div class="flex flex-col sm:flex-row gap-4">
						<div class="flex-1">
							<label class="block text-sm font-semibold text-gray-700 mb-2">
								<span class="flex items-center gap-2">
									🛏️ Bedrooms
								</span>
							</label>
							<select class="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-900 bg-white transition-all duration-200 hover:border-gray-300 cursor-pointer">
								<option>Any</option>
								<option>1+</option>
								<option>2+</option>
								<option>3+</option>
								<option>4+</option>
								<option>5+</option>
							</select>
						</div>
						<div class="flex-1">
							<label class="block text-sm font-semibold text-gray-700 mb-2">
								<span class="flex items-center gap-2">
									🚿 Bathrooms
								</span>
							</label>
							<select class="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-900 bg-white transition-all duration-200 hover:border-gray-300 cursor-pointer">
								<option>Any</option>
								<option>1+</option>
								<option>2+</option>
								<option>3+</option>
								<option>4+</option>
							</select>
						</div>
						<div class="flex items-end">
							<button 
								type="submit"
								class="w-full sm:w-auto bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-bold px-10 py-3.5 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
							>
								<Search class="w-5 h-5" />
								Search Properties
							</button>
						</div>
					</div>
				</form>
			</div>
			
			<!-- Enhanced Quick Stats -->
			<div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
				<div class="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 hover:bg-white/80 transition-all duration-300 hover:scale-105">
					<div class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent mb-2">150+</div>
					<div class="text-sm font-semibold text-gray-700">Properties Sold</div>
				</div>
				<div class="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 hover:bg-white/80 transition-all duration-300 hover:scale-105">
					<div class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent mb-2">15+</div>
					<div class="text-sm font-semibold text-gray-700">Years Experience</div>
				</div>
				<div class="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 hover:bg-white/80 transition-all duration-300 hover:scale-105">
					<div class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent mb-2">98%</div>
					<div class="text-sm font-semibold text-gray-700">Client Satisfaction</div>
				</div>
				<div class="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 hover:bg-white/80 transition-all duration-300 hover:scale-105">
					<div class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent mb-2">$50M+</div>
					<div class="text-sm font-semibold text-gray-700">Sales Volume</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	@keyframes blob {
		0%, 100% {
			transform: translate(0, 0) scale(1);
		}
		33% {
			transform: translate(30px, -50px) scale(1.1);
		}
		66% {
			transform: translate(-20px, 20px) scale(0.9);
		}
	}
	
	.animate-blob {
		animation: blob 7s infinite;
	}
	
	.animation-delay-2000 {
		animation-delay: 2s;
	}
	
	@keyframes fade-in {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
	
	.animate-fade-in {
		animation: fade-in 0.6s ease-out;
	}
</style>

<!-- Featured Properties Section -->
<section class="py-20 bg-gradient-to-b from-gray-50 to-white">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-7xl mx-auto">
			<div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
				<div>
					<h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-3">Featured Properties</h2>
					<p class="text-lg text-gray-600">Discover luxury homes in Las Vegas's most desirable neighborhoods</p>
				</div>
				<a href="/properties" class="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold group transition-colors">
					<span>View All Properties</span>
					<ChevronRight class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
				</a>
			</div>
			
			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
				<!-- Property Card 1 -->
				<a href="/properties" class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-primary-300 transform hover:-translate-y-2">
					<div class="h-64 bg-gradient-to-br from-primary-100 via-primary-200 to-blue-200 relative overflow-hidden">
						<div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
						<div class="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-bold text-primary-600 shadow-md">
							For Sale
						</div>
						<div class="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-700">
							New Listing
						</div>
					</div>
					<div class="p-6">
						<div class="flex items-baseline justify-between mb-3">
							<div class="text-3xl font-bold bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">$485,000</div>
							<button class="p-2 rounded-full hover:bg-gray-100 transition-colors group/favorite">
								<Heart class="w-5 h-5 text-gray-400 group-hover/favorite:text-red-500 transition-colors" />
							</button>
						</div>
						<h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">Luxury Home in West Summerlin</h3>
						<p class="text-gray-600 text-sm mb-4 flex items-center gap-1">
							<MapPin class="w-4 h-4" />
							1234 Desert View Dr, Las Vegas, NV 89138
						</p>
						<div class="flex items-center gap-6 text-sm text-gray-600 mb-5 pb-5 border-b border-gray-100">
							<span class="flex items-center gap-1.5">
								<Home class="w-4 h-4 text-primary-600" />
								<span class="font-semibold">4</span> Beds
							</span>
							<span class="flex items-center gap-1.5">
								<Bath class="w-4 h-4 text-primary-600" />
								<span class="font-semibold">3</span> Baths
							</span>
							<span class="flex items-center gap-1.5">
								<Square class="w-4 h-4 text-primary-600" />
								<span class="font-semibold">2,500</span> sqft
							</span>
						</div>
						<div class="flex items-center justify-between">
							<span class="text-xs text-gray-500">Listed 2 days ago</span>
							<span class="inline-flex items-center gap-2 text-primary-600 font-semibold group-hover:gap-3 transition-all">
								View Details
								<ChevronRight class="w-4 h-4" />
							</span>
						</div>
					</div>
				</a>
				
				<!-- Property Card 2 -->
				<a href="/properties" class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-primary-300 transform hover:-translate-y-2">
					<div class="h-64 bg-gradient-to-br from-primary-200 via-blue-200 to-primary-300 relative overflow-hidden">
						<div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
						<div class="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-bold text-primary-600 shadow-md">
							For Sale
						</div>
						<div class="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-700">
							Featured
						</div>
					</div>
					<div class="p-6">
						<div class="flex items-baseline justify-between mb-3">
							<div class="text-3xl font-bold bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">$625,000</div>
							<button class="p-2 rounded-full hover:bg-gray-100 transition-colors group/favorite">
								<Heart class="w-5 h-5 text-gray-400 group-hover/favorite:text-red-500 transition-colors" />
							</button>
						</div>
						<h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">Modern Estate in The Ridges</h3>
						<p class="text-gray-600 text-sm mb-4 flex items-center gap-1">
							<MapPin class="w-4 h-4" />
							5678 Mountain Peak Way, Las Vegas, NV 89144
						</p>
						<div class="flex items-center gap-6 text-sm text-gray-600 mb-5 pb-5 border-b border-gray-100">
							<span class="flex items-center gap-1.5">
								<Home class="w-4 h-4 text-primary-600" />
								<span class="font-semibold">5</span> Beds
							</span>
							<span class="flex items-center gap-1.5">
								<Bath class="w-4 h-4 text-primary-600" />
								<span class="font-semibold">4</span> Baths
							</span>
							<span class="flex items-center gap-1.5">
								<Square class="w-4 h-4 text-primary-600" />
								<span class="font-semibold">3,200</span> sqft
							</span>
						</div>
						<div class="flex items-center justify-between">
							<span class="text-xs text-gray-500">Listed 5 days ago</span>
							<span class="inline-flex items-center gap-2 text-primary-600 font-semibold group-hover:gap-3 transition-all">
								View Details
								<ChevronRight class="w-4 h-4" />
							</span>
						</div>
					</div>
				</a>
				
				<!-- Property Card 3 -->
				<a href="/properties" class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-primary-300 transform hover:-translate-y-2">
					<div class="h-64 bg-gradient-to-br from-primary-300 via-blue-300 to-primary-400 relative overflow-hidden">
						<div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
						<div class="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-bold text-primary-600 shadow-md">
							For Sale
						</div>
						<div class="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-700">
							Price Reduced
						</div>
					</div>
					<div class="p-6">
						<div class="flex items-baseline justify-between mb-3">
							<div class="text-3xl font-bold bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">$350,000</div>
							<button class="p-2 rounded-full hover:bg-gray-100 transition-colors group/favorite">
								<Heart class="w-5 h-5 text-gray-400 group-hover/favorite:text-red-500 transition-colors" />
							</button>
						</div>
						<h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">Charming Condo in Green Valley</h3>
						<p class="text-gray-600 text-sm mb-4 flex items-center gap-1">
							<MapPin class="w-4 h-4" />
							9012 Valley View Ln, Las Vegas, NV 89123
						</p>
						<div class="flex items-center gap-6 text-sm text-gray-600 mb-5 pb-5 border-b border-gray-100">
							<span class="flex items-center gap-1.5">
								<Home class="w-4 h-4 text-primary-600" />
								<span class="font-semibold">2</span> Beds
							</span>
							<span class="flex items-center gap-1.5">
								<Bath class="w-4 h-4 text-primary-600" />
								<span class="font-semibold">2</span> Baths
							</span>
							<span class="flex items-center gap-1.5">
								<Square class="w-4 h-4 text-primary-600" />
								<span class="font-semibold">1,400</span> sqft
							</span>
						</div>
						<div class="flex items-center justify-between">
							<span class="text-xs text-gray-500">Listed 1 week ago</span>
							<span class="inline-flex items-center gap-2 text-primary-600 font-semibold group-hover:gap-3 transition-all">
								View Details
								<ChevronRight class="w-4 h-4" />
							</span>
						</div>
					</div>
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Why Choose Section -->
<section class="py-20 bg-gradient-to-b from-white via-gray-50 to-white">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-7xl mx-auto">
			<div class="text-center mb-16">
				<h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Choose Dr. Janet Duffy?</h2>
				<p class="text-xl text-gray-600 max-w-2xl mx-auto">Expert real estate guidance backed by 15+ years of proven success in Las Vegas</p>
			</div>
			<div class="grid md:grid-cols-3 gap-8 lg:gap-10">
				<div class="group text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-primary-300 transform hover:-translate-y-1">
					<div class="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
						<Trophy class="w-10 h-10 text-white" />
					</div>
					<h3 class="text-2xl font-bold text-gray-900 mb-3">15+ Years Experience</h3>
					<p class="text-gray-600 leading-relaxed">
						Proven track record of successful transactions in the Las Vegas market. Trusted by hundreds of satisfied clients.
					</p>
				</div>
				<div class="group text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-primary-300 transform hover:-translate-y-1">
					<div class="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
						<Target class="w-10 h-10 text-white" />
					</div>
					<h3 class="text-2xl font-bold text-gray-900 mb-3">Expert Guidance</h3>
					<p class="text-gray-600 leading-relaxed">
						Personalized service tailored to your unique real estate needs. From first-time buyers to luxury investors.
					</p>
				</div>
				<div class="group text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-primary-300 transform hover:-translate-y-1">
					<div class="w-20 h-20 bg-gradient-to-br from-primary-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
						<MapPin class="w-10 h-10 text-white" />
					</div>
					<h3 class="text-2xl font-bold text-gray-900 mb-3">Local Expertise</h3>
					<p class="text-gray-600 leading-relaxed">
						Deep knowledge of Las Vegas neighborhoods, market trends, and investment opportunities across the valley.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Services Section -->
<section class="py-16 bg-gray-50">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-7xl mx-auto">
			<div class="text-center mb-12">
				<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Our Services</h2>
				<p class="text-gray-600 text-lg">Comprehensive real estate solutions for all your needs</p>
			</div>
			<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
				<a href="/properties" class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-200 group">
					<div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-600 transition-colors">
						<Home class="w-6 h-6 text-primary-600 group-hover:text-white transition-colors" />
					</div>
					<h3 class="text-lg font-bold text-gray-900 mb-2">Buying</h3>
					<p class="text-gray-600 text-sm">Find your perfect home with expert guidance</p>
				</a>
				<a href="/home-value" class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-200 group">
					<div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-600 transition-colors">
						<DollarSign class="w-6 h-6 text-primary-600 group-hover:text-white transition-colors" />
					</div>
					<h3 class="text-lg font-bold text-gray-900 mb-2">Selling</h3>
					<p class="text-gray-600 text-sm">Maximize your home's value</p>
				</a>
				<a href="/rentals" class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-200 group">
					<div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-600 transition-colors">
						<Key class="w-6 h-6 text-primary-600 group-hover:text-white transition-colors" />
					</div>
					<h3 class="text-lg font-bold text-gray-900 mb-2">Rentals</h3>
					<p class="text-gray-600 text-sm">Luxury rental properties</p>
				</a>
				<a href="/properties" class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-200 group">
					<div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-600 transition-colors">
						<BarChart3 class="w-6 h-6 text-primary-600 group-hover:text-white transition-colors" />
					</div>
					<h3 class="text-lg font-bold text-gray-900 mb-2">Investments</h3>
					<p class="text-gray-600 text-sm">Build your portfolio</p>
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Featured Communities -->
<section class="py-16 bg-white">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-7xl mx-auto">
			<div class="text-center mb-12">
				<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Popular Neighborhoods</h2>
				<p class="text-gray-600 text-lg">Explore Las Vegas's most sought-after communities</p>
			</div>
			<div class="grid md:grid-cols-3 gap-6">
				<a href="/properties?neighborhood=west-summerlin" class="group bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-200 overflow-hidden">
					<div class="h-48 bg-gradient-to-br from-primary-100 to-primary-200"></div>
					<div class="p-6">
						<h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">West Summerlin</h3>
						<p class="text-gray-600 text-sm mb-4">Luxury master-planned community</p>
						<span class="text-primary-600 font-semibold text-sm">View Properties →</span>
					</div>
				</a>
				<a href="/properties?neighborhood=the-ridges" class="group bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-200 overflow-hidden">
					<div class="h-48 bg-gradient-to-br from-primary-200 to-primary-300"></div>
					<div class="p-6">
						<h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">The Ridges</h3>
						<p class="text-gray-600 text-sm mb-4">Exclusive gated community</p>
						<span class="text-primary-600 font-semibold text-sm">View Properties →</span>
					</div>
				</a>
				<a href="/properties?neighborhood=red-rock" class="group bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-200 overflow-hidden">
					<div class="h-48 bg-gradient-to-br from-primary-300 to-primary-400"></div>
					<div class="p-6">
						<h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">Red Rock Country Club</h3>
						<p class="text-gray-600 text-sm mb-4">Premier golf course community</p>
						<span class="text-primary-600 font-semibold text-sm">View Properties →</span>
					</div>
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Testimonials Section -->
<section class="py-16 bg-gray-50">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-7xl mx-auto">
			<div class="text-center mb-12">
				<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Client Testimonials</h2>
				<p class="text-gray-600 text-lg">What our clients say about working with us</p>
			</div>
			<div class="grid md:grid-cols-3 gap-6">
				<div class="bg-white rounded-xl p-6 shadow-md border border-gray-200">
					<div class="flex items-center gap-1 mb-4">
						{#each Array(5) as _}
							<Star class="w-5 h-5 text-yellow-400 fill-yellow-400" />
						{/each}
					</div>
					<p class="text-gray-700 mb-4">
						"Dr. Duffy made our first home buying experience seamless. Her knowledge of the Las Vegas market and attention to detail helped us find the perfect home."
					</p>
					<div class="border-t border-gray-100 pt-4">
						<div class="font-bold text-gray-900">Sarah & Mike Johnson</div>
						<div class="text-sm text-gray-600">First-time Buyers</div>
					</div>
				</div>
				<div class="bg-white rounded-xl p-6 shadow-md border border-gray-200">
					<div class="flex items-center gap-1 mb-4">
						{#each Array(5) as _}
							<Star class="w-5 h-5 text-yellow-400 fill-yellow-400" />
						{/each}
					</div>
					<p class="text-gray-700 mb-4">
						"Jan's expertise in luxury properties is unmatched. She helped us sell our home for 15% above asking price and found us an incredible investment property."
					</p>
					<div class="border-t border-gray-100 pt-4">
						<div class="font-bold text-gray-900">Robert Chen</div>
						<div class="text-sm text-gray-600">Luxury Home Seller & Investor</div>
					</div>
				</div>
				<div class="bg-white rounded-xl p-6 shadow-md border border-gray-200">
					<div class="flex items-center gap-1 mb-4">
						{#each Array(5) as _}
							<Star class="w-5 h-5 text-yellow-400 fill-yellow-400" />
						{/each}
					</div>
					<p class="text-gray-700 mb-4">
						"Professional, responsive, and results-driven. Jan's market knowledge and negotiation skills saved us thousands on our home purchase."
					</p>
					<div class="border-t border-gray-100 pt-4">
						<div class="font-bold text-gray-900">Lisa Martinez</div>
						<div class="text-sm text-gray-600">Relocating from California</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Market Statistics Section -->
<section class="py-16 bg-white">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-7xl mx-auto">
			<div class="text-center mb-12">
				<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Market Insights</h2>
				<p class="text-gray-600 text-lg">Current Las Vegas real estate statistics</p>
			</div>
			<div class="grid md:grid-cols-4 gap-6">
				<div class="bg-gray-50 rounded-xl p-6 text-center border border-gray-200">
					<div class="text-3xl md:text-4xl font-bold text-primary-600 mb-2">$485K</div>
					<div class="text-gray-700 font-semibold">Median Home Price</div>
				</div>
				<div class="bg-gray-50 rounded-xl p-6 text-center border border-gray-200">
					<div class="text-3xl md:text-4xl font-bold text-primary-600 mb-2">46</div>
					<div class="text-gray-700 font-semibold">Days on Market</div>
				</div>
				<div class="bg-gray-50 rounded-xl p-6 text-center border border-gray-200">
					<div class="text-3xl md:text-4xl font-bold text-primary-600 mb-2">98%</div>
					<div class="text-gray-700 font-semibold">List Price Received</div>
				</div>
				<div class="bg-gray-50 rounded-xl p-6 text-center border border-gray-200">
					<div class="text-3xl md:text-4xl font-bold text-primary-600 mb-2">4</div>
					<div class="text-gray-700 font-semibold">Months Supply</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="py-16 bg-primary-600">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-4xl mx-auto text-center">
			<h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Find Your Dream Home?</h2>
			<p class="text-xl text-white/90 mb-8">
				Let's discuss your real estate goals and how I can help you achieve them.
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="/contact" class="bg-white text-primary-600 hover:bg-gray-100 font-bold px-8 py-3 rounded-lg transition-colors shadow-lg">
					Schedule Consultation
				</a>
				<a href="/home-value" class="bg-transparent text-white border-2 border-white hover:bg-white hover:text-primary-600 font-bold px-8 py-3 rounded-lg transition-colors">
					Get Free Home Valuation
				</a>
			</div>
		</div>
	</div>
</section>
