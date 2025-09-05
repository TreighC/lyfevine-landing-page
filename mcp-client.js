import axios from 'axios';

const mcpEndpoint = 'https://react-bits-mcp.davidhzdev.workers.dev/mcp';
const sessionId = "test-session-1"; // Stick to a simple, unique string

async function createSession() {
  // Send createSession with the session header
  const response = await axios.post(
    mcpEndpoint,
    {
      jsonrpc: "2.0",
      method: "createSession",
      params: {},
      id: 1
    },
    {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json, text/event-stream",
        "Mcp-Session-Id": sessionId
      }
    }
  );
  // Do not try to use a returned sessionId, just use the one you sent
  return sessionId;
}

async function getComponents(sessionId) {
  // Use the same sessionId for the header
  const response = await axios.post(
    mcpEndpoint,
    {
      jsonrpc: "2.0",
      method: "getComponents",
      params: {},
      id: 2
    },
    {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json, text/event-stream",
        "Mcp-Session-Id": sessionId
      }
    }
  );
  return response.data;
}

async function main() {
  try {
    // Step 1: Create the session
    const activeSessionId = await createSession();
    console.log("Session created with ID:", activeSessionId);

    // Step 2: Get components using the same session ID
    const components = await getComponents(activeSessionId);
    console.log("Components from React Bits library:");
    console.log(components);
  } catch (error) {
    if (error.response) {
      console.error("Status:", error.response.status);
      console.error("Data:", error.response.data);
    } else {
      console.error("Error:", error.message);
    }
  }
}

main();