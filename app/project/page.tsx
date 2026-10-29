import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "项目",
  description:
    "p5.js 交互项目实验场。页面预留画布容器，用于嵌入实时生成影像与交互代码。",
};

export default function ProjectPage() {
  return (
    <>
      <PageHeader
        index="Project / 04"
        title="项目"
        titleEn="p5.js interactive study"
        description="一个持续生长的交互实验场。页面仅预留画布容器，用于嵌入 p5.js 实时生成影像与交互代码。"
      />

      <section className="page-wrap py-12 md:py-20">
        <div className="mb-4 flex items-center justify-between gap-4 text-[10px] uppercase tracking-[0.18em] text-muted">
          <span>Project 01 / Flight Path</span>
          <span>Status: In progress</span>
        </div>

        {/* ============================================================
            p5.js 画布容器
            将 p5.js sketch 挂载到 #p5-canvas 即可。
            具体嵌入步骤见项目根目录 README.md 的「嵌入 p5.js」章节。
            容器内的占位文字可在挂载画布后删除。
            ============================================================ */}
        <div
          id="p5-canvas"
          className="relative flex min-h-[52vh] w-full items-center justify-center overflow-hidden border border-line bg-mist md:min-h-[62vh]"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(22,24,23,0.055) 1px, transparent 1px), linear-gradient(to bottom, rgba(22,24,23,0.055) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          <div className="relative px-6 text-center">
            <p className="eyebrow">p5.js Canvas</p>
            <p className="mt-4 font-display text-3xl tracking-[-0.02em] md:text-5xl">
              等待一段代码
            </p>
            <p className="mt-4 text-xs leading-6 text-muted">
              将 p5.js sketch 挂载至 #p5-canvas
            </p>
          </div>

          <span className="absolute bottom-4 left-4 text-[9px] uppercase tracking-[0.18em] text-muted">
            Canvas 00 / Placeholder
          </span>
        </div>

        <div className="mt-8 grid gap-6 border-t border-line pt-8 md:grid-cols-12">
          <div className="md:col-span-3">
            <p className="eyebrow">Embed</p>
          </div>
          <div className="md:col-span-8 md:col-start-5">
            <p className="max-w-xl text-sm leading-7 text-muted">
              此页只预留容器。安装 p5 后，新建一个客户端组件，在 useEffect 中创建画布并指定父容器
              &quot;p5-canvas&quot;，再在本页引入该组件即可。
            </p>
            <p className="mt-3 text-xs text-muted">
              完整的示例代码与安装命令见 README.md。
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
