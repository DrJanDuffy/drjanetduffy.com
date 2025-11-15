import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { env } from '$env/dynamic/private';

// V0 API endpoint - check https://v0.dev/docs/v0-platform-api for latest endpoint
const V0_API_BASE = 'https://api.v0.dev';

export const POST: RequestHandler = async ({ request }) => {
	try {
		const body = await request.json();
		const { prompt, model = 'claude-3-5-sonnet', shadcn = true } = body;

		if (!prompt) {
			return json({ error: 'Prompt is required' }, { status: 400 });
		}

		const V0_API_KEY = env.V0_API_KEY;
		
		if (!V0_API_KEY) {
			return json({ 
				error: 'V0_API_KEY not configured. Please set it in your environment variables.' 
			}, { status: 500 });
		}

		// V0 API endpoint - Based on V0 Platform API documentation
		// The endpoint may vary - check https://v0.dev/docs/v0-platform-api for latest
		// Common patterns: /v1/generate, /v1/prompt, /api/v1/generate
		const endpoint = `${V0_API_BASE}/v1/generate`;
		
		try {
			const response = await fetch(endpoint, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${V0_API_KEY}`,
					'User-Agent': 'SvelteKit-V0-Integration/1.0',
				},
				body: JSON.stringify({
					prompt,
					model,
					shadcn,
				}),
			});

			if (!response.ok) {
				const errorText = await response.text();
				let errorData;
				try {
					errorData = JSON.parse(errorText);
				} catch {
					errorData = { message: errorText };
				}
				
				// Provide helpful error message
				return json({ 
					error: `V0 API error (${response.status}): ${errorData.message || errorData.error?.message || errorText}. Endpoint tried: ${endpoint}. Please verify the endpoint at https://v0.dev/docs/v0-platform-api` 
				}, { status: response.status });
			}

			const data = await response.json();

			return json({ 
				success: true, 
				component: data.component || data.code || data.html || data.result || JSON.stringify(data, null, 2),
				metadata: data.metadata || { 
					rawResponse: data,
					endpoint: endpoint
				}
			});
		} catch (error) {
			console.error('V0 API fetch error:', error);
			return json({ 
				error: `Network error calling V0 API: ${error instanceof Error ? error.message : String(error)}. Endpoint: ${endpoint}` 
			}, { status: 500 });
		}

	} catch (error) {
		console.error('V0 API error:', error);
		return json({ 
			error: error instanceof Error ? error.message : 'Internal server error' 
		}, { status: 500 });
	}
};

// GET endpoint to check API status
export const GET: RequestHandler = async () => {
	const V0_API_KEY = env.V0_API_KEY;
	return json({
		status: 'ok',
		configured: !!V0_API_KEY,
		message: V0_API_KEY 
			? 'V0 API is configured and ready' 
			: 'V0_API_KEY not set. Please configure it in your environment variables.'
	});
};

