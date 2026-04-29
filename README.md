# cf_ai_chat-app 💬

## 🚀 Overview

This project is a full-stack AI-powered chat application built using Cloudflare’s platform. It allows users to interact with an AI assistant in real-time through a simple chat interface.

The application uses **Cloudflare Workers AI (Llama model)** for generating responses and **Durable Objects** to maintain conversation history (memory) per session.

---

## 🧠 Features

* 💬 Chat interface built with React (Vite)
* 🤖 AI responses powered by Cloudflare Workers AI
* 🧾 Conversation memory using Durable Objects
* 🌐 Fully deployed using Cloudflare (Workers + Pages)
* ⚙️ Environment-based API configuration

---

## 🏗️ Tech Stack

### Frontend

* React (Vite)
* JavaScript

### Backend

* Cloudflare Workers
* Durable Objects
* Workers AI (Llama model)

### Deployment

* Cloudflare Pages (Frontend)
* Cloudflare Workers (Backend)

---

## 🔗 Live Demo

Frontend (UI):
👉 https://cf-ai-chat-app.pages.dev/

Backend (API):
👉 https://ai-chat-app.vaishnavimn178.workers.dev

---

## ⚙️ How it Works

1. User sends a message from the frontend
2. Request is sent to Cloudflare Worker
3. Durable Object retrieves conversation history
4. Workers AI generates a response
5. Response is stored and returned to UI

---

## 🛠️ Running Locally

### Backend

```bash
cd ai-chat-app
npx wrangler dev
```

### Frontend

```bash
cd my-chat-ui
npm install
npm run dev
```

---

## 🌱 Environment Variables

Frontend uses:

```env
VITE_API_URL=https://ai-chat-app.vaishnavimn178.workers.dev
```

---

## 📌 Project Structure

```
cf_ai_chat-app/
├── ai-chat-app/      # Cloudflare Worker (backend)
├── my-chat-ui/       # React frontend
├── README.md
├── PROMPTS.md
```

---

## 🎯 Assignment Requirements Covered

* ✅ LLM integration (Cloudflare Workers AI)
* ✅ Workflow (Workers + Durable Objects)
* ✅ User input (chat UI)
* ✅ Memory/state (Durable Objects)

---

## ✨ Future Improvements

* Streaming responses (like ChatGPT)
* Multi-session chat UI
* Better UI/UX enhancements

---

## 👩‍💻 Author

Vaishnavi
