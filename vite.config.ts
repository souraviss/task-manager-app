import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  base: "/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  preview: {
    port: 9000,
    strictPort: true,
   },
   server: {
    port: 9000,
    strictPort: true,
    host: true,
    origin: "http://0.0.0.0:9000",
   },
})
