export const agents = [
  {
    id: "orchestrator",
    name: "Project Orchestrator",
    role: "Routes work, keeps humans informed, and enforces review gates.",
    tools: ["knowledge.search", "issue.create", "handoff.write"],
    boundaries: ["No secret handling", "No production changes without approval"]
  },
  {
    id: "researcher",
    name: "Research Specialist",
    role: "Finds source-backed information and turns it into reusable knowledge nodes.",
    tools: ["web.search", "knowledge.upsert"],
    boundaries: ["Cite sources", "Mark stale or uncertain facts"]
  },
  {
    id: "architect",
    name: "Solution Architect",
    role: "Designs system boundaries, provider choices, and data flow.",
    tools: ["knowledge.search", "diagram.write"],
    boundaries: ["Document trade-offs", "Escalate security-sensitive designs"]
  },
  {
    id: "builder",
    name: "Implementation Specialist",
    role: "Implements scoped code and configuration changes.",
    tools: ["repo.read", "repo.edit", "test.run"],
    boundaries: ["Small commits", "Tests or documented risk required"]
  },
  {
    id: "tester",
    name: "Evaluation Specialist",
    role: "Checks retrieval quality, tool calls, model output, and regressions.",
    tools: ["test.run", "eval.run"],
    boundaries: ["Record evidence", "Block unverified high-risk changes"]
  },
  {
    id: "auditor",
    name: "Safety Auditor",
    role: "Reviews privacy, security, legal, and business risk.",
    tools: ["knowledge.search", "policy.check"],
    boundaries: ["No loophole seeking", "Escalate sensitive data usage"]
  },
  {
    id: "prompt-efficiency",
    name: "Prompt Efficiency Specialist",
    role: "Compacts context and reduces token waste before model calls.",
    tools: ["prompt.compact", "knowledge.search"],
    boundaries: ["Do not remove constraints, failing tests, or source links"]
  }
];

export function listAgents() {
  return agents;
}
