import Link from "next/link";
import { company, subwayApp } from "./site";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="border-b border-rule">
      <div className="mx-auto flex max-w-6xl items-baseline justify-between gap-6 px-4 py-5 sm:px-6">
        <Link href="/" className="text-lg font-bold tracking-tight">
          {company.nameKo}
          <span className="ml-2 hidden text-sm font-normal text-muted sm:inline">{company.name}</span>
        </Link>
        <div className="flex items-baseline gap-7 text-sm">
          <Link href={subwayApp.href} className="underline-offset-4 hover:text-accent hover:underline">
            {subwayApp.name}
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
