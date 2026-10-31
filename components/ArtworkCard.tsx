import Link from "next/link";
import type { Work } from "@/data/works";

type ArtworkCardProps = {
  work: Work;
};

export default function ArtworkCard({ work }: ArtworkCardProps) {
  const cover = work.images[0];

  return (
    <article>
      <Link href={`/works/${work.slug}/`} className="group block">
        <div className="aspect-[3/2] w-full overflow-hidden bg-mist">
          {/* 图片替换位置：作品数据在 data/works.json */}
          <img
            src={cover.src}
            alt={cover.alt}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.015]"
          />
        </div>

        <div className="mt-5 flex items-start justify-between gap-6">
          <div>
            <h2 className="font-display text-2xl leading-snug tracking-[-0.01em] md:text-3xl">
              {work.title}
            </h2>
            <p className="mt-1.5 text-[10px] uppercase tracking-[0.14em] text-muted">
              {work.titleEn}
            </p>
          </div>
          <p className="shrink-0 pt-1 text-right text-[10px] leading-5 tracking-[0.08em] text-muted">
            {work.year} / {work.category}
          </p>
        </div>
      </Link>
    </article>
  );
}
