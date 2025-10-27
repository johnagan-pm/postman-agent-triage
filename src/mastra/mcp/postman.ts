import { MCPClient } from "@mastra/mcp";

if (!process.env.POSTMAN_API_KEY) {
  throw new Error("POSTMAN_API_KEY is not set");
}

export const postmanMcpClient = new MCPClient({
  id: "postman-mcp-client",
  servers: {
    postman: {
      command: "bunx",
      args: ["-y", "@postman/postman-mcp-server@latest", "--full"],
      env: {
        POSTMAN_API_KEY: process.env.POSTMAN_API_KEY,
      },
    },
  },
});