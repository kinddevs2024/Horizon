import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-canvas">
      <div className="container flex flex-col gap-3 py-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold text-ink">Horizon</p>
          <p className="text-sm text-subtle">
            Calm infrastructure for service and marketplace companies.
          </p>
        </div>
        <div className="flex items-center gap-4 text-sm text-subtle">
          <Link href="/privacy" className="hover:text-ink">
            Privacy
          </Link>
          <span aria-hidden="true">-</span>
          <Link href="mailto:hello@horizon.systems" className="hover:text-ink">
            hello@horizon.systems
          </Link>
        </div>
      </div>
    </footer>
  );
}
