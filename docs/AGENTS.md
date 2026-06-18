# Building Agents

An agent is useful when the system must choose steps, call tools, inspect results, and decide what to do next. If the task is just "answer from documents," start with RAG before adding agents.

## Agent Design Template

Every agent should have:

- Name
- Role
- Outcome
- Inputs
- Tools
- Boundaries
- Escalation rules
- Review requirements
- Output format
- Success metric

## Common Agent Types

| Agent | Job |
|-------|-----|
| Orchestrator | Routes work, keeps the user informed, resolves conflicts. |
| Researcher | Finds and summarizes source-backed information. |
| Architect | Designs system boundaries and technical choices. |
| Builder | Implements scoped code or configuration. |
| Tester | Verifies behavior and writes test evidence. |
| Auditor | Checks safety, legal, privacy, correctness, and process evidence. |
| Prompt Efficiency | Reduces context waste before expensive model calls. |

## Good Boundaries

- Agents should not own secrets.
- Agents should not skip review on legal, financial, privacy, or production changes.
- Agents should not invent sources.
- Agents should prefer small, verifiable tasks.
- Agents should write durable evidence when work affects a repo.

## Implementation Options

- Markdown charters in the repo.
- JSON/YAML agent registries.
- LangGraph-style workflow graphs.
- Simple orchestrator code that calls named tools.
- GitHub issue-driven work queues.
- Human approval gates for expensive or high-risk steps.
