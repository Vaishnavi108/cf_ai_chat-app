# 💬 AI Chat App (Cloudflare Workers + AI + Durable Objects)

An AI-powered chat application built using **Cloudflare Workers AI**, **Durable Objects**, and a **React frontend**.  
This project demonstrates a full-stack serverless AI system with memory, state management, and real-time chat UI.

---

## 🚀 Live Demo
https://vaishnavimn178.workers.dev

---

## 📌 Features

- 🤖 AI-powered chat using Cloudflare Workers AI (Llama 3 model)
- 🧠 Persistent conversation memory using Durable Objects
- 💾 Session-based chat history storage
- 🌐 REST API backend built with Cloudflare Workers
- ⚛️ React frontend with modern chat UI
- ⚡ Fast, serverless architecture
- 🔄 Graceful fallback when AI is unavailable

---

## 🧱 Architecture

Frontend (React)
        ↓
Cloudflare Worker (API Layer)
        ↓
Durable Object (Chat Session Memory)
        ↓
Cloudflare AI (Llama 3.1 / 3.3 model)

---

## 🛠️ Tech Stack

### Backend
- Cloudflare Workers
- Durable Objects
- Cloudflare Workers AI
- JavaScript (ES Modules)

### Frontend
- React (Vite)
- Vanilla CSS (custom styling)

---

## 🧠 How Memory Works

Each user session is stored using Durable Objects:

- A unique `sessionId` is passed from frontend
- Cloudflare routes it to a dedicated Durable Object instance
- That instance stores chat history in `state.storage`
- Every message is appended to history
- AI responds using full conversation context

This enables **persistent, multi-turn conversations per user**.

---

## 📡 API Flow

### POST `/`

Request:
```json
{
  "message": "Hello",
  "sessionId": "user1"
}