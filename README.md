# 🧠 Mindly — A Notion Clone

Mindly is a Notion-like web application built with **Vite**, **React.js**, **TypeScript**, and **Supabase**. It provides a powerful, flexible workspace for writing, organizing, and visualizing ideas in a structured, nested-page format.

## 🚀 Features

- 🔐 **Authentication**

  - Secure login by entering your email — an authentication link is sent to your inbox.

- 📄 **Rich Page Editor**

  - Typing `/` shows a slash command menu with the following block types:
    - Text
    - Image
    - Page
    - Heading 1 / 2 / 3
    - List
  - Each block type has its own styling.
  - Drag and drop blocks to reorder content freely.

- 🌄 **Cover Image Upload**

  - Upload custom cover images to personalize your pages.

- 🧭 **Nested Pages**

  - Create pages inside other pages to organize information hierarchically.

- 🧠 **Global State Management**
  - Built with **React Context API** to manage authentication and user state efficiently.

## 🛠 Tech Stack

- **Frontend:** Vite + React.js + TypeScript
- **Backend-as-a-Service:** Supabase (auth, database, storage)
- **State Management:** React Context API

## 📦 Getting Started

```bash
git clone https://github.com/ahmed-lotfi/mindly.git
cd mindly
npm install
npm run dev
```
