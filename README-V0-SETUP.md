# V0 API Setup Guide

This project includes V0 API integration using the official [v0-sdk](https://github.com/vercel/v0-sdk) for AI-powered component generation.

## Setup Instructions

### 1. Get Your V0 API Key

1. Sign up for an account at [v0.dev](https://v0.dev/)
2. Navigate to [Settings > API Keys](https://v0.dev/chat/settings/keys) or [v0.dev/settings/api-keys](https://v0.dev/settings/api-keys)
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

#### Via Client Utility

```typescript
import { generateComponent } from '$lib/v0';

const result = await generateComponent({
  prompt: 'Create a real estate property card component',
  system: 'You are an expert React and Svelte developer'
});

if (result.success) {
  console.log(result.component);
  console.log(result.metadata?.webUrl); // View in v0.dev
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
    system: 'Optional system message for context'
  })
});

const data = await response.json();
```

#### Using the SDK Directly (Server-side)

```typescript
import { createClient } from 'v0-sdk';

const client = createClient({
  apiKey: process.env.V0_API_KEY
});

const chat = await client.chats.create({
  message: 'Create a responsive navbar with Tailwind CSS',
  system: 'You are an expert React developer'
});

console.log(`Chat created: ${chat.webUrl}`);
console.log(`Files:`, chat.latestVersion?.files);
```

### 4. How It Works

The integration uses the official [v0-sdk](https://github.com/vercel/v0-sdk) which:
- Creates a chat conversation in v0
- Generates component code based on your prompt
- Returns the generated files in the response
- Provides a web URL to view/edit the component in v0.dev

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

- [v0-sdk GitHub Repository](https://github.com/vercel/v0-sdk)
- [v0-sdk Documentation](https://v0-sdk.dev)
- [V0 Platform API Documentation](https://v0.dev/docs/v0-platform-api)
- [V0 Settings - API Keys](https://v0.dev/chat/settings/keys)

