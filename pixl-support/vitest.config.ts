import path from "path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

// Tests run without the app's Vite config: its Cloudflare and TanStack Start plugins build the Worker, which a
// component or unit test does not need.
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
    exclude: ["src/**/*.browser.{test,spec}.{ts,tsx}"],
  },
  resolve: {
    alias: { "@": path.resolve(import.meta.dirname, "./src") },
  },
});
