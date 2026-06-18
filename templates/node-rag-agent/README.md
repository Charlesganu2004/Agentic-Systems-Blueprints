# Node RAG Agent Starter

Generic Express starter for projects that need:

- agent registry,
- RAG node storage,
- hosted vector search,
- local development fallback,
- prompt policy checks.

## Start

```bash
npm install
cp .env.example .env
npm run check
npm start
```

Open:

```text
http://localhost:8787/health
```

## Endpoints

- `GET /health`
- `GET /agents`
- `GET /knowledge`
- `POST /knowledge/upsert`
- `POST /knowledge/search`
- `POST /prompt/compact`

## Hosted Storage

Set `UPSTASH_VECTOR_REST_URL` and `UPSTASH_VECTOR_REST_TOKEN` to use Upstash Vector. Without those values, the starter uses `.data/knowledge.json` for local development only.
