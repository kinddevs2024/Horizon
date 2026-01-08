import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-canvas">
      <div className="container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold text-ink">Horizon</p>
          <p className="text-sm text-subtle">
            Calm infrastructure for service and marketplace companies.
          </p>
        </div>
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
            <a
              href="mailto:uploadhorizon@gmail.com"
              className="group flex items-center gap-2 text-sm text-subtle transition-colors hover:text-[#233C5A]"
            >
              <svg
                className="h-4 w-4 transition-transform group-hover:scale-110"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>uploadhorizon@gmail.com</span>
            </a>
            <a
              href="tel:+998900268118"
              className="group flex items-center gap-2 text-sm text-subtle transition-colors hover:text-[#233C5A]"
            >
              <svg
                className="h-4 w-4 transition-transform group-hover:scale-110"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>+998 90 026 81 18</span>
            </a>
          </div>
          <div className="flex items-center gap-4 text-sm text-subtle">
            <Link href="/privacy" className="hover:text-[#233C5A] transition-colors">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
