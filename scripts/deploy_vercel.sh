#!/usr/bin/env bash
# Shell helper to deploy to Vercel
# Usage: ./scripts/deploy_vercel.sh

if ! command -v vercel >/dev/null 2>&1; then
  echo "Vercel CLI not found. Install with: npm i -g vercel"
  exit 1
fi

echo "Installing dependencies and building..."
npm install || { echo "npm install failed"; exit 1; }
npm run build || { echo "Build failed"; exit 1; }

echo "Logging into Vercel..."
vercel login

if [ -f .env ]; then
  echo "Found .env — adding VITE_* variables to Vercel (production)."
  while IFS='=' read -r name value; do
    if [[ $name == VITE_* ]]; then
      echo "Adding $name to Vercel (production)"
      vercel env add "$name" production --value "$value"
    fi
  done < .env
else
  echo ".env not found — you can add env vars via the dashboard or 'vercel env add'"
fi

echo "Deploying to Vercel (interactive)..."
vercel --prod

echo "Done. Check Vercel output for the production URL."
