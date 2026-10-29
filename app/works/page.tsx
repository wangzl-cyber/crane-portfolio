import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import WorksGallery from "@/components/WorksGallery";

export const metadata: Metadata = {
  title: "作品",
  description:
    "摄影、装置雕塑、纪录片影像、3D 建模与交互项目。围绕黑颈鹤与湿地生态展开的跨媒介实践。",
};

export default function WorksPage() {
  return (
    <>
      <PageHeader
        index="Works / 03"
        title="作品"
        titleEn="Selected works, 2024—2026"
        description="围绕黑颈鹤与湿地生态展开的跨媒介实践。点击作品卡片查看完整项目与图像。"
      />
      <WorksGallery />
    </>
  );
}
