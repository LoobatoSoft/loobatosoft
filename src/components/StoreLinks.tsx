import { subwayApp } from "./site";

const linkClass =
  "inline-block border border-foreground px-5 py-3 text-sm font-medium transition-colors hover:bg-foreground hover:text-background";

export default function StoreLinks() {
  return (
    <div className="flex flex-wrap gap-3">
      <a href={subwayApp.appStore} target="_blank" rel="noreferrer" className={linkClass}>
        App Store에서 받기
      </a>
      <a href={subwayApp.playStore} target="_blank" rel="noreferrer" className={linkClass}>
        Google Play에서 받기
      </a>
    </div>
  );
}
