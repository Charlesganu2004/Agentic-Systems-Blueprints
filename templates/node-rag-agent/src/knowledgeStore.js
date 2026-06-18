import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { Index } from "@upstash/vector";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataFile = path.resolve(__dirname, "..", ".data", "knowledge.json");

function hasUpstashConfig() {
  return Boolean(process.env.UPSTASH_VECTOR_REST_URL && process.env.UPSTASH_VECTOR_REST_TOKEN);
}

function createUpstashIndex() {
  return new Index({
    url: process.env.UPSTASH_VECTOR_REST_URL,
    token: process.env.UPSTASH_VECTOR_REST_TOKEN
  });
}

export function normalizeNode(node) {
  if (!node || typeof node !== "object") {
    throw new Error("Knowledge node must be an object.");
  }

  if (!node.id || !node.title || !node.text) {
    throw new Error("Knowledge node requires id, title, and text.");
  }

  return {
    id: String(node.id),
    type: node.type || "note",
    title: String(node.title),
    text: String(node.text),
    sourceUrl: node.sourceUrl || "",
    tags: Array.isArray(node.tags) ? node.tags.map(String) : [],
    region: node.region || "global",
    confidence: node.confidence || "draft",
    updatedAt: node.updatedAt || new Date().toISOString()
  };
}

async function readLocalNodes() {
  try {
    return JSON.parse(await readFile(dataFile, "utf8"));
  } catch {
    return [];
  }
}

async function writeLocalNodes(nodes) {
  await mkdir(path.dirname(dataFile), { recursive: true });
  await writeFile(dataFile, JSON.stringify(nodes, null, 2));
}

function scoreLocal(query, node) {
  const terms = query.toLowerCase().split(/\W+/).filter(Boolean);
  const haystack = `${node.title} ${node.text} ${node.tags.join(" ")}`.toLowerCase();
  const hits = terms.filter((term) => haystack.includes(term)).length;
  return terms.length ? hits / terms.length : 0;
}

export async function upsertKnowledge(inputNode) {
  const node = normalizeNode(inputNode);

  if (hasUpstashConfig()) {
    const index = createUpstashIndex();
    await index.upsert({
      id: node.id,
      data: `${node.title}\n${node.text}`,
      metadata: node
    });
    return { provider: "upstash-vector", node };
  }

  const nodes = await readLocalNodes();
  const withoutExisting = nodes.filter((item) => item.id !== node.id);
  await writeLocalNodes([...withoutExisting, node]);
  return { provider: "local-json-dev", node };
}

export async function listKnowledge() {
  if (hasUpstashConfig()) {
    return { provider: "upstash-vector", nodes: [], note: "Listing depends on provider pagination; use search for runtime retrieval." };
  }

  return { provider: "local-json-dev", nodes: await readLocalNodes() };
}

export async function searchKnowledge(query, options = {}) {
  const minScore = Number(options.minScore ?? process.env.MIN_KNOWLEDGE_SCORE ?? 0.55);
  const topK = Number(options.topK ?? 5);

  if (!query || !String(query).trim()) {
    throw new Error("Search query is required.");
  }

  if (hasUpstashConfig()) {
    const index = createUpstashIndex();
    const matches = await index.query({
      data: String(query),
      topK,
      includeMetadata: true,
      includeData: false
    });

    return {
      provider: "upstash-vector",
      query,
      minScore,
      needsWebLookup: matches.every((match) => (match.score || 0) < minScore),
      matches: matches.map((match) => ({
        id: match.id,
        score: match.score,
        metadata: match.metadata
      }))
    };
  }

  const nodes = await readLocalNodes();
  const matches = nodes
    .map((node) => ({ node, score: scoreLocal(String(query), node) }))
    .filter((match) => match.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, topK)
    .map((match) => ({
      id: match.node.id,
      score: match.score,
      metadata: match.node
    }));

  return {
    provider: "local-json-dev",
    query,
    minScore,
    needsWebLookup: matches.every((match) => match.score < minScore),
    matches
  };
}
