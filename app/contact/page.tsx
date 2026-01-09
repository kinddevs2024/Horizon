import { ContactForm } from "@/components/contact-form";
import { FadeIn } from "@/components/reveal";
import { Analytics } from "@vercel/analytics/next";

export default function ContactPage() {
  return (
    <main className="bg-canvas">
      <section className="border-b border-border bg-surface">
        <div className="container grid gap-10 py-16 md:grid-cols-2 md:py-20">
          <FadeIn className="space-y-4">
            <p className="eyebrow">Contact</p>
            <h1 className="font-display text-4xl font-semibold tracking-tightest text-ink">
              Start a conversation with Horizon.
            </h1>
            <p className="text-base text-subtle">
              Tell us about your service or marketplace plans. We respond within one business day
              with next steps and a clear path to delivery.
            </p>
            <div className="space-y-4">
              <div className="flex flex-col gap-3 pt-2">
                <a
                  href="mailto:uploadhorizon@gmail.com"
                  className="group flex items-center gap-3 rounded-lg border border-border bg-canvas/60 px-4 py-2.5 transition-all hover:border-[#233C5A]/30 hover:bg-[#233C5A]/5"
                >
                  <svg
                    className="h-4 w-4 text-[#233C5A] transition-transform group-hover:scale-110"
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
                  <span className="text-sm text-ink">uploadhorizon@gmail.com</span>
                </a>
                <a
                  href="tel:+998900268118"
                  className="group flex items-center gap-3 rounded-lg border border-border bg-canvas/60 px-4 py-2.5 transition-all hover:border-[#233C5A]/30 hover:bg-[#233C5A]/5"
                >
                  <svg
                    className="h-4 w-4 text-[#233C5A] transition-transform group-hover:scale-110"
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
                  <span className="text-sm text-ink">+998 90 026 81 18</span>
                </a>
                <a
                  href="https://www.instagram.com/horizon.upload/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-lg border border-border bg-canvas/60 px-4 py-2.5 transition-all hover:border-[#233C5A]/30 hover:bg-[#233C5A]/5"
                >
                  <svg
                    className="h-4 w-4 text-[#233C5A] transition-transform group-hover:scale-110"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span className="text-sm text-ink">@horizon.upload</span>
                </a>
                <a
                  href="https://discord.gg/ejtajEusd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-lg border border-border bg-canvas/60 px-4 py-2.5 transition-all hover:border-[#233C5A]/30 hover:bg-[#233C5A]/5"
                >
                  <svg
                    className="h-4 w-4 text-[#233C5A] transition-transform group-hover:scale-110"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                  <span className="text-sm text-ink">Join our server</span>
                </a>
              </div>
              <div className="space-y-2 text-sm text-subtle">
                <p className="font-semibold text-ink">What we cover</p>
                <ul className="space-y-1">
                  <li>- Goals, constraints, and existing systems</li>
                  <li>- Pilot scope and data model alignment</li>
                  <li>- Implementation timeline and roles</li>
                </ul>
              </div>
            </div>
          </FadeIn>
          <div>
            <ContactForm />
          </div>
        </div>
      </section>
      <Analytics />
    </main>
  );
}
