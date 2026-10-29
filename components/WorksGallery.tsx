"use client";

import { useState } from "react";
import ArtworkCard from "@/components/ArtworkCard";
import { categories, works } from "@/data/works";

const filters = ["全部", ...categories] as const;
type Filter = (typeof filters)[number];

export default function WorksGallery() {
  const [activeFilter, setActiveFilter] = useState<Filter>("全部");

  const visibleWorks =
    activeFilter === "全部"
      ? works
      : works.filter((work) => work.category === activeFilter);

  return (
    <>
      <div className="border-b border-line">
        <div className="page-wrap flex flex-col gap-5 py-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            {filters.map((filter) => {
              const isActive = activeFilter === filter;

              return (
                <button
                  key={filter}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveFilter(filter)}
                  className={`border px-3 py-2 text-[11px] tracking-[0.08em] transition-colors duration-200 ${
                    isActive
                      ? "border-ink bg-ink text-paper"
                      : "border-line text-muted hover:border-ink hover:text-ink"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>

          <p
            aria-live="polite"
            className="text-[10px] uppercase tracking-[0.2em] text-muted"
          >
            {String(visibleWorks.length).padStart(2, "0")} Works
          </p>
        </div>
      </div>

      <div className="page-wrap py-12 md:py-20">
        {visibleWorks.length > 0 ? (
          <div className="grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {visibleWorks.map((work, index) => (
              <ArtworkCard key={work.slug} work={work} index={index} />
            ))}
          </div>
        ) : (
          <p className="py-20 text-center text-sm text-muted">
            这个分类下暂时没有作品。
          </p>
        )}
      </div>
    </>
  );
}
