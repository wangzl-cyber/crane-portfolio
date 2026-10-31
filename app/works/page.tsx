import type { Metadata } from "next";
import WorksGallery from "@/components/WorksGallery";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "作品",
  description: site.worksDescription,
};

export default function WorksPage() {
  return (
    <>
      <header className="border-b border-line">
        <div className="page-wrap py-16 md:py-28">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between md:gap-16">
            <div>
              <p className="eyebrow">{site.worksTitleEn}</p>
              <h1 className="mt-6 font-display text-[clamp(4.5rem,12vw,10rem)] leading-[0.86] tracking-[-0.04em]">
                {site.worksTitle}
              </h1>
            </div>
            <p className="max-w-md text-sm leading-7 text-muted md:pb-3">
              {site.worksDescription}
            </p>
          </div>
        </div>
      </header>
      <WorksGallery />
    </>
  );
}
