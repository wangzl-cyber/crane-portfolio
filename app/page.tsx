import Link from "next/link";
import ArtworkCard from "@/components/ArtworkCard";
import { site } from "@/data/site";
import { works } from "@/data/works";

const featuredWorks = works.filter((work) => work.featured).slice(0, 3);

export default function HomePage() {
  return (
    <>
      {/* ============================================================
          首页 Hero 大图
          图片替换位置：将你的图片放入 public/images/，
          然后把下面的 src 改成 "/images/你的文件名.jpg"。
          ============================================================ */}
      <section className="relative isolate overflow-hidden bg-ink text-paper">
        <img
          src="/images/hero.svg"
          alt="黑颈鹤与湿地主题首页大图占位"
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-80"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/20 via-ink/20 to-ink/80" />

        <div className="page-wrap flex min-h-[72vh] flex-col justify-end pb-12 pt-28 md:min-h-[82vh] md:pb-16 md:pt-40">
          <p className="eyebrow text-paper/55">
            Ecological Wildlife Art / 2024—2026
          </p>

          <div className="mt-8 flex flex-col gap-10 md:flex-row md:items-end md:justify-between md:gap-16">
            <div className="max-w-3xl">
              <h1 className="font-display text-[clamp(4rem,11vw,8.5rem)] leading-[0.88] tracking-[-0.05em]">
                与鹤同行
              </h1>
              <p className="mt-5 text-[10px] uppercase tracking-[0.36em] text-paper/60 md:text-xs">
                Where the crane flies
              </p>
            </div>

            <div className="max-w-sm border-l border-paper/30 pl-5 md:mb-2">
              <p className="text-sm leading-7 text-paper/80">
                {site.heroIntro}
              </p>
              <Link
                href="/works/"
                className="mt-6 inline-flex items-center gap-2 border-b border-paper/40 pb-1 text-[11px] tracking-[0.12em] text-paper/80 transition-colors hover:border-paper hover:text-paper"
              >
                浏览作品 <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="page-wrap py-20 md:py-32">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-3">
            <p className="eyebrow">Profile / 01</p>
          </div>

          <div className="md:col-span-8 md:col-start-5">
            <p className="font-display text-3xl leading-[1.55] tracking-[-0.01em] md:text-4xl">
              我把黑颈鹤作为一种方法：通过它理解湿地、迁徙，以及人类观看自然的方式。
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <p className="text-sm leading-7 text-muted">
                我的创作从长时间的田野观察开始。摄影记录等待，铁丝装置把身体重新交还给空间，影像与 3D
                则尝试保存那些无法被照片留住的运动。
              </p>
              <p className="text-sm leading-7 text-muted">
                所有媒介最终都回到同一个问题：我们如何与一个正在消失的栖息地相处？作品希望保持安静，让观看成为一次缓慢的靠近。
              </p>
            </div>

            <Link href="/about/" className="text-link mt-10">
              关于我 <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-ink text-paper">
        <div className="page-wrap grid gap-8 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-3">
            <p className="eyebrow text-paper/45">Statement</p>
          </div>

          <blockquote className="md:col-span-9">
            <p className="max-w-4xl font-display text-3xl leading-[1.5] tracking-[-0.01em] md:text-5xl">
              “让钢铁学会迁徙，
              <br className="hidden md:block" />
              让影像替湿地保存记忆。”
            </p>
            <footer className="mt-8 text-[10px] uppercase tracking-[0.24em] text-paper/50">
              — 创作自述
            </footer>
          </blockquote>
        </div>
      </section>

      <section>
        <div className="page-wrap py-20 md:py-28">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Selected Works</p>
              <h2 className="mt-3 font-display text-4xl tracking-[-0.02em] md:text-5xl">
                近期作品
              </h2>
            </div>
            <Link href="/works/" className="text-link shrink-0">
              全部作品 <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="mt-12 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {featuredWorks.map((work, index) => (
              <ArtworkCard key={work.slug} work={work} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
