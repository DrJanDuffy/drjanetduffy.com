<script>
	import { Settings, Briefcase, User } from 'lucide-svelte';
</script>

<svelte:head>
	<title>PARALLEL | Creative Specialists</title>
	<meta name="description" content="Specialists in SEO, PPC, Websites, Displays, Content & Mobile" />
</svelte:head>

<!-- Hero Section -->
<section class="hero-section" aria-label="Hero section">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-7xl mx-auto">
			<!-- Hero Content with Orange Frame -->
			<div class="relative p-4 sm:p-6 md:p-8 lg:p-12">
				<!-- Orange Frame - Open rectangle -->
				<div class="hero-frame" aria-hidden="true"></div>
				<div class="relative bg-white rounded-lg p-4 sm:p-6 md:p-8 lg:p-12">
					<div class="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
					<!-- Left Side - Person Image -->
					<div class="relative order-2 md:order-1">
						<!-- Person Image Placeholder -->
						<div class="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-lg overflow-hidden" role="img" aria-label="Creative professional standing">
							<!-- Background with gradient -->
							<div class="absolute inset-0 bg-gradient-to-br from-yellow-100 via-blue-100 to-yellow-200"></div>
							
							<!-- Person representation - standing figure -->
							<div class="absolute inset-0 flex items-end justify-center pb-8">
								<div class="relative w-56 h-80">
									<!-- Head -->
									<div class="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gray-700 rounded-full border-4 border-gray-800 shadow-lg z-10">
										<!-- Glasses -->
										<div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-8 border-2 border-gray-900 rounded-full"></div>
									</div>
									
									<!-- Body/Torso - Mustard yellow sweater -->
									<div class="absolute top-16 left-1/2 transform -translate-x-1/2 w-40 h-48 bg-yellow-500 rounded-t-3xl shadow-xl">
										<!-- Scarf - multi-colored striped -->
										<div class="absolute -top-2 left-1/2 transform -translate-x-1/2 w-36 h-8 rounded-full">
											<div class="h-full w-full rounded-full hero-scarf"></div>
										</div>
									</div>
									
									<!-- Legs - Dark jeans -->
									<div class="absolute top-60 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-gray-800 rounded-b-2xl shadow-xl">
										<!-- Left leg -->
										<div class="absolute bottom-0 left-1/4 w-12 h-20 bg-gray-900 rounded-b-lg"></div>
										<!-- Right leg -->
										<div class="absolute bottom-0 right-1/4 w-12 h-20 bg-gray-900 rounded-b-lg"></div>
									</div>
									
									<!-- Shoes -->
									<div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-28 h-6 bg-black rounded-full"></div>
								</div>
							</div>
							
							<!-- Abstract shapes overlay -->
							<div class="absolute top-10 right-10 w-32 h-32 bg-blue-300 rounded-full opacity-50 blur-2xl"></div>
							<div class="absolute bottom-20 left-10 w-24 h-24 bg-yellow-300 rounded-full opacity-50 blur-2xl"></div>
							<div class="absolute top-1/2 right-1/4 w-20 h-20 bg-blue-200 rounded-full opacity-40 blur-xl"></div>
						</div>
					</div>
					
					<!-- Right Side - Text Content -->
					<div class="relative z-10 order-1 md:order-2">
						<!-- Abstract shapes in background -->
						<div class="absolute -top-10 -right-10 w-40 h-40 bg-blue-200 rounded-full opacity-30 blur-2xl" aria-hidden="true"></div>
						<div class="absolute -bottom-10 -left-10 w-32 h-32 bg-yellow-200 rounded-full opacity-30 blur-2xl" aria-hidden="true"></div>
						
						<div class="relative">
							<h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-purple-600 mb-4 sm:mb-6 leading-tight">
								THE CREATIVE
							</h1>
							<p class="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
								SPECIALISTS IN SEO, PPC, WEBSITES, DISPLAYS, CONTENT & MOBILE
							</p>
							<a 
								href="/properties" 
								class="btn-primary"
								aria-label="View all features"
							>
								VIEW ALL FEATURES
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Team Count Section -->
<section class="py-8 sm:py-10 md:py-12 bg-white" aria-label="Team information">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-4xl mx-auto text-center">
			<h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
				A TEAM OF <span class="text-orange-500" aria-label="150">150</span> SPECIALISTS
			</h2>
		</div>
	</div>
</section>

<!-- Services Section -->
<section class="py-12 sm:py-14 md:py-16 bg-white" aria-label="Our services">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-7xl mx-auto">
			<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
				<!-- Service 1: Brand Identity -->
				<article class="bg-white p-6 sm:p-8 focus-within:ring-2 focus-within:ring-orange-500 focus-within:ring-offset-2 rounded-lg">
					<div class="mb-6" aria-hidden="true">
						<Settings class="w-12 h-12 sm:w-16 sm:h-16 text-gray-400" />
					</div>
					<h3 class="text-lg sm:text-xl font-bold text-gray-800 mb-4 uppercase tracking-wide">
						BRAND IDENTITY
					</h3>
					<p class="text-sm sm:text-base text-gray-500 mb-6 leading-relaxed">
						As a market leader in global air freight forwarding, OIA Global excels in providing tailored transportation solutions for client-specific needs.
					</p>
					<a 
						href="/about" 
						class="text-orange-500 font-semibold hover:text-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded transition-colors inline-flex items-center gap-2"
						aria-label="Read more about Brand Identity"
					>
						READ MORE →
					</a>
				</article>
				
				<!-- Service 2: Web Design & UI -->
				<article class="bg-white p-6 sm:p-8 focus-within:ring-2 focus-within:ring-orange-500 focus-within:ring-offset-2 rounded-lg">
					<div class="mb-6" aria-hidden="true">
						<Briefcase class="w-12 h-12 sm:w-16 sm:h-16 text-gray-400" />
					</div>
					<h3 class="text-lg sm:text-xl font-bold text-gray-800 mb-4 uppercase tracking-wide">
						WEB DESIGN & UI
					</h3>
					<p class="text-sm sm:text-base text-gray-500 mb-6 leading-relaxed">
						As a market leader in global air freight forwarding, OIA Global excels in providing tailored transportation solutions for client-specific needs.
					</p>
					<a 
						href="/about" 
						class="text-orange-500 font-semibold hover:text-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded transition-colors inline-flex items-center gap-2"
						aria-label="Read more about Web Design & UI"
					>
						READ MORE →
					</a>
				</article>
				
				<!-- Service 3: Development & CMS -->
				<article class="bg-white p-6 sm:p-8 focus-within:ring-2 focus-within:ring-orange-500 focus-within:ring-offset-2 rounded-lg sm:col-span-2 lg:col-span-1">
					<div class="mb-6" aria-hidden="true">
						<User class="w-12 h-12 sm:w-16 sm:h-16 text-gray-400" />
					</div>
					<h3 class="text-lg sm:text-xl font-bold text-gray-800 mb-4 uppercase tracking-wide">
						DEVELOPMENT & CMS
					</h3>
					<p class="text-sm sm:text-base text-gray-500 mb-6 leading-relaxed">
						As a market leader in global air freight forwarding, OIA Global excels in providing tailored transportation solutions for client-specific needs.
					</p>
					<a 
						href="/about" 
						class="text-orange-500 font-semibold hover:text-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded transition-colors inline-flex items-center gap-2"
						aria-label="Read more about Development & CMS"
					>
						READ MORE →
					</a>
				</article>
			</div>
		</div>
	</div>
</section>
