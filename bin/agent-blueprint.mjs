#!/usr/bin/env node
import { access, copyFile, mkdir, readdir, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");
const templatesRoot = path.join(repoRoot, "templates");

const templates = {
  "node-rag-agent": {
    description: "Express + hosted-vector-ready RAG API with generic agent registry and local dev fallback."
  },
  "agent-roster": {
    description: "Markdown agent charters, routing notes, and a JSON schema for creating unique project agents."
  },
  "rag-node-schema": {
    description: "Portable knowledge-node schemas and starter seed records for RAG systems."
  }
};

const requiredRepoFiles = [
  "README.md",
  "docs/START_HERE.md",
  "docs/TEST_MAIN_REFERENCE_CATALOG.md",
  "docs/INSTALL_RECIPES.md",
  "docs/AGENTS.md",
  "docs/RAG_NODES.md",
  "docs/FREE_STORAGE_AND_HOSTING.md",
  "docs/LLM_APPS.md",
  "docs/ML_WORKFLOWS.md",
  "templates/node-rag-agent/package.json",
  "templates/node-rag-agent/src/index.js",
  "templates/agent-roster/agents/_template.md",
  "templates/rag-node-schema/knowledge-node.schema.json"
];

function printHelp() {
  console.log(`Agentic Systems Blueprints

Usage:
  agent-blueprint list
  agent-blueprint init <target> --template <name> [--force] [--dry-run]
  agent-blueprint doctor [target]
  agent-blueprint help

Templates:
${Object.entries(templates).map(([name, meta]) => `  ${name.padEnd(16)} ${meta.description}`).join("\n")}

Examples:
  agent-blueprint list
  agent-blueprint init ./my-project --template agent-roster
  agent-blueprint init ./my-project --template node-rag-agent
  agent-blueprint init ./my-project --template rag-node-schema --dry-run
  agent-blueprint doctor .
`);
}

function parseArgs(argv) {
  const [command = "help", ...rest] = argv;
  const flags = new Map();
  const positional = [];

  for (let i = 0; i < rest.length; i += 1) {
    const arg = rest[i];
    if (arg.startsWith("--")) {
      const [key, inlineValue] = arg.split("=", 2);
      const next = rest[i + 1];
      if (inlineValue !== undefined) {
        flags.set(key, inlineValue);
      } else if (next && !next.startsWith("--")) {
        flags.set(key, next);
        i += 1;
      } else {
        flags.set(key, true);
      }
    } else {
      positional.push(arg);
    }
  }

  return {
    command,
    target: path.resolve(process.cwd(), positional[0] || "."),
    template: flags.get("--template") || "node-rag-agent",
    force: flags.has("--force"),
    dryRun: flags.has("--dry-run")
  };
}

async function exists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function walkFiles(root, relative = "") {
  const absolute = path.join(root, relative);
  const entries = await readdir(absolute, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const next = path.join(relative, entry.name);
    if (entry.isDirectory()) {
      files.push(...await walkFiles(root, next));
    } else if (entry.isFile()) {
      files.push(next);
    }
  }

  return files;
}

function listTemplates() {
  console.log(JSON.stringify({ ok: true, templates }, null, 2));
}

async function init({ target, template, force, dryRun }) {
  if (!templates[template]) {
    throw new Error(`Unknown template "${template}". Run agent-blueprint list.`);
  }

  const sourceRoot = path.join(templatesRoot, template);
  const files = await walkFiles(sourceRoot);
  let copied = 0;
  let skipped = 0;

  for (const relative of files) {
    const source = path.join(sourceRoot, relative);
    const destination = path.join(target, relative);
    const destinationExists = await exists(destination);

    if (destinationExists && !force) {
      skipped += 1;
      continue;
    }

    if (!dryRun) {
      await mkdir(path.dirname(destination), { recursive: true });
      await copyFile(source, destination);
    }
    copied += 1;
  }

  console.log(JSON.stringify({
    ok: true,
    command: "init",
    template,
    target,
    copied,
    skipped,
    force,
    dryRun
  }, null, 2));
}

async function doctor({ target }) {
  const checks = [];

  for (const relative of requiredRepoFiles) {
    const absolute = path.join(target, relative);
    const present = await exists(absolute);
    checks.push({
      path: relative,
      present,
      size: present ? (await stat(absolute)).size : 0
    });
  }

  const missing = checks.filter((check) => !check.present).map((check) => check.path);
  console.log(JSON.stringify({
    ok: missing.length === 0,
    command: "doctor",
    target,
    checked: checks.length,
    missing,
    checks
  }, null, 2));

  if (missing.length > 0) {
    process.exitCode = 1;
  }
}

async function main() {
  const args = parseArgs(process.argv.slice(2));

  if (args.command === "help" || args.command === "--help" || args.command === "-h") {
    printHelp();
  } else if (args.command === "list") {
    listTemplates();
  } else if (args.command === "init") {
    await init(args);
  } else if (args.command === "doctor") {
    await doctor(args);
  } else {
    printHelp();
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
