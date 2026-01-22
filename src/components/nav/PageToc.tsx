import Link from "next/link";

type TocItem = {
  id: string;
  label: string;
};

type PageTocProps = {
  items: TocItem[];
  title?: string;
};

export default function PageToc({ items, title = "On this page" }: PageTocProps) {
  return (
    <aside aria-label={title} className="space-y-4 lg:self-start">
      <div className="lg:hidden">
        <details className="rounded-xl border border-muted/15 bg-white p-4 shadow-sm">
          <summary className="cursor-pointer list-none text-sm font-semibold text-olive">
            Jump to section
          </summary>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {items.map((item) => (
              <li key={item.id}>
                <Link className="no-underline hover:text-olive" href={`#${item.id}`}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            className="mt-4 inline-flex text-sm font-semibold text-olive no-underline"
            href="#top"
          >
            Back to top
          </Link>
        </details>
      </div>

      <div className="hidden lg:block lg:sticky lg:top-24">
        <div className="rounded-xl border border-muted/15 bg-white p-5 shadow-sm">
          <p className="text-xs uppercase tracking-[0.3em] text-muted">{title}</p>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            {items.map((item) => (
              <li key={item.id}>
                <Link className="no-underline hover:text-olive" href={`#${item.id}`}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            className="mt-5 inline-flex text-sm font-semibold text-olive no-underline"
            href="#top"
          >
            Back to top
          </Link>
        </div>
      </div>
    </aside>
  );
}
