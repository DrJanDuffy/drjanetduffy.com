<script>
// This could be expanded to load dynamic content from a CMS
const achievements = [
  {
    title: '150+ Properties Sold',
    description: 'Successfully closed transactions across Las Vegas',
  },
  {
    title: '$50M+ Sales Volume',
    description: 'Total value of properties sold',
  },
  {
    title: '15 Years Experience',
    description: 'Dedicated real estate expertise',
  },
  {
    title: '98% Client Satisfaction',
    description: 'Based on client feedback and reviews',
  },
];

const services = [
  'Residential Sales & Purchases',
  'Luxury Home Specialization',
  'First-Time Buyer Guidance',
  'Investment Property Consulting',
  'Market Analysis & Pricing',
  'Negotiation & Transaction Management',
  'Rental Property Management',
  'Relocation Services',
];

const certifications = [
  'Licensed REALTOR in Nevada',
  'Certified Residential Specialist (CRS)',
  "Accredited Buyer's Representative (ABR)",
  'Graduate, REALTOR Institute (GRI)',
  'Luxury Home Marketing Specialist',
  'Certified Negotiation Expert (CNE)',
];
</script>

<svelte:head>
	<title>About Dr. Jan Duffy | Las Vegas REALTOR</title>
	<meta name="description" content="Learn about Dr. Jan Duffy, a trusted Las Vegas REALTOR with 15+ years of experience, 150+ properties sold, and $50M+ in sales volume." />
	<meta name="keywords" content="Dr. Jan Duffy, Las Vegas REALTOR, real estate agent, about, experience, credentials" />
	
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://drjanduffy.com/about" />
	<meta property="og:title" content="About Dr. Jan Duffy | Las Vegas REALTOR" />
	<meta property="og:description" content="Learn about Dr. Jan Duffy, a trusted Las Vegas REALTOR with 15+ years of experience and proven results." />
	
	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://drjanduffy.com/about" />
	<meta property="twitter:title" content="About Dr. Jan Duffy | Las Vegas REALTOR" />
	<meta property="twitter:description" content="Learn about Dr. Jan Duffy, a trusted Las Vegas REALTOR with 15+ years of experience and proven results." />
</svelte:head>

<section class="section relative" style="background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);">
	<div class="container-premium">
		<!-- Hero Section -->
		<div class="text-center mb-20">
			<div class="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full mx-auto mb-8 shadow-2xl">
				<span class="text-white font-display font-bold text-5xl">JD</span>
			</div>
			<h1 class="font-display text-5xl md:text-6xl font-bold mb-6 text-gray-900" style="letter-spacing: -0.03em;">Dr. Janet Duffy</h1>
			<p class="text-2xl text-primary-600 font-semibold mb-6">Licensed REALTOR®</p>
			<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-6"></div>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
				Your trusted Las Vegas real estate expert with over 15 years of experience helping clients buy, sell, and invest in properties throughout the greater Las Vegas area.
			</p>
		</div>
	
		<!-- About Story -->
		<div class="max-w-6xl mx-auto mb-20">
			<div class="grid md:grid-cols-2 gap-16 items-center">
				<div>
					<h2 class="font-display text-4xl md:text-5xl font-bold mb-8 text-gray-900" style="letter-spacing: -0.02em;">My Story</h2>
					<div class="space-y-6 text-gray-700 leading-relaxed text-lg">
						<p>
							With over 15 years of experience in the Las Vegas real estate market, I've built a reputation for delivering exceptional results and personalized service. My journey in real estate began with a passion for helping people find their perfect home and has evolved into a comprehensive practice serving buyers, sellers, and investors.
						</p>
						<p>
							I understand that buying or selling a home is one of life's most significant decisions. That's why I'm committed to providing expert guidance, market insights, and unwavering support throughout every step of the process. My clients trust me not just for my expertise, but for my integrity, attention to detail, and genuine care for their success.
						</p>
						<p>
							Based in Las Vegas, I have an intimate knowledge of local neighborhoods, market trends, and the unique characteristics that make each area special. Whether you're a first-time buyer, seasoned investor, or looking to sell your current home, I'm here to help you achieve your real estate goals.
						</p>
					</div>
				</div>
				<div class="bg-gradient-to-br from-white to-primary-50/50 rounded-2xl p-10 shadow-xl border border-gray-100">
					<h3 class="font-display text-2xl font-bold mb-6 text-gray-900">Quick Facts</h3>
					<ul class="space-y-4">
						<li class="flex items-center gap-3 text-gray-700 text-lg">
							<span class="w-2 h-2 bg-primary-600 rounded-full"></span>
							Las Vegas native
						</li>
						<li class="flex items-center gap-3 text-gray-700 text-lg">
							<span class="w-2 h-2 bg-primary-600 rounded-full"></span>
							15+ years in real estate
						</li>
						<li class="flex items-center gap-3 text-gray-700 text-lg">
							<span class="w-2 h-2 bg-primary-600 rounded-full"></span>
							Luxury home specialist
						</li>
						<li class="flex items-center gap-3 text-gray-700 text-lg">
							<span class="w-2 h-2 bg-primary-600 rounded-full"></span>
							Investment property expert
						</li>
						<li class="flex items-center gap-3 text-gray-700 text-lg">
							<span class="w-2 h-2 bg-primary-600 rounded-full"></span>
							Available 7 days a week
						</li>
					</ul>
				</div>
			</div>
		</div>
	
		<!-- Achievements -->
		<div class="mb-20">
			<div class="text-center mb-16">
				<h2 class="font-display text-4xl md:text-5xl font-bold mb-6 text-gray-900" style="letter-spacing: -0.02em;">My Achievements</h2>
				<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-4"></div>
			</div>
			<div class="grid-premium md:grid-cols-4 gap-8">
				{#each achievements as achievement}
					<div class="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2">
						<h3 class="font-display text-2xl font-bold mb-3 text-gray-900">{achievement.title}</h3>
						<p class="text-gray-600 text-lg">{achievement.description}</p>
					</div>
				{/each}
			</div>
		</div>
	
		<!-- Services -->
		<div class="mb-20">
			<div class="text-center mb-16">
				<h2 class="font-display text-4xl md:text-5xl font-bold mb-6 text-gray-900" style="letter-spacing: -0.02em;">Services I Provide</h2>
				<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-4"></div>
			</div>
			<div class="max-w-5xl mx-auto">
				<div class="grid md:grid-cols-2 gap-6">
					{#each services as service}
						<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
							<span class="text-gray-700 text-lg font-medium">{service}</span>
						</div>
					{/each}
				</div>
			</div>
		</div>
	
		<!-- Certifications -->
		<div class="mb-20">
			<div class="text-center mb-16">
				<h2 class="font-display text-4xl md:text-5xl font-bold mb-6 text-gray-900" style="letter-spacing: -0.02em;">Professional Certifications</h2>
				<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-4"></div>
			</div>
			<div class="max-w-5xl mx-auto">
				<div class="grid md:grid-cols-2 gap-6">
					{#each certifications as cert}
						<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
							<span class="text-gray-700 text-lg font-medium">{cert}</span>
						</div>
					{/each}
				</div>
			</div>
		</div>
	
		<!-- Client Testimonials -->
		<div class="mb-20" id="testimonials">
			<div class="text-center mb-16">
				<h2 class="font-display text-4xl md:text-5xl font-bold mb-6 text-gray-900" style="letter-spacing: -0.02em;">What My Clients Say</h2>
				<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mb-4"></div>
			</div>
			<div class="grid-premium md:grid-cols-3 gap-8">
				<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
					<div class="flex items-center gap-1 mb-4">
						{#each Array(5) as _}
							<svg class="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
								<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
							</svg>
						{/each}
					</div>
					<p class="text-gray-700 mb-6 leading-relaxed text-lg">
						"Dr. Duffy made our first home buying experience seamless. Her knowledge of the Las Vegas market and attention to detail helped us find the perfect home within our budget."
					</p>
					<div class="border-t border-gray-200 pt-6">
						<div class="font-display font-bold text-gray-900 text-lg">Sarah & Mike Johnson</div>
						<div class="text-sm text-gray-600">First-time Buyers</div>
					</div>
				</div>
				
				<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
					<div class="flex items-center gap-1 mb-4">
						{#each Array(5) as _}
							<svg class="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
								<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
							</svg>
						{/each}
					</div>
					<p class="text-gray-700 mb-6 leading-relaxed text-lg">
						"Jan's expertise in luxury properties is unmatched. She helped us sell our home for 15% above asking price and found us an incredible investment property."
					</p>
					<div class="border-t border-gray-200 pt-6">
						<div class="font-display font-bold text-gray-900 text-lg">Robert Chen</div>
						<div class="text-sm text-gray-600">Luxury Home Seller & Investor</div>
					</div>
				</div>
				
				<div class="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
					<div class="flex items-center gap-1 mb-4">
						{#each Array(5) as _}
							<svg class="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
								<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
							</svg>
						{/each}
					</div>
					<p class="text-gray-700 mb-6 leading-relaxed text-lg">
						"Professional, responsive, and results-driven. Jan's market knowledge and negotiation skills saved us thousands on our home purchase."
					</p>
					<div class="border-t border-gray-200 pt-6">
						<div class="font-display font-bold text-gray-900 text-lg">Lisa Martinez</div>
						<div class="text-sm text-gray-600">Relocating from California</div>
					</div>
				</div>
			</div>
		</div>
	
		<!-- CTA Section -->
		<div class="relative overflow-hidden bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 text-white rounded-3xl p-12 text-center shadow-2xl">
			<div class="absolute inset-0 overflow-hidden">
				<div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
				<div class="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
			</div>
			<div class="relative z-10">
				<h2 class="font-display text-4xl md:text-5xl font-bold mb-6 text-white" style="text-shadow: 0 2px 10px rgba(0,0,0,0.2);">Ready to Work Together?</h2>
				<p class="text-xl mb-8 text-white/95 max-w-2xl mx-auto">
					Let's discuss your real estate goals and how I can help you achieve them. I'm here to provide expert guidance every step of the way.
				</p>
				<div class="flex flex-col sm:flex-row gap-6 justify-center">
					<a href="/contact" class="group relative overflow-hidden bg-white text-primary-700 px-10 py-5 rounded-xl font-bold text-lg shadow-2xl hover:shadow-white/30 transition-all duration-300 hover:scale-110 hover:-translate-y-1">
						<span class="relative z-10">Get in Touch</span>
						<div class="absolute inset-0 bg-gradient-to-r from-primary-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
					</a>
					<a href="tel:+17022221964" class="group relative overflow-hidden bg-transparent text-white border-2 border-white/50 px-10 py-5 rounded-xl font-bold text-lg backdrop-blur-sm hover:bg-white hover:text-primary-700 transition-all duration-300 hover:scale-110 hover:-translate-y-1">
						<span class="relative z-10">Call 702-222-1964</span>
					</a>
				</div>
			</div>
		</div>
	</div>
</section>