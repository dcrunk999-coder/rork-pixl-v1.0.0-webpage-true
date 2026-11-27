import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Camera, CreditCard, ShieldCheck, UserRound } from "lucide-react";
import type { ReactNode } from "react";

import { SiteHeader } from "@/components/SiteHeader";
import { SupportForm } from "@/components/SupportForm";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: (ctx) =>
    seo(ctx, {
      title: "PIXL Support",
      description:
        "Support for the PIXL app: accounts and sign-in, payments and refunds, PIXL Pro earnings, and privacy.",
    }),
  component: SupportPage,
});

const topics: { id: string; icon: typeof UserRound; title: ReactNode; body: ReactNode }[] = [
  {
    id: "account",
    icon: UserRound,
    title: "Account & Sign-In",
    body: (
      <>
        Sign in with Apple or Google from the PIXL app. To delete your account, open the app's
        Settings and tap <strong className="text-white">Delete Account</strong> — everything is
        removed, and Apple or Google access is cancelled with it.
      </>
    ),
  },
  {
    id: "payments",
    icon: CreditCard,
    title: "Payments & Refunds",
    body: (
      <>
        Bookings are charged through Stripe when a PIXL Pro accepts. If a Pro cancels, you are
        refunded in full. For anything else about a charge, email us with the date and amount.
      </>
    ),
  },
  {
    id: "earnings",
    icon: Camera,
    title: (
      <>
        <span className="font-brand text-[1.15em]">PIXL</span> Pro Earnings
      </>
    ),
    body: (
      <>
        Earnings collect in your PIXL Pro Studio balance and are cashed out to the bank account
        connected through Stripe. A cash out is only marked paid once the money reaches your bank.
      </>
    ),
  },
  {
    id: "privacy",
    icon: ShieldCheck,
    title: "Privacy & Your Data",
    body: (
      <>
        What PIXL collects, why, and how to have it removed is described in our{" "}
        <Link to="/privacy" className="text-[#E8A838] underline underline-offset-4">
          Privacy Policy
        </Link>
        . For a copy of your data or its deletion, email us.
      </>
    ),
  },
];

function SupportPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(60% 90% at 50% -10%, rgba(232,168,56,0.16), transparent 70%)",
            }}
          />
          <div className="relative mx-auto max-w-5xl px-6 pt-16 pb-16 text-center sm:pt-20">
            <img
              src="/images/pixl-icon-clear.png"
              alt="PIXL"
              width={96}
              height={96}
              className="mx-auto mb-8 h-24 w-24"
            />
            <p className="text-xs font-medium tracking-[0.3em] text-[#E8A838] uppercase">
              PIXL Support
            </p>
            <h1 className="mt-6 font-display text-5xl text-white sm:text-6xl">
              How can we help?
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-zinc-400">
              Questions about your account, a booking or a payout? We answer every email.
            </p>
            <a
              href="mailto:support@onepixlatatime.com"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#E8A838] px-8 py-4 text-lg font-semibold text-black transition hover:bg-[#F5C563]"
            >
              support@onepixlatatime.com
              <ArrowRight className="size-5" />
            </a>
            <p className="mt-4 text-sm text-zinc-600">
              Legal questions:{" "}
              <a href="mailto:legal@onepixlatatime.com" className="underline underline-offset-4">
                legal@onepixlatatime.com
              </a>
            </p>
          </div>
        </section>

        {/* Topics */}
        <section className="mx-auto max-w-5xl px-6 pb-16">
          <div className="grid gap-4 sm:grid-cols-2">
            {topics.map((topic) => (
              <div
                key={topic.id}
                className="rounded-2xl border border-white/10 bg-[#141414] p-6 transition hover:border-[#E8A838]/40"
              >
                <topic.icon className="size-6 text-[#E8A838]" />
                <h2 className="mt-4 font-display text-2xl text-white">{topic.title}</h2>
                <p className="mt-3 leading-relaxed text-zinc-400">{topic.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Message form */}
        <section className="mx-auto max-w-2xl px-6 pb-24">
          <div className="rounded-2xl border border-white/10 bg-[#141414] p-6 sm:p-8">
            <h2 className="font-display text-3xl text-white">Send Us A Message</h2>
            <p className="mt-2 text-zinc-400">
              Write here and it lands directly in the PIXL support inbox.
            </p>
            <div className="mt-6">
              <SupportForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-zinc-600 sm:flex-row">
          <p>© 2026 PIXL. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/" className="transition hover:text-[#E8A838]">
              Support
            </Link>
            <Link to="/privacy" className="transition hover:text-[#E8A838]">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
