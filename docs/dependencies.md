# 📦 Dependency and supply-chain notes

## Dependency management
The project uses npm and commits package-lock.json. Use npm ci for a clean install following the lockfile. package.json declares version ranges; the lockfile records the resolved graph.

## Direct runtime dependencies

| Package | Declared range | Observed role |
|---|---|---|
| react, react-dom | ^18.3.1 | UI runtime |
| react-router-dom | ^6.26.1 | Browser routing |
| axios | ^1.7.4 | HTTP requests |
| react-player | ^2.16.0 | Media player |
| framer-motion | ^11.3.28 | Animation dependency |
| @consumet/extensions | ^1.7.0 | Provider integration package |
| mangadex-full-api | ^6.0.0 | Manga integration package |
| novel-cool | ^2.0.0 | Novel/manga exploration |
| clsx | ^2.1.1 | Conditional class helper |
| tailwind-merge | ^2.5.2 | Tailwind class merging |

A declared package is not necessarily imported by the active application. Analyze usage before removing dependencies.

## Direct development dependencies

| Package | Declared range | Role |
|---|---|---|
| vite | ^5.4.1 | Dev server and bundler |
| @vitejs/plugin-react | ^4.3.1 | React integration |
| tailwindcss | ^3.4.10 | CSS utility generation |
| postcss | ^8.4.41 | CSS transformation |
| autoprefixer | ^10.4.20 | Vendor prefixes |
| eslint | ^9.9.0 | Static analysis |
| eslint-plugin-react | ^7.35.0 | React lint rules |
| eslint-plugin-react-hooks | ^5.1.0-rc.0 | Hook rules |
| eslint-plugin-react-refresh | ^0.4.9 | Refresh compatibility |
| globals | ^15.9.0 | ESLint environment globals |

## Maintenance process
1. Review release notes and security advisories.
2. Check whether the package is imported and which routes use it.
3. Update a focused set of packages.
4. Run npm ci, lint, and production build.
5. Exercise affected routes.
6. Review lockfile changes for unexpected package changes.
7. Record breaking changes and migration steps.

## Security controls
- Keep package-lock.json committed.
- Avoid untrusted archives and arbitrary Git dependencies.
- Review transitive dependency advisories.
- Use least-privilege automation permissions.
- Never commit tokens or registry credentials.
- Treat provider-related packages as subject to third-party terms.

No current dependency audit result is asserted here. Run an up-to-date audit and record its timestamp and outcome.
