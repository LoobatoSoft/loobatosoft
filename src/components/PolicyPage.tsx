import { readFileSync } from "node:fs";
import path from "node:path";

// Policy text lives as plain HTML fragments under src/content and is read at build time (static export).
export function readPolicy(file: string) {
  return readFileSync(path.join(process.cwd(), "src/content", file), "utf8");
}

export default function PolicyPage({ title, app, html }: { title: string; app: string; html: string }) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="text-sm font-bold text-accent">{app}</p>
      <h1 className="mt-2 text-3xl font-extrabold tracking-tight">{title}</h1>
      <div className="mt-6 h-px bg-rule" />
      <div
        className="text-[15px] leading-7 [&_em]:not-italic [&_em]:font-bold [&_h3]:mt-10 [&_h3]:text-lg [&_h3]:font-bold [&_p]:mt-3 [&_p]:text-muted"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </article>
  );
}
