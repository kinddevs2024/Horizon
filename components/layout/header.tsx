import Link from "next/link";

const links = [
  { href: "/#products", label: "Products" },
  { href: "/#technology", label: "Technology" },
  { href: "/#about", label: "About" },
  { href: "/insights", label: "Insights" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-canvas/90 backdrop-blur">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="font-display text-xl font-semibold tracking-tightest">
          Horizon
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full border border-border px-4 py-2 text-sm font-semibold text-ink hover:border-ink"
          >
            Talk to us
          </Link>
        </nav>
        <Link
          href="/contact"
          className="inline-flex items-center rounded-full border border-border px-3 py-2 text-xs font-semibold text-ink md:hidden"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}
