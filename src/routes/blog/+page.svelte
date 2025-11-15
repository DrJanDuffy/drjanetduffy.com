<script lang="ts">
	import { onMount } from 'svelte';
	import { format } from 'date-fns';

	interface RSSItem {
		title: string;
		link: string;
		description: string;
		pubDate: string;
		author?: string;
		guid?: string;
	}

	interface RSSFeed {
		title: string;
		link: string;
		description: string;
		items: RSSItem[];
	}

	let feed: RSSFeed | null = null;
	let loading = true;
	let error: string | null = null;
	let feedUrl = 'https://www.drjanetduffy.com/blog/rss/';

	onMount(async () => {
		await loadFeed();
	});

	async function loadFeed() {
		loading = true;
		error = null;
		
		try {
			const response = await fetch(`/api/rss?url=${encodeURIComponent(feedUrl)}`);
			const data = await response.json();
			
			if (!response.ok) {
				throw new Error(data.error || 'Failed to load RSS feed');
			}
			
			feed = data;
		} catch (err) {
			error = err instanceof Error ? err.message : 'Unknown error occurred';
		} finally {
			loading = false;
		}
	}

	function formatDate(dateString: string): string {
		try {
			const date = new Date(dateString);
			return format(date, 'MMMM d, yyyy');
		} catch {
			return dateString;
		}
	}

	function stripHTML(html: string): string {
		const tmp = document.createElement('DIV');
		tmp.innerHTML = html;
		return tmp.textContent || tmp.innerText || '';
	}

	function truncateText(text: string, maxLength: number = 200): string {
		const clean = stripHTML(text);
		if (clean.length <= maxLength) return clean;
		return clean.substring(0, maxLength).trim() + '...';
	}
</script>

<svelte:head>
	<title>Las Vegas Real Estate Blog | Dr. Janet Duffy</title>
	<meta name="description" content="Stay up-to-date with the latest Las Vegas real estate news, market trends, and community insights." />
	<meta name="keywords" content="Las Vegas real estate blog, Las Vegas market trends, real estate news, Las Vegas community insights, property market updates" />
	<meta name="robots" content="index, follow" />
	
	<!-- Canonical URL -->
	<link rel="canonical" href="https://www.drjanetduffy.com/blog" />
	
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.drjanetduffy.com/blog" />
	<meta property="og:title" content="Las Vegas Real Estate Blog | Dr. Janet Duffy" />
	<meta property="og:description" content="Stay up-to-date with the latest Las Vegas real estate news, market trends, and community insights." />
	<meta property="og:site_name" content="Homes by Dr. Duffy" />
	
	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content="https://www.drjanetduffy.com/blog" />
	<meta name="twitter:title" content="Las Vegas Real Estate Blog | Dr. Janet Duffy" />
	<meta name="twitter:description" content="Stay up-to-date with the latest Las Vegas real estate news, market trends, and community insights." />
	
	<!-- Structured Data -->
	<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "Blog",
		"name": "Las Vegas Real Estate Blog",
		"description": "Stay up-to-date with the latest Las Vegas real estate news, market trends, and community insights",
		"url": "https://www.drjanetduffy.com/blog",
		"publisher": {
			"@type": "RealEstateAgent",
			"name": "Dr. Janet Duffy"
		}
	}
	</script>
</svelte:head>

<div class="container mx-auto px-4 py-8 max-w-6xl">
	<div class="mb-8">
		<h1 class="text-4xl font-bold mb-6">Las Vegas Real Estate News & Market Insights</h1>
		<p class="text-gray-600 text-lg mb-8 leading-relaxed">
			Stay informed about the latest Las Vegas real estate market trends, community insights, and expert advice.
		</p>
		<div class="mb-8">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What Las Vegas Real Estate News and Market Insights Are Available?</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl">
				Las Vegas real estate news and market insights include latest market trends, community developments, expert real estate advice, neighborhood updates, investment opportunities, and buying and selling strategies that help you stay informed and make informed decisions about Las Vegas real estate transactions.
			</p>
		</div>
	</div>

	{#if loading}
		<div class="text-center py-12">
			<div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
			<p class="mt-4 text-gray-600">Loading blog posts...</p>
		</div>
	{:else if error}
		<div class="bg-red-50 border border-red-200 rounded-lg p-6">
			<h2 class="text-xl font-bold text-red-800 mb-2">Error Loading Feed</h2>
			<p class="text-red-600">{error}</p>
			<button
				on:click={loadFeed}
				class="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
			>
				Try Again
			</button>
		</div>
	{:else if feed && feed.items.length > 0}
		<div class="mb-6 p-4 bg-gray-50 rounded-lg">
			<h2 class="text-2xl font-bold mb-2">{feed.title}</h2>
			<p class="text-gray-600 mb-2">{feed.description}</p>
			<a
				href={feed.link}
				target="_blank"
				rel="noopener noreferrer"
				class="text-primary-600 hover:text-primary-700 underline"
			>
				Visit Source →
			</a>
		</div>

		<div class="space-y-6">
			{#each feed.items as item (item.guid || item.link)}
				<article class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
					<header class="mb-4">
						<h2 class="text-2xl font-bold mb-2">
							<a
								href={item.link}
								target="_blank"
								rel="noopener noreferrer"
								class="text-gray-800 hover:text-primary-600 transition-colors"
							>
								{item.title}
							</a>
						</h2>
						<div class="flex flex-wrap items-center gap-4 text-sm text-gray-500">
							<time datetime={item.pubDate}>
								📅 {formatDate(item.pubDate)}
							</time>
							{#if item.author}
								<span>✍️ {item.author}</span>
							{/if}
						</div>
					</header>
					
					<div class="prose max-w-none mb-4">
						<p class="text-gray-700 leading-relaxed">
							{@html truncateText(item.description, 300)}
						</p>
					</div>
					
					<a
						href={item.link}
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
					>
						Read More →
					</a>
				</article>
			{/each}
		</div>
	{:else}
		<div class="text-center py-12">
			<p class="text-gray-600">No blog posts found.</p>
		</div>
	{/if}
</div>

