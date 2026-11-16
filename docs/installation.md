# 🚀 Installation and first run

## Prerequisites
- Node.js 18 or newer. CI currently uses Node.js 20.
- npm and Git.
- Network access for remote metadata requests.
- A current browser for route and network inspection.

## Clone the repository

```bash
git clone https://github.com/Brajesh31/Anime_website.git
cd Anime_website
```

## Install dependencies

```bash
npm ci
```

npm ci uses package-lock.json and is preferred for reproducible installs. If it fails, record the Node/npm versions before changing the lockfile. Do not delete the lockfile as a first troubleshooting step.

## Start development

```bash
npm run dev
```

Open the local URL printed by Vite, normally http://localhost:5173.

## Verify the build

```bash
npm run lint
npm run build
python scripts/check_docs.py
```

Lint currently reports legacy findings and is advisory in CI. A successful production build does not prove that external endpoints respond.

## Optional production preview

```bash
npm run preview
```

This serves the generated dist directory locally. It does not reproduce all production host rewrite behavior.

## First-run checklist
- [ ] Node version is supported.
- [ ] npm ci completes without changing the lockfile unexpectedly.
- [ ] Vite starts and prints a local URL.
- [ ] Root route renders.
- [ ] Anime route renders.
- [ ] Browser Network panel shows the result of a search request.
- [ ] Provider failures are recorded without exposing secrets.
- [ ] Production build completes.
- [ ] Documentation links validate.

## Common installation problems

| Problem | Suggested check |
|---|---|
| Unsupported engine or syntax | Check node --version |
| npm ci lock mismatch | Check package.json and package-lock.json are in sync |
| Dependency install timeout | Check registry/network before changing dependencies |
| Port already occupied | Use Vite's printed alternate port or stop the conflicting process |
| App loads but catalog is empty | Inspect provider request separately from build status |
| Local manga request fails | Inspect vite.config.js proxy path and remote service |

See [configuration](configuration.md), [development](development.md), and [troubleshooting](troubleshooting.md).
