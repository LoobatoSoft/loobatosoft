# 루바토소프트 (LoobatoSoft) 홈페이지

Next.js(App Router) + Tailwind CSS 기반 회사 홈페이지입니다. 폰트는 [Interop](https://github.com/jhaemin/Interop)(SIL OFL, `src/fonts/interop`)을 사용합니다. 정적 export(`out/`)로 빌드되어 GitHub Pages에 배포됩니다.

## 개발

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # out/ 디렉토리에 정적 파일 생성
```

## 배포

`main` 브랜치에 푸시하면 `.github/workflows/deploy.yml`이 빌드 후 GitHub Pages에 배포합니다.

- 저장소 Settings → Pages → **Source: GitHub Actions** 로 설정해야 합니다.
- 주소: https://www.loobatosoft.com (커스텀 도메인, `public/CNAME`)
- basePath는 Actions에서 자동 설정됩니다.

## 구조

- `src/app/page.tsx` — 메인 페이지
- `src/app/subway/page.tsx` — 실시간지하철 소개 페이지
- `src/components/site.ts` — 회사명, 이메일, 스토어 링크 등 공통 정보
- `src/components/Header.tsx`, `Footer.tsx` — 공통 레이아웃

## 실시간지하철 이미지

`public/images/silsiganmetro/`에 넣으면 빌드할 때 자동으로 반영됩니다.

- `icon.png` — 앱 아이콘 (정사각형, 512×512 이상 권장)
- `screenshots/` — 앱 스크린샷. 파일 이름 순서대로 표시됩니다 (`01.png`, `02.png`, …). png / jpg / webp 가능.
