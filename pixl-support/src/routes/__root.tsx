import type { QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, HeadContent, Link, Outlet, Scripts, useRouter } from "@tanstack/react-router";
import type { ReactNode } from "react";

import { NotFound } from "@/components/NotFound";
import { Toaster } from "@/components/ui/sonner";
import { canonicalUrl, seo } from "@/lib/seo";
import { getSiteOrigin } from "@/lib/site.functions";

import appCss from "../index.css?url";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  // Runs once on the server; later navigations reuse it.
  loader: async () => ({ siteOrigin: await getSiteOrigin() }),
  staleTime: Infinity,
  // The site's defaults. A page's own head() replaces the tags it sets (seo() in src/lib/seo.ts). The canonical
  // address and og:url are written here for every page and never by a page.
  head: (ctx) => {
    const url = canonicalUrl(ctx);
    return {
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
        ...seo(ctx, { title: "PIXL Support" }).meta,
        { property: "og:site_name", content: "PIXL Support" },
        ...(url === undefined ? [] : [{ property: "og:url", content: url }]),
      ],
      links: [
        { rel: "stylesheet", href: appCss },
        { rel: "icon", type: "image/png", href: "/favicon.png" },
        { rel: "apple-touch-icon", href: "/icon.png" },
        ...(url === undefined ? [] : [{ rel: "canonical", href: url }]),
      ],
    };
  },
  component: RootComponent,
  notFoundComponent: NotFound,
  errorComponent: RootError,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
      <Toaster />
    </RootDocument>
  );
}

function RootError() {
  const router = useRouter();
  return (
    <RootDocument head={<ErrorHead />}>
      <div className="flex min-h-screen items-center justify-center bg-muted">
        <div className="px-6 text-center">
          <h1 className="mb-4 text-4xl font-bold">Something went wrong</h1>
          <p className="mb-4 text-xl text-muted-foreground">This page could not be shown. Please try again.</p>
          <div className="flex justify-center gap-4">
            <button
              type="button"
              onClick={() => void router.invalidate()}
              className="text-primary underline hover:text-primary/90"
            >
              Try again
            </button>
            <Link to="/" className="text-primary underline hover:text-primary/90">
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </RootDocument>
  );
}

// The error page's own head: the page's tags would still name its address after a render error in the browser.
function ErrorHead() {
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="noindex" />
      <title>Something went wrong</title>
      <link rel="stylesheet" href={appCss} />
      <link rel="icon" type="image/png" href="/favicon.png" />
    </>
  );
}

function RootDocument({ children, head = <HeadContent /> }: { children: ReactNode; head?: ReactNode }) {
  return (
    <html lang="en">
      <head>{head}</head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
