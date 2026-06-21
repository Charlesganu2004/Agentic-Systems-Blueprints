# LightRAG For LLM Apps

Use LightRAG as the graph-based RAG layer behind an LLM application when plain vector search is not enough.

## Why LightRAG

LightRAG is a lightweight knowledge-graph RAG framework that combines graph-style entity/relation retrieval with vector embeddings. It is useful when a project needs cross-document reasoning, source attribution, multimodal document parsing, and a REST API/WebUI service for knowledge exploration.

## Recommended Architecture

```text
App UI or worker
  -> Project API
  -> LightRAG REST API
  -> Retrieved graph/vector context
  -> LLM response layer
  -> Structured answer with sources
```

Keep LightRAG as a sidecar service. Do not bury it inside every Node app. This makes it easier to reuse one RAG brain across agents, workers, and app APIs.

## Install Options

Recommended:

```bash
uv tool install "lightrag-hku[api]"
lightrag-server
```

Virtual environment:

```bash
python -m venv .venv
source .venv/bin/activate
pip install "lightrag-hku[api]"
lightrag-server
```

Docker/source:

```bash
git clone https://github.com/HKUDS/LightRAG.git
cd LightRAG
cp env.example .env
docker compose up
```

## When To Use LightRAG

- The project has many documents with connected concepts.
- The project needs entity/relation extraction.
- The project needs better cross-document reasoning than keyword or vector search.
- The project needs a WebUI for exploring the knowledge graph.
- The project needs multimodal document parsing for PDFs, tables, images, formulas, or Office docs.

## When To Use A Simpler Vector DB

- The project only needs a small FAQ or doc search.
- The project needs the fastest small prototype.
- The team is staying entirely in JavaScript and does not want a Python sidecar.
- The documents are simple and do not require graph relationships.

## Integration Notes

- Keep LLM keys in the LightRAG `.env` or secret manager, never in Git.
- Search LightRAG before expensive model calls.
- Cache repeated answers or retrieved contexts when allowed.
- Store source metadata with each ingested document.
- Run retrieval evaluation before trusting answers.
- Treat LightRAG returned context as evidence, not as guaranteed truth.

## Source

- https://github.com/HKUDS/LightRAG
