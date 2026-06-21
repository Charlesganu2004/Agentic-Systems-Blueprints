# RAG Decision Record

## Project

Name:

## Decision

Use LightRAG as the graph-RAG sidecar service.

## Why

- Need cross-document reasoning:
- Need entity/relation retrieval:
- Need multimodal document parsing:
- Need WebUI/API for knowledge exploration:

## Alternatives Considered

- Simple vector DB:
- Supabase pgvector:
- Upstash Vector:
- Qdrant:

## Integration

```text
App/API/Agent -> LightRAG REST API -> retrieved context -> LLM response layer
```

## Risks

- Python sidecar operations:
- LLM/embedding cost:
- Storage configuration:
- API endpoint changes:
- Evaluation quality:

## Verification

- Ingest test docs:
- Query expected facts:
- Check returned sources:
- Run answer-quality examples:
- Confirm secrets are not committed:
