import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "联系",
  description: `联系${site.name}，讨论展览、合作、作品收藏或摄影项目。`,
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        index="Contact / 06"
        title="联系"
        titleEn="Say hello"
        description="关于展览、合作、作品收藏，或任何摄影与跨媒介项目，欢迎写信。"
      />

      <section className="page-wrap py-16 md:py-28">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="eyebrow">Email</p>
            {/* 邮箱替换位置：在 data/site.json 或 /admin/ 后台修改 */}
            <a
              href={`mailto:${site.email}`}
              className="mt-5 block break-all font-display text-4xl leading-[1.2] tracking-[-0.03em] transition-colors hover:text-muted sm:text-5xl md:text-6xl"
            >
              {site.email}
            </a>
            <p className="mt-8 max-w-md text-sm leading-7 text-muted">
              通常会在 3—5 个工作日内回复。如果邮件涉及具体项目，欢迎附上时间、场地与预算等基本信息。
            </p>

            <div className="mt-14 border-t border-line pt-8">
              <p className="eyebrow">Available for</p>
              <ul className="mt-5 space-y-3 text-sm text-muted">
                <li>展览与艺术项目合作</li>
                <li>摄影 / 影像与纪录片拍摄</li>
                <li>摄影作品收藏与授权</li>
                <li>p5.js 与实时影像工作坊</li>
              </ul>
            </div>
          </div>

          <div className="md:col-span-4 md:col-start-9">
            <p className="eyebrow">Elsewhere</p>
            <ul className="mt-5 border-t border-line">
              {site.socials.map((social) => (
                <li key={social.label} className="border-b border-line">
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between py-4 text-sm transition-colors hover:text-muted"
                  >
                    <span>{social.label}</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <p className="eyebrow">Based in</p>
              <p className="mt-3 text-sm text-muted">{site.location}</p>
            </div>

            <div className="mt-10">
              <p className="eyebrow">Studio</p>
              <p className="mt-3 max-w-xs text-sm leading-7 text-muted">
                接受预约参观工作室，请提前通过邮件联系。
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
