import { createFileRoute } from "@tanstack/react-router";

import { env } from "cloudflare:workers";

import { processSupportMessage } from "@/server/support";

// A public HTTP endpoint at /api/support: the support form posts here, and
// outside callers may too. Validation, storage and emailing live in
// src/server/support.ts.
export const Route = createFileRoute("/api/support")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let body: unknown;
        try {
          body = await request.json();
        } catch {
          return Response.json({ ok: false, error: "Invalid JSON body." }, { status: 400 });
        }
        const result = await processSupportMessage(env.SUPPORT_STORE, body);
        return Response.json(result, { status: result.ok ? 200 : 400 });
      },
    },
  },
});
