import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { env } from '$env/dynamic/private';

const V0_API_KEY = env.V0_API_KEY || '';

// V0 API endpoint - check https://v0.dev/docs/v0-platform-api for latest endpoint
const V0_API_BASE = 'https://api.v0.dev';

export const POST: RequestHandler = async ({ request }) => {
	try {
		const body = await request.json();
		const { prompt, model = 'claude-3-5-sonnet', shadcn = true } = body;

		if (!prompt) {
			return json({ error: 'Prompt is required' }, { status: 400 });
		}

		if (!V0_API_KEY) {
			return json({ 
				error: 'V0_API_KEY not configured. Please set it in your environment variables.' 
			}, { status: 500 });
		}

		// Try different V0 API endpoint patterns
		const endpoints = [
			`${V0_API_BASE}/v1/generate`,
			`${V0_API_BASE}/v1/prompt`,
			`${V0_API_BASE}/api/v1/generate`,
			`${V0_API_BASE}/generate`
		];

		let lastError = null;
		let data = null;

		for (const endpoint of endpoints) {
			try {
				const response = await fetch(endpoint, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						'Authorization': `Bearer ${V0_API_KEY}`,
					},
					body: JSON.stringify({
						prompt,
						model,
						shadcn,
					}),
				});

				if (response.ok) {
					data = await response.json();
					break;
				} else {
					const errorText = await response.text();
					lastError = { endpoint, status: response.status, error: errorText };
					// Continue to next endpoint
					continue;
				}
			} catch (err) {
				lastError = { endpoint, error: err instanceof Error ? err.message : String(err) };
				continue;
			}
		}

		if (!data) {
			return json({ 
				error: `V0 API error: Could not reach V0 API. Last attempt: ${lastError?.endpoint || 'unknown'} - ${lastError?.error || lastError?.status || 'Unknown error'}. Please check https://v0.dev/docs/v0-platform-api for the correct endpoint.` 
			}, { status: 500 });
		}

		return json({ 
			success: true, 
			component: data.component || data.code || data.html || JSON.stringify(data, null, 2),
			metadata: data.metadata || { rawResponse: data }
		});

	} catch (error) {
		console.error('V0 API error:', error);
		return json({ 
			error: error instanceof Error ? error.message : 'Internal server error' 
		}, { status: 500 });
	}
};

// GET endpoint to check API status
export const GET: RequestHandler = async () => {
	return json({
		status: 'ok',
		configured: !!V0_API_KEY,
		message: V0_API_KEY 
			? 'V0 API is configured and ready' 
			: 'V0_API_KEY not set. Please configure it in your environment variables.'
	});
};

