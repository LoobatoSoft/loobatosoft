import { company } from "./site";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <p className="font-bold text-foreground">
            {company.nameKo} <span className="font-medium text-muted">{company.name}</span>
          </p>
          <p className="mt-1">© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
        </div>
        <div className="flex gap-6">
          <a href={`mailto:${company.email}`} className="hover:text-foreground">
            {company.email}
          </a>
          <a href={company.github} target="_blank" rel="noreferrer" className="hover:text-foreground">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
