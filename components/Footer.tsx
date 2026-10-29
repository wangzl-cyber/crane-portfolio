import Link from "next/link";
import { navItems, site } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="page-wrap grid gap-12 py-14 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <p className="font-display text-2xl tracking-[0.04em]">{site.name}</p>
          <p className="mt-2 text-[10px] uppercase tracking-[0.24em] text-muted">
            {site.roleEn}
          </p>
          <p className="mt-8 max-w-xs text-xs leading-6 text-muted">
            {site.description}
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="eyebrow">Navigate</p>
          <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-muted transition-colors hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4 md:justify-self-end md:text-right">
          <p className="eyebrow">Connect</p>
          <ul className="mt-5 space-y-3 text-sm">
            {site.socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted transition-colors hover:text-ink"
                >
                  {social.label} ↗
                </a>
              </li>
            ))}
          </ul>
          <a
            href={`mailto:${site.email}`}
            className="mt-6 inline-block text-sm text-muted transition-colors hover:text-ink"
          >
            {site.email}
          </a>
        </div>
      </div>

      <div className="border-t border-line/70">
        <div className="page-wrap flex flex-col gap-2 py-5 text-[10px] uppercase tracking-[0.18em] text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {year} {site.nameEn}
          </span>
          <span>{site.location}</span>
        </div>
      </div>
    </footer>
  );
}
