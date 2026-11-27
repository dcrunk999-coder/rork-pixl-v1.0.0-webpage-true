import { DurableObject } from "cloudflare:workers";

import { emailFormSubmission } from "./email";

/**
 * Keeps every support message, keyed row by row. A message is stored first
 * and only then emailed; if the email cannot be sent, the row keeps its
 * `emailed = 0` flag and the alarm resends it until it goes through.
 */
export class SupportStore extends DurableObject {
  private sql = this.ctx.storage.sql;

  constructor(ctx: DurableObjectState, env: Cloudflare.Env) {
    super(ctx, env);
    this.sql.exec(`
      create table if not exists submissions (
        id integer primary key autoincrement,
        name text not null,
        email text not null,
        message text not null,
        emailed integer not null default 0,
        created_at text not null default (datetime('now'))
      )
    `);
  }

  /** Stores one submission and returns its id. */
  async add(data: { name: string; email: string; message: string }): Promise<{ id: number }> {
    this.sql.exec(
      "insert into submissions (name, email, message) values (?, ?, ?)",
      data.name,
      data.email,
      data.message,
    );
    const rows = this.sql
      .exec<{ id: number }>("select id from submissions order by id desc limit 1")
      .toArray();
    // Backup: even if this request dies before emailing, the alarm retries.
    await this.ctx.storage.setAlarm(Date.now() + 5 * 60_000);
    return { id: rows[0]?.id ?? -1 };
  }

  async markEmailed(id: number): Promise<{ done: boolean }> {
    this.sql.exec("update submissions set emailed = 1 where id = ?", id);
    return { done: true };
  }

  /** Every stored message that has not been emailed yet, oldest first. */
  async unsent(): Promise<{ id: number; name: string; email: string; message: string }[]> {
    return this.sql
      .exec<{ id: number; name: string; email: string; message: string }>(
        "select id, name, email, message from submissions where emailed = 0 order by id asc",
      )
      .toArray();
  }

  /** Resends anything not yet emailed (a row is marked only after success). */
  async alarm(): Promise<void> {
    for (const row of await this.unsent()) {
      const sent = await emailFormSubmission("support", [
        { label: "Name", value: row.name },
        { label: "Email", value: row.email },
        { label: "Message", value: row.message },
      ]);
      if (sent) await this.markEmailed(row.id);
      // A failure leaves the row unsent; the alarm is re-set below.
    }
    if ((await this.unsent()).length > 0) {
      await this.ctx.storage.setAlarm(Date.now() + 15 * 60_000);
    }
  }
}
