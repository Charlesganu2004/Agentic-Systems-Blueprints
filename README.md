# Agentic Systems Blueprints

Private reusable repo for learning, designing, and installing custom agent systems, LLM applications, ML workflows, RAG nodes, and free/low-cost hosted knowledge infrastructure.

This is intentionally not an app-specific agent copy. It stores the reusable public repos, docs, install commands, and neutral templates discovered while working on the `Test_main` branch of the ElectroVision project. Use it when a new project needs different agents, different data, different business rules, or a different RAG/ML setup.

## What Is Inside

- A catalog of public repos and docs used as references on the ElectroVision `Test_main` branch.
- Install recipes for agent frameworks, LightRAG graph-RAG, RAG stacks, vector databases, frontend/mobile starters, pitch tools, and prompt-compression references.
- Guides for building custom agents, LLM apps, RAG systems, and lightweight ML features.
- Templates for a generic Node RAG API, custom agent rosters, and portable RAG node schemas.
- Free/low-cost hosting and storage notes for Upstash Vector, Supabase, Neon, Qdrant Cloud, Cloudflare Workers, Vercel, Render, and local development.
- Prompt-efficiency, context-compaction, evaluation, privacy, and security playbooks.
- Repository references for strong agent/RAG/LLM/ML projects and docs.

## Quick Install

```bash
npm install -g git+https://github.com/Charlesganu2004/Agentic-Systems-Blueprints.git
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

The `node-rag-agent` starter binds to `127.0.0.1` and keeps cross-origin browser access off
until you name an exact origin. To reach it over a network, set `HOST` and a strong
`API_TOKEN` — it refuses to start on a non-loopback address without one — and every endpoint
except `/health` then requires `Authorization: Bearer <API_TOKEN>`. Templates get copied into
real projects, so the default posture is the one that ships.

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
| `lightrag-service` | Add LightRAG sidecar setup notes for graph-based RAG behind an LLM app. |
| `agent-roster` | Define project-specific agents with charters, boundaries, routing, and collaboration rules. |
| `rag-node-schema` | Define source-backed knowledge nodes, source records, tags, region, and confidence metadata. |

## Recommended Learning Path

1. Read `docs/START_HERE.md`.
2. Review `docs/REPOS_USED_ON_TEST_MAIN.md` for the clean GitHub repo list.
3. Review `docs/TEST_MAIN_REFERENCE_CATALOG.md` for the repos and docs used on ElectroVision `Test_main`.
4. Use `docs/INSTALL_RECIPES.md` to install the pieces a new project actually needs.
5. Pick an architecture in `docs/AGENTS.md`.
6. Use LightRAG when the project needs graph-based RAG or cross-document reasoning.
7. Choose RAG storage from `docs/FREE_STORAGE_AND_HOSTING.md`.
8. Use `templates/agent-roster` to design project-specific agents.
9. Use `templates/rag-node-schema` to define the project's knowledge shape.
10. Use `templates/node-rag-agent` when a project needs a working Node RAG service.
11. Run evaluation and safety checks from `docs/EVALUATION_AND_TESTING.md` and `docs/SECURITY_PRIVACY.md`.

## Rules

- Do not hard-code API keys.
- Do not weaken a template's defaults to make local testing easier. Whatever a template
  ships with becomes the security posture of every project generated from it.
- Do not copy private app agents into unrelated projects.
- Use the reference repos as source material and patterns, not as hidden copied code.
- Do not expose internal agent dashboards to customers without authentication and business/legal review.
- Store reusable knowledge in source-backed RAG nodes before spending model or web tokens repeatedly.
- Keep every agent replaceable, auditable, and tied to a clear business or user outcome.
