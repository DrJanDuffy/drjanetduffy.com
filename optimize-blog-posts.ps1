# Optimize blog posts with structured data and meta tags

$blogFiles = Get-ChildItem -Path "lasvegashomesbyleslie.com\blog" -Recurse -Include *.html | Where-Object { $_.Name -eq "index.html" }

$baseUrl = "https://www.lasvegashomesbyleslie.com"

foreach ($file in $blogFiles) {
    try {
        $content = Get-Content $file.FullName -Raw -Encoding UTF8
        if (-not $content) { continue }
        
        # Skip if already has structured data
        if ($content -match 'application/ld\+json') {
            Write-Host "Skipping $($file.FullName) - already has structured data"
            continue
        }
        
        $relativePath = $file.FullName.Replace((Get-Location).Path + '\lasvegashomesbyleslie.com\', '').Replace('\', '/')
        $fullUrl = "$baseUrl/$relativePath"
        
        # Extract title
        $titleMatch = [regex]::Match($content, '<title[^>]*>(.*?)</title>', [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)
        $title = if ($titleMatch.Success) { $titleMatch.Groups[1].Value.Trim() } else { "Las Vegas Real Estate Blog" }
        
        # Extract description
        $descMatch = [regex]::Match($content, '<meta\s+name=["'']description["'']\s+content=["'']([^"'']+)["'']', [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)
        $description = if ($descMatch.Success) { $descMatch.Groups[1].Value.Trim() } else { "Las Vegas real estate blog" }
        
        $structuredData = @"
		<!-- Structured Data -->
		<script type="application/ld+json">
		{
		  "@context": "https://schema.org",
		  "@type": "BlogPosting",
		  "headline": "$title",
		  "description": "$description",
		  "url": "$fullUrl",
		  "author": {
		    "@type": "Person",
		    "name": "Leslie Hoke"
		  },
		  "publisher": {
		    "@type": "Organization",
		    "name": "Las Vegas Homes By Leslie"
		  }
		}
		</script>
		<script type="application/ld+json">
		{
		  "@context": "https://schema.org",
		  "@type": "RealEstateAgent",
		  "name": "Leslie Hoke",
		  "url": "https://www.lasvegashomesbyleslie.com",
		  "telephone": "702-321-1763"
		}
		</script>
"@
        
        $metaTags = @"
		<!-- Open Graph / Facebook -->
		<meta property="og:type" content="article">
		<meta property="og:url" content="$fullUrl">
		<meta property="og:title" content="$title">
		<meta property="og:description" content="$description">

		<!-- Twitter -->
		<meta property="twitter:card" content="summary_large_image">
		<meta property="twitter:url" content="$fullUrl">
		<meta property="twitter:title" content="$title">
		<meta property="twitter:description" content="$description">

		<!-- Canonical URL -->
		<link rel="canonical" href="$fullUrl">
"@
        
        if ($content -match '(\s+</head>)') {
            $insertionPoint = $content.IndexOf('</head>')
            $newContent = $content.Insert($insertionPoint, "`n$metaTags`n$structuredData")
            $newContent | Set-Content $file.FullName -Encoding UTF8 -NoNewline
            Write-Host "Processed: $($file.FullName)"
        }
    }
    catch {
        Write-Warning "Error: $($file.FullName): $_"
    }
}

Write-Host "Blog posts optimization complete!"

