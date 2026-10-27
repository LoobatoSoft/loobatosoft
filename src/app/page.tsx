import Link from "next/link";
import { company, subwayApp } from "@/components/site";
import { getSubwayIcon } from "@/components/subwayImages";

export default function Home() {
  const icon = getSubwayIcon();

  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-20 sm:px-6 sm:pt-28">
        <p className="text-sm italic text-muted">tempo rubato</p>
        <h1 className="mt-4 text-[2.6rem] font-extrabold leading-[1.15] tracking-tight sm:text-7xl">
          정해진 박자보다,
          <br />
          맞는 박자로.
        </h1>
        <p className="mt-8 text-lg text-muted">{company.nameKo}는 매일 쓰는 앱을 만듭니다.</p>
      </section>

      <section className="border-t border-rule">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-sm font-bold text-accent">앱</h2>
          <Link
            href={subwayApp.href}
            className="group mt-6 flex items-center gap-5 border-y border-rule py-6"
          >
            {icon && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={icon} alt="" width={64} height={64} className="h-16 w-16 rounded-[22%]" />
            )}
            <div className="flex-1">
              <p className="text-2xl font-bold group-hover:text-accent">{subwayApp.name}</p>
              <p className="mt-1 text-muted">{subwayApp.tagline}</p>
            </div>
            <span aria-hidden className="text-2xl text-muted group-hover:text-accent">
              →
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
