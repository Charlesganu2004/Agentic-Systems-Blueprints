const baseUrl = process.env.LIGHTRAG_BASE_URL || "http://localhost:9621";

export async function callLightRag(path, body) {
  const response = await fetch(`${baseUrl}${path}`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body)
  });

  if (!response.ok) {
    throw new Error(`LightRAG request failed: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

export async function retrieveBeforeLlm(query) {
  // Replace `/query` with the current endpoint from the LightRAG REST API docs.
  return callLightRag("/query", { query });
}
