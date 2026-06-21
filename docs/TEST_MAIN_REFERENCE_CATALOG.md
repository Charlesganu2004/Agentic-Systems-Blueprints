# Test Main Reference Catalog

This catalog lists the public repos, docs, and services referenced while building the ElectroVision `Test_main` branch. It is generic on purpose: use these sources to build different and unique agents, RAG systems, LLM apps, ML features, and hosted knowledge stores for other projects.

## Agent Orchestration And Multi-Agent Repos

| Source | Link | Use In Future Projects |
|--------|------|------------------------|
| Brady Gaster Squad | https://github.com/bradygaster/squad | Repo-native agent team orchestration, specialist charters, GitHub issue workflows, approval gates, and durable agent state. |
| Squad docs | https://bradygaster.github.io/squad/docs/get-started/five-minute-start/ | Quick-start style for setting up agent teams without making onboarding painful. |
| GitHub blog on Squad | https://github.blog/ai-and-ml/github-copilot/how-squad-runs-coordinated-ai-agents-inside-your-repository/ | Plain-language explanation of coordinated repo agents, issue monitoring, approvals, and context management. |
| Squad-IRL | https://github.com/bradygaster/Squad-IRL | Example workflows for support routing, feedback analysis, compliance review, monitoring, and document processing. |
| CustomAgent | https://github.com/bradygaster/CustomAgent | Agent instruction files, prompt templates, and custom-agent structure ideas. |
| MultiAgent | https://github.com/bradygaster/MultiAgent | Multi-agent host, tool server, workflow visualizer, logs, traces, and token usage ideas. |

## RAG And Knowledge Repos

| Source | Link | Use In Future Projects |
|--------|------|------------------------|
| HKUDS LightRAG | https://github.com/HKUDS/LightRAG | Preferred graph-based RAG reference for LLM systems that need entity/relation extraction, cross-document reasoning, multimodal parsing, REST API integration, and knowledge graph plus vector retrieval. |
| AKADATA Node RAG article | https://articles.akadata.ltd/how-to-build-a-node-based-rag-system/ | Concept walkthrough for Node-based RAG systems. |
| varunon9 RAG LangChain Node.js | https://github.com/varunon9/rag-langchain-nodejs | Node/LangChain retrieval-before-generation reference. |
| Brady Gaster AugmentR | https://github.com/bradygaster/AugmentR | URL/list ingestion into a RAG-style knowledge flow. |
| Upstash RAG Chat | https://github.com/upstash/rag-chat | Prototype-oriented hosted RAG example. |
| Upstash Vector JS SDK | https://github.com/upstash/vector-js | Official JavaScript client for Upstash Vector. |
| satoshiman rag-cli | https://github.com/satoshiman/rag-cli | CLI-style RAG indexing inspiration. |
| Agent Memory | https://github.com/rohitg00/agentmemory | Persistent memory pattern for coding-agent context. |

## Prompt Compression And Context Efficiency

| Source | Link | Use In Future Projects |
|--------|------|------------------------|
| Microsoft LLMLingua | https://github.com/microsoft/LLMLingua | Prompt/context compression reference. |
| LongLLMLingua paper | https://www.microsoft.com/en-us/research/publication/longllmlingua-accelerating-and-enhancing-llms-in-long-context-scenarios-via-prompt-compression/ | Long-context compression and latency/cost research. |
| Prompt Compression Survey | https://github.com/ZongqianLi/Prompt-Compression-Survey | Survey of prompt-compression methods and papers. |
| GitHub context-compression topic | https://github.com/topics/context-compression | Discovery path for new compression libraries and repos. |

## Mobile, App, And Repo Structure References

| Source | Link | Use In Future Projects |
|--------|------|------------------------|
| Expo examples | https://github.com/expo/examples | Focused Expo/React Native example apps. |
| Expo core repo | https://github.com/expo/expo | Platform reference for Expo and universal React Native. |
| Expo folder structure guide | https://expo.dev/blog/expo-app-folder-structure-best-practices | Scalable Expo folder organization. |
| Obytes React Native template | https://github.com/obytes/react-native-template-obytes | Production-style Expo/React Native TypeScript template ideas. |
| create-expo-stack | https://github.com/roninoss/create-expo-stack | Expo project generator and setup comparison. |
| Express generator docs | https://expressjs.com/en/starter/generator/ | Node/Express folder structure reference. |
| GitHub contribution guidelines docs | https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/setting-guidelines-for-repository-contributors | Issue/PR/contributor docs placement and setup. |
| Google Engineering Practices | https://google.github.io/eng-practices/review/reviewer/standard.html | Code health and review philosophy. |

## Presentation And Hackathon References

| Source | Link | Use In Future Projects |
|--------|------|------------------------|
| Awesome Hackathon | https://github.com/HappyHackingSpace/awesome-hackathon | Hackathon starters, tools, APIs, and presentation resources. |
| Slidev | https://github.com/slidevjs/slidev | Developer-friendly slide source and presenter workflow. |
| Marpit | https://github.com/marp-team/marpit | Markdown-to-slide presentation discipline. |
| dkorobtsov pitch-deck | https://github.com/dkorobtsov/pitch-deck | Pitch narrative review and deck critique pattern. |

## Hosted Storage And Server Options

| Source | Link | Use In Future Projects |
|--------|------|------------------------|
| Upstash Vector docs | https://upstash.com/docs/vector/overall/getstarted | Hosted vector DB for small RAG systems. |
| Supabase vector docs | https://supabase.com/docs/guides/ai/vector-columns | Postgres + pgvector with auth/storage ecosystem. |
| Neon pgvector docs | https://neon.com/docs/extensions/pgvector | Serverless Postgres with vector extension. |
| Qdrant Cloud docs | https://qdrant.tech/documentation/cloud/ | Managed vector-native database. |
| Cloudflare Workers docs | https://developers.cloudflare.com/workers/ | Free/low-cost edge API hosting. |
| Vercel docs | https://vercel.com/docs | Frontend and serverless app hosting. |
| Render docs | https://render.com/docs | Simple Node services and background workers. |
| Microsoft WSL file guidance | https://learn.microsoft.com/en-us/windows/wsl/filesystems#file-storage-and-performance-across-file-systems | Avoid local DB performance issues on `/mnt/c` by using hosted storage or Linux filesystem paths. |

## ML And JavaScript AI References

| Source | Link | Use In Future Projects |
|--------|------|------------------------|
| Transformers.js | https://huggingface.co/docs/transformers.js | JavaScript transformer inference in browser or Node. |
| TensorFlow.js | https://www.tensorflow.org/js | JavaScript ML training and inference. |
| ONNX Runtime Web | https://onnxruntime.ai/docs/get-started/with-javascript/web.html | Run ONNX models in web/JavaScript runtimes. |

## Legal, Privacy, UX, And Energy References Used On Test Main

These were project-domain references, not generic agent frameworks. They are kept here as examples of how a project should store domain-specific source nodes.

| Source | Link | Use In Future Projects |
|--------|------|------------------------|
| FTC privacy/security guidance | https://www.ftc.gov/business-guidance/privacy-security | Privacy, data security, and consumer-protection guardrails. |
| DOE smart-grid data/privacy reference | https://www.energy.gov/gc/articles/department-energy-data-access-and-privacy-issues-related-smart-grid-technologies | Example of domain-specific data privacy research. |
| ScienceDirect energy audit topic | https://www.sciencedirect.com/topics/engineering/energy-audit | Example of domain-specific knowledge source. |
| Nielsen Norman Group heuristics | https://www.nngroup.com/articles/ten-usability-heuristics/ | UX heuristic review pattern. |
| W3C WCAG 2.2 | https://www.w3.org/TR/WCAG22/ | Accessibility requirements reference. |
| Baymard checkout usability | https://baymard.com/research/checkout-usability | Conversion/friction research example. |
