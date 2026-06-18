export function compactContext({ objective, constraints = [], sources = [], currentState = "", nextAction = "" }) {
  const compact = {
    objective: String(objective || "").trim(),
    constraints: constraints.map(String).filter(Boolean),
    sources: sources.map(String).filter(Boolean),
    currentState: String(currentState || "").trim(),
    nextAction: String(nextAction || "").trim()
  };

  const missing = [];
  if (!compact.objective) missing.push("objective");
  if (!compact.nextAction) missing.push("nextAction");

  return {
    ok: missing.length === 0,
    missing,
    compact,
    policy:
      "Preserve constraints, source links, failing tests, security/privacy notes, exact commands, and approval gates."
  };
}

export function classifyRisk(input = {}) {
  const text = JSON.stringify(input).toLowerCase();
  const highRiskTerms = ["password", "token", "secret", "customer data", "legal", "payment", "production"];
  const hits = highRiskTerms.filter((term) => text.includes(term));

  return {
    risk: hits.length ? "review-required" : "normal",
    hits,
    requiredGate: hits.length ? "human-review" : "standard-review"
  };
}
