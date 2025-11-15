# V0 API Setup Guide

This project includes V0 API integration for AI-powered component generation.

## Setup Instructions

### 1. Get Your V0 API Key

1. Sign up for an account at [v0.dev](https://v0.dev/)
2. Navigate to [Settings > API Keys](https://v0.dev/settings/api-keys)
3. Click "Create a new key"
4. Copy your API key

### 2. Configure Environment Variables

Create a `.env` file in the root directory:

```bash
# V0 API Configuration
V0_API_KEY=your_v0_api_key_here
```

**For Vercel Deployment:**

1. Go to your Vercel project settings
2. Navigate to "Environment Variables"
3. Add `V0_API_KEY` with your API key value
4. Redeploy your application

### 3. Usage

#### Via Web Interface

Visit `/v0` in your application to use the web interface for generating components.

#### Via API

```typescript
import { generateComponent } from '$lib/v0';

const result = await generateComponent({
  prompt: 'Create a real estate property card component',
  model: 'claude-3-5-sonnet',
  shadcn: true
});

if (result.success) {
  console.log(result.component);
}
```

#### Direct API Call

```typescript
const response = await fetch('/api/v0', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    prompt: 'Your component description',
    model: 'claude-3-5-sonnet',
    shadcn: true
  })
});

const data = await response.json();
```

### 4. Available Models

- `claude-3-5-sonnet` (default) - Fast and efficient
- `claude-3-opus` - Most capable
- `gpt-4` - OpenAI GPT-4

### 5. Example Prompts

- "Create a real estate property card component with image, price, address, bedrooms, bathrooms, and a contact button"
- "Create a hero section for a real estate website with headline, subheadline, search bar, and CTA buttons"
- "Create a contact form with name, email, phone, message fields and submit button"
- "Create a testimonial carousel component with customer reviews"

## Files Created

- `src/routes/api/v0/+server.ts` - API endpoint for V0 integration
- `src/lib/v0.ts` - Client utility functions
- `src/routes/v0/+page.svelte` - Web interface for component generation

## Troubleshooting

### "V0_API_KEY not configured" Error

Make sure you've:
1. Created a `.env` file with `V0_API_KEY`
2. Restarted your development server
3. For production, added the variable in Vercel environment settings

### API Errors

Check that:
- Your API key is valid and not expired
- You have sufficient API credits/quota
- The prompt is clear and descriptive

## Resources

- [V0 Platform API Documentation](https://v0.dev/docs/v0-platform-api)
- [V0 Settings](https://v0.dev/settings/api-keys)

