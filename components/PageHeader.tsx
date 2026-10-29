type PageHeaderProps = {
  index: string;
  title: string;
  titleEn: string;
  description?: string;
};

export default function PageHeader({
  index,
  title,
  titleEn,
  description,
}: PageHeaderProps) {
  return (
    <header className="border-b border-line">
      <div className="page-wrap grid gap-8 py-14 md:grid-cols-12 md:py-24">
        <div className="md:col-span-3">
          <p className="eyebrow">{index}</p>
        </div>

        <div className="md:col-span-9">
          <p className="eyebrow">{titleEn}</p>
          <h1 className="mt-4 font-display text-5xl leading-[1.05] tracking-[-0.03em] md:text-7xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-6 max-w-xl text-sm leading-7 text-muted">
              {description}
            </p>
          ) : null}
        </div>
      </div>
    </header>
  );
}
