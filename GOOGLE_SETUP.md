# Google Search Console & Analytics Setup Guide

This guide will help you set up Google Search Console and verify your website for optimal Google indexing and search visibility.

## ✅ Already Configured

- ✅ Google Analytics (G-CPD9RR8GTX) - Active
- ✅ XML Sitemap - Available at `/sitemap.xml`
- ✅ robots.txt - Optimized for Google crawlers
- ✅ Structured Data (JSON-LD) - On key pages
- ✅ Canonical URLs - On all pages
- ✅ Open Graph & Twitter Cards - On all pages
- ✅ Mobile-responsive design

## 🔧 Setup Steps

### 1. Google Search Console Setup

1. **Go to Google Search Console**
   - Visit: https://search.google.com/search-console
   - Sign in with your Google account

2. **Add Property**
   - Click "Add Property"
   - Enter: `https://www.drjanetduffy.com`
   - Choose verification method: **HTML tag**

3. **Get Verification Code**
   - Copy the `content` value from the meta tag (e.g., `abc123xyz...`)

4. **Add Verification Code**
   - Open `src/routes/+layout.svelte`
   - Find: `<meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />`
   - Replace `YOUR_VERIFICATION_CODE` with your actual code
   - Save and deploy

5. **Verify Ownership**
   - Return to Google Search Console
   - Click "Verify"
   - Wait for verification (usually instant)

### 2. Submit Sitemap

After verification:

1. **Submit Sitemap**
   - In Google Search Console, go to "Sitemaps"
   - Enter: `sitemap.xml`
   - Click "Submit"

2. **Monitor Indexing**
   - Check "Coverage" report for indexing status
   - Review "Performance" for search queries
   - Monitor "Enhancements" for structured data

### 3. Google Analytics Setup

Already configured! Your Google Analytics ID: `G-CPD9RR8GTX`

**To verify it's working:**
- Visit your website
- Check Google Analytics Real-Time reports
- You should see your visit within seconds

### 4. Additional Optimizations

#### A. Core Web Vitals
- Monitor in Google Search Console → "Core Web Vitals"
- Current optimizations:
  - Lazy loading images
  - Optimized fonts
  - Minimal JavaScript

#### B. Mobile Usability
- Test in Google Search Console → "Mobile Usability"
- Site is mobile-responsive

#### C. Rich Results
- Structured data is configured for:
  - RealEstateAgent schema
  - WebSite schema with SearchAction
  - Organization schema
  - BreadcrumbList (via Breadcrumbs component)

### 5. Important URLs

- **Sitemap**: https://www.drjanetduffy.com/sitemap.xml
- **robots.txt**: https://www.drjanetduffy.com/robots.txt
- **Homepage**: https://www.drjanetduffy.com/

### 6. Monitoring & Maintenance

**Weekly:**
- Check Google Search Console for errors
- Review search performance
- Monitor indexing status

**Monthly:**
- Review Core Web Vitals
- Check mobile usability
- Update sitemap if new pages added

**Quarterly:**
- Review and update structured data
- Check for new Google features
- Optimize based on search analytics

## 📊 Current SEO Status

### ✅ Implemented
- [x] XML Sitemap (80+ pages)
- [x] robots.txt (optimized)
- [x] Google Analytics
- [x] Structured Data (JSON-LD)
- [x] Canonical URLs
- [x] Open Graph tags
- [x] Twitter Cards
- [x] Mobile-responsive
- [x] Fast page load times
- [x] Semantic HTML structure
- [x] Question-based H2 headings (2025 SEO)
- [x] Hyper-local content

### 🔄 Next Steps
- [ ] Add Google Search Console verification code
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Business Profile (if applicable)
- [ ] Monitor Core Web Vitals
- [ ] Set up Google Alerts for brand mentions

## 🚀 Performance Tips

1. **Keep Content Fresh**
   - Update blog regularly
   - Refresh property listings
   - Update market reports

2. **Build Quality Backlinks**
   - Local business directories
   - Real estate associations
   - Community websites

3. **Optimize Images**
   - Use WebP format
   - Compress images
   - Add alt text

4. **Monitor Search Console**
   - Fix crawl errors quickly
   - Address security issues
   - Improve mobile usability

## 📞 Support

For questions about Google Search Console setup:
- Google Search Console Help: https://support.google.com/webmasters
- Google Analytics Help: https://support.google.com/analytics

---

**Last Updated**: 2025-01-XX
**Site**: drjanetduffy.com
**Analytics ID**: G-CPD9RR8GTX

