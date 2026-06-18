# Security And Privacy

## Never Store In RAG

- API keys.
- OAuth tokens.
- Passwords.
- Raw private customer data.
- Private photos, bills, addresses, or medical/legal/financial records unless the system is explicitly designed and approved for that data.

## Safe Knowledge Records

Prefer:

- source-backed summaries,
- public docs,
- internal decisions,
- sanitized examples,
- test evidence,
- architecture notes,
- policy summaries.

## Agent Permissions

Agents should start read-only. Add write tools only after:

- the goal is clear,
- risk is understood,
- rollback is possible,
- human approval is defined,
- logs are captured.

## Production Rule

Any public or customer-facing agent system needs authentication, rate limits, audit logs, error handling, data retention rules, and abuse monitoring.
