# Guidance from Seraphina

A mystical angel-medium psychic landing page with a live AI-powered chat where visitors receive free "guidance from the angels."

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm --filter @workspace/angel-chat run dev` — run the frontend (PORT from env)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec (after editing, fix `lib/api-zod/src/index.ts` to only export `./generated/api` not `./generated/types`)
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL`, `AI_INTEGRATIONS_OPENAI_BASE_URL`, `AI_INTEGRATIONS_OPENAI_API_KEY`

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite + Tailwind CSS + Framer Motion
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- AI: OpenAI via Replit AI Integrations proxy (`gpt-5.4`, streaming SSE)
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/angel-chat/` — React frontend (landing page + chat)
- `artifacts/api-server/` — Express API server
- `lib/api-spec/openapi.yaml` — OpenAPI contract (source of truth)
- `lib/api-client-react/src/generated/` — generated React Query hooks
- `lib/api-zod/src/generated/` — generated Zod validators
- `lib/db/src/schema/` — Drizzle DB schema (conversations + messages)
- `lib/integrations-openai-ai-server/` — OpenAI SDK client
- `artifacts/angel-chat/public/seraphina.png` — AI-generated medium portrait

## Architecture decisions

- Chat uses SSE streaming (not WebSockets) — frontend uses `fetch` + `ReadableStream` directly (Orval can't generate typed hooks for SSE endpoints)
- `lib/api-zod/src/index.ts` must only export `./generated/api` (not `./generated/types`) to avoid duplicate export conflicts — codegen regenerates it with both, so it must be fixed manually after each codegen run
- AI persona is "Seraphina" — system prompt defined in `artifacts/api-server/src/routes/openai/conversations.ts`
- Dark mystical theme is the only mode (no light/dark toggle)

## Product

- Hero landing page with Seraphina's portrait and tagline
- 10-minute countdown timer for the "free chat" session
- Live AI chat with streaming responses (Seraphina persona)
- Trust badges, testimonials, and biography section below chat

## Gotchas

- After running codegen, always fix `lib/api-zod/src/index.ts` to remove the `export * from "./generated/types"` line
- Google Fonts `@import url(...)` must be the very FIRST line of `index.css`
- Chat SSE uses `/api/openai/conversations/{id}/messages` — do NOT use generated hooks for this endpoint

## Pointers

- See `.local/skills/ai-integrations-openai/SKILL.md` for OpenAI integration details
- See `.local/skills/pnpm-workspace` for workspace structure
