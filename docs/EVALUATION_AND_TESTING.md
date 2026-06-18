# Evaluation And Testing

Agent and RAG systems need tests because fluent output can still be wrong.

## Test Types

| Test | Purpose |
|------|---------|
| Unit tests | Validate helpers, formulas, adapters, and schemas. |
| Retrieval tests | Confirm known queries return expected source nodes. |
| Golden answers | Compare model outputs against approved examples. |
| Tool tests | Confirm agents call safe tools with correct arguments. |
| Safety tests | Confirm blocked actions remain blocked. |
| Cost tests | Confirm prompts stay under budget. |
| Human review | Required for high-risk legal, data, production, or business changes. |

## RAG Evaluation Set

Create a small file with:

- query
- expected source IDs
- acceptable answer points
- unacceptable claims
- risk level

## Agent Run Report

Every meaningful agent run should record:

- goal
- agents used
- sources used
- files changed
- commands run
- tests run
- risks
- follow-ups
