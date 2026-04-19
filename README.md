# repoflow-example-web

The React frontend for the **repoflow Hello World** example. Part of the [`repoflow-metarepo-example`](https://github.com/axelmth/repoflow-metarepo-example) meta-repository architecture.

> For the Fastify backend, see [`repoflow-example-api`](https://github.com/axelmth/repoflow-example-api).

## What it does

A single-page React app that fetches `GET /api/hello` from the Fastify backend and displays the message and timestamp on a centered card.

Live: <TODO: add Vercel URL once deployed>

## Stack

- **React 18 + Vite 5**
- **Tailwind CSS v4** (CSS-first approach)
- **TypeScript 5.6**
- **@repoflow-example/shared** — shared Zod types

## Local development

```bash
# Install dependencies
pnpm install

# Copy env file
cp .env.example .env
# Edit .env: set VITE_API_URL to your API URL (default: http://localhost:3001)

# Start dev server
pnpm dev
```

Visit `http://localhost:5173`. The API must be running separately (`repoflow-example-api`).

## Deploy to Vercel

<TODO: fill in live URL once deployed, e.g. https://repoflow-example-web.vercel.app>

### First deploy

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

Set the environment variable `VITE_API_URL` to your Fly.io API URL in the Vercel project settings.

### Continuous deployment

The GitHub Actions workflow `.github/workflows/deploy.yml` deploys automatically on push to `main`.

Required secrets/variables:

| Name | Type | Description |
|---|---|---|
| `VERCEL_TOKEN` | Secret | From Vercel account settings |
| `VERCEL_ORG_ID` | Secret | From `.vercel/project.json` after first deploy |
| `VERCEL_PROJECT_ID` | Secret | From `.vercel/project.json` after first deploy |
| `VITE_API_URL` | Variable | Your Fly.io API URL |

## Environment variables

| Variable | Default | Description |
|---|---|---|
| `VITE_API_URL` | `http://localhost:3001` | Backend API base URL |

---

Part of the **repoflow-examples** collection:
- [`repoflow-monorepo-example`](https://github.com/axelmth/repoflow-monorepo-example) — same app as a Turborepo monorepo
- [`repoflow-metarepo-example`](https://github.com/axelmth/repoflow-metarepo-example) — meta-repo orchestrator
- [`repoflow-example-api`](https://github.com/axelmth/repoflow-example-api) — Fastify backend
- [`repoflow-example-shared`](https://github.com/axelmth/repoflow-example-shared) — shared Zod schemas
