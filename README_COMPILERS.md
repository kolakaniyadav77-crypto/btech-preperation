# Compiler Backends

The project now supports multiple code execution backends with intelligent fallback.

## Available execution paths (checked in order)

1. **Local server proxy** (`/api/compile`)
   - Uses Judge0 remote API if `JUDGE0_RAPIDAPI_KEY` is set and reachable.
   - Falls back to **local execution** using installed tools when the network/API key is missing.
   - Local languages supported by default: Python, JavaScript (Node), C, C++ (requires `gcc`/`g++`).
   - *Browser‑only users* get an additional Python interpreter via **Pyodide** (WASM) – the front-end automatically loads it when needed, so Python code runs even with no internet or server. The runtime captures both printed output and the value of a lone expression (so `1+1` yields `2` without `print()`).
   - Add more languages by editing the backend controller that forwards requests to Piston (previously `server/index.js`).  The Spring Boot project lives under `backend/` now.  For local execution you can also integrate additional WASM-based interpreters/compilers directly in the frontend the same way Pyodide is wired up.

2. **Piston API** (https://emkc.org/api/v2/piston/execute) – primary remote executor.
3. **Jdoodle API** – fallback remote executor.
4. **RapidAPI Code Execution** – optional; only used if `VITE_RAPIDAPI_KEY` is provided.
5. **Client-side JavaScript** – instant execution for JS code without any backend.

## Health checks & UI

- The front-end `codeCompilerService.checkCompilers()` pings each backend and returns an
  object with statuses. A `js-local` entry is always `ok`, so the "⚠️ All code compilation
  backends are currently unreachable" banner only appears if **every** service fails (rare).
- When remote services are down the execute button is disabled for languages that do not
  have a local fallback (currently only JavaScript and Python). The tooltip will explain
  that only JS/Python can run offline, preventing confusing "all compilers unavailable" errors.
- Language dropdowns pull from `codeCompilerService.getSupportedLanguages()` which is
  populated from a single map; adding a compiler automatically updates the UI.

## Offline usage

To run compilers without an internet connection:

1. Start the backend (`cd backend && mvn spring-boot:run` or run the generated jar).  It listens on port 4000 by default.
   - by default it listens on port 4000; make sure nothing else is occupying the port.  An `EADDRINUSE` error means another process is already bound (perhaps a previous run).
   - you can kill the existing process or change the port by setting `PORT` in your environment.
2. Ensure the required local tooling is installed (Python, Node, gcc, etc.).
3. The server will execute code directly when remote services are unreachable.
4. Check compilers via the button in the Code Editor to view backend statuses.

If you see `server: "error"` in the health check, verify the proxy process is running and reachable at `http://localhost:4000`.

> **Note:** Kotlin, Swift, and other languages are supported when the remote
> APIs provide them. Local execution for these languages requires installing
> the respective compilers and extending the `executeLocally` helper.

## Adding new languages

- **Frontend**: add to the `languageMap` in `src/services/codeCompilerService.js`.
- **Server**: add to `languageMap` for Judge0 IDs, and optionally extend local support.
- UI components automatically pick up the new language via `getSupportedLanguages()`.

---

This README is meant as a quick reference when working with the compilation feature.