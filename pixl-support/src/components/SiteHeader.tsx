import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Support" },
  { to: "/privacy", label: "Privacy Policy" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  // Close the menu when the route changes.
  useEffect(() => setOpen(false), [pathname]);

  // Escape closes the menu; the page behind it does not scroll while open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0A0A0A]/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3">
          <span className="font-brand text-3xl leading-none text-white">PIXL</span>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
            Support
          </span>
        </Link>

        {/* Hamburger, top right */}
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="rounded-full border border-white/15 p-2.5 text-white transition hover:border-[#E8A838] hover:text-[#E8A838]"
        >
          <Menu className="size-5" />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label="Menu">
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />
          <div className="absolute top-0 right-0 flex h-full w-72 max-w-[80vw] flex-col border-l border-white/10 bg-[#0A0A0A] p-6">
            <div className="flex items-center justify-between">
              <span className="font-brand text-3xl leading-none text-white">PIXL</span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="rounded-full border border-white/15 p-2 text-white transition hover:border-[#E8A838] hover:text-[#E8A838]"
              >
                <X className="size-5" />
              </button>
            </div>

            <nav className="mt-10 flex flex-col gap-2">
              {links.map((link) => {
                const active = pathname === link.to;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={
                      "rounded-xl px-4 py-3 font-display text-2xl transition " +
                      (active ? "bg-white/5 text-[#E8A838]" : "text-zinc-300 hover:bg-white/5 hover:text-white")
                    }
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <a
              href="mailto:support@onepixlatatime.com"
              className="mt-auto rounded-xl bg-[#E8A838] px-4 py-3 text-center font-semibold text-black transition hover:bg-[#F5C563]"
            >
              Email Support
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
