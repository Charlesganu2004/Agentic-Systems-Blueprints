# Agent Routing

## Routing Rules

| Work Type | Primary Agent | Required Review |
|-----------|---------------|-----------------|
| New project architecture | Architect | Orchestrator |
| RAG source ingestion | Researcher | Auditor |
| Code implementation | Builder | Tester |
| Prompt/context cleanup | Prompt Efficiency | Orchestrator |
| Sensitive data | Auditor | Human decision-maker |
| Production deployment | Architect | Tester and Auditor |

## Collaboration Rules

- One agent owns the current step.
- Specialists write short handoffs.
- High-risk work pauses for review.
- Knowledge that will be reused becomes a RAG node.
