import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/SiteHeader";
import { LegalDocView } from "@/lib/legal-view";
import { PRIVACY_POLICY } from "@/lib/privacy-policy";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/privacy")({
  head: (ctx) =>
    seo(ctx, {
      title: "Privacy Policy — PIXL",
      description:
        "How PIXL collects, uses, shares, stores and protects personal information in the PIXL app and related services.",
    }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <SiteHeader />
      <main className="pt-12">
        <LegalDocView doc={PRIVACY_POLICY} />
      </main>
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-zinc-600 sm:flex-row">
          <p>© 2026 PIXL. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/" className="transition hover:text-[#E8A838]">
              Support
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
