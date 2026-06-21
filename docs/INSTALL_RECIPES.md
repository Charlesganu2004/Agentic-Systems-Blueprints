# Install Recipes

Use these commands as starting points. Pick only what a new project needs.

## Agent Orchestration

### Squad

```bash
npm view @bradygaster/squad-cli version
npm install -g @bradygaster/squad-cli
```

Reference: https://github.com/bradygaster/squad

### LangChain / LangGraph Style Apps

```bash
npm install @langchain/core @langchain/openai @langchain/community
```

For graph-based agent workflows, follow the current LangGraph.js docs before choosing packages.

References:

- https://js.langchain.com/docs/
- https://langchain-ai.github.io/langgraphjs/

### Vercel AI SDK

```bash
npm install ai
```

Reference: https://sdk.vercel.ai/docs

### LlamaIndex TypeScript

```bash
npm install llamaindex
```

Reference: https://ts.llamaindex.ai/

## RAG And Vector Storage

### LightRAG Graph RAG

Use LightRAG when the project needs more than plain vector search: knowledge-graph extraction, entity/relation retrieval, cross-document reasoning, multimodal document parsing, and a REST API/WebUI RAG service that a Node app can call.

Recommended server install with `uv`:

```bash
uv tool install "lightrag-hku[api]"
lightrag-server
```

Alternative Python virtual environment:

```bash
python -m venv .venv
# Linux/macOS:
source .venv/bin/activate
# Windows PowerShell:
# .venv\Scripts\Activate.ps1
pip install "lightrag-hku[api]"
lightrag-server
```

Source/Docker path:

```bash
git clone https://github.com/HKUDS/LightRAG.git
cd LightRAG
cp env.example .env
docker compose up
```

Integration rule: keep LightRAG as a sidecar RAG service. Your app calls LightRAG's REST API first, then sends retrieved context to the LLM response layer.

Reference: https://github.com/HKUDS/LightRAG

### Upstash Vector

```bash
npm install @upstash/vector
```

Set in `.env`:

```bash
UPSTASH_VECTOR_REST_URL=
UPSTASH_VECTOR_REST_TOKEN=
```

References:

- https://upstash.com/docs/vector/overall/getstarted
- https://github.com/upstash/vector-js

### Supabase

```bash
npm install @supabase/supabase-js
```

Use Supabase when a project needs auth, storage, SQL tables, and pgvector in one platform.

Reference: https://supabase.com/docs/guides/ai/vector-columns

### Neon Postgres

```bash
npm install pg
```

Use Neon when a project wants serverless Postgres and can manage embeddings/vector columns directly.

Reference: https://neon.com/docs/extensions/pgvector

### Qdrant

```bash
npm install @qdrant/js-client-rest
```

Use Qdrant when vector search is a primary product capability.

Reference: https://qdrant.tech/documentation/cloud/

## Node API Starter

```bash
npm install express cors dotenv
```

Or install this repo's starter into a new project:

```bash
agent-blueprint init ./my-project --template node-rag-agent
```

## Expo / React Native

```bash
npx create-expo-app@latest my-app
```

References:

- https://github.com/expo/examples
- https://github.com/expo/expo
- https://github.com/obytes/react-native-template-obytes
- https://github.com/roninoss/create-expo-stack

## Presentations

### Slidev

```bash
npm init slidev@latest
```

Reference: https://github.com/slidevjs/slidev

### Marpit

```bash
npm install @marp-team/marpit
```

Reference: https://github.com/marp-team/marpit

## JavaScript ML

### Transformers.js

```bash
npm install @huggingface/transformers
```

Reference: https://huggingface.co/docs/transformers.js

### TensorFlow.js

```bash
npm install @tensorflow/tfjs
```

Reference: https://www.tensorflow.org/js

### ONNX Runtime Web

```bash
npm install onnxruntime-web
```

Reference: https://onnxruntime.ai/docs/get-started/with-javascript/web.html

## Prompt Compression References

These are mostly research/reference repos. Review before installing into production.

```bash
git clone https://github.com/microsoft/LLMLingua.git
git clone https://github.com/ZongqianLi/Prompt-Compression-Survey.git
```

References:

- https://github.com/microsoft/LLMLingua
- https://github.com/ZongqianLi/Prompt-Compression-Survey
- https://github.com/rohitg00/agentmemory
