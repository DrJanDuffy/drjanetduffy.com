import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { V0_API_KEY } from '$env/static/private';

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

		// Call V0 API to generate component
		const response = await fetch(`${V0_API_BASE}/v1/prompt`, {
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

		if (!response.ok) {
			const error = await response.text();
			return json({ 
				error: `V0 API error: ${error}` 
			}, { status: response.status });
		}

		const data = await response.json();
		return json({ 
			success: true, 
			component: data.component || data.code,
			metadata: data.metadata || {}
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

