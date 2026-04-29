const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export { ChatRoom } from "./chat";

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: corsHeaders,
      });
    }

    if (request.method !== "POST") {
      return new Response("Send POST request", {
        status: 400,
        headers: corsHeaders,
      });
    }

    try {
      const body = await request.json();
      const { message, sessionId } = body;

      const id = env.CHAT.idFromName(sessionId || "default");
      const stub = env.CHAT.get(id);

      const newRequest = new Request(request.url, {
        method: "POST",
        headers: request.headers,
        body: JSON.stringify({ message, sessionId }),
      });

      const response = await stub.fetch(newRequest);
      const data = await response.json();

      return new Response(JSON.stringify(data), {
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      });
    } catch (err) {
      return new Response(JSON.stringify({ error: err.message }), {
        status: 500,
        headers: corsHeaders,
      });
    }
  },
};
