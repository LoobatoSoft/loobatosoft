import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Interop (Inter + Noto Sans KR), SIL OFL — https://github.com/jhaemin/Interop
// Each weight is ~1MB, so skip preloading and let text render with the fallback first.
const interop = localFont({
  variable: "--font-interop",
  src: [
    { path: "../fonts/interop/Interop-Regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/interop/Interop-Medium.woff2", weight: "500", style: "normal" },
    { path: "../fonts/interop/Interop-Bold.woff2", weight: "700", style: "normal" },
    { path: "../fonts/interop/Interop-ExtraBold.woff2", weight: "800", style: "normal" },
  ],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "루바토소프트 | LoobatoSoft",
  description:
    "루바토소프트(LoobatoSoft)는 웹·모바일·클라우드 소프트웨어를 설계하고 만드는 소프트웨어 회사입니다.",
};

// Runs before paint so the saved (or system) theme is applied without a flash.
const themeScript = `(() => {
  const root = document.documentElement;
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  let saved = null;
  try { saved = localStorage.getItem("theme"); } catch {}
  root.dataset.theme = saved === "light" || saved === "dark" ? saved : media.matches ? "dark" : "light";
  media.addEventListener("change", (e) => {
    let stored = null;
    try { stored = localStorage.getItem("theme"); } catch {}
    if (!stored) root.dataset.theme = e.matches ? "dark" : "light";
  });
})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ko"
      suppressHydrationWarning
      className={`${interop.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
