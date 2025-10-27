import type { MCPClient } from "@mastra/mcp";

export async function filterTools(client: MCPClient, filter?: string | RegExp) {
  const tools = await client.getTools();

  if (filter) {
    const regex = typeof filter === "string" ? new RegExp(filter, "i") : filter;
    Object.keys(tools).forEach((key) => {
      if (!regex.test(key)) {
        delete tools[key];
      }
    });
  }

  return tools;
}
