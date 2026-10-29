"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems, site } from "@/data/site";

export default function Header() {
  const pathname = usePathname();
  const current = pathname === "/" ? "/" : pathname.replace(/\/$/, "");

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-paper/90 backdrop-blur-sm">
      <div className="page-wrap flex h-16 items-center justify-between gap-4 md:h-20">
        <Link
          href="/"
          aria-label={`${site.name} 首页`}
          className="flex min-w-0 items-baseline gap-3 whitespace-nowrap"
        >
          <span className="font-display text-base tracking-[0.06em] md:text-xl">
            {site.name}
          </span>
          <span className="hidden text-[9px] uppercase tracking-[0.26em] text-muted sm:inline">
            {site.nameEn}
          </span>
        </Link>

        <nav
          aria-label="主导航"
          className="flex shrink-0 items-center gap-2.5 md:gap-7"
        >
          {navItems.map((item) => {
            const href = item.href.replace(/\/$/, "");
            const isActive =
              current === href || current.startsWith(`${href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`relative whitespace-nowrap py-1 text-[11px] tracking-[0.12em] transition-colors duration-200 md:text-xs ${
                  isActive
                    ? "text-ink"
                    : "text-muted hover:text-ink"
                }`}
              >
                {item.label}
                <span
                  className={`absolute inset-x-0 -bottom-0.5 h-px bg-ink transition-opacity ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
