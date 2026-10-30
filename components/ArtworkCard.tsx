import Link from "next/link";
import type { Work } from "@/data/works";

type ArtworkCardProps = {
  work: Work;
  index: number;
};

export default function ArtworkCard({ work, index }: ArtworkCardProps) {
  const cover = work.images[0];

  return (
    <article>
      <Link href={`/works/${work.slug}/`} className="block">
        <div className="mb-3 flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-muted">
          <span>{String(index + 1).padStart(2, "0")}</span>
          <span>{work.year}</span>
        </div>

        <div className="aspect-[3/2] w-full overflow-hidden bg-mist">
          {/* 图片替换位置：作品数据在 data/works.json */}
          <img
            src={cover.src}
            alt={cover.alt}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div className="mt-4 flex items-start justify-between gap-5 border-t border-line pt-3">
          <div>
            <h2 className="font-display text-xl leading-snug tracking-[-0.01em] md:text-2xl">
              {work.title}
            </h2>
            <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-muted">
              {work.titleEn}
            </p>
          </div>
          <p className="shrink-0 pt-1 text-right text-[10px] leading-5 tracking-[0.08em] text-muted">
            {work.category}
          </p>
        </div>
      </Link>
    </article>
  );
}
