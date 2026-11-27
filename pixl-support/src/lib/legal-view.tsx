import type { LegalBlock, LegalDocument } from "@/lib/privacy-policy";

/** Renders inline `**bold**` spans used in the legal text. */
function inline(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i} className="font-semibold text-white">
        {part.slice(2, -2)}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}

export function LegalBlocks({ blocks }: { blocks: LegalBlock[] }) {
  return (
    <div className="space-y-4">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "sub":
            return (
              <h3 key={i} className="pt-2 font-display text-xl text-white">
                {block.text}
              </h3>
            );
          case "list":
            return (
              <ul key={i} className="list-disc space-y-2 pl-6 text-zinc-300">
                {block.items.map((item, j) => (
                  <li key={j}>{inline(item)}</li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="list-decimal space-y-2 pl-6 text-zinc-300">
                {block.items.map((item, j) => (
                  <li key={j}>{inline(item)}</li>
                ))}
              </ol>
            );
          case "strong":
            return (
              <p key={i} className="font-semibold text-white">
                {inline(block.text)}
              </p>
            );
          case "em":
            return (
              <p key={i} className="italic text-zinc-300">
                {inline(block.text)}
              </p>
            );
          default:
            return (
              <p key={i} className="text-zinc-300">
                {inline(block.text)}
              </p>
            );
        }
      })}
    </div>
  );
}

export function LegalDocView({ doc }: { doc: LegalDocument }) {
  return (
    <article className="mx-auto max-w-3xl px-6 pb-24">
      <header className="border-b border-white/10 pb-8">
        <h1 className="font-display text-4xl text-white sm:text-5xl">{doc.title}</h1>
        {(doc.lastUpdated || doc.effectiveDate) && (
          <p className="mt-4 text-sm text-zinc-500">
            {doc.effectiveDate ? <>Effective {doc.effectiveDate}</> : null}
            {doc.lastUpdated ? <> · Last updated {doc.lastUpdated}</> : null}
          </p>
        )}
      </header>

      <div className="mt-8 space-y-10">
        <LegalBlocks blocks={doc.intro} />
        {doc.sections.map((section, i) => (
          <section key={i} aria-label={section.heading}>
            <h2 className="mb-4 font-display text-2xl text-[#F5C563]">
              <span className="mr-3 text-zinc-600">{String(i + 1).padStart(2, "0")}</span>
              {section.heading}
            </h2>
            <LegalBlocks blocks={section.blocks} />
          </section>
        ))}
      </div>
    </article>
  );
}
