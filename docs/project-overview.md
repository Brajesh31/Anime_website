# 🌸 Project overview

## Purpose

Anime Website is a React single-page prototype that groups experiments for anime discovery, manga catalog access, episode metadata, and playback. It provides a browser UI and uses remote services for catalog and media information.

## Intended audiences

- Developers learning React component composition and route design.
- Contributors exploring browser-side HTTP integration.
- Reviewers inspecting a prototype with anime, manga, and light-novel route concepts.

This repository is not a content-hosting platform, an authenticated subscription service, or a production media delivery backend.

## Product areas

### Anime
The anime route provides a search form and requests recent episode data. A selected search result links to an anime detail route. The detail component requests metadata and divides returned episodes into groups of ten. Player components request a remote episode response and pass a selected source to ReactPlayer.

### Manga
The manga route uses a MangaDex-oriented component and a proxy path configured in Vite and Vercel. The current manga rendering and detail experience are experimental and should not be described as a complete reader.

### Light novels
The light-novel route currently renders placeholder text. It establishes a route boundary only.

## Runtime boundaries

The React client owns rendering, route selection, local component state, and browser-side requests. Third-party endpoints own remote response content and availability. The repository does not include an application backend, user database, identity system, billing platform, or media storage.

## Success criteria for a future stable release

1. Every visible route has a defined purpose and consistent navigation.
2. Remote requests have explicit loading, empty, timeout, and error states.
3. Provider response fields are validated before use.
4. Media is used only when permitted by source terms and rights.
5. Keyboard and assistive-technology flows work.
6. Tests cover route behavior and representative API responses.
7. Deployment supports direct navigation to nested SPA routes.
