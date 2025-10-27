import { MCPClient } from "@mastra/mcp";

if (!process.env.ATLASSIAN_TOKEN) {
  throw new Error("ATLASSIAN_TOKEN is not set");
}

export const getAtlassianMcpClient = new MCPClient({
  servers: {
    atlassian: {
      url: new URL("https://mcp.atlassian.com/v1/sse"),
      requestInit: {
        headers: {
          Authorization: `Bearer ${process.env.ATLASSIAN_TOKEN}`
        }
      }
    }
  }
});