import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

const siteUrl = 'https://drjanetduffy.com'; // Update with your actual domain

const routes = [
	// Main Pages
	{ url: '', priority: '1.0', changefreq: 'weekly' },
	{ url: 'properties', priority: '0.9', changefreq: 'daily' },
	{ url: 'home-value', priority: '0.8', changefreq: 'monthly' },
	{ url: 'rentals', priority: '0.8', changefreq: 'weekly' },
	{ url: 'blog', priority: '0.7', changefreq: 'weekly' },
	{ url: 'about', priority: '0.6', changefreq: 'monthly' },
	{ url: 'contact', priority: '0.7', changefreq: 'monthly' },
	
	// Property Search Pages
	{ url: 'listings-embedded', priority: '0.8', changefreq: 'daily' },
	{ url: 'listings-list', priority: '0.8', changefreq: 'daily' },
	{ url: 'past-sales', priority: '0.7', changefreq: 'weekly' },
	
	// Community Pages (based on reference site structure)
	{ url: 'communities/summerlin', priority: '0.8', changefreq: 'monthly' },
	{ url: 'communities/henderson', priority: '0.8', changefreq: 'monthly' },
	{ url: 'communities/green-valley', priority: '0.7', changefreq: 'monthly' },
	{ url: 'communities/north-las-vegas', priority: '0.7', changefreq: 'monthly' },
	{ url: 'communities/boulder-city', priority: '0.6', changefreq: 'monthly' },
	{ url: 'communities/seven-hills', priority: '0.6', changefreq: 'monthly' },
	{ url: 'communities/southern-highlands', priority: '0.6', changefreq: 'monthly' },
	{ url: 'communities/mountains-edge', priority: '0.6', changefreq: 'monthly' },
	{ url: 'communities/anthem', priority: '0.6', changefreq: 'monthly' },
	
	// Property Type Pages
	{ url: 'properties/homes', priority: '0.9', changefreq: 'daily' },
	{ url: 'properties/condos', priority: '0.9', changefreq: 'daily' },
	{ url: 'properties/new-construction', priority: '0.8', changefreq: 'weekly' },
	{ url: 'properties/luxury', priority: '0.8', changefreq: 'weekly' },
	{ url: 'properties/gated-communities', priority: '0.7', changefreq: 'monthly' },
	{ url: 'properties/golf-communities', priority: '0.7', changefreq: 'monthly' },
	{ url: 'properties/55-plus', priority: '0.6', changefreq: 'monthly' },
	
	// Service Pages
	{ url: 'services/buying', priority: '0.8', changefreq: 'monthly' },
	{ url: 'services/selling', priority: '0.8', changefreq: 'monthly' },
	{ url: 'services/investment', priority: '0.7', changefreq: 'monthly' },
	
	// Legal/Info Pages
	{ url: 'privacy', priority: '0.3', changefreq: 'yearly' },
	{ url: 'terms', priority: '0.3', changefreq: 'yearly' },
	{ url: 'sitemap', priority: '0.5', changefreq: 'monthly' }
];

export const GET: RequestHandler = async () => {
	const lastmod = new Date().toISOString().split('T')[0];
	
	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${routes.map(route => `  <url>
    <loc>${siteUrl}/${route.url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
			'Cache-Control': 'public, max-age=3600'
		}
	});
};

