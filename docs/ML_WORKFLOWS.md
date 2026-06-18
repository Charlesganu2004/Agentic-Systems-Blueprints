# ML Workflows

Use ML when the project needs prediction, classification, image/audio understanding, anomaly detection, or repeated decisions that should become cheaper and more consistent over time.

## Lightweight ML Options

| Tool | Use |
|------|-----|
| Transformers.js | Run transformer models in JavaScript, including browser or Node workflows. |
| TensorFlow.js | Train or run ML models in JavaScript. |
| ONNX Runtime Web | Run ONNX models in web or JavaScript runtimes. |
| Python notebooks | Data exploration, labeling, training, and evaluation. |
| Hosted LLM vision/audio APIs | Multimodal understanding when training is too slow or expensive. |

## Build Steps

1. Define the prediction target.
2. Collect allowed training/evaluation data.
3. Create labels or ground truth.
4. Start with a baseline.
5. Measure quality.
6. Add human review for uncertain cases.
7. Store model decisions and evidence.
8. Re-train or improve only when the data justifies it.

## When Not To Train

- You have very little data.
- The labels are unclear.
- The model decision has legal or financial risk without review.
- A rules engine or RAG answer is enough.
- A general multimodal model already solves the prototype need.
