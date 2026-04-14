# Project Overview

## Current State
- Static health and wellness blog inspired by the layout style of `https://pscustomobject.github.io/`.
- Content is original English-language educational health content intended for SEO and AdSense-readiness.
- Includes homepage, category page, article pages, About, Contact, Privacy Policy, Terms, Medical Disclaimer, robots.txt, and sitemap.xml.

## Project Structure
- `index.html` — homepage with recent posts and sidebar profile.
- `styles.css` — responsive dark blog theme.
- `script.js` — small search panel for local article discovery.
- `articles/` — individual health article pages.
- `legal/medical-disclaimer.html` — health disclaimer page.
- `privacy-policy.html`, `terms.html`, `about.html`, `contact.html`, `categories.html` — support pages for trust and AdSense readiness.
- `robots.txt`, `sitemap.xml` — SEO crawler files.

## Runtime
- Development workflow command: `python3 -m http.server 5000 --bind 0.0.0.0`
- Frontend preview port: `5000`
- Deployment target: static site with the project root as the public directory.

## Notes
- No package manager, database, backend, or third-party runtime integrations are used.
- Before applying for AdSense, replace the contact guidance with the owner's real public contact method and review all publisher policy requirements.
