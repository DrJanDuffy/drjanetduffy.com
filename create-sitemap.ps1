# Create XML Sitemap for Google

$baseUrl = "https://www.lasvegashomesbyleslie.com"
$files = Get-ChildItem -Path "lasvegashomesbyleslie.com" -Recurse -Include *.html,*.php | Where-Object { 
    $_.FullName -notmatch '\\idx\\' -and 
    $_.FullName -notmatch '\\inc\\' -and
    $_.FullName -notmatch '\\listing\\'
}

$sitemap = @"
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
"@

foreach ($file in $files) {
    $relativePath = $file.FullName.Replace((Get-Location).Path + '\lasvegashomesbyleslie.com\', '').Replace('\', '/')
    $url = "$baseUrl/$relativePath"
    
    # Determine priority based on file type
    $priority = "0.5"
    $changefreq = "monthly"
    
    if ($relativePath -eq "index.html" -or $relativePath -eq "index.php") {
        $priority = "1.0"
        $changefreq = "weekly"
    }
    elseif ($relativePath -match "blog") {
        $priority = "0.7"
        $changefreq = "weekly"
    }
    elseif ($relativePath -match "summerlin|henderson|about|selling|buying") {
        $priority = "0.8"
        $changefreq = "monthly"
    }
    
    $lastmod = $file.LastWriteTime.ToString("yyyy-MM-dd")
    
    $sitemap += @"

<url>
    <loc>$url</loc>
    <lastmod>$lastmod</lastmod>
    <changefreq>$changefreq</changefreq>
    <priority>$priority</priority>
</url>
"@
}

$sitemap += @"
</urlset>
"@

$sitemap | Out-File -FilePath "lasvegashomesbyleslie.com\sitemap.xml" -Encoding UTF8
Write-Host "Sitemap created: lasvegashomesbyleslie.com\sitemap.xml"
Write-Host "Total URLs: $($files.Count)"

