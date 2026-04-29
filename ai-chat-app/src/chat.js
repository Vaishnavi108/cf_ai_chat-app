export class ChatRoom {
  constructor(state, env) {
    this.state = state;
    this.env = env;
  }

  async fetch(request) {
    try {
      const { message, sessionId } = await request.json();

      let history = (await this.state.storage.get("history")) || [];

      history.push({ role: "user", content: message });

      let reply = "AI temporarily unavailable";

      try {
        if (this.env.AI) {
          const aiResponse = await this.env.AI.run(
            "@cf/meta/llama-3.1-8b-instruct",
            {
              messages: history,
            },
          );

          reply = aiResponse.response;
        }
      } catch (aiErr) {
        console.log("AI Error:", aiErr);
        reply = "AI temporarily unavailable";
      }

      history.push({ role: "assistant", content: reply });

      await this.state.storage.put("history", history);

      return new Response(JSON.stringify({ reply }), {
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (err) {
      return new Response(
        JSON.stringify({
          error: err.message,
        }),
        { status: 500 },
      );
    }
  }
}
