# LightRAG Service Template

Use this template when a project needs LightRAG as a graph-RAG sidecar service behind an LLM app.

## Recommended Setup

```bash
uv tool install "lightrag-hku[api]"
lightrag-server
```

## Alternative Setup

```bash
python -m venv .venv
source .venv/bin/activate
pip install "lightrag-hku[api]"
lightrag-server
```

## Docker / Source Setup

```bash
git clone https://github.com/HKUDS/LightRAG.git
cd LightRAG
cp env.example .env
docker compose up
```

## App Integration Pattern

```text
Your app or agent
  -> query LightRAG REST API
  -> get retrieved graph/vector context and sources
  -> send context to LLM response layer
  -> return answer with source evidence
```

## Files In This Template

- `.env.example` - generic LightRAG environment placeholders.
- `node-client-example.js` - minimal JavaScript wrapper for calling a sidecar REST API.
- `rag-decision-record.md` - project decision template for choosing LightRAG.

Review the current LightRAG API docs before wiring exact endpoint names into production.
