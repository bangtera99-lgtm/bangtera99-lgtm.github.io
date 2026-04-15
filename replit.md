# Project Overview

## Current State
- Static health and wellness blog deployed for the root GitHub Pages domain `https://bangtera99-lgtm.github.io`.
- Contains 32 original English-language health articles: 30 dated throughout 2024 and 2 current updates dated April 15, 2026.
- Includes homepage, category page, archive/posts-by-year page, article pages, About, Contact, Privacy Policy, Terms, Medical Disclaimer, `robots.txt`, `sitemap.xml`, and `feed.xml`.
- Content is written as general educational wellness information and avoids miracle-cure, diagnosis, or unsafe medical claims.

## Project Structure
- `index.html` — homepage with all recent posts and sidebar profile.
- `styles.css` — responsive clean professional theme inspired by Minimal Mistakes/Jekyll.
- `script.js` — local article search panel.
- `articles/` — 25 individual health article pages.
- `categories.html` — posts grouped by category.
- `archive.html` — posts by year for 2024.
- `legal/medical-disclaimer.html` — health disclaimer page.
- `privacy-policy.html`, `terms.html`, `about.html`, `contact.html` — support pages for trust and AdSense readiness.
- `robots.txt`, `sitemap.xml`, `feed.xml` — SEO crawler and RSS files.

## Runtime
- Development workflow command: `python3 -m http.server 5000 --bind 0.0.0.0`
- Frontend preview port: `5000`
- Deployment target: static site with the project root as the public directory.

## Notes
- No package manager, database, backend, or third-party runtime integrations are used.
- A GitHub token may be stored as `GITHUB_TOKEN` for pushing updates to `bangtera99-lgtm.github.io`; do not print or commit the token.
- AdSense approval cannot be guaranteed, but the site is structured to be policy-friendly with original content, functional navigation, clear support pages, and medical disclaimers.
