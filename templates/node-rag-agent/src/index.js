import "dotenv/config";
import express from "express";
import cors from "cors";
import { listAgents } from "./agentRegistry.js";
import { listKnowledge, searchKnowledge, upsertKnowledge } from "./knowledgeStore.js";
import { classifyRisk, compactContext } from "./promptPolicy.js";

const app = express();
const port = Number(process.env.PORT || 8787);

app.use(cors());
app.use(express.json({ limit: "1mb" }));

app.get("/health", (_req, res) => {
  res.json({
    ok: true,
    service: "node-rag-agent-starter",
    knowledgeProvider: process.env.UPSTASH_VECTOR_REST_URL ? "upstash-vector" : "local-json-dev",
    namespace: process.env.KNOWLEDGE_NAMESPACE || "default-project"
  });
});

app.get("/agents", (_req, res) => {
  res.json({ ok: true, agents: listAgents() });
});

app.get("/knowledge", async (_req, res, next) => {
  try {
    res.json({ ok: true, ...(await listKnowledge()) });
  } catch (error) {
    next(error);
  }
});

app.post("/knowledge/upsert", async (req, res, next) => {
  try {
    res.json({ ok: true, ...(await upsertKnowledge(req.body)) });
  } catch (error) {
    next(error);
  }
});

app.post("/knowledge/search", async (req, res, next) => {
  try {
    const { query, topK, minScore } = req.body || {};
    res.json({ ok: true, ...(await searchKnowledge(query, { topK, minScore })) });
  } catch (error) {
    next(error);
  }
});

app.post("/prompt/compact", (req, res) => {
  const compacted = compactContext(req.body || {});
  const risk = classifyRisk(req.body || {});
  res.json({ ok: compacted.ok, ...compacted, risk });
});

app.use((error, _req, res, _next) => {
  res.status(400).json({
    ok: false,
    error: error.message || "Unknown error"
  });
});

app.listen(port, () => {
  console.log(`Agent RAG starter on http://localhost:${port}`);
});
