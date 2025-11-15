# Test V0 API Integration

Write-Host "Testing V0 API Integration..." -ForegroundColor Cyan
Write-Host ""

# Test 1: Check API Status
Write-Host "1. Testing GET /api/v0 (Status Check)..." -ForegroundColor Yellow
try {
    $status = Invoke-RestMethod -Uri "http://localhost:5173/api/v0" -Method GET
    Write-Host "   Status: $($status.status)" -ForegroundColor Green
    Write-Host "   Configured: $($status.configured)" -ForegroundColor Green
    Write-Host "   Message: $($status.message)" -ForegroundColor Green
    Write-Host ""
} catch {
    Write-Host "   Error: $($_.Exception.Message)" -ForegroundColor Red
    Write-Host ""
}

# Test 2: Generate a Simple Component
Write-Host "2. Testing POST /api/v0 (Component Generation)..." -ForegroundColor Yellow
$testPrompt = @{
    prompt = "Create a simple button component with primary styling"
    model = "claude-3-5-sonnet"
    shadcn = $true
} | ConvertTo-Json

try {
    $result = Invoke-RestMethod -Uri "http://localhost:5173/api/v0" -Method POST -Body $testPrompt -ContentType "application/json"
    
    if ($result.success) {
        Write-Host "   Success: Component generated!" -ForegroundColor Green
        Write-Host "   Component length: $($result.component.Length) characters" -ForegroundColor Green
        Write-Host ""
        Write-Host "   First 200 characters of component:" -ForegroundColor Cyan
        Write-Host "   $($result.component.Substring(0, [Math]::Min(200, $result.component.Length)))..." -ForegroundColor Gray
    } else {
        Write-Host "   Error: $($result.error)" -ForegroundColor Red
    }
} catch {
    Write-Host "   Error: $($_.Exception.Message)" -ForegroundColor Red
    if ($_.Exception.Response) {
        $reader = New-Object System.IO.StreamReader($_.Exception.Response.GetResponseStream())
        $errorBody = $reader.ReadToEnd()
        Write-Host "   Response: $errorBody" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "Test complete!" -ForegroundColor Cyan

