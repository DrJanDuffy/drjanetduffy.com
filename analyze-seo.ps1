# SEO Analysis Script for Cloned Website
# Analyzes HTML/PHP files for SEO structure

$files = Get-ChildItem -Path "lasvegashomesbyleslie.com" -Recurse -Include *.html,*.php | Where-Object { $_.FullName -notmatch '\\idx\\' -and $_.FullName -notmatch '\\inc\\' }

$results = @()

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw -ErrorAction SilentlyContinue
    if (-not $content) { continue }
    
    # Count headings
    $h1Count = ([regex]::Matches($content, '<h1[^>]*>', [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)).Count
    $h2Count = ([regex]::Matches($content, '<h2[^>]*>', [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)).Count
    $h3Count = ([regex]::Matches($content, '<h3[^>]*>', [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)).Count
    
    # Extract text content (remove HTML tags)
    $textContent = $content -replace '<script[^>]*>.*?</script>', '' -replace '<style[^>]*>.*?</style>', '' -replace '<[^>]+>', ' '
    $wordCount = ($textContent -split '\s+').Count
    
    # Check for meta tags
    $hasTitle = $content -match '<title[^>]*>.*?</title>'
    $hasDescription = $content -match '<meta\s+name=["'']description["'']'
    $hasKeywords = $content -match '<meta\s+name=["'']keywords["'']'
    
    # Check for structured data
    $hasStructuredData = $content -match 'application/ld\+json' -or $content -match 'schema\.org'
    
    # Check for images
    $imageCount = ([regex]::Matches($content, '<img[^>]*>', [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)).Count
    $imagesWithAlt = ([regex]::Matches($content, '<img[^>]*alt=["''][^"'']+["'']', [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)).Count
    
    $results += [PSCustomObject]@{
        File = $file.Name
        Path = $file.FullName.Replace((Get-Location).Path + '\', '')
        H1Count = $h1Count
        H2Count = $h2Count
        H3Count = $h3Count
        WordCount = $wordCount
        HasTitle = $hasTitle
        HasDescription = $hasDescription
        HasKeywords = $hasKeywords
        HasStructuredData = $hasStructuredData
        ImageCount = $imageCount
        ImagesWithAlt = $imagesWithAlt
        NeedsOptimization = ($h1Count -ne 1 -or $h2Count -lt 3 -or $h3Count -lt 3 -or $wordCount -lt 1500 -or -not $hasStructuredData)
    }
}

# Export results
$results | Export-Csv -Path "seo-analysis.csv" -NoTypeInformation

# Summary
Write-Host "`nSEO Analysis Summary:"
Write-Host "Total files analyzed: $($results.Count)"
Write-Host "Files needing optimization: $(($results | Where-Object { $_.NeedsOptimization }).Count)"
Write-Host "`nFiles missing H1: $(($results | Where-Object { $_.H1Count -eq 0 }).Count)"
Write-Host "Files with multiple H1s: $(($results | Where-Object { $_.H1Count -gt 1 }).Count)"
Write-Host "Files with < 3 H2s: $(($results | Where-Object { $_.H2Count -lt 3 }).Count)"
Write-Host "Files with < 3 H3s: $(($results | Where-Object { $_.H3Count -lt 3 }).Count)"
Write-Host "Files with < 1500 words: $(($results | Where-Object { $_.WordCount -lt 1500 }).Count)"
Write-Host "Files without structured data: $(($results | Where-Object { -not $_.HasStructuredData }).Count)"

$results | Format-Table -AutoSize

