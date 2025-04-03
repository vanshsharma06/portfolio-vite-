import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  theme: {
    extend: {
      fontFamily: {
        ballu: ["Ballu-Bhai", "sans-serif"],
      },
    },
  },
  server: {
    host: "0.0.0.0",
    port: 3000,
    open: true,
  },
});
