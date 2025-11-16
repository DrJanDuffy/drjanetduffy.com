import type { PhotoItem } from '$lib/components/PhotoGallery.svelte';

/**
 * Central place to register reusable photo sets.
 * Add image files under `static/images/...` and reference them here.
 */

export const luxuryHighlights: PhotoItem[] = [
	{
		src: '/images/luxury/living-room-1.jpg',
		alt: 'Modern Las Vegas luxury living room with strip views at dusk',
		caption: 'Great rooms that frame Strip and mountain views',
		tagline: 'Perfect for entertaining, with indoor / outdoor flow.'
	},
	{
		src: '/images/luxury/pool-1.jpg',
		alt: 'Resort-style backyard with pool and fire features in Summerlin',
		caption: 'Resort-style pools built for 7–8 months of desert sunshine',
		tagline: 'Common across luxury homes in Summerlin and Henderson.'
	},
	{
		src: '/images/luxury/kitchen-1.jpg',
		alt: 'Chef’s kitchen with waterfall island and double ovens',
		caption: 'Chef-inspired kitchens with oversized islands',
		tagline: 'A priority for both everyday life and hosting.'
	}
];

export const relocationScenes: PhotoItem[] = [
	{
		src: '/images/relocation/summerlin-trails.jpg',
		alt: 'Mature trails and parks in a Summerlin neighborhood',
		caption: 'Trail networks that make daily walks part of your routine'
	},
	{
		src: '/images/relocation/henderson-sunset.jpg',
		alt: 'Henderson neighborhood at sunset with city and mountain views',
		caption: 'Henderson sunsets that remind you why you moved'
	}
];

export const seniorLivingJoy: PhotoItem[] = [
	{
		src: '/images/senior/senior-friends-laughing.jpg',
		alt: 'Group of joyful senior women laughing together in a garden courtyard',
		caption: 'Active, social 55+ living in Las Vegas',
		tagline: 'The goal is not just a house that fits — it is a community that feels like home.'
	}
];



