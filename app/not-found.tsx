import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-wrap flex min-h-[60vh] flex-col justify-center py-20 md:py-28">
      <p className="eyebrow">404 / Not Found</p>
      <h1 className="mt-4 font-display text-5xl tracking-[-0.03em] md:text-7xl">
        页面不存在
      </h1>
      <p className="mt-6 max-w-md text-sm leading-7 text-muted">
        你访问的页面可能已经被移动，或者这个地址从未存在。
      </p>
      <Link href="/" className="text-link mt-8">
        返回首页 <span aria-hidden="true">→</span>
      </Link>
    </section>
  );
}
