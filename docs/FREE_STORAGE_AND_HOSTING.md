# Free And Low-Cost Storage / Hosting

Use free tiers for prototypes, demos, and internal tools. Re-check pricing and limits before production because free plans change.

## RAG Storage Options

| Provider | Good For | Notes |
|----------|----------|-------|
| Upstash Vector | Fast serverless vector search | Good for Node demos and hosted embeddings; HTTP-first. |
| Supabase + pgvector | Postgres apps that need auth, relational tables, and vector search | Good when app data and vector search should live together. |
| Neon Postgres + pgvector | Serverless Postgres with vector extension support | Good for SQL-first teams. |
| Qdrant Cloud | Managed vector database | Good for vector-native search and filtering. |
| Local JSON / SQLite | Development only | Good for tests and offline prototyping, not a hosted shared brain. |

## Free / Low-Cost App Hosting Options

| Provider | Good For |
|----------|----------|
| Cloudflare Workers | Lightweight APIs, edge functions, durable objects, scheduled jobs. |
| Vercel | Next.js apps, serverless APIs, preview deployments. |
| Render | Simple Node web services and background workers. |
| Fly.io | Small containers close to users. |
| Supabase Edge Functions | Functions near Supabase data. |

## Recommended Prototype Stack

For a small agent/RAG API:

```text
Node API -> Upstash Vector or Supabase pgvector -> GitHub repo docs -> model provider
```

For a full app:

```text
Frontend -> API routes -> Postgres/Supabase -> vector search -> model provider -> eval logs
```

## Decision Rule

- Choose Upstash Vector when you want quick hosted RAG with minimal database setup.
- Choose Supabase when you need auth, relational app data, storage, and vectors together.
- Choose Neon when you want serverless Postgres but plan to build the rest yourself.
- Choose Qdrant when vector search is the main product capability.
