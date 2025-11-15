<script>
const achievements = [
  {
    title: '$38.9M+ Sales Volume',
    description: '2024 individual sales achievement',
  },
  {
    title: '#1 BHHS Agent',
    description: 'Top agent at Summerlin office',
  },
  {
    title: 'Top 0.3% Nationwide',
    description: 'Among top 5,000 realtors in the USA',
  },
  {
    title: '99% Client Satisfaction',
    description: 'Based on client feedback and reviews',
  },
];

const services = [
  'Residential Sales & Purchases',
  'New Construction Specialist (CNHS)',
  'Senior Real Estate Services (SRES)',
  "Buyer's Representation (ABR)",
  'Luxury Home Specialization',
  'Investment Property Consulting',
  'Market Analysis & Pricing Strategy',
  'Bilingual Services (English & Korean)',
];

const certifications = [
  'Licensed REALTOR in Nevada (S.0186147)',
  "Accredited Buyer's Representative® (ABR)",
  'Certified New Home Specialist™ (CNHS)',
  'Seniors Real Estate Specialist® (SRES)',
  'Berkshire Hathaway HomeServices Nevada Properties',
  'Top 5,000 Realtors in the United States (2024)',
];
</script>

<svelte:head>
	<title>About Jung H. Kim | #1 Summerlin Las Vegas REALTOR | Korean Real Estate Agent</title>
	<meta name="description" content="Meet Jung H. Kim, award-winning Las Vegas REALTOR with $38.9M+ in sales, #1 agent at BHHS Summerlin, top 0.3% nationwide. ABR, CNHS, SRES certified. Bilingual English & Korean services." />
	<meta name="keywords" content="Jung H. Kim, Jung Kim realtor, Las Vegas REALTOR, Summerlin real estate agent, Korean realtor Las Vegas, BHHS agent, ABR CNHS SRES, luxury homes Summerlin" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://drjanduffy.com/jung-kim/about" />
	<meta property="og:title" content="About Jung H. Kim | #1 Summerlin Las Vegas REALTOR" />
	<meta property="og:description" content="Award-winning Las Vegas REALTOR with $38.9M+ in sales. Top 0.3% nationwide. Bilingual English & Korean services." />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://drjanduffy.com/jung-kim/about" />
	<meta property="twitter:title" content="About Jung H. Kim | #1 Summerlin Las Vegas REALTOR" />
	<meta property="twitter:description" content="Award-winning Las Vegas REALTOR with $38.9M+ in sales. Top 0.3% nationwide. Bilingual English & Korean services." />
</svelte:head>

<div class="container mx-auto px-4 py-8">
	<!-- Hero Section -->
	<div class="text-center mb-16">
		<div class="w-32 h-32 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
			<span class="text-white font-bold text-4xl">JK</span>
		</div>
		<h1 class="text-4xl font-bold mb-4 text-gray-800">Jung H. Kim</h1>
		<p class="text-xl text-primary-600 font-semibold mb-4">Licensed REALTOR® | ABR, CNHS, SRES</p>
		<p class="text-lg text-gray-600 max-w-3xl mx-auto">
			Award-winning Las Vegas real estate expert recognized as the #1 agent at Berkshire Hathaway HomeServices Summerlin office. Providing exceptional service in English and Korean to help clients achieve their real estate dreams.
		</p>
	</div>

	<!-- About Story -->
	<div class="max-w-4xl mx-auto mb-16">
		<div class="grid md:grid-cols-2 gap-12 items-center">
			<div>
				<h2 class="text-3xl font-bold mb-6 text-gray-800">My Story</h2>
				<div class="space-y-4 text-gray-600">
					<p>
						My journey in Las Vegas real estate has been driven by a passion for excellence and a commitment to serving my clients with integrity and professionalism. Being recognized as the #1 individual sales executive for 2024 at Berkshire Hathaway HomeServices Nevada Properties, with over $38.9 million in sales volume, is a testament to my dedication and the trust my clients place in me.
					</p>
					<p>
						I hold multiple prestigious certifications including Accredited Buyer's Representative® (ABR), Certified New Home Specialist™ (CNHS), and Seniors Real Estate Specialist® (SRES). These specialized designations ensure that I provide expert guidance tailored to your unique needs, whether you're buying your first home, navigating new construction, or planning for retirement.
					</p>
					<p>
						As a bilingual agent fluent in both English and Korean, I serve a diverse clientele and pride myself on clear communication and cultural understanding. My deep knowledge of Summerlin, The Ridges, Tournament Hills, and surrounding Las Vegas communities allows me to provide invaluable insights that help my clients make informed decisions.
					</p>
					<p>
						Being ranked in the top 0.3% of realtors nationwide is an honor that reflects my unwavering commitment to excellence. Every transaction, every client, and every home is important to me. I'm here to guide you through one of life's most significant financial decisions with expertise, care, and proven results.
					</p>
				</div>
			</div>
			<div class="bg-gray-50 rounded-lg p-8">
				<h3 class="text-xl font-semibold mb-4 text-gray-800">Quick Facts</h3>
				<ul class="space-y-3">
					<li class="text-gray-600">• #1 BHHS Summerlin Agent</li>
					<li class="text-gray-600">• $38.9M+ in 2024 sales</li>
					<li class="text-gray-600">• Top 0.3% nationwide</li>
					<li class="text-gray-600">• ABR, CNHS, SRES certified</li>
					<li class="text-gray-600">• Bilingual: English & Korean</li>
					<li class="text-gray-600">• New construction expert</li>
					<li class="text-gray-600">• Senior services specialist</li>
				</ul>
			</div>
		</div>
	</div>

	<!-- Achievements -->
	<div class="mb-16">
		<h2 class="text-3xl font-bold text-center mb-12 text-gray-800">Award-Winning Performance</h2>
		<div class="grid md:grid-cols-4 gap-8">
			{#each achievements as achievement}
				<div class="text-center">
					<h3 class="text-xl font-semibold mb-2 text-gray-800">{achievement.title}</h3>
					<p class="text-gray-600">{achievement.description}</p>
				</div>
			{/each}
		</div>
	</div>

	<!-- Services -->
	<div class="mb-16">
		<h2 class="text-3xl font-bold text-center mb-12 text-gray-800">Specialized Services I Provide</h2>
		<div class="max-w-4xl mx-auto">
			<div class="grid md:grid-cols-2 gap-6">
				{#each services as service}
					<div class="flex items-start">
						<span class="text-primary-600 mr-2">✓</span>
						<span class="text-gray-700">{service}</span>
					</div>
				{/each}
			</div>
		</div>
	</div>

	<!-- Certifications -->
	<div class="mb-16">
		<h2 class="text-3xl font-bold text-center mb-12 text-gray-800">Professional Certifications & Recognitions</h2>
		<div class="max-w-4xl mx-auto">
			<div class="grid md:grid-cols-2 gap-6">
				{#each certifications as cert}
					<div class="flex items-start">
						<span class="text-primary-600 mr-2">★</span>
						<span class="text-gray-700">{cert}</span>
					</div>
				{/each}
			</div>
		</div>
	</div>

	<!-- Client Testimonials -->
	<div class="mb-16">
		<h2 class="text-3xl font-bold text-center mb-12 text-gray-800">What My Clients Say</h2>
		<div class="grid md:grid-cols-3 gap-8">
			<div class="bg-white rounded-lg shadow-lg p-6">
				<p class="text-gray-600 mb-4">
					"Jung's expertise in new construction was invaluable. She guided us through every detail of our Summerlin home purchase, from lot selection to final walkthrough. Her CNHS certification really showed!"
				</p>
				<div class="font-semibold text-gray-800">David & Emma Wilson</div>
				<div class="text-sm text-gray-500">New Construction Buyers</div>
			</div>

			<div class="bg-white rounded-lg shadow-lg p-6">
				<p class="text-gray-600 mb-4">
					"정 김 에이전트는 한국어로 모든 과정을 설명해 주셔서 정말 편했습니다. 전문성과 친절함, 그리고 뛰어난 협상력으로 최고의 결과를 얻었습니다. 강력 추천합니다!"
				</p>
				<div class="font-semibold text-gray-800">박지훈 & 김미영</div>
				<div class="text-sm text-gray-500">Korean-speaking Clients</div>
			</div>

			<div class="bg-white rounded-lg shadow-lg p-6">
				<p class="text-gray-600 mb-4">
					"As seniors downsizing, we needed someone who understood our specific needs. Jung's SRES certification and compassionate approach made our transition smooth and stress-free. Highly recommend!"
				</p>
				<div class="font-semibold text-gray-800">Robert & Patricia Anderson</div>
				<div class="text-sm text-gray-500">Senior Clients - Downsizing</div>
			</div>
		</div>
	</div>

	<!-- Areas of Expertise -->
	<div class="mb-16">
		<h2 class="text-3xl font-bold text-center mb-12 text-gray-800">Areas of Expertise</h2>
		<div class="max-w-4xl mx-auto">
			<div class="grid md:grid-cols-2 gap-8">
				<div class="bg-primary-50 rounded-lg p-6">
					<h3 class="text-xl font-bold mb-3 text-gray-800">🏘️ Summerlin Communities</h3>
					<p class="text-gray-600">
						As the #1 agent at BHHS Summerlin, I have unparalleled expertise in all Summerlin villages, from The Ridges to Tournament Hills. I know the market trends, new developments, and hidden gems that make Summerlin the premier Las Vegas community.
					</p>
				</div>
				<div class="bg-primary-50 rounded-lg p-6">
					<h3 class="text-xl font-bold mb-3 text-gray-800">🏗️ New Construction</h3>
					<p class="text-gray-600">
						With my Certified New Home Specialist™ designation, I guide buyers through the complexities of new construction purchases, including builder negotiations, design selections, construction timelines, and final inspections.
					</p>
				</div>
				<div class="bg-primary-50 rounded-lg p-6">
					<h3 class="text-xl font-bold mb-3 text-gray-800">👴 Senior Services</h3>
					<p class="text-gray-600">
						As an SRES specialist, I understand the unique financial, legal, and emotional considerations seniors face. Whether downsizing, relocating to retirement communities, or estate planning, I provide expert, compassionate guidance.
					</p>
				</div>
				<div class="bg-primary-50 rounded-lg p-6">
					<h3 class="text-xl font-bold mb-3 text-gray-800">🌏 Bilingual Services</h3>
					<p class="text-gray-600">
						Fluent in English and Korean, I serve diverse clients with clear communication and cultural understanding. 한국어로 편하게 상담하실 수 있습니다.
					</p>
				</div>
			</div>
		</div>
	</div>

	<!-- CTA Section -->
	<div class="bg-primary-600 text-white rounded-lg p-8 text-center">
		<h2 class="text-2xl font-bold mb-4">Ready to Work with a Top-Performing Agent?</h2>
		<p class="text-lg mb-6">
			Let's discuss your real estate goals and how my award-winning service can help you achieve them. English and Korean language services available.
		</p>
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<a href="/jung-kim/contact" class="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
				Get in Touch
			</a>
			<a href="tel:+17022244978" class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
				Call (702) 224-4978
			</a>
		</div>
	</div>
</div>
