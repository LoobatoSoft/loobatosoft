"use client";

export default function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="화면 테마 전환"
      className="cursor-pointer text-sm text-muted underline-offset-4 hover:text-accent hover:underline"
    >
      <span className="dark:hidden">어둡게</span>
      <span className="hidden dark:inline">밝게</span>
    </button>
  );
}
