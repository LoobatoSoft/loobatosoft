# 루바토소프트 (LoobatoSoft) 홈페이지

Next.js(App Router) + Tailwind CSS 기반 회사 홈페이지입니다. 정적 export(`out/`)로 빌드되어 GitHub Pages에 배포됩니다.

## 개발

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # out/ 디렉토리에 정적 파일 생성
```

## 배포

`main` 브랜치에 푸시하면 `.github/workflows/deploy.yml`이 빌드 후 GitHub Pages에 배포합니다.

- 저장소 Settings → Pages → **Source: GitHub Actions** 로 설정해야 합니다.
- 주소: https://loobatosoft.github.io/loobatosoft/
- basePath는 Actions에서 자동 설정됩니다. 커스텀 도메인을 쓰면 별도 수정이 필요 없습니다.

## 구조

- `src/app/page.tsx` — 메인 페이지 (회사소개 / 서비스 / 핵심가치 / 문의)
- `src/components/site.ts` — 회사명, 이메일, 메뉴 등 공통 정보
- `src/components/Header.tsx`, `Footer.tsx` — 공통 레이아웃
