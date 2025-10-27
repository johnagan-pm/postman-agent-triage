import { MCPClient } from "@mastra/mcp";

if (!process.env.GITHUB_TOKEN) {
  throw new Error("GITHUB_TOKEN is not set");
}

export const getGithubMcpClient = new MCPClient({
  servers: {
    github: {
      url: new URL("https://api.githubcopilot.com/mcp/"),
      requestInit: {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
        }
      },
    }
  }
});