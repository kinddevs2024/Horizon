import { FadeIn } from "@/components/reveal";

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
              For questions, email <a href="mailto:hello@horizon.systems" className="underline underline-offset-4">hello@horizon.systems</a>.
            </p>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
