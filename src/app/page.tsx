import { company } from "@/components/site";

const services = [
  {
    title: "웹 서비스 개발",
    description: "기획부터 디자인, 프론트엔드·백엔드 개발과 운영까지 웹 서비스 전 과정을 함께합니다.",
    icon: "◎",
  },
  {
    title: "모바일 앱 개발",
    description: "iOS·Android 환경에서 빠르고 안정적인 사용자 경험을 제공하는 앱을 만듭니다.",
    icon: "▢",
  },
  {
    title: "클라우드 & 인프라",
    description: "확장 가능한 클라우드 아키텍처와 자동화된 배포 환경을 설계하고 구축합니다.",
    icon: "☁",
  },
  {
    title: "기술 컨설팅",
    description: "비즈니스 목표에 맞는 기술 스택 선정과 시스템 개선 방향을 제시합니다.",
    icon: "✦",
  },
];

const values = [
  {
    title: "Rubato",
    subtitle: "유연함",
    description:
      "음악의 루바토처럼, 정해진 박자에 얽매이지 않고 고객과 프로젝트의 흐름에 맞춰 유연하게 움직입니다.",
  },
  {
    title: "Craft",
    subtitle: "완성도",
    description: "보이지 않는 코드 한 줄까지 신경 쓰며, 오래 쓸 수 있는 소프트웨어를 만듭니다.",
  },
  {
    title: "Partnership",
    subtitle: "동반자",
    description: "단순한 외주가 아닌, 고객의 성장을 함께 고민하는 기술 파트너가 되겠습니다.",
  },
];

export default function Home() {
  return (
    <div id="top">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,var(--accent-soft),transparent)]" />
        <div className="mx-auto max-w-6xl px-4 pb-24 pt-24 sm:px-6 sm:pt-32">
          <p className="mb-6 inline-flex rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted">
            {company.nameKo} · {company.name}
          </p>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
            비즈니스의 리듬에 맞춘
            <br />
            <span className="text-accent">소프트웨어</span>를 만듭니다
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            루바토소프트는 아이디어를 실제로 동작하는 제품으로 바꾸는 소프트웨어 회사입니다.
            웹, 모바일, 클라우드 전반에서 고객과 함께 최선의 해답을 찾습니다.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-full bg-accent px-6 py-3 font-medium text-white transition-opacity hover:opacity-90"
            >
              프로젝트 문의
            </a>
            <a
              href="#services"
              className="rounded-full border border-border px-6 py-3 font-medium transition-colors hover:bg-surface"
            >
              서비스 살펴보기
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-16 border-t border-border bg-surface">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-24 sm:px-6 md:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-accent">About</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">회사소개</h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-muted">
            <p>
              <strong className="text-foreground">루바토(Rubato)</strong>는 연주자가 곡의 감정에
              맞게 템포를 자유롭게 조절하는 음악 표현입니다.
            </p>
            <p>
              루바토소프트는 획일적인 방식 대신, 각 고객의 상황과 목표에 맞춘 속도와 방법으로
              소프트웨어를 설계하고 개발합니다. 작은 스타트업의 MVP부터 기업의 핵심 시스템까지,
              필요한 순간에 필요한 기술을 제공합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="scroll-mt-16 border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <p className="text-sm font-bold uppercase tracking-widest text-accent">Services</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">서비스</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-border p-6 transition-shadow hover:shadow-lg"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent-soft text-xl text-accent">
                  {service.icon}
                </div>
                <h3 className="mt-5 text-lg font-bold">{service.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section id="values" className="scroll-mt-16 border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <p className="text-sm font-bold uppercase tracking-widest text-accent">Values</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">핵심가치</h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {values.map((value, i) => (
              <div key={value.title}>
                <p className="font-mono text-sm text-muted">0{i + 1}</p>
                <h3 className="mt-2 text-2xl font-extrabold">
                  {value.title} <span className="text-base font-medium text-accent">{value.subtitle}</span>
                </h3>
                <p className="mt-3 leading-relaxed text-muted">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-16 border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <div className="rounded-3xl bg-foreground px-6 py-16 text-center text-background sm:px-12">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              함께 만들 프로젝트가 있으신가요?
            </h2>
            <p className="mx-auto mt-4 max-w-xl opacity-75">
              아이디어 단계여도 괜찮습니다. 편하게 연락 주시면 빠르게 답변드리겠습니다.
            </p>
            <a
              href={`mailto:${company.email}`}
              className="mt-8 inline-block rounded-full bg-accent px-8 py-3 font-medium text-white transition-opacity hover:opacity-90"
            >
              {company.email}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
