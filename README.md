# MyLastTejasProject

**Full-stack educational platform** built with a Vite‑powered React frontend and a Spring Boot backend.

## 🚀 Overview
The application provides:

- Career guidance, placement preparation, exam study material, and coding practice modules.
- A code editor with multi-language execution supported by remote APIs.
- User authentication and storage handled via Supabase (frontend) and a local H2 database for demo/admin endpoints.

## 🧱 Frontend
Located in `src/`.

- React components under `components/` deliver UI pages such as `Dashboard`, `DSAPractice`, `ResumeBuilder`, etc.
- Data files in `src/data/` drive the content.
- Authentication is managed through Supabase in `src/context/AuthContext.jsx`.
- Code execution is proxied through the backend by `src/services/codeCompilerService.js`.
- Built with Vite; run with `npm run dev`.

## 🔧 Backend (Spring Boot)
Resides in `backend/`.

- Spring Boot application listening on **port 4000** (configure via `application.properties`).
- Uses **H2 in‑memory database** for storing user records and can be viewed at `/h2-console`.
- Exposes endpoints under `/api/auth` (signup/login/list users) and `/api/compile` for forwarding code to the Piston API.
- Run with `cd backend && mvn spring-boot:run` or build the jar with `mvn package`.

> The previous Node/Express backend has been removed; the new service replaces it entirely.

## 🛠️ Setup
1. **Frontend**
   ```bash
   npm install
   npm run dev
   ```
2. **Backend**
   ```bash
   cd backend
   mvn spring-boot:run
   ```
   or run the jar produced in `backend/target`.
3. Access the app at `http://localhost:5173` (default Vite port). Back‑end listens on port 4000 unless changed.

## ☁️ Vercel Deployment
The frontend is a static Vite build and can be hosted on Vercel. The backend
must run on a separate JVM‑capable host (Render, Heroku, a VM, etc.) and expose
its API under `/api`.

1. Add a `vercel.json` rewrite so `/api/*` is forwarded to your backend
   (example included in repo).
2. Set the following environment variables in Vercel:
   * `VITE_API_BASE_URL` – `/api` or `https://your-backend.com/api`
   * `VITE_GOOGLE_API_KEY`, `VITE_JUDGE0_API_KEY`, etc. as needed
3. Deploy the static site; Vercel will run `npm run build` and publish `dist/`.
4. Ensure your backend is reachable and uses a persistent database (H2 in
   memory is only for local development).

Refer to `.github/copilot-instructions.md` for full details on production
configuration and database guidance.

## 📁 Notes
- Environment variables and example values are kept in `.env.example`.
- Most data is static; to update or add languages, modify `src/services/codeCompilerService.js` and the backend proxy if necessary.

---

This README aims to help developers quickly get the project running with the new Spring backend using H2 database.