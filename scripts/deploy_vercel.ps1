# PowerShell helper to deploy this project to Vercel (interactive)
# Usage: Open PowerShell in project root and run: .\scripts\deploy_vercel.ps1

# Check for vercel CLI
if (-not (Get-Command vercel -ErrorAction SilentlyContinue)) {
    Write-Host "Vercel CLI not found. Install with: npm i -g vercel" -ForegroundColor Yellow
    return
}

# Ensure build succeeds locally
Write-Host "Running local build..." -ForegroundColor Cyan
npm install
if ($LASTEXITCODE -ne 0) { Write-Host "npm install failed" -ForegroundColor Red; return }
npm run build
if ($LASTEXITCODE -ne 0) { Write-Host "Build failed. Fix local errors before deploying." -ForegroundColor Red; return }

# Login to Vercel
vercel login

# Read env from local .env (optional)
$envFile = "./.env"
if (Test-Path $envFile) {
    Write-Host "Found .env — reading VITE_* entries and adding to Vercel (interactive)" -ForegroundColor Cyan
    Get-Content $envFile | ForEach-Object {
        if ($_ -match '^VITE_') {
            $pair = $_ -split '='
            $key = $pair[0].Trim()
            $value = $pair[1..($pair.Length-1)] -join '='
            Write-Host "Adding $key to Vercel (production)." -ForegroundColor Green
            vercel env add $key production --value "$value"
        }
    }
} else {
    Write-Host ".env not found. You will be prompted to set required variables." -ForegroundColor Yellow
}

Write-Host "If you prefer to set env vars in the Vercel dashboard, skip CLI env additions." -ForegroundColor Cyan

# Deploy
Write-Host "Deploying to Vercel (interactive)..." -ForegroundColor Cyan
vercel --prod

Write-Host "Deployment finished (check the Vercel output for the production URL)." -ForegroundColor Green
