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
	
	// Community Pages - Major Areas (removed non-existent pages, kept in sitemap for future)
	// Note: These pages don't exist yet, so they're commented out to prevent 404 errors
	// { url: 'communities/summerlin', priority: '0.8', changefreq: 'monthly' },
	// { url: 'communities/henderson', priority: '0.8', changefreq: 'monthly' },
	// { url: 'communities/green-valley', priority: '0.7', changefreq: 'monthly' },
	// { url: 'communities/north-las-vegas', priority: '0.7', changefreq: 'monthly' },
	// { url: 'communities/boulder-city', priority: '0.6', changefreq: 'monthly' },
	// { url: 'communities/seven-hills', priority: '0.6', changefreq: 'monthly' },
	// { url: 'communities/southern-highlands', priority: '0.6', changefreq: 'monthly' },
	// { url: 'communities/mountains-edge', priority: '0.6', changefreq: 'monthly' },
	// { url: 'communities/anthem', priority: '0.6', changefreq: 'monthly' },
	// Additional community pages (commented out until pages are created)
	// { url: 'communities/skye-canyon', priority: '0.6', changefreq: 'monthly' },
	// { url: 'communities/green-valley-ranch', priority: '0.6', changefreq: 'monthly' },
	// { url: 'communities/aliante', priority: '0.5', changefreq: 'monthly' },
	// { url: 'communities/desert-shores', priority: '0.5', changefreq: 'monthly' },
	// { url: 'communities/eldorado', priority: '0.5', changefreq: 'monthly' },
	// { url: 'communities/inspirada', priority: '0.5', changefreq: 'monthly' },
	// { url: 'communities/nevada-trails', priority: '0.5', changefreq: 'monthly' },
	// { url: 'communities/peccole-ranch', priority: '0.5', changefreq: 'monthly' },
	// { url: 'communities/providence', priority: '0.5', changefreq: 'monthly' },
	// { url: 'communities/rhodes-ranch', priority: '0.5', changefreq: 'monthly' },
	// { url: 'communities/silverado-ranch', priority: '0.5', changefreq: 'monthly' },
	// { url: 'communities/spring-valley', priority: '0.5', changefreq: 'monthly' },
	// { url: 'communities/the-lakes', priority: '0.5', changefreq: 'monthly' },
	// { url: 'communities/tuscany-village', priority: '0.5', changefreq: 'monthly' },
	// { url: 'communities/westwood', priority: '0.5', changefreq: 'monthly' },
	// { url: 'communities/the-palisades', priority: '0.5', changefreq: 'monthly' },
	
            // Property Type Pages - Removed non-existent pages, use query parameters on /properties instead
            // Service Pages - Removed non-existent pages, use anchor links on /about instead
	
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

