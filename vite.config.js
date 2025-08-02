// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/react-todo-list/", // ← 這裡要跟你的 GitHub repo 名字完全一樣！
  plugins: [react()],
});
