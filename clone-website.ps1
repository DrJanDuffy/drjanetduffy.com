# PowerShell script to clone a website recursively
param(
    [string]$Url = "https://www.lasvegashomesbyleslie.com/",
    [string]$OutputDir = "lasvegashomesbyleslie.com",
    [int]$MaxDepth = 2,
    [int]$MaxPages = 100,
    [int]$DelaySeconds = 1
)

# Create output directory
if (-not (Test-Path $OutputDir)) {
    New-Item -ItemType Directory -Path $OutputDir -Force | Out-Null
}

$baseUrl = $Url.TrimEnd('/')
$baseDomain = ([System.Uri]$Url).Host
$downloadedUrls = @{}
$queue = @()
$depthMap = @{}

# Function to normalize URL
function Normalize-Url {
    param([string]$Url, [string]$BaseUrl)
    
    if ([string]::IsNullOrWhiteSpace($Url)) { return $null }
    
    # Skip external links, javascript:, mailto:, etc.
    if ($Url -match '^(javascript|mailto|tel|#):') { return $null }
    if ($Url.StartsWith('//')) { $Url = "https:$Url" }
    
    try {
        $uri = [System.Uri]$Url
        if (-not $uri.IsAbsoluteUri) {
            $baseUri = [System.Uri]$BaseUrl
            $uri = New-Object System.Uri($baseUri, $Url)
        }
        
        # Only process URLs from the same domain
        if ($uri.Host -ne $baseDomain) { return $null }
        
        return $uri.AbsoluteUri
    }
    catch {
        return $null
    }
}

# Function to get file path from URL
function Get-FilePath {
    param([string]$Url, [string]$OutputDir)
    
    $uri = [System.Uri]$Url
    $path = $uri.AbsolutePath
    
    if ($path -eq '/' -or $path.EndsWith('/')) {
        $path = $path.TrimEnd('/') + '/index.html'
    }
    
    # Remove leading slash
    $path = $path.TrimStart('/')
    
    # Ensure directory exists
    $fullPath = Join-Path $OutputDir $path
    $dir = Split-Path $fullPath -Parent
    if (-not (Test-Path $dir)) {
        New-Item -ItemType Directory -Path $dir -Force | Out-Null
    }
    
    return $fullPath
}

# Function to download a URL
function Download-Url {
    param([string]$Url, [string]$OutputPath)
    
    if ($downloadedUrls.ContainsKey($Url)) {
        return $downloadedUrls[$Url]
    }
    
    try {
        Write-Host "Downloading: $Url"
        $response = Invoke-WebRequest -Uri $Url -UseBasicParsing -ErrorAction Stop
        
        # Save the content
        $response.Content | Out-File -FilePath $OutputPath -Encoding UTF8
        
        $downloadedUrls[$Url] = $response
        return $response
    }
    catch {
        Write-Warning "Failed to download $Url : $_"
        return $null
    }
}

# Function to extract links from HTML
function Extract-Links {
    param([string]$Html, [string]$BaseUrl)
    
    $links = @()
    
    # Extract href attributes
    $hrefPattern = 'href=["'']([^"'']+)["'']'
    $matches = [regex]::Matches($Html, $hrefPattern, [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)
    foreach ($match in $matches) {
        $link = Normalize-Url -Url $match.Groups[1].Value -BaseUrl $BaseUrl
        if ($link) { $links += $link }
    }
    
    # Extract src attributes (for images, scripts, etc.)
    $srcPattern = 'src=["'']([^"'']+)["'']'
    $matches = [regex]::Matches($Html, $srcPattern, [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)
    foreach ($match in $matches) {
        $link = Normalize-Url -Url $match.Groups[1].Value -BaseUrl $BaseUrl
        if ($link) { $links += $link }
    }
    
    return $links | Select-Object -Unique
}

# Start with the main page
$mainUrl = $Url
$queue += $mainUrl
$depthMap[$mainUrl] = 0

Write-Host "Starting website clone..."
Write-Host "Base URL: $baseUrl"
Write-Host "Output Directory: $OutputDir"
Write-Host "Max Depth: $MaxDepth"
Write-Host "Max Pages: $MaxPages"
Write-Host "Delay between requests: $DelaySeconds seconds"
Write-Host ""

$pageCount = 0

# Process queue
while ($queue.Count -gt 0 -and $pageCount -lt $MaxPages) {
    $currentUrl = $queue[0]
    $queue = $queue[1..($queue.Length-1)]
    
    $currentDepth = $depthMap[$currentUrl]
    
    if ($currentDepth -gt $MaxDepth) { continue }
    if ($downloadedUrls.ContainsKey($currentUrl)) { continue }
    
    $outputPath = Get-FilePath -Url $currentUrl -OutputDir $OutputDir
    $response = Download-Url -Url $currentUrl -OutputPath $outputPath
    
    # Add delay to avoid rate limiting
    if ($DelaySeconds -gt 0) {
        Start-Sleep -Seconds $DelaySeconds
    }
    
    if ($response -and $currentDepth -lt $MaxDepth) {
        # Check if it's HTML content
        $contentType = $response.Headers['Content-Type']
        if ($contentType -and $contentType -match 'text/html') {
            $links = Extract-Links -Html $response.Content -BaseUrl $currentUrl
            
            foreach ($link in $links) {
                if (-not $downloadedUrls.ContainsKey($link) -and -not $queue.Contains($link)) {
                    $queue += $link
                    $depthMap[$link] = $currentDepth + 1
                }
            }
        }
    }
    
    $pageCount++
}

Write-Host "`nClone completed!"
Write-Host "Downloaded $pageCount pages/files"
Write-Host "Output saved to: $OutputDir"
