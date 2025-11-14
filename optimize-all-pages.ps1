# Comprehensive SEO Optimization Script for All Pages
# Adds structured data, meta tags, and ensures proper content structure

$baseUrl = "https://www.lasvegashomesbyleslie.com"
$files = Get-ChildItem -Path "lasvegashomesbyleslie.com" -Recurse -Include *.html,*.php | Where-Object { 
    $_.FullName -notmatch '\\idx\\' -and 
    $_.FullName -notmatch '\\inc\\' -and
    $_.FullName -notmatch '\\blog\\' -and
    $_.FullName -notmatch '\\listing\\' -and
    $_.FullName -notmatch '\\directory\\'
}

$structuredDataTemplate = @'
		<!-- Structured Data -->
		<script type="application/ld+json">
		{
		  "@context": "https://schema.org",
		  "@type": "RealEstateAgent",
		  "name": "Leslie Hoke",
		  "url": "https://www.lasvegashomesbyleslie.com",
		  "telephone": "702-321-1763",
		  "email": "LeslieHoke@LasVegasHomesByLeslie.com",
		  "address": {
		    "@type": "PostalAddress",
		    "streetAddress": "6153 S Rainbow Blvd, Bldg 1",
		    "addressLocality": "Las Vegas",
		    "addressRegion": "NV",
		    "postalCode": "89118",
		    "addressCountry": "US"
		  }
		}
		</script>
'@

$metaTagsTemplate = @'
		<!-- Open Graph / Facebook -->
		<meta property="og:type" content="website">
		<meta property="og:url" content="{URL}">
		<meta property="og:title" content="{TITLE}">
		<meta property="og:description" content="{DESCRIPTION}">

		<!-- Twitter -->
		<meta property="twitter:card" content="summary_large_image">
		<meta property="twitter:url" content="{URL}">
		<meta property="twitter:title" content="{TITLE}">
		<meta property="twitter:description" content="{DESCRIPTION}">

		<!-- Canonical URL -->
		<link rel="canonical" href="{URL}">
'@

$processedCount = 0
$errorCount = 0

foreach ($file in $files) {
    try {
        $content = Get-Content $file.FullName -Raw -Encoding UTF8
        if (-not $content) { continue }
        
        $relativePath = $file.FullName.Replace((Get-Location).Path + '\lasvegashomesbyleslie.com\', '').Replace('\', '/')
        $fullUrl = "$baseUrl/$relativePath"
        
        # Skip if already has structured data
        if ($content -match 'application/ld\+json') {
            Write-Host "Skipping $($file.Name) - already has structured data"
            continue
        }
        
        # Find where to insert (before </head>)
        if ($content -match '(\s+</head>)') {
            $insertionPoint = $content.IndexOf('</head>')
            
            # Extract title for meta tags
            $titleMatch = [regex]::Match($content, '<title[^>]*>(.*?)</title>', [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)
            $title = if ($titleMatch.Success) { $titleMatch.Groups[1].Value.Trim() } else { "Las Vegas Real Estate" }
            
            # Extract description
            $descMatch = [regex]::Match($content, '<meta\s+name=["'']description["'']\s+content=["'']([^"'']+)["'']', [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)
            $description = if ($descMatch.Success) { $descMatch.Groups[1].Value.Trim() } else { "Las Vegas real estate services" }
            
            # Prepare meta tags
            $metaTags = $metaTagsTemplate -replace '\{URL\}', $fullUrl -replace '\{TITLE\}', $title -replace '\{DESCRIPTION\}', $description
            
            # Insert structured data and meta tags before </head>
            $newContent = $content.Insert($insertionPoint, "`n$metaTags`n$structuredDataTemplate")
            
            # Save file
            $newContent | Set-Content $file.FullName -Encoding UTF8 -NoNewline
            $processedCount++
            Write-Host "Processed: $($file.Name)"
        }
    }
    catch {
        Write-Warning "Error processing $($file.Name): $_"
        $errorCount++
    }
}

Write-Host "`nOptimization complete!"
Write-Host "Processed: $processedCount files"
Write-Host "Errors: $errorCount files"

