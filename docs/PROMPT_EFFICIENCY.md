# Prompt Efficiency

The goal is to spend tokens only on context that helps finish the task.

## Before A Large Prompt

1. State the goal.
2. Identify the exact files/sources needed.
3. Search RAG memory first.
4. Remove repeated history.
5. Keep constraints, commands, and verification results.
6. Ask for a narrow output.

## Context Compaction

Compact long context into:

- objective
- current state
- files touched
- decisions made
- constraints
- unresolved risks
- next action
- source links

Do not compact away secrets warnings, branch rules, failing tests, legal/privacy limits, exact commands, or source URLs.

## Prompt Budget Policy

- Small task: one agent, no fan-out.
- Medium task: orchestrator plus one specialist.
- Large task: orchestrator creates a compact plan before specialists run.
- High-risk task: legal/security/auditor review before execution.
