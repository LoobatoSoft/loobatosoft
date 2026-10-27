import { company, navItems } from "./site";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="border-b border-rule">
      <div className="mx-auto flex max-w-6xl items-baseline justify-between gap-6 px-4 py-5 sm:px-6">
        <a href="#top" className="text-lg font-bold tracking-tight">
          {company.nameKo}
          <span className="ml-2 text-sm font-normal text-muted">{company.name}</span>
        </a>
        <div className="flex items-baseline gap-7">
          <nav className="hidden gap-7 text-sm sm:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="underline-offset-4 hover:text-accent hover:underline"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
