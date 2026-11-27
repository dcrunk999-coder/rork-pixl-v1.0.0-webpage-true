import { env } from "cloudflare:workers";

/**
 * Sends one form submission to PIXL's owner through Rork's email relay.
 * Returns whether the email was accepted — a failure here never fails the
 * submit itself; the SupportStore alarm resends anything left unsent.
 */
export async function emailFormSubmission(
  form: string,
  fields: { label: string; value: string }[],
): Promise<boolean> {
  const base = env.EXPO_PUBLIC_TOOLKIT_URL;
  const key = env.EXPO_PUBLIC_RORK_TOOLKIT_SECRET_KEY;
  if (typeof base !== "string" || base === "" || typeof key !== "string" || key === "") {
    console.log("[support] email relay not configured");
    return false;
  }
  try {
    const res = await fetch(`${base}/v2/email/form-submission`, {
      method: "POST",
      headers: { authorization: `Bearer ${key}`, "content-type": "application/json" },
      body: JSON.stringify({ form, fields }),
    });
    if (!res.ok) {
      console.log("[support] email relay answered", res.status);
      return false;
    }
    return true;
  } catch (e) {
    console.log("[support] email relay unreachable:", e instanceof Error ? e.message : e);
    return false;
  }
}
