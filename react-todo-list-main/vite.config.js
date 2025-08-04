// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/react-todo-list/", // 🔥 很重要！一定要改成你的 GitHub repo 名稱
});
