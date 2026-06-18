# RAG Nodes

A RAG node is a durable knowledge record that can be searched before a model call.

## Recommended Node Shape

```json
{
  "id": "source:example",
  "type": "source",
  "title": "Example source",
  "text": "Short source-backed summary.",
  "sourceUrl": "https://example.com",
  "tags": ["example"],
  "region": "US",
  "confidence": "source-backed",
  "updatedAt": "2026-06-18"
}
```

## Node Types

- `source`
- `formula`
- `policy`
- `faq`
- `decision`
- `issue-summary`
- `architecture`
- `customer-research`
- `legal-note`
- `test-evidence`

## Retrieval Rules

1. Search project knowledge first.
2. Prefer recent and source-backed nodes.
3. Return source URLs with answers.
4. Mark low-confidence results as needing web or human review.
5. Feed verified findings back into RAG nodes.

## Avoid

- Raw private customer data.
- Unsourced claims.
- Long copied articles.
- Secrets.
- Duplicated nodes with conflicting facts.
