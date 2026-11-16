# 📦 Installation

## Prerequisites

- Node.js 18 or later.
- npm compatible with the lockfile.
- Git.
- Network access for remote provider requests during interactive use.

## Clone and install

```bash
git clone https://github.com/Brajesh31/Anime_website.git
cd Anime_website
npm ci
```

Use `npm ci` for reproducible installation from the committed npm lockfile. Do not mix package managers or replace the lockfile without a deliberate dependency change.

## Start development

```bash
npm run dev
```

Vite prints the local URL in the terminal. The default is usually `http://localhost:5173`.

## Production build

```bash
npm run lint
npm run build
npm run preview
```

The output directory is `dist/`. Do not commit generated build output.

## Environment

The current app uses fixed remote endpoint constants in source. `.env.example` contains security guidance only. No private environment variable is required for the current basic setup.

Never put provider secrets in browser-exposed `VITE_*` variables.
