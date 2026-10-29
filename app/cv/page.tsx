import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { cv, type CvEntry } from "@/data/cv";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "简历",
  description: `${site.name}的创作简历：教育、展览、获奖、驻留与技能。`,
};

type CvSectionProps = {
  title: string;
  titleEn: string;
  entries: CvEntry[];
};

function CvSection({ title, titleEn, entries }: CvSectionProps) {
  return (
    <section>
      <div className="flex items-baseline justify-between gap-4 border-t border-line pt-6">
        <h2 className="font-display text-2xl tracking-[-0.01em]">{title}</h2>
        <span className="eyebrow">{titleEn}</span>
      </div>

      <ul className="mt-5">
        {entries.map((entry) => (
          <li
            key={`${title}-${entry.period}-${entry.title}`}
            className="grid gap-1 border-b border-line py-4 sm:grid-cols-[90px_1fr] sm:gap-6"
          >
            <span className="text-[10px] tracking-[0.14em] text-muted">
              {entry.period}
            </span>
            <div>
              <p className="text-sm leading-6">{entry.title}</p>
              {entry.detail ? (
                <p className="mt-1 text-xs text-muted">{entry.detail}</p>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function CvPage() {
  return (
    <>
      <PageHeader
        index="CV / 05"
        title="简历"
        titleEn="Curriculum vitae"
        description="教育、展览、获奖与技能。完整 PDF 版本可供下载。"
      />

      <section className="page-wrap grid gap-14 py-16 md:grid-cols-12 md:py-24">
        <aside className="md:col-span-3">
          <div className="md:sticky md:top-28">
            <p className="eyebrow">Download</p>
            <p className="mt-4 max-w-xs text-sm leading-7 text-muted">
              包含完整展览、获奖与项目信息的 PDF 简历。
            </p>

            {/* PDF 替换位置：将你的 PDF 放到 public/cv.pdf，覆盖占位文件即可。 */}
            <a
              href="/cv.pdf"
              download
              className="mt-8 inline-flex items-center gap-3 bg-ink px-5 py-3 text-[11px] tracking-[0.12em] text-paper transition-colors hover:bg-muted"
            >
              下载 PDF <span aria-hidden="true">↓</span>
            </a>
            <p className="mt-3 text-[9px] uppercase tracking-[0.16em] text-muted">
              PDF / Updated 2026
            </p>

            <div className="mt-10 border-t border-line pt-5 text-xs leading-6 text-muted">
              <p>{site.name}</p>
              <a
                href={`mailto:${site.email}`}
                className="transition-colors hover:text-ink"
              >
                {site.email}
              </a>
              <p>{site.location}</p>
            </div>
          </div>
        </aside>

        <div className="space-y-12 md:col-span-8 md:col-start-5">
          <CvSection
            title="教育"
            titleEn="Education"
            entries={cv.education}
          />
          <CvSection
            title="展览"
            titleEn="Exhibitions"
            entries={cv.exhibitions}
          />
          <CvSection title="获奖" titleEn="Awards" entries={cv.awards} />
          <CvSection
            title="驻留"
            titleEn="Residencies"
            entries={cv.residencies}
          />

          <section>
            <div className="flex items-baseline justify-between gap-4 border-t border-line pt-6">
              <h2 className="font-display text-2xl tracking-[-0.01em]">
                技能
              </h2>
              <span className="eyebrow">Skills</span>
            </div>
            <ul className="mt-5">
              {cv.skills.map((skill) => (
                <li
                  key={skill}
                  className="border-b border-line py-3 text-sm text-muted"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </section>
    </>
  );
}
