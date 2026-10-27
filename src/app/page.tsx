import { company } from "@/components/site";

const work = [
  {
    title: "웹 서비스",
    description:
      "사내 관리 도구부터 고객이 매일 쓰는 서비스까지. 기획 단계에서 같이 화면을 그리고, 출시 뒤 운영까지 맡습니다.",
  },
  {
    title: "모바일 앱",
    description: "iOS와 Android. 네이티브가 필요한지, 크로스플랫폼으로 충분한지부터 솔직하게 말씀드립니다.",
  },
  {
    title: "클라우드와 배포",
    description: "서버 구성, 배포 자동화, 모니터링. 트래픽이 늘어도 밤에 전화가 오지 않도록 만듭니다.",
  },
  {
    title: "기술 자문",
    description: "이미 돌아가는 시스템을 들여다보고, 무엇을 고치고 무엇을 그대로 둘지 정리해 드립니다.",
  },
];

const principles = [
  {
    title: "먼저 듣습니다",
    description:
      "견적서보다 질문을 먼저 드립니다. 무엇을 만들지보다 왜 만드는지를 이해해야 맞는 속도가 나옵니다.",
  },
  {
    title: "작게 보여드립니다",
    description: "몇 달 뒤 완성품 대신, 매주 실제로 눌러볼 수 있는 결과물을 공유하고 방향을 함께 고칩니다.",
  },
  {
    title: "끝까지 책임집니다",
    description: "출시는 시작입니다. 직접 만든 코드는 직접 유지보수하고, 넘겨드릴 때는 문서까지 함께 드립니다.",
  },
];

function Staff() {
  // Five-line music staff, drawn edge to edge under the hero.
  return (
    <div aria-hidden className="space-y-[7px]">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="h-px bg-rule" />
      ))}
    </div>
  );
}

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="scroll-mt-8 text-sm font-bold text-accent">
      {children}
    </h2>
  );
}

export default function Home() {
  return (
    <div id="top">
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-20 sm:px-6 sm:pt-28">
        <p className="text-sm italic text-muted">tempo rubato</p>
        <h1 className="mt-4 text-[2.6rem] font-extrabold leading-[1.15] tracking-tight sm:text-7xl">
          정해진 박자보다,
          <br />
          맞는 박자로.
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
          {company.nameKo}는 웹과 모바일 소프트웨어를 만드는 작은 팀입니다. 모든 프로젝트를 같은 공식으로
          찍어내지 않고, 회사마다 다른 사정과 속도에 맞춰 일합니다.
        </p>
        <p className="mt-8">
          <a
            href="#contact"
            className="font-medium underline decoration-accent decoration-2 underline-offset-[6px] hover:text-accent"
          >
            프로젝트 이야기하기 →
          </a>
        </p>
      </section>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Staff />
      </div>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 md:grid-cols-[1fr_2fr]">
        <SectionHeading id="about">회사</SectionHeading>
        <div>
          <dl className="border-l-2 border-foreground pl-5">
            <dt className="text-2xl font-bold">
              루바토 <span className="font-normal text-muted">rubato</span>
            </dt>
            <dd className="mt-2 leading-relaxed text-muted">
              이탈리아어로 &lsquo;도둑맞은 시간&rsquo;. 연주자가 곡의 흐름에 맞게 어떤 음은 늘이고 어떤 음은
              당겨, 전체 길이는 지키면서 표현을 살리는 연주법.
            </dd>
          </dl>
          <p className="mt-10 text-lg leading-relaxed">
            소프트웨어도 비슷하다고 생각합니다. 일정과 예산이라는 큰 박자는 지키되, 그 안에서 어디에 시간을
            더 쓰고 어디를 빠르게 지나갈지는 프로젝트마다 달라야 합니다. 저희는 그 판단을 잘하는 팀이
            되고 싶습니다.
          </p>
        </div>
      </section>

      <section className="border-t border-rule">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 md:grid-cols-[1fr_2fr]">
          <SectionHeading id="work">하는 일</SectionHeading>
          <ul className="divide-y divide-rule border-y border-rule">
            {work.map((item) => (
              <li key={item.title} className="grid gap-2 py-6 sm:grid-cols-[10rem_1fr] sm:gap-8">
                <h3 className="font-bold">{item.title}</h3>
                <p className="leading-relaxed text-muted">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-rule">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 md:grid-cols-[1fr_2fr]">
          <SectionHeading id="how">일하는 방식</SectionHeading>
          <div className="space-y-10">
            {principles.map((item) => (
              <div key={item.title}>
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="mt-2 max-w-xl leading-relaxed text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-rule">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 md:grid-cols-[1fr_2fr]">
          <SectionHeading id="contact">연락</SectionHeading>
          <div>
            <p className="text-lg leading-relaxed text-muted">
              아직 정리되지 않은 아이디어여도 괜찮습니다. 메일 주시면 영업일 기준 이틀 안에 답장드립니다.
            </p>
            <a
              href={`mailto:${company.email}`}
              className="mt-6 inline-block break-all text-3xl font-bold tracking-tight underline decoration-rule decoration-2 underline-offset-8 hover:decoration-accent sm:text-5xl"
            >
              {company.email}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
