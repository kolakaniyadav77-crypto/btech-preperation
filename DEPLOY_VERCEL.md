Deployment guide — Vercel

Goal: Deploy the project so production matches local build.

Prerequisites:
- Node.js and npm installed
- Vercel account
- Vercel CLI (optional but recommended): `npm i -g vercel`

Steps
1) Verify local build succeeds
```bash
npm install
npm run build
```
Fix any build warnings/errors locally before deploying.

2) Create a GitHub repo (if not already) and push the project.

3) Set environment variables in Vercel (Project Settings → Environment Variables):
- `VITE_SUPABASE_URL` = your Supabase URL
- `VITE_SUPABASE_ANON_KEY` = your Supabase anon key

If you have other VITE_ vars used by the app, add them too.

4) Connect the GitHub repo to Vercel (or use the Vercel CLI):
- In Vercel dashboard, Import Project → choose the GitHub repo → set build command `npm run build` and Output Directory `dist` (this repo already contains `vercel.json` with those values).

5) Deploy via CLI (optional):
```bash
vercel login
vercel --prod
```
You can add env vars using the CLI:
```bash
vercel env add VITE_SUPABASE_URL production
vercel env add VITE_SUPABASE_ANON_KEY production
```

Notes & gotchas
- This is a static frontend build. If you rely on the Express server in `server/index.js`, Vercel's serverless functions are not the same as a long-running Express server. Options:
  - Move server endpoints to Vercel Serverless Functions under `/api`.
  - Deploy the Express server separately (Render, Fly, Railway) and update client to use that URL.

- Ensure `.env` (with secrets) is NOT committed. Use Vercel env vars instead.

- If you see CSS minifier warnings on Vercel (css-syntax-error), build locally and fix the source CSS files first; the repo already had many fixes and a CSS brace-checker at `src/tools/check_css_braces.py`.

If you want, run the helper scripts:
- PowerShell: `./scripts/deploy_vercel.ps1`
- Shell: `./scripts/deploy_vercel.sh`

If you'd like, I can also:
- Create GitHub Actions workflow to build and deploy on push to `main`.
- Convert `server/index.js` to Vercel serverless functions if you want a single Vercel deployment.
