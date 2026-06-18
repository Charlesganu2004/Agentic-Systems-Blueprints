# Building LLM Apps

LLM apps are strongest when the model is surrounded by narrow tools, explicit data, structured outputs, and verification.

## Minimal Architecture

```text
UI or CLI
  -> API route
  -> policy/checks
  -> retrieval
  -> model call
  -> structured validation
  -> response plus evidence
```

## Useful Building Blocks

- Tool calling for actions.
- RAG for project memory and source-backed answers.
- JSON schema output for predictable app behavior.
- Caching for repeated prompts and source summaries.
- Evaluation examples for regression checks.
- Human approval gates for risk.

## Model Provider Strategy

Keep provider access behind a small interface:

```text
generateText(input)
generateObject(schema, input)
embedText(text)
rankResults(query, candidates)
```

This makes it easier to switch between OpenAI, Anthropic, Google Gemini, local Ollama, or cloud-provider hosted models later.

## Cost Control

- Search local/project knowledge first.
- Compact repeated context.
- Send only the files and sources needed.
- Prefer small models for classification and formatting.
- Use larger models for hard reasoning, code, architecture, and final synthesis.
- Track token or dollar budgets per run.
