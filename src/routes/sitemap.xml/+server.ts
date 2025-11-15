import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

const siteUrl = 'https://drjanetduffy.com'; // Update with your actual domain

const routes = [
	{ url: '', priority: '1.0', changefreq: 'weekly' },
	{ url: 'properties', priority: '0.9', changefreq: 'daily' },
	{ url: 'home-value', priority: '0.8', changefreq: 'monthly' },
	{ url: 'rentals', priority: '0.8', changefreq: 'weekly' },
	{ url: 'blog', priority: '0.7', changefreq: 'weekly' },
	{ url: 'about', priority: '0.6', changefreq: 'monthly' },
	{ url: 'contact', priority: '0.7', changefreq: 'monthly' },
	{ url: 'listings-embedded', priority: '0.8', changefreq: 'daily' },
	{ url: 'listings-list', priority: '0.8', changefreq: 'daily' },
	{ url: 'past-sales', priority: '0.7', changefreq: 'weekly' }
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

