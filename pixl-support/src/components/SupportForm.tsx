import { useState } from "react";

const fieldClass =
  "w-full rounded-xl border border-white/10 bg-[#141414] px-4 py-3 text-white placeholder:text-zinc-600 outline-none transition focus:border-[#E8A838]";

export function SupportForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setError(null);
    try {
      const res = await fetch("/api/support", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = (await res.json()) as { ok: boolean; error?: string };
      if (res.ok && data.ok) {
        setStatus("sent");
      } else {
        setStatus("error");
        setError(data.error ?? "The message could not be sent. Please email us directly instead.");
      }
    } catch {
      setStatus("error");
      setError("The message could not be sent. Please email us directly instead.");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-[#E8A838]/40 bg-[#141414] p-8 text-center">
        <p className="font-display text-2xl text-[#F5C563]">Message sent</p>
        <p className="mt-3 text-zinc-400">
          Thank you, {name.split(" ")[0] || "friend"} — we'll reply to {email} as soon as we can.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          type="text"
          required
          maxLength={100}
          aria-label="Your name"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={fieldClass}
        />
        <input
          type="email"
          required
          maxLength={200}
          aria-label="Your email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={fieldClass}
        />
      </div>
      <textarea
        required
        maxLength={5000}
        rows={5}
        aria-label="Your message"
        placeholder="How can we help?"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className={fieldClass}
      />
      {error && <p className="text-sm text-[#FF5252]">{error}</p>}
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full bg-[#E8A838] px-8 py-4 font-semibold text-black transition hover:bg-[#F5C563] disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
