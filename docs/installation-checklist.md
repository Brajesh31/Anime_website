# ✅ First-run installation checklist

Use this after cloning the repository or preparing a new development environment.

## Environment
- [ ] Node.js 18+ is installed. CI currently uses Node 20.
- [ ] npm is available.
- [ ] Git is available.
- [ ] Browser is available for manual route checks.
- [ ] Network access is available for external integrations.

## Install
- [ ] Clone the repository.
- [ ] Enter the project directory.
- [ ] Run npm ci.
- [ ] Confirm the lockfile was not unexpectedly rewritten.
- [ ] Review any install warnings before ignoring them.

## Run
- [ ] Run npm run dev.
- [ ] Open the URL printed by Vite.
- [ ] Confirm the root route renders.
- [ ] Open /anime.
- [ ] Inspect browser Console and Network.
- [ ] Understand that empty data may be caused by an external provider.

## Validate
- [ ] Run npm run lint and record legacy findings.
- [ ] Run npm run build.
- [ ] Run python scripts/check_docs.py.
- [ ] Verify nested routes and refresh behavior manually.
- [ ] Do not treat a successful build as proof of live provider availability.

## Configuration and safety
- [ ] Do not add private secrets to VITE_ variables.
- [ ] Do not commit local .env files containing credentials.
- [ ] Use only authorized test media.
- [ ] Keep screenshots free of personal data and secrets.
- [ ] Review provider terms before relying on remote content.

For full details see installation.md, configuration.md, and troubleshooting.md.
