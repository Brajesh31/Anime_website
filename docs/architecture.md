# Architecture

The application is a Vite React SPA. `src/App.jsx` creates the browser router, page components render catalog/detail/player views, and CSS/Tailwind provide presentation. Axios and provider-specific libraries retrieve catalog or media metadata. React Player renders a selected remote stream.

`vercel.json` supplies SPA fallbacks and manga proxy rewrites. There is no committed backend or database.
