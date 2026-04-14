# Project Overview

## Current State
- GitHub import contained only `README.md` and no runnable application code.
- Added a minimal static `index.html` landing page so the project can run in Replit.
- The app is served with Python's built-in static file server on `0.0.0.0:5000`.

## Project Structure
- `index.html` — static landing page shown in the Replit preview.
- `README.md` — original imported project description.
- `.replit` — Replit project and deployment configuration.

## Runtime
- Development workflow command: `python3 -m http.server 5000 --bind 0.0.0.0`
- Frontend preview port: `5000`
- Deployment target: static site with the project root as the public directory.

## Notes
- No package manager, database, backend, or third-party integrations are currently used.
