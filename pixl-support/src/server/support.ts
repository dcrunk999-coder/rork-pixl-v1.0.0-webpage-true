import { z } from "zod";

import { emailFormSubmission } from "./email";
import type { SupportStore } from "./support-store";

// Plain logic so it can be reasoned about (and tested) without a Worker runtime.
export const supportSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(200),
  message: z.string().trim().min(1).max(5000),
});

export type SupportInput = z.infer<typeof supportSchema>;

/**
 * Validates one support message, stores it, then emails it to PIXL's owner.
 * The message is never lost: it is stored before the email is attempted, and
 * a failed email is resent by the SupportStore alarm.
 */
export async function processSupportMessage(
  store: DurableObjectNamespace<SupportStore>,
  input: unknown,
): Promise<{ ok: true } | { ok: false; error: string }> {
  const parsed = supportSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, error: "Please fill in your name, a valid email and a message." };
  }
  const stub = store.get(store.idFromName("support"));
  const { id } = await stub.add(parsed.data);
  const emailed = await emailFormSubmission("support", [
    { label: "Name", value: parsed.data.name },
    { label: "Email", value: parsed.data.email },
    { label: "Message", value: parsed.data.message },
  ]);
  if (emailed) await stub.markEmailed(id);
  return { ok: true };
}
