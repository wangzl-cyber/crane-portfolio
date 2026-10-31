import type { Metadata } from "next";
import Link from "next/link";
import about from "@/data/about.json";
import PageHeader from "@/components/PageHeader";
import { cv } from "@/data/cv";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "关于",
  description: `${site.name}，${site.role}。以摄影为起点，在影像、空间与跨媒介实践之间工作。`,
};

// 身份信息可在 data/about.json 或 /admin/ 后台修改。
const identity = [
  { label: "身份 / Identity", value: site.role },
  { label: "教育 / Education", value: about.education },
  { label: "关注 / Focus", value: about.focus },
  { label: "现居 / Based in", value: about.basedIn },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        index="About / 02"
        title={about.title}
        titleEn={about.titleEn}
        description={about.description}
      />

      <section className="page-wrap grid gap-12 py-16 md:grid-cols-12 md:gap-16 md:py-24">
        <div className="md:col-span-5">
          <figure>
            {/* 图片替换位置：将肖像图放入 public/images/，替换下面的 src */}
            <div className="aspect-[3/4] overflow-hidden bg-mist">
              <img
                src={about.portrait}
                alt={`${site.name} 肖像`}
                className="h-full w-full object-cover"
              />
            </div>
            <figcaption className="mt-3 flex items-center justify-between text-[10px] uppercase tracking-[0.16em] text-muted">
              <span>{about.portraitCaption}</span>
              <span>Portrait</span>
            </figcaption>
          </figure>
        </div>

        <div className="md:col-span-7">
          <p className="font-display text-3xl leading-[1.5] tracking-[-0.01em] md:text-4xl">
            {about.intro}
          </p>

          <div className="mt-8 space-y-5 text-sm leading-7 text-muted">
            {about.paragraphs.map((paragraph, index) => (
              <p key={`about-paragraph-${index}`}>{paragraph}</p>
            ))}
          </div>

          <dl className="mt-12 grid gap-x-8 gap-y-6 border-t border-line pt-8 sm:grid-cols-2">
            {identity.map((item) => (
              <div key={item.label}>
                <dt className="eyebrow">{item.label}</dt>
                <dd className="mt-2 text-sm leading-6">{item.value}</dd>
              </div>
            ))}
          </dl>

          <Link href="/works/" className="text-link mt-10">
            查看作品 <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="border-y border-line bg-mist/40">
        <div className="page-wrap grid gap-12 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-3">
            <p className="eyebrow">Recognition</p>
            <h2 className="mt-3 font-display text-3xl tracking-[-0.02em]">
              获奖
            </h2>
          </div>

          <div className="md:col-span-8 md:col-start-5">
            <ul className="border-t border-ink/15">
              {cv.awards.map((award) => (
                <li
                  key={`${award.period}-${award.title}`}
                  className="grid gap-2 border-b border-ink/15 py-5 sm:grid-cols-[100px_1fr] sm:gap-6"
                >
                  <span className="text-[10px] tracking-[0.16em] text-muted">
                    {award.period}
                  </span>
                  <div>
                    <p className="text-sm leading-6">{award.title}</p>
                    {award.detail ? (
                      <p className="mt-1 text-xs text-muted">{award.detail}</p>
                    ) : null}
                  </div>
                </li>
              ))}
            </ul>

            <Link href="/cv/" className="text-link mt-8">
              完整 CV <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
