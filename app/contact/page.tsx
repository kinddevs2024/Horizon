import { ContactForm } from "@/components/contact-form";
import { FadeIn } from "@/components/reveal";

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
              <div className="flex flex-col gap-3 pt-4">
                <a
                  href="mailto:uploadhorizon@gmail.com"
                  className="group flex items-center gap-3 rounded-lg border border-border bg-canvas/60 px-4 py-3 transition-all hover:border-[#233C5A]/30 hover:bg-[#233C5A]/5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#233C5A]/10 transition-colors group-hover:bg-[#233C5A]/20">
                    <svg
                      className="h-5 w-5 text-[#233C5A] transition-transform group-hover:scale-110"
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
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-subtle">
                      Email
                    </p>
                    <p className="text-sm font-medium text-ink">uploadhorizon@gmail.com</p>
                  </div>
                </a>
                <a
                  href="tel:+998900268118"
                  className="group flex items-center gap-3 rounded-lg border border-border bg-canvas/60 px-4 py-3 transition-all hover:border-[#233C5A]/30 hover:bg-[#233C5A]/5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#233C5A]/10 transition-colors group-hover:bg-[#233C5A]/20">
                    <svg
                      className="h-5 w-5 text-[#233C5A] transition-transform group-hover:scale-110"
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
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-subtle">
                      Phone
                    </p>
                    <p className="text-sm font-medium text-ink">+998 90 026 81 18</p>
                  </div>
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
    </main>
  );
}
