# ⚡ Performance review and optimization plan

## Current performance context
The application is a client-rendered Vite SPA. The repository does not currently publish measured Core Web Vitals, bundle budgets, synthetic performance scores, or real-user monitoring data. Do not invent performance claims.

## Main cost areas to inspect
- Initial JavaScript bundle and dependency graph.
- Route-level code loaded before it is needed.
- Remote catalog requests and provider latency.
- Number and size of poster/cover images.
- Player initialization and remote media startup.
- Re-renders caused by component state updates.
- CSS and image payload sizes.

## Measurement plan
1. Build the production bundle.
2. Record the generated asset sizes.
3. Run browser Lighthouse on a deployed or local preview build.
4. Test mobile throttling as well as desktop.
5. Capture LCP, INP, CLS, TTFB, and total transfer size.
6. Repeat on the same route and viewport for comparison.
7. Record date, browser, device emulation, network profile, and commit SHA.

## Candidate improvements
- Lazy-load route components after route behavior is stable.
- Use responsive image sizes and lazy loading for below-the-fold posters.
- Avoid loading large images before they enter the viewport.
- Add request cancellation for stale searches.
- Debounce search only if it becomes request-on-input behavior.
- Avoid repeated requests for the same route data where provider terms allow.
- Keep animation work modest and respect reduced motion.
- Review dependency usage before removing or replacing packages.

## Guardrails
- Do not add caching that violates provider terms.
- Do not proxy or mirror media without permission.
- Do not claim an optimization improved performance without before/after measurements.
- Do not add arbitrary performance budgets without measuring the current bundle.

## Release evidence
Attach a short before/after report with the route, commit, device profile, metric values, and measurement tool. A build success is not a performance result.
