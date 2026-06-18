# Example: RAG Source Feeder Plan

## Purpose

Create a source feeder that turns approved links, PDFs, docs, and repo notes into small, source-backed RAG nodes.

## Flow

1. Intake source URL or file.
2. Check permission and sensitivity.
3. Extract concise facts.
4. Store title, source URL, tags, owner, confidence, and reviewed date.
5. Upsert into hosted vector storage.
6. Add retrieval test queries.

## Minimum Record

```json
{
  "id": "source:example",
  "type": "source",
  "title": "Example",
  "text": "Short source-backed summary.",
  "sourceUrl": "https://example.com",
  "tags": ["example"],
  "confidence": "source-backed",
  "updatedAt": "2026-06-18T00:00:00.000Z"
}
```

## Review Rules

- Do not store secrets.
- Do not store raw private user data unless explicitly approved.
- Do not store long copyrighted text.
- Keep facts traceable to a source.
