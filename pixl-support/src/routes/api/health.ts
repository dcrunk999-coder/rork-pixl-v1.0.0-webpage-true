import { createFileRoute } from "@tanstack/react-router";

// An API route: a plain HTTP endpoint at /api/health, for callers outside the app (webhooks, other clients).
// Code the app's own pages need on the server belongs in a server function (src/lib/*.functions.ts).
export const Route = createFileRoute("/api/health")({
  server: {
    handlers: {
      GET: () => Response.json({ ok: true }),
    },
  },
});
