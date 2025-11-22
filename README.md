<div align="center">

# 🔖 Bookmark Hub
### Modern, Lightweight & Persistent Bookmark Management System

Built with **React + Vite • TailwindCSS • TypeScript • Zustand • shadcn/ui • Framer Motion**
<br />
🌙 Dark/Light mode • ⚡ LocalStorage Persistence • 🎨 Modern UI

<br />

[![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-4-purple?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Zustand](https://img.shields.io/badge/Zustand-State%20Management-orange?style=for-the-badge)](https://github.com/pmndrs/zustand)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-Components-000000?style=for-the-badge&logo=shadcnui)](https://ui.shadcn.com/)

</div>

---

## 📚 Project Overview

**Bookmark Hub** is a sophisticated yet lightweight application designed to manage browser bookmarks efficiently. It leverages the power of **LocalStorage** to eliminate the need for a backend database, ensuring privacy and speed.

### Key Highlights
- ⚡ **Zero Backend Latency:** Instant CRUD operations using browser storage.
- 🎨 **Aesthetic UI:** Features a polished interface with smooth transitions powered by Framer Motion.
- 🖥️ **Responsive Design:** Optimized for all devices with a 4-column grid layout on desktop.
- 🌗 **Theme Support:** Built-in dark and light mode toggle for visual comfort.

---

## ✨ Features

### 🗂️ Category Management
- **Dynamic Organization:** Create custom categories to group bookmarks.
- **Safe Deletion:** Deleting a category automatically migrates its bookmarks to a "General" folder to prevent data loss.
- **Filtering:** Seamlessly switch views between categories.

### 🔗 Bookmark Operations
- **Smart Entry:** Add bookmarks with Title, URL, and Category assignment.
- **Favicon Support:** Automatically fetches and displays the website's favicon.
- **Quick Actions:**
  - One-click copy to clipboard.
  - Direct open in new tab.
  - Permanent deletion.

### 🛠️ Technical Features
- **Persistent State:** Data survives page reloads via LocalStorage synchronization.
- **Animations:** Micro-interactions and hover effects using Framer Motion.
- **Component Library:** Utilizes Radix UI primitives via shadcn/ui for accessible components.

---

## 📁 Project Structure

```txt
src/
├── components/
│   ├── AddBookmarkDialog.tsx   # Modal for creating new entries
│   ├── BookmarkCard.tsx        # Individual bookmark display component
│   ├── CategoryList.tsx        # Sidebar/List for category navigation
│   └── ThemeToggle.tsx         # Dark/Light mode switcher
├── store/
│   └── bookmarkStore.ts        # Global state management (Zustand)
├── lib/
│   └── getFavicon.ts           # Utility for fetching favicons
├── App.tsx                     # Main layout and routing logic
└── main.tsx                    # Entry point
```

---

## 🛠️ Technologies Used

| Technology | Purpose |
| :--- | :--- |
| **React 18** | Core UI Library |
| **Vite 4** | Next Generation Frontend Tooling |
| **TypeScript** | Static Typing |
| **TailwindCSS** | Utility-first CSS Framework |
| **Zustand** | Small, fast, and scalable bearbones state-management |
| **shadcn/ui** | Re-usable components built with Radix UI and Tailwind |
| **Framer Motion** | Production-ready animation library |

---

## 🚀 Getting Started

Follow these steps to run the project locally.

### 1. Clone the Repository
```bash
git clone [https://github.com/AliAkgun0/Bookmark-Hub.git](https://github.com/AliAkgun0/Bookmark-Hub.git)
cd Bookmark-Hub
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```

### 4. Access the App
Open your browser and navigate to:
```
http://localhost:5173
```

---

## 🧩 Roadmap

- [ ] 🔍 **Search Functionality:** Filter bookmarks by title or URL.
- [ ] 📌 **Pin System:** Ability to pin frequently used bookmarks to the top.
- [ ] ☁️ **Cloud Sync:** Optional integration for multi-device support.
- [ ] 🎨 **Customization:** Allow custom icons or colors for categories.

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

<div align="center">
<br />

⭐ **If you like this project, please give it a star!**

Built with ❤️ using **React, Vite & TailwindCSS**

</div>