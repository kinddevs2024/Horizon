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
            <div className="space-y-2 text-sm text-subtle">
              <p className="font-semibold text-ink">What we cover</p>
              <ul className="space-y-1">
                <li>- Goals, constraints, and existing systems</li>
                <li>- Pilot scope and data model alignment</li>
                <li>- Implementation timeline and roles</li>
              </ul>
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
