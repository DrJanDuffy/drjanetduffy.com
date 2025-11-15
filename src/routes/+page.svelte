<script>
	import SEO from '$lib/components/SEO.svelte';

	const schema = {
		'@context': 'https://schema.org',
		'@type': 'RealEstateAgent',
		name: 'Dr. Janet Duffy',
		description: 'Award-winning Las Vegas Real Estate Agent specializing in homes and condos throughout the Las Vegas Valley',
		url: 'https://drjanetduffy.com',
		telephone: '(702) 555-1234',
		email: 'contact@drjanetduffy.com',
		address: {
			'@type': 'PostalAddress',
			addressLocality: 'Las Vegas',
			addressRegion: 'NV',
			addressCountry: 'US'
		},
		geo: {
			'@type': 'GeoCoordinates',
			latitude: '36.1699',
			longitude: '-115.1398'
		}
	};

	const websiteSchema = {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		name: 'Dr. Janet Duffy Real Estate',
		url: 'https://drjanetduffy.com',
		potentialAction: {
			'@type': 'SearchAction',
			target: 'https://drjanetduffy.com/properties?search={search_term_string}',
			'query-input': 'required name=search_term_string'
		}
	};
</script>

<SEO
	title="Las Vegas Real Estate Expert | Award-Winning Realtor Dr. Janet Duffy"
	description="Search Las Vegas homes and condos for sale. Award-winning Las Vegas Real Estate Agent Dr. Janet Duffy provides expert guidance for buying and selling real estate throughout the Las Vegas Valley."
	keywords="Las Vegas Real Estate, Las Vegas Real Estate Agent, Las Vegas Homes for Sale, Las Vegas Realtor, Dr. Janet Duffy"
	canonical="https://drjanetduffy.com/"
	schema={schema}
/>

<!-- Hero Section -->
<section class="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
	<div class="container mx-auto px-4">
		<div class="max-w-4xl mx-auto text-center">
			<h1 class="text-5xl md:text-6xl font-bold mb-6">Dr. Janet Duffy</h1>
			<p class="text-2xl md:text-3xl font-semibold mb-4">Licensed REALTOR®</p>
			<p class="text-xl md:text-2xl mb-8 text-primary-100">
				Your Trusted Las Vegas Real Estate Expert
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="/properties" class="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
					View Properties
				</a>
				<a href="/home-value" class="bg-primary-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-400 transition-colors">
					Get Home Value
				</a>
				<a href="/contact" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
					Contact Me
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Why Choose Section -->
<section class="py-16 bg-gray-50">
	<div class="container mx-auto px-4">
		<div class="max-w-6xl mx-auto">
			<h2 class="text-4xl font-bold text-center mb-12 text-gray-800">Why Choose Dr. Janet Duffy?</h2>
			<div class="grid md:grid-cols-3 gap-8">
				<div class="bg-white rounded-lg shadow-lg p-8 text-center">
					<div class="text-5xl mb-4">🏆</div>
					<h3 class="text-2xl font-bold mb-4 text-gray-800">15+ Years Experience</h3>
					<p class="text-gray-600">
						Extensive knowledge of the Las Vegas real estate market with a proven track record of successful transactions.
					</p>
				</div>
				<div class="bg-white rounded-lg shadow-lg p-8 text-center">
					<div class="text-5xl mb-4">🎯</div>
					<h3 class="text-2xl font-bold mb-4 text-gray-800">Expert Guidance</h3>
					<p class="text-gray-600">
						Personalized service tailored to your unique needs, whether buying, selling, or investing in Las Vegas real estate.
					</p>
				</div>
				<div class="bg-white rounded-lg shadow-lg p-8 text-center">
					<div class="text-5xl mb-4">📍</div>
					<h3 class="text-2xl font-bold mb-4 text-gray-800">Local Expertise</h3>
					<p class="text-gray-600">
						Deep understanding of Las Vegas neighborhoods, market trends, and the unique characteristics of each community.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Services Section -->
<section class="py-16">
	<div class="container mx-auto px-4">
		<div class="max-w-6xl mx-auto">
			<h2 class="text-4xl font-bold text-center mb-12 text-gray-800">Comprehensive Real Estate Services</h2>
			<div class="grid md:grid-cols-2 gap-8">
				<div class="bg-primary-50 rounded-lg p-8">
					<h3 class="text-2xl font-bold mb-4 text-gray-800">🏠 Buying a Home</h3>
					<p class="text-gray-600 mb-4">
						Find your perfect Las Vegas home with expert guidance through every step of the buying process. From property search to closing, I'll help you navigate the market with confidence.
					</p>
					<a href="/properties" class="text-primary-600 font-semibold hover:underline">
						Browse Properties →
					</a>
				</div>
				<div class="bg-primary-50 rounded-lg p-8">
					<h3 class="text-2xl font-bold mb-4 text-gray-800">💰 Selling Your Home</h3>
					<p class="text-gray-600 mb-4">
						Maximize your home's value with strategic marketing, professional staging advice, and expert negotiation. Get a free home valuation to start.
					</p>
					<a href="/home-value" class="text-primary-600 font-semibold hover:underline">
						Get Free Valuation →
					</a>
				</div>
				<div class="bg-primary-50 rounded-lg p-8">
					<h3 class="text-2xl font-bold mb-4 text-gray-800">🔑 Rental Properties</h3>
					<p class="text-gray-600 mb-4">
						Explore luxury rental opportunities throughout Las Vegas. Find the perfect rental property or list your property for rent.
					</p>
					<a href="/rentals" class="text-primary-600 font-semibold hover:underline">
						View Rentals →
					</a>
				</div>
				<div class="bg-primary-50 rounded-lg p-8">
					<h3 class="text-2xl font-bold mb-4 text-gray-800">📊 Investment Properties</h3>
					<p class="text-gray-600 mb-4">
						Build your real estate portfolio with strategic investment opportunities in Las Vegas. Expert analysis and market insights to help you make informed decisions.
					</p>
					<a href="/properties" class="text-primary-600 font-semibold hover:underline">
						Explore Investments →
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Featured Communities -->
<section class="py-16 bg-gray-50">
	<div class="container mx-auto px-4">
		<div class="max-w-6xl mx-auto">
			<h2 class="text-4xl font-bold text-center mb-12 text-gray-800">Featured Las Vegas Communities</h2>
			<div class="grid md:grid-cols-3 gap-6">
				<div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
					<h3 class="text-xl font-bold mb-2 text-gray-800">West Summerlin</h3>
					<p class="text-gray-600 mb-4">Luxury homes in one of Las Vegas's most prestigious master-planned communities.</p>
					<a href="/properties?neighborhood=west-summerlin" class="text-primary-600 font-semibold hover:underline">
						View Properties →
					</a>
				</div>
				<div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
					<h3 class="text-xl font-bold mb-2 text-gray-800">The Ridges</h3>
					<p class="text-gray-600 mb-4">Exclusive gated community with stunning mountain views and luxury amenities.</p>
					<a href="/properties?neighborhood=the-ridges" class="text-primary-600 font-semibold hover:underline">
						View Properties →
					</a>
				</div>
				<div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
					<h3 class="text-xl font-bold mb-2 text-gray-800">Red Rock Country Club</h3>
					<p class="text-gray-600 mb-4">Premier golf course community with luxury estates and world-class amenities.</p>
					<a href="/properties?neighborhood=red-rock" class="text-primary-600 font-semibold hover:underline">
						View Properties →
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="py-16 bg-primary-600 text-white">
	<div class="container mx-auto px-4">
		<div class="max-w-4xl mx-auto text-center">
			<h2 class="text-4xl font-bold mb-6">Ready to Start Your Real Estate Journey?</h2>
			<p class="text-xl mb-8 text-primary-100">
				Let's discuss your real estate goals and how I can help you achieve them.
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="/contact" class="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
					Schedule Consultation
				</a>
				<a href="/home-value" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
					Get Free Home Valuation
				</a>
			</div>
		</div>
	</div>
</section>

<!-- SEO Content Section -->
<section class="py-16 bg-white">
	<div class="container mx-auto px-4">
		<div class="max-w-4xl mx-auto prose prose-lg">
			<h2>Why Choose Dr. Janet Duffy for Your Las Vegas Real Estate Needs</h2>
			<p>
				When searching for a Las Vegas real estate agent, experience and dedication matter. Dr. Janet Duffy brings years of expertise to every transaction, ensuring clients receive personalized service and expert guidance throughout their real estate journey. Whether you're buying your first home in Las Vegas or selling a luxury property, Dr. Janet's commitment to excellence sets her apart in the competitive Las Vegas real estate market.
			</p>

			<h3>Expertise in Las Vegas Real Estate Market</h3>
			<p>
				The Las Vegas real estate market is dynamic and ever-changing. With a diverse range of properties from affordable condos to luxury estates, having an experienced realtor who understands market trends is essential. Dr. Janet Duffy stays current with Las Vegas real estate trends, providing clients with accurate market analysis and strategic advice.
			</p>

			<h3>Comprehensive Real Estate Services</h3>
			<p>
				From initial consultation to closing, Dr. Janet provides comprehensive real estate services tailored to each client's unique needs. Her services include home evaluations, market analysis, property marketing, negotiation, and transaction management. Whether you're interested in Las Vegas homes for sale, condos, or new construction, Dr. Janet has the expertise to guide you.
			</p>

			<h3>Local Market Knowledge</h3>
			<p>
				Dr. Janet specializes in neighborhoods throughout the Las Vegas Valley, including Summerlin, Henderson, North Las Vegas, and beyond. Her deep understanding of local communities, schools, amenities, and market conditions helps clients make informed decisions about where to buy or sell Las Vegas real estate.
			</p>

			<h2>Las Vegas Real Estate Market Overview</h2>
			<p>
				The Las Vegas real estate market continues to show strength and stability. The market offers opportunities across all price ranges, from starter homes to luxury estates. With steady demand and balanced inventory, both buyers and sellers benefit from favorable market conditions.
			</p>

			<h3>Single-Family Home Market Trends</h3>
			<p>
				Las Vegas single-family homes represent a significant portion of the real estate market. Buyers have good selection while sellers benefit from steady demand. The Las Vegas real estate market offers opportunities across all price ranges, from starter homes to luxury estates in premier communities like Summerlin and Henderson.
			</p>

			<h3>Condo and Townhome Market</h3>
			<p>
				The Las Vegas condo market presents excellent opportunities for first-time buyers and investors. Condos offer an affordable entry point into Las Vegas real estate, with strong activity in high-rise buildings on the Las Vegas Strip and mid-rise communities throughout the valley.
			</p>

			<h3>New Construction Opportunities</h3>
			<p>
				Las Vegas new construction continues to attract buyers seeking modern amenities and energy-efficient features. Master-planned communities throughout the valley offer resort-style living with golf courses, parks, and community centers. Whether you're interested in Summerlin, Henderson, or other premier Las Vegas communities, new construction options provide contemporary living spaces.
			</p>

			<h2>Featured Las Vegas Communities</h2>
			<p>
				Las Vegas offers diverse communities, each with unique character and amenities. From master-planned communities like Summerlin to established neighborhoods throughout the valley, there's a perfect community for every lifestyle and budget.
			</p>

			<h3>Summerlin Real Estate</h3>
			<p>
				Summerlin stands as one of Las Vegas's premier master-planned communities, offering luxury homes, world-class golf courses, and extensive park systems. Summerlin real estate includes everything from starter homes to multi-million dollar estates, all within a carefully planned community with excellent schools and amenities.
			</p>

			<h3>Henderson Real Estate</h3>
			<p>
				Henderson, Nevada's second-largest city, offers family-friendly neighborhoods, excellent schools, and a strong sense of community. Henderson real estate includes both established neighborhoods and new construction, with options ranging from affordable condos to luxury homes with mountain views.
			</p>

			<h3>Las Vegas Luxury Homes</h3>
			<p>
				For those seeking luxury living, Las Vegas offers exclusive communities like The Ridges, Red Rock Country Club, and MacDonald Highlands. These prestigious neighborhoods feature custom estates with world-class amenities, golf course access, and spectacular views of the Las Vegas Valley and surrounding mountains.
			</p>

			<h2>Our Real Estate Services</h2>
			<p>
				Dr. Janet Duffy provides comprehensive real estate services designed to meet every client's needs. Whether buying or selling Las Vegas real estate, her expertise and dedication ensure successful outcomes.
			</p>

			<h3>Buying Las Vegas Real Estate</h3>
			<p>
				When buying Las Vegas homes, having an experienced realtor makes all the difference. Dr. Janet helps buyers navigate the Las Vegas real estate market, identify properties that meet their criteria, negotiate favorable terms, and complete successful transactions. Her knowledge of Las Vegas neighborhoods, market conditions, and property values helps buyers make informed decisions.
			</p>

			<h3>Selling Las Vegas Real Estate</h3>
			<p>
				Selling a home in Las Vegas requires strategic marketing and expert negotiation. Dr. Janet provides comprehensive marketing services, including professional photography, online listings, open houses, and targeted marketing campaigns. Her track record of successful sales demonstrates her ability to help sellers achieve their goals in the Las Vegas real estate market.
			</p>

			<h3>Home Evaluation Services</h3>
			<p>
				Understanding your home's value is essential when considering selling Las Vegas real estate. Dr. Janet provides detailed home evaluations that consider current market conditions, comparable sales, property features, and neighborhood trends. These evaluations help sellers set realistic prices and maximize their returns.
			</p>

			<h2>Why Las Vegas Real Estate?</h2>
			<p>
				Las Vegas offers unique advantages for real estate buyers and investors. The city's diverse economy, no state income tax, and year-round sunshine attract residents from across the country. Las Vegas real estate provides opportunities for primary residences, vacation homes, and investment properties.
			</p>

			<h3>Economic Growth and Opportunity</h3>
			<p>
				Las Vegas continues to experience economic growth, with diverse industries including tourism, technology, healthcare, and manufacturing. This economic diversity supports a stable real estate market and provides opportunities for residents and investors alike.
			</p>

			<h3>Lifestyle and Recreation</h3>
			<p>
				Las Vegas offers world-class entertainment, dining, shopping, and recreation. From the Strip's excitement to Red Rock Canyon's natural beauty, Las Vegas provides diverse lifestyle options. The city's golf courses, parks, and community centers enhance quality of life for residents.
			</p>

			<h3>Affordable Living</h3>
			<p>
				Compared to many major metropolitan areas, Las Vegas real estate offers excellent value. The combination of affordable housing, no state income tax, and reasonable cost of living makes Las Vegas an attractive destination for buyers seeking quality living at reasonable prices.
			</p>

			<h2>Get Started with Your Las Vegas Real Estate Journey</h2>
			<p>
				Whether you're buying or selling Las Vegas real estate, Dr. Janet Duffy provides the expertise and dedication needed for success. Contact Dr. Janet today at (702) 555-1234 or through the website to begin your Las Vegas real estate journey. Ask about your free home evaluation or schedule a consultation to discuss your real estate needs.
			</p>
		</div>
	</div>
</section>
