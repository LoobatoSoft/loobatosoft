import type { Metadata } from "next";
import PolicyPage, { readPolicy } from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "이용 약관 | 실시간지하철",
};

export default function SilsiganMetroService() {
  return <PolicyPage app="실시간지하철" title="이용 약관" html={readPolicy("silsiganmetro/service.html")} />;
}
