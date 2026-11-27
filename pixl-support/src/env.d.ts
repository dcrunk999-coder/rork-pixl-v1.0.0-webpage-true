import type { SupportStore } from "./server/support-store";

// The Worker's bindings from wrangler.jsonc. Server code reads them with `import { env } from "cloudflare:workers"`.
declare global {
  namespace Cloudflare {
    interface Env {
      ASSETS: Fetcher;
      SUPPORT_STORE: DurableObjectNamespace<SupportStore>;
      EXPO_PUBLIC_TOOLKIT_URL: string;
      EXPO_PUBLIC_RORK_TOOLKIT_SECRET_KEY: string;
    }
  }
}
