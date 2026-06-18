# Agentic Systems Blueprints

Private reusable repo for learning, designing, and installing custom agent systems, LLM applications, ML workflows, RAG nodes, and free/low-cost hosted knowledge infrastructure.

This is intentionally not an app-specific agent copy. Use it as a blueprint library when a new project needs different agents, different data, different business rules, or a different RAG/ML setup.

## What Is Inside

- Guides for building custom agents, LLM apps, RAG systems, and lightweight ML features.
- Templates for a generic Node RAG API, custom agent rosters, and portable RAG node schemas.
- Free/low-cost hosting and storage notes for Upstash Vector, Supabase, Neon, Qdrant Cloud, Cloudflare Workers, Vercel, Render, and local development.
- Prompt-efficiency, context-compaction, evaluation, privacy, and security playbooks.
- Repository references for strong agent/RAG/LLM/ML projects and docs.

## Quick Install

After this private repo is pushed to GitHub:

```bash
npm install -g git+https://github.com/ElectroVisionLLC/Agentic-Systems-Blueprints.git
agent-blueprint list
```

Create a generic RAG/agent API in another project:

```bash
agent-blueprint init ./my-project --template node-rag-agent
cd ./my-project
npm install
cp .env.example .env
npm start
```

Create a custom agent roster template:

```bash
agent-blueprint init ./my-project --template agent-roster
```

Create portable RAG node schemas:

```bash
agent-blueprint init ./my-project --template rag-node-schema
```

## Templates

| Template | Use |
|----------|-----|
| `node-rag-agent` | Start a Node API with knowledge upsert/search endpoints, agent registry, prompt policy, and hosted-vector-ready configuration. |
| `agent-roster` | Define project-specific agents with charters, boundaries, routing, and collaboration rules. |
| `rag-node-schema` | Define source-backed knowledge nodes, source records, tags, region, and confidence metadata. |

## Recommended Learning Path

1. Read `docs/START_HERE.md`.
2. Pick an architecture in `docs/AGENTS.md`.
3. Choose RAG storage from `docs/FREE_STORAGE_AND_HOSTING.md`.
4. Use `templates/agent-roster` to design project-specific agents.
5. Use `templates/rag-node-schema` to define the project's knowledge shape.
6. Use `templates/node-rag-agent` when a project needs a working Node RAG service.
7. Run evaluation and safety checks from `docs/EVALUATION_AND_TESTING.md` and `docs/SECURITY_PRIVACY.md`.

## Rules

- Do not hard-code API keys.
- Do not copy private app agents into unrelated projects.
- Do not expose internal agent dashboards to customers without authentication and business/legal review.
- Store reusable knowledge in source-backed RAG nodes before spending model or web tokens repeatedly.
- Keep every agent replaceable, auditable, and tied to a clear business or user outcome.
