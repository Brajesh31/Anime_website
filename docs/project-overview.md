# 🌸 Project overview

## What this repository is
Anime Website is a React 18 and Vite 5 single-page application. It contains a small landing page, anime search/recent episode screens, anime metadata and episode grouping, two playback screens, a manga search/detail experiment, and a light-novel placeholder.

The application is browser-first. Page components issue requests to external services and store returned values in local React state. There is no project-owned backend, database, authentication provider, or media delivery system.

## Why it exists
The repository explores:
- React component composition.
- Browser-based route navigation.
- Search and metadata requests.
- Episode grouping and navigation.
- Passing a remote media URL into a player component.
- Manga API/proxy experiments.
- Vite development and static deployment configuration.

## What it is not
It is not a complete streaming service, licensed media catalog, production recommendation engine, social platform, or full-stack user library. It does not include subscriptions, user accounts, persistent watch history, or a database.

## Current product areas

| Area | Component | State |
|---|---|---|
| Home | Home.jsx | Basic |
| Anime search/recent | AnimeHome.jsx | Partial |
| Anime detail | AnimeDescPage.jsx | Partial |
| Standard player | AnimePlayer.jsx | Partial |
| Recent player | RecentAnimePlayer.jsx | Partial |
| Manga catalog | Mangadex22.jsx | Experimental |
| Manga detail | MangaDesc.jsx | Experimental |
| Light novels | LightNHome.jsx | Placeholder |

## Technical shape
- React 18 provides UI composition.
- React Router DOM 6 maps browser paths to components.
- Axios issues HTTP requests.
- ReactPlayer renders a player for a selected remote URL.
- Tailwind CSS and project CSS provide presentation.
- Vite handles local development and production bundling.
- Vite proxy and Vercel rewrites handle different environments and are not interchangeable.

## Current maturity and evidence
The latest recorded CI run before the expanded documentation passed install, production build, and documentation-link checks. ESLint remains advisory because legacy source findings exist. There is no browser E2E suite, formal accessibility audit, or verified browser screenshot gallery.

## How to use this repository
- Learners: inspect the route table, components, request flow, and diagrams.
- Contributors: read CONTRIBUTING.md and the architecture/API guides before changing behavior.
- Maintainers: use the route, risk, QA, release, and traceability documents to keep the project honest and verifiable.
