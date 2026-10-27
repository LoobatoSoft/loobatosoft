import { company } from "./site";

export default function Footer() {
  return (
    <footer className="border-t border-rule">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-muted sm:flex-row sm:justify-between sm:px-6">
        <p>
          © {new Date().getFullYear()} {company.nameKo} ({company.name})
        </p>
        <a href={`mailto:${company.email}`} className="hover:text-foreground">
          {company.email}
        </a>
      </div>
    </footer>
  );
}
