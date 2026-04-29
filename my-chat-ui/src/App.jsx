  import { useState } from "react";

  export default function App() {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([
      {
        role: "assistant",
        content: "Hi 👋 I’m your AI assistant. Ask me anything!",
      },
    ]);
    const [loading, setLoading] = useState(false);
    const API_URL =
      import.meta.env.VITE_API_URL ||
      "https://ai-chat-app.vaishnavimn178.workers.dev";
    const sendMessage = async () => {
      if (!input.trim()) return;

      const currentInput = input;

      setMessages((prev) => [...prev, { role: "user", content: currentInput }]);

      setInput("");
      setLoading(true);

      try {
        const res = await fetch(API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: currentInput,
            sessionId: "user1",
          }),
        });

        const data = await res.json();

        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.reply },
        ]);
      } catch (err) {
        console.error(err);

        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: "⚠️ Server not reachable" },
        ]);
      }

      setLoading(false);
    };

    return (
      <div style={styles.page}>
        <div style={styles.container}>
          <div style={styles.header}>💬 AI Chat</div>

          <div style={styles.chatBox}>
            {messages.map((msg, idx) => (
              <div
                key={idx}
                style={{
                  ...styles.message,
                  alignSelf: msg.role === "user" ? "flex-end" : "flex-start",
                  backgroundColor: msg.role === "user" ? "#4f46e5" : "#f3f4f6",
                  color: msg.role === "user" ? "white" : "#111",
                }}
              >
                {msg.content}
              </div>
            ))}

            {loading && <div style={styles.typing}>AI is typing...</div>}
          </div>

          <div style={styles.inputBox}>
            <input
              style={styles.input}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button style={styles.button} onClick={sendMessage}>
              Send
            </button>
          </div>
        </div>
      </div>
    );
  }

  const styles = {
    page: {
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg, #e0f2fe, #ede9fe)",
      fontFamily: "Arial, sans-serif",
    },

    container: {
      width: "420px",
      height: "600px",
      display: "flex",
      flexDirection: "column",
      borderRadius: "16px",
      background: "white",
      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
      overflow: "hidden",
    },

    header: {
      padding: "16px",
      fontSize: "18px",
      fontWeight: "bold",
      background: "#4f46e5",
      color: "white",
    },

    chatBox: {
      flex: 1,
      padding: "12px",
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      overflowY: "auto",
    },

    message: {
      padding: "10px 14px",
      borderRadius: "16px",
      maxWidth: "75%",
      fontSize: "14px",
    },

    typing: {
      fontSize: "12px",
      color: "#666",
    },

    inputBox: {
      display: "flex",
      padding: "10px",
      borderTop: "1px solid #eee",
      gap: "8px",
    },

    input: {
      flex: 1,
      padding: "10px",
      borderRadius: "10px",
      border: "1px solid #ddd",
      outline: "none",
    },

    button: {
      padding: "10px 14px",
      background: "#4f46e5",
      color: "white",
      border: "none",
      borderRadius: "10px",
      cursor: "pointer",
    },
  };
