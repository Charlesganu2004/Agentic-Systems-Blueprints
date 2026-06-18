# Start Here

Use this repo when a project needs a custom AI system, not when it needs a copy of another product's agents.

## Core Questions

1. What outcome should the system produce?
2. Who is the user or worker?
3. What data can the system legally and safely use?
4. Does the system need agents, simple tool calling, RAG, ML, or a mix?
5. What must be verified before output is trusted?
6. What should be stored for future retrieval?

## Recommended Build Order

1. Write the problem statement.
2. Define the knowledge sources.
3. Pick a RAG storage option.
4. Define one orchestrator agent and two to five specialist agents.
5. Add tools only when an agent needs to act.
6. Add retrieval before generation.
7. Add evaluation tests.
8. Add logs, cost tracking, and human approval gates.
9. Add UI only after workflows are clear.

## Choose The Right Pattern

| Need | Pattern |
|------|---------|
| One answer from known docs | RAG chain |
| Multi-step work with tools | Agent with tool calling |
| Many specialist viewpoints | Multi-agent workflow |
| Repeated private project context | RAG memory and issue/work logs |
| Image, audio, or structured prediction | ML model or multimodal LLM |
| Cheap searchable memory | Hosted vector DB or Postgres with vector extension |
| Strict correctness | Evaluation set plus human review |
