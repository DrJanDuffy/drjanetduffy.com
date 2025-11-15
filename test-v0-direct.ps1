# Direct V0 API Test Script
# Tests the V0 API endpoint directly

$apiKey = (Get-Content .env | Select-String "V0_API_KEY").Line -replace "V0_API_KEY=", ""

if (-not $apiKey) {
    Write-Host "Error: V0_API_KEY not found in .env file" -ForegroundColor Red
    exit 1
}

Write-Host "Testing V0 API directly..." -ForegroundColor Cyan
Write-Host "API Key: $($apiKey.Substring(0, [Math]::Min(20, $apiKey.Length)))..." -ForegroundColor Gray
Write-Host ""

$testBody = @{
    prompt = "Create a simple button component"
    model = "claude-3-5-sonnet"
    shadcn = $true
} | ConvertTo-Json

$endpoints = @(
    "https://api.v0.dev/v1/generate",
    "https://api.v0.dev/v1/prompt",
    "https://api.v0.dev/api/v1/generate",
    "https://api.v0.dev/generate"
)

foreach ($endpoint in $endpoints) {
    Write-Host "Testing: $endpoint" -ForegroundColor Yellow
    try {
        $response = Invoke-RestMethod -Uri $endpoint -Method POST -Body $testBody -ContentType "application/json" -Headers @{
            "Authorization" = "Bearer $apiKey"
        } -ErrorAction Stop
        
        Write-Host "  SUCCESS!" -ForegroundColor Green
        Write-Host "  Response keys: $($response.PSObject.Properties.Name -join ', ')" -ForegroundColor Green
        break
    }
    catch {
        $statusCode = $_.Exception.Response.StatusCode.value__
        Write-Host "  Failed: $statusCode - $($_.Exception.Message)" -ForegroundColor Red
    }
    Write-Host ""
}

Write-Host "Test complete!" -ForegroundColor Cyan

