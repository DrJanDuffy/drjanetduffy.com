# Dr. Jan Duffy REALTOR - Las Vegas Real Estate Website

A modern, professional real estate website built with SvelteKit, featuring RealScout integration for property listings, search functionality, and lead management.

## Features

- **RealScout Integration**: Multiple widget types for property search, listings, and home valuation
- **Responsive Design**: Built with Tailwind CSS for mobile-first, responsive design
- **SEO Optimized**: Meta tags, structured data, and search engine optimization
- **Multiple Property Views**: Grid view, list view, and embedded presentations
- **Contact Forms**: Lead capture and contact management
- **Professional Branding**: Custom color scheme and branding for Dr. Jan Duffy

## Tech Stack

- **Framework**: SvelteKit
- **Styling**: Tailwind CSS
- **Property Listings**: RealScout Web Components
- **Icons**: Lucide Svelte
- **Deployment**: Vercel

## RealScout Widgets Implemented

- `realscout-office-listings` - Property listings with filtering
- `realscout-advanced-search` - Advanced property search
- `realscout-simple-search` - Quick property search
- `realscout-home-value` - Home valuation tool
- `realscout-your-listings` - Complete property portfolio
- Embedded search and listing components

## Pages

- **Home** (`/`) - Hero section with search and featured properties
- **Properties** (`/properties`) - All active property listings
- **Home Value** (`/home-value`) - Home valuation calculator
- **Rentals** (`/rentals`) - Rental property listings
- **Past Sales** (`/past-sales`) - Complete property history
- **About** (`/about`) - Dr. Jan Duffy's professional profile
- **Contact** (`/contact`) - Contact form and information

## Development

Install dependencies:
```bash
pnpm install
```

Start development server:
```bash
pnpm run dev
```

Build for production:
```bash
pnpm run build
```

## Deployment

This project is configured for Vercel deployment. The build process is handled automatically by Vercel when code is pushed to the main branch.

## RealScout Configuration

The website uses RealScout with agent ID `QWdlbnQtMjI1MDUw` for Dr. Jan Duffy. All widgets are configured with custom styling to match the brand colors (#c41e3a).

## Contact

- **Phone**: (702) 555-1234
- **Email**: jan@drjanduffy.com
- **Website**: https://drjanduffy.com