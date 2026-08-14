import "dotenv/config";
import { timingSafeEqual } from "node:crypto";
import express from "express";
import cors from "cors";
import { listAgents } from "./agentRegistry.js";
import { listKnowledge, searchKnowledge, upsertKnowledge } from "./knowledgeStore.js";
import { classifyRisk, compactContext } from "./promptPolicy.js";

const app = express();
const port = Number(process.env.PORT || 8787);
const host = process.env.HOST || "127.0.0.1";
const apiToken = process.env.API_TOKEN?.trim();
const corsOrigin = process.env.CORS_ORIGIN?.trim();
const loopbackHosts = new Set(["127.0.0.1", "::1", "localhost"]);

app.disable("x-powered-by");

if (!loopbackHosts.has(host) && !apiToken) {
  throw new Error("API_TOKEN is required when HOST is not a loopback address.");
}

if (corsOrigin) {
  app.use(cors({ origin: corsOrigin }));
}

app.use((req, res, next) => {
  if (req.path === "/health" || !apiToken) {
    next();
    return;
  }

  const provided = req.get("authorization")?.replace(/^Bearer\s+/i, "") || "";
  const expectedBytes = Buffer.from(apiToken);
  const providedBytes = Buffer.from(provided);
  const authorized =
    expectedBytes.length === providedBytes.length &&
    timingSafeEqual(expectedBytes, providedBytes);

  if (!authorized) {
    res.status(401).json({ ok: false, error: "Unauthorized" });
    return;
  }

  next();
});

app.use(express.json({ limit: "1mb" }));

app.get("/health", (_req, res) => {
  res.json({
    ok: true,
    service: "node-rag-agent-starter"
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

app.listen(port, host, () => {
  console.log(`Agent RAG starter on http://${host}:${port}`);
});
