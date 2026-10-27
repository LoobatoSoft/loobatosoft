import type { Metadata } from "next";
import PolicyPage, { readPolicy } from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "개인정보처리방침 | 실시간지하철",
};

export default function SilsiganMetroPrivacy() {
  return <PolicyPage app="실시간지하철" title="개인정보처리방침" html={readPolicy("silsiganmetro/privacy.html")} />;
}
