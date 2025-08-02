// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/你的 GitHub 專案名/", // 這行很重要！不然頁面會是空白
  plugins: [react()],
});
