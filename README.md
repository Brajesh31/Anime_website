# Anime Website

A Vite-powered React single-page prototype for discovering anime, light novels, and manga. The application uses React Router for routes, Tailwind CSS for utility styling, Framer Motion for animation, Axios and third-party APIs for remote catalog data, React Player for playback, and MangaDex-related libraries for manga exploration.

## Routes

- `/` - landing page.
- `/anime` - anime catalog.
- `/ln` - light-novel area.
- `/manga` - manga catalog.
- `/manga/desc/:manga_id` - manga details.
- `/anime/:title` - anime details.
- `/anime/watch/:title` and `/anime/recent/watch/:id/:title` - playback views.

The current deployment and code are a prototype. Availability depends on third-party APIs and their terms; the application does not host or own external media.

## Requirements

- Node.js 18+ and npm.
- Network access to the configured catalog, image, and streaming services.

## Local development

```bash
npm ci
npm run dev
```

Open the URL printed by Vite. Validate changes with:

```bash
npm run lint
npm run build
npm run preview
```

## Deployment

The repository includes `vercel.json` rewrites for SPA routes and selected manga proxy paths. Preserve those routes when changing hosting. Configure a fallback for client-side routing and verify third-party API CORS, availability, rate limits, licensing, and content policies before publishing.

## Responsible use

Do not use this project to bypass paywalls, authentication, regional restrictions, copyright controls, or provider rate limits. Add only sources and media integrations that you are authorized to use. Do not collect accounts, payment details, or unnecessary personal data.

## License

Original code and documentation are MIT licensed. Third-party libraries, APIs, artwork, logos, and media remain subject to their own licenses and terms.

Last updated: 2026-10-26 16:35 UTC
