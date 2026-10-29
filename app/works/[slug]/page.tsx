import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { works } from "@/data/works";

type WorkPageProps = {
  params: {
    slug: string;
  };
};

// 静态导出时只生成 data/works.json 中列出的作品页面。
export function generateStaticParams() {
  return works.map((work) => ({ slug: work.slug }));
}

export function generateMetadata({ params }: WorkPageProps): Metadata {
  const work = works.find((item) => item.slug === params.slug);

  if (!work) {
    return { title: "作品未找到" };
  }

  return {
    title: work.title,
    description: work.summary,
  };
}

export default function WorkDetailPage({ params }: WorkPageProps) {
  const work = works.find((item) => item.slug === params.slug);

  if (!work) {
    notFound();
  }

  const currentIndex = works.findIndex((item) => item.slug === work.slug);
  const nextWork = works[(currentIndex + 1) % works.length];
  const cover = work.images[0];
  const extraImages = work.images.slice(1);

  return (
    <article>
      <div className="page-wrap pt-8 md:pt-12">
        <Link
          href="/works/"
          className="inline-flex items-center gap-2 text-[11px] tracking-[0.1em] text-muted transition-colors hover:text-ink"
        >
          <span aria-hidden="true">←</span> 全部作品
        </Link>
      </div>

      <header className="page-wrap grid gap-8 py-10 md:grid-cols-12 md:py-16">
        <div className="md:col-span-8">
          <p className="eyebrow">
            {work.category} / {work.year}
          </p>
          <h1 className="mt-4 font-display text-5xl leading-[1.05] tracking-[-0.03em] md:text-7xl">
            {work.title}
          </h1>
          <p className="mt-3 text-[10px] uppercase tracking-[0.24em] text-muted">
            {work.titleEn}
          </p>
        </div>
        <p className="max-w-sm text-sm leading-7 text-muted md:col-span-4 md:pt-8">
          {work.summary}
        </p>
      </header>

      <figure className="page-wrap">
        <div className="mx-auto max-w-5xl overflow-hidden bg-mist">
          {/* 图片替换位置：作品图片统一在 data/works.json 中维护 */}
          <img
            src={cover.src}
            alt={cover.alt}
            className="h-auto w-full"
            fetchPriority="high"
          />
        </div>
        <figcaption className="mx-auto mt-3 flex max-w-5xl flex-col gap-2 text-[10px] uppercase tracking-[0.14em] text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>{cover.caption ?? cover.alt}</span>
          <span>
            01 / {String(work.images.length).padStart(2, "0")}
          </span>
        </figcaption>
      </figure>

      <section className="page-wrap grid gap-12 py-16 md:grid-cols-12 md:py-24">
        <aside className="md:col-span-3">
          <dl className="border-t border-line">
            {[
              ["分类", work.category],
              ["年份", work.year],
              ["媒介", work.medium],
              ["尺寸 / 时长", work.dimensions],
            ].map(([label, value]) => (
              <div key={label} className="border-b border-line py-4">
                <dt className="text-[10px] uppercase tracking-[0.16em] text-muted">
                  {label}
                </dt>
                <dd className="mt-2 text-xs leading-6">{value}</dd>
              </div>
            ))}
          </dl>
        </aside>

        <div className="md:col-span-8 md:col-start-5">
          <p className="eyebrow">Text</p>
          <div className="mt-6 space-y-6 text-[15px] leading-8 text-ink/75">
            {work.description.map((paragraph, index) => (
              <p key={`${work.slug}-paragraph-${index}`}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {extraImages.length > 0 ? (
        <section className="page-wrap space-y-12 pb-16 md:space-y-20 md:pb-24">
          {extraImages.map((image, index) => (
            <figure key={image.src} className="mx-auto max-w-5xl">
              <div className="overflow-hidden bg-mist">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-auto w-full"
                />
              </div>
              <figcaption className="mt-3 flex flex-col gap-2 text-[10px] uppercase tracking-[0.14em] text-muted sm:flex-row sm:items-center sm:justify-between">
                <span>{image.caption ?? image.alt}</span>
                <span>
                  {String(index + 2).padStart(2, "0")} /{" "}
                  {String(work.images.length).padStart(2, "0")}
                </span>
              </figcaption>
            </figure>
          ))}
        </section>
      ) : null}

      <nav aria-label="下一件作品" className="border-t border-line">
        <Link
          href={`/works/${nextWork.slug}/`}
          className="page-wrap flex items-end justify-between gap-6 py-12 md:py-16"
        >
          <div>
            <p className="eyebrow">Next Work / 下一件</p>
            <p className="mt-3 font-display text-3xl tracking-[-0.02em] transition-colors hover:text-muted md:text-4xl">
              {nextWork.title}
            </p>
          </div>
          <span className="pb-1 font-display text-3xl" aria-hidden="true">
            →
          </span>
        </Link>
      </nav>
    </article>
  );
}
