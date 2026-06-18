# Example: Custom Agent System Plan

## Project

Replace this with the project name.

## Goal

Build a small agent system that helps workers complete a narrow workflow with source-backed answers and review gates.

## Agents

| Agent | Outcome | Tools |
|-------|---------|-------|
| Orchestrator | Routes work and reports status. | Knowledge search, task log |
| Researcher | Finds source-backed facts. | Web/source lookup, RAG upsert |
| Builder | Implements scoped changes. | Repo edit, test run |
| Tester | Checks behavior and evidence. | Unit tests, retrieval tests |
| Auditor | Reviews privacy/safety risk. | Policy checklist |

## Knowledge Nodes

- Project overview
- Key policies
- Known formulas or business rules
- Source summaries
- Test evidence
- Architecture decisions

## Storage

Start with local JSON for development. Move to Upstash Vector, Supabase pgvector, Neon pgvector, or Qdrant Cloud when multiple workers or deployments need shared retrieval.

## Gates

- Human approval for production writes.
- Auditor approval for sensitive data.
- Tester evidence for releases.
- Prompt-efficiency review before broad agent fan-out.
