import type { Metadata } from "next";
import StoreLinks from "@/components/StoreLinks";
import { subwayApp } from "@/components/site";
import { getSubwayIcon, getSubwayScreenshots } from "@/components/subwayImages";

export const metadata: Metadata = {
  title: `${subwayApp.name} | 루바토소프트`,
  description: "수도권 지하철 열차 위치를 목록으로 한눈에 보는 앱, 실시간지하철.",
};

const features = [
  {
    title: "열차 위치를 목록으로",
    description: "노선도 대신 역 목록 위에 열차가 지금 어디쯤 있는지 보여줍니다. 수도권 지하철을 지원합니다.",
  },
  {
    title: "급행과 일반 구분",
    description: "1호선과 9호선은 급행과 일반 열차를 나눠 표시해, 한 역에서 두 열차를 함께 확인할 수 있습니다.",
  },
  {
    title: "행선지·열차번호·운행 상태",
    description: "열차마다 어디까지 가는지, 몇 번 열차인지, 도착·출발 같은 현재 상태를 함께 표시합니다.",
  },
  {
    title: "모아보기",
    description: "자주 타는 역을 고정해 두고 앱을 열자마자 바로 확인할 수 있습니다.",
  },
];

export default function SubwayPage() {
  const icon = getSubwayIcon();
  const screenshots = getSubwayScreenshots();

  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-16 sm:px-6 sm:pt-24">
        {icon && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={icon} alt={`${subwayApp.name} 아이콘`} width={96} height={96} className="mb-8 h-24 w-24 rounded-[22%]" />
        )}
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl">{subwayApp.name}</h1>
        <p className="mt-5 text-xl text-muted">{subwayApp.tagline}</p>
        <div className="mt-10">
          <StoreLinks />
        </div>
      </section>

      {screenshots.length > 0 && (
        <section className="border-t border-rule">
          <div className="mx-auto max-w-6xl py-12">
            <ul className="flex snap-x gap-4 overflow-x-auto px-4 pb-4 sm:px-6">
              {screenshots.map((src, i) => (
                <li key={src} className="shrink-0 snap-start">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt={`${subwayApp.name} 화면 ${i + 1}`}
                    loading="lazy"
                    className="h-[480px] w-auto border border-rule sm:h-[560px]"
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="border-t border-rule">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-[1fr_2fr]">
          <h2 className="text-sm font-bold text-accent">기능</h2>
          <ul className="divide-y divide-rule border-y border-rule">
            {features.map((item) => (
              <li key={item.title} className="grid gap-2 py-6 sm:grid-cols-[14rem_1fr] sm:gap-8">
                <h3 className="font-bold">{item.title}</h3>
                <p className="leading-relaxed text-muted">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-rule">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-[1fr_2fr]">
          <h2 className="text-sm font-bold text-accent">안내</h2>
          <ul className="list-disc space-y-2 pl-5 leading-relaxed text-muted">
            <li>1호선 용산급행과 경강선 구간은 제공하지 않습니다.</li>
            <li>iPhone·iPad(iOS 16 이상)와 Android에서 사용할 수 있습니다.</li>
            <li>앱 안에 광고가 포함되어 있습니다.</li>
          </ul>
        </div>
      </section>
    </>
  );
}
