import { MCPServer } from "@mastra/mcp";

import { triageAgent } from "../agents/triage-agent";

export const triageMcpServer = new MCPServer({
  id: "triage-mcp-server",
  name: "Triage Server",
  description: "A server for triaging API issues",
  version: "1.0.0",
  agents: { triageAgent },
  tools: {},
});
