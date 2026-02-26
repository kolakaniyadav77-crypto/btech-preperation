# AI Agent Instructions — Education Pathway Platform

**Purpose:** Concise, actionable guidance for AI agents working on this React+Vite+Express platform serving college placement prep.

## Quick Start (Commands)

```bash
npm install
npm run dev              # Frontend (Vite) on localhost:5180
npm run start:backend    # Backend (Spring Boot) on localhost:9000 (see application.properties)

npm run build            # Production build to /dist
npm run serve            # Build + preview on :4173
npm run lint             # ESLint check
npm run deploy:ngrok:dev # Expose :5173 via ngrok (dev build)
```

**Critical:** Two‑terminal setup needed — run `npm run dev` (frontend) AND `npm run start:backend` (or launch the Spring jar) in another terminal.

## Architecture & Data Flow

**Three-Layer System:**
- **React Frontend (Vite, :5180):** 30+ page components (Placement, DSA, Career paths, Chatbot, Resume builder, etc.), protected routes via AuthContext, client state in localStorage + React context
- **Spring Boot Backend (:9000 by default):** REST API `/api/*` (context path `/api` set in `application.properties`), code execution proxy to Piston, H2 in-memory user database (replaces `server/users.json`), email simulation still not relevant
- **External Services:** Supabase (OAuth auth, user metadata), Judge0 RapidAPI (code compilation), Google Gemini API (AI fallback)

**Core Data Flows:**

```
Auth Flow:
  User signup/login → Supabase OAuth → JWT token stored
  → AuthContext.checkUser() calls supabase.auth.getSession() on app mount
  → user metadata → localStorage education_path_current_user JSON
  → protected routes check isAuthenticated flag → redirect to /login if false

Code Execution:
  CodeEditor.jsx user clicks "Run" 
  → codeCompilerService.executeCode(code, language, input)
  → if JavaScript: client-side Function() execution (instant)
  → else: POST /api/compile → backend base64-encodes → Judge0 API submit
  → backend polls Judge0 /submissions/{tokenId} until status ≠ QUEUED/PROCESSING
  → response {success, output, executionTime, error} → display in UI

Progress Tracking (18 sections):
  User completes task/question → explicit call progressTracker.updateSectionProgress(userId, section, percent)
  → stored in localStorage education_path_progress_{userId} (survives restarts)
  → NOT auto-triggered by page visits; module access only records timestamps
  → frontend updates displayed progress bar from localStorage

AI Chatbot:
  User types question → aiChatbotService.answerQuestion(query)
  → tokenize query, search aiChatbotService.KNOWLEDGE_BASE (~1300 lines, 100+ Q&A objects)
  → if keyword match found: return markdown answer with code blocks
  → if no match: call Gemini API via chatGptService (slower but novel answers)
  → display formatted markdown in chat UI
```

## Essential Files & Key Patterns

**Auth/Session Management (`src/context/AuthContext.jsx`):**
- Exports: `useAuth()` hook → `{currentUser, isAuthenticated, loading, signUp(), login(), logout()}`
- Subscribes to Supabase auth state changes on mount; persists `currentUser` JSON to localStorage key `education_path_current_user`
- **Design pattern:** Welcome page shows EVERY login (not persistent per-user), intentional to reset flags each session
- **Guards:** Always check `if (!currentUser?.id) return;` before API calls; auth loads async
- Component example: `const { currentUser, isAuthenticated } = useAuth(); if (!isAuthenticated) return <Navigate to="/login" />;`

**Code Execution (`src/services/codeCompilerService.js` + `server/index.js`):**
- Frontend export: `executeCode(code, language, input)` returns Promise with `{success, output, executionTime, error}`
- **Automatic health check:** `codeCompilerService.checkCompilers()` pings all external backends and is invoked when the `CodeEditor` component mounts. A warning banner appears if every service is unavailable.
- **Language routing:** 
  - JavaScript/TypeScript → `new Function(code)()` executed client-side (instant, 0.001s)
  - Python/Java/C++/etc → POST `/api/compile` to backend → Judge0 (2-10s typical, includes queue time)
- Backend handles base64 encoding, Judge0 polling, error handling, response normalization
- Language ID mapping in `server/index.js` languageMap (Python=71, Java=62, JavaScript=63, etc.). New languages such as Kotlin and Swift have been added; verify the correct Judge0 IDs when deploying.
- Frontend language dropdowns are no longer hard‑coded arrays; components call `codeCompilerService.getSupportedLanguages()` so adding a compiler automatically propagates throughout the UI.
- Response format: `{success: true, output: "...", executionTime: "2.5s"}` or `{success: false, error: "SyntaxError: ..."}`
+ **Tip:** compilers will error out if neither Piston nor Jdoodle nor a running server is reachable. Ensure you have internet access and start the backend with a valid `JUDGE0_RAPIDAPI_KEY` (see “Environment + Secrets” section), then reload the frontend to clear the banner.

**Progress Tracking (`src/utils/progressTracker.js`):**
- **Initialization:** `progressTracker.initializeProgress(userId)` creates 18 sections with 0%, called on signup
- **Critical rule:** Visiting component ≠ progress update; must explicitly call `updateSectionProgress(userId, section, percent)` on task completion
- **Module access:** `trackModuleAccess(userId, section)` records timestamp only (no progress increment)
- **Storage:** localStorage key `education_path_progress_{userId}` survives browser restart; JSON structure: `{sections: {placement: 0, qar: 45, ...}, moduleAccess: {...}, lastUpdated}`
- **Retrieval:** `getUserProgress(userId)` reads from localStorage

**UI Component Pattern:**
- **File structure:** `Component.jsx` + `Component.css` paired, self-contained styling (no CSS-in-JS)
- **Color palette:** Gradients purple→pink (#667eea→#764ba2), cards: `border: 2px solid rgba(139, 92, 246, 0.15)`, `box-shadow: 0 4px 12px rgba(139, 92, 246, 0.08)`, hover effects `transform: translateY(-5px)`
- **Responsive grid:** `grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))` for card layouts
- **Text contrast:** Dark text on light backgrounds, light text on dark/colored cards
- **Note:** DSA Practice topics are laid out one per row (single-column grid) to ease scanning, adjust `.topics-grid` in `DSAPractice.css`.

**Job Search & Link Utilities:**
- Page component `src/components/JobSearch.jsx` uses `src/data/jobsSearch.js` for static listings.
- **Code execution diagnostics:** `src/services/codeCompilerService.js` now includes `checkCompilers()` which pings each remote backend. The `CodeEditor` UI adds a "🔍 Check Compilers" button next to Run; clicking it will display a JSON object indicating which services (Piston, Jdoodle, RapidAPI) responded successfully. Use this before debugging downtime. When `executeCode()` ultimately fails, the returned error message appends the backend statuses automatically so the user can see which service is failing.
  - Jobs automatically filtered by deadline (`getActiveJobs()`), urgent jobs within 5 days and expired jobs removed from views.
  - Applies convenient filter by type (`Internship`, `Full-time`, **`Contest`**) and platform; search matches title/company/location.
  - LeetCode contests are treated as a platform (`LeetCode Contests`) with `jobType: 'Contest'` and registration links; update entries in `jobsSearch.js`.
  - The component refreshes every minute (setInterval) and also rerenders with a ticker so deadlines/countdowns update live. This ensures expired jobs disappear promptly after passing their deadline and your links stay current. New entries can be added to the `currentJobs` array at any time; once old jobs expire they will be automatically removed and the new ones take their place without any additional code.
  - Apply buttons now behave like normal links (`target="_blank"`); they open the job page in a new tab. The previous JS-based redirect has been removed because the anchor itself is sufficient and more reliable (and avoids popup blockers). Expired listings remain disabled.
- A utility script `scripts/linkChecker.js` scans `.js`, `.jsx`, and `.html` files for `http(s)` URLs and performs HEAD requests; run with `npm run check-links` to report broken links before they rot.
- VACR/QAR practice resource buttons are styled with white text via a CSS override (`.practice-here-box .enter`) so the toggle and the inner "Select →" links remain legible on the purple gradient.

**AI Chatbot Service (`src/services/aiChatbotService.js`):**
- `KNOWLEDGE_BASE` = array of 100+ Q&A objects: `{keywords: ['term1', 'term2'], title: string, answer: markdown}`
- Keyword matching algorithm: tokenize user query, search each entry's keywords array, return first match
- **Output format:** All answers are markdown with code blocks, bold/italic emphasis, multiline structured responses
- **Fallback:** If no KNOWLEDGE_BASE match, call `chatGptService.askGemini()` for dynamic answers
- Examples: binary search, sorting algorithms, data structures, OOP concepts, system design, interview prep

**Backend API Routing (`server/index.js`):**
- POST `/api/compile` — code execution handler (Judge0 proxy + fallback)
- User persistence: `loadUsers()` / `saveUsers()` read/write `server/users.json`
- CORS enabled; JSON body limit 1mb

## Environment + Secrets

**Frontend (`.env.local`):**
```
VITE_GOOGLE_API_KEY=<Gemini API key from Google AI Studio>
VITE_JUDGE0_API_KEY=<Judge0 RapidAPI free tier key>
VITE_SUPABASE_URL=<Supabase project URL>
VITE_SUPABASE_ANON_KEY=<Supabase anon (public) key>
```
Access via `import.meta.env.VITE_*` (NOT `process.env`). **Restart `npm run dev` after adding new VITE_* variables.**

**Important:** Supabase keys must include the full project URL and anon key for OAuth to work. Get from Supabase dashboard → Settings → API.

**Backend (`.env`):**
```
PORT=4000
JUDGE0_RAPIDAPI_KEY=<Judge0 RapidAPI key - get from https://rapidapi.com/judge0-official/api/judge0-ce or use Jdoodle as fallback>
GOOGLE_API_KEY=<same Gemini API key or GEMINI_API_KEY>
```
The backend auto-detects multiple env var names: handles JUDGE0_RAPIDAPI_KEY, VITE_JUDGE0_API_KEY, or REACT_APP_JUDGE0_API_KEY. Same flexibility for Google API key. **Important:** if JUDGE0_RAPIDAPI_KEY is not set, the `/api/compile` endpoint will return an error and the frontend will fall back to Piston or Jdoodle APIs. The CodeEditor will show a warning banner if all backends are unreachable.

**Never commit:** `.env`, `.env.local` files; they contain secrets.

## Project Conventions

| Pattern | Implementation | Why |
|---------|---|---|
| **localStorage prefix** | `education_path_*` | Namespace isolation on shared domains |
| **Current user key** | `education_path_current_user` | Session persists; AuthContext reads on mount |
| **Protected routes** | `isAuthenticated` check before element render | Redirects unauthenticated users to /login |
| **Code exec latency** | Show spinner 2-10s; no hard timeout | Judge0 queue delays normal; UX should be patient |
| **Component CSS** | Paired `.jsx` + `.css`, no CSS-in-JS | Encapsulation without runtime overhead |
| **useAuth safety** | `if (!currentUser?.id) return;` before state/API | Null-safe; auth resolves async |
| **Progress API** | Call updateSectionProgress() on task completion only | Prevents fake progress from page visits |
| **Backend secrets** | `.env` file only, read via dotenv.config() | Environment-specific, never committed |
| **Vite env vars** | `VITE_` prefix only | Build-time injection for client-side |

## Adding Features

**Add new page:**
1. Create `src/components/NewPage.jsx` + `src/components/NewPage.css`
2. Import `useAuth`, add auth guard: `if (!isAuthenticated) return <Navigate to="/login" />;`
3. Add route in `src/App.jsx` routes array: `<Route path="/path" element={<ProtectedRoute element={<NewPage />} />} />`
4. Register menu item in `src/components/Sidebar.jsx`; include icon + path
5. If progress-tracked: add section name to `progressTracker.js` initialization (max 18 sections)

**Add API endpoint:**
1. Define handler in `server/index.js`: `app.post('/api/endpoint', (req, res) => {...})`
2. Frontend service file: export async function that POSTs to `/api/endpoint`
3. Add CORS headers automatically (already configured; no extra setup needed)

**Add to AI KNOWLEDGE_BASE:**
1. Add object to `aiChatbotService.js` KNOWLEDGE_BASE array: `{keywords: ['term1'], title: 'Title', answer: '...'}`
2. Use markdown syntax in answer string; code blocks wrapped in triple backticks
3. Keyword matching is case-insensitive; more keywords = broader coverage
**Add job search entries or contests:**
1. Jobs live in `src/data/jobsSearch.js`. Add or update objects with `{id, platform, title, company, location, salary, experience, deadlineOffsetDays, applyLink, description, skills, jobType}`.
2. `jobType` values may be `'Internship'`, `'Full-time'` or `'Contest'` (contests are registered under contest-specific platforms like LeetCode Contests, CodeChef Contests, HackerRank Contests, CodeWars, or AtCoder).
3. `applyLink` must always be a valid string URL pointing to the application or contest page (never undefined).
4. Deadlines use `deadlineOffsetDays` (e.g., `7` = 7 days from now); the UI automatically hides expired entries and marks them as expired if the user is viewing at the moment.
5. Run `npm run check-links` after adding new URLs to verify the applyLink or any other internal link is reachable.
6. The component refreshes every minute (setInterval) and also rerenders with a ticker so deadlines/countdowns update live.
7. **Apply buttons** open contest/job links in a new tab (`target="_blank"`). Expired buttons are styled with `.disabled` class and `pointer-events: none`, preventing clicks.
8. New contest platforms include LeetCode Contests, CodeChef Contests, HackerRank Contests, CodeWars, and AtCoder, each with full platform cards in the Job Search page.
## Testing & Debugging

**Local testing setup:**
```bash
# Terminal 1
npm run dev              # Frontend hot reload on :5180

# Terminal 2
npm run start:server     # Backend HTTP server on :4000
```

Open browser → localhost:5180 → DevTools:
- **Application tab:** Search localStorage for `education_path_` keys to inspect user data
- **Network tab:** Filter `/api/compile` requests; observe Judge0 response times
- **Console:** Auth logs, error messages
- **server/users.json:** Check persistent user records between server restarts

**Common issues & fixes:**
| Issue | Diagnosis | Fix |
|-------|-----------|-----|
| "No current user" | AuthContext not fully loaded | Add `if (!currentUser?.id) return;` guards; auth resolves on mount |
| CORS error on login/signup | Backend context path mismatch or CORS filter not applied | Ensure controllers use relative paths (`/auth`, `/compile`) when context-path `/api` is set; restart backend and check `WebConfig` maps `/**` with allowed origins; also verify Vite dev proxy is running (restart `npm run dev` if you modify `vite.config.js`) |
| Backend on wrong port | README mentions 4000 but config uses 9000 | Update `API_BASE_URL` in `AuthContext` or modify `application.properties` to desired port |
| Judge0 timeout | Network/queue delay | Increase UI spinner timeout to 15s; Judge0 free tier slower |
| Progress not saving | User missing/logged out | Verify `currentUser?.id` exists before `updateSectionProgress()` |
| Env vars not working | Vite caches old values | Restart `npm run dev` after changing `.env.local` |
| Code execution hung | Browser blocked execution or network error | Check Network tab for failed `/api/compile` requests |
| Styling issues | CSS precedence or class not loaded | Check Component.css paired file exists; use DevTools inspector |

## File Structure Reference

**Core Application:**
- `src/App.jsx` — routing, ProtectedRoute wrapper, Welcome logic
- `src/context/AuthContext.jsx` — session state, Supabase integration, useAuth hook
- `src/components/*.jsx` — 30+ page components; each with paired `.css`
- `server/index.js` — Express API, Judge0 proxy, user persistence
- `src/services/` — AI, code compilation, Supabase client
- `src/utils/` — progress tracking, hooks, utilities
- `src/data/*.js` — static datasets (problems, career data, certifications, company info)

**Styling:**
- `src/index.css` — global palette, responsive layout, CSS variables
- `src/styles/*.css` — shared auth, entrance exams, admin styles
- Component CSS — `Component.css` alongside `Component.jsx`

## Notes for Complex Workflows

**Why no database backend?** File-based `server/users.json` + localStorage is sufficient for college prep context; simplifies deployment, requires no database setup.

**Why explicit progress updates?** Prevents fake inflation from mere page visits; progress reflects actual task completion.

**Why Judge0 for non-JS?** Isolated execution, no arbitrary code risk, languages beyond JavaScript, consistent output formatting.

**Why ngrok deployed preview?** Allows sharing work-in-progress with others; testing on real mobile devices, external API callbacks.
