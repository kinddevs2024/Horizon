import { FadeIn } from "@/components/reveal";
import { Analytics } from "@vercel/analytics/next";

export default function PrivacyPage() {
  return (
    <main className="bg-canvas">
      <section className="border-b border-border">
        <div className="container py-16 md:py-20">
          <FadeIn className="max-w-3xl space-y-4">
            <p className="eyebrow">Privacy</p>
            <h1 className="font-display text-3xl font-semibold tracking-tightest text-ink">
              Horizon Privacy Notice
            </h1>
            <p className="text-base text-subtle">
              Horizon products are built for responsible operations. We collect only the
              information required to respond to inquiries and deliver contracted work.
              Production data stays within your controlled environments unless explicitly
              agreed otherwise.
            </p>
            <p className="text-base text-subtle">
              For questions, email{" "}
              <a
                href="mailto:uploadhorizon@gmail.com"
                className="text-[#233C5A] underline underline-offset-4 transition-colors hover:text-[#1a2d45]"
              >
                uploadhorizon@gmail.com
              </a>{" "}
              or call{" "}
              <a
                href="tel:+998900268118"
                className="text-[#233C5A] underline underline-offset-4 transition-colors hover:text-[#1a2d45]"
              >
                +998 90 026 81 18
              </a>
              .
            </p>
          </FadeIn>
        </div>
      </section>
      <Analytics />
    </main>
  );
}
