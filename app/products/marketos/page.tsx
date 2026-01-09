import { FadeIn, Stagger, StaggerItem } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/next";

const capabilities = [
  {
    title: "Catalog & governance",
    body: "Multi-vendor catalog with rules for visibility, bundling, and curation. Built to keep data consistent.",
  },
  {
    title: "Orders & payments",
    body: "Order lifecycle, payments, settlements, and reconciliation with transparent audit trails.",
  },
  {
    title: "Vendors",
    body: "Onboarding, permissions, and SLA tracking so each vendor operates safely within your guardrails.",
  },
  {
    title: "Logistics & fulfillment",
    body: "Fulfillment orchestration, routing, and exception handling with clear playbooks.",
  },
  {
    title: "Admin control",
    body: "Approvals, reviews, risk checks, and configurable policies with minimal noise.",
  },
];

const delivery = [
  {
    title: "Blueprint",
    detail: "Market model, vendor roles, and regulatory constraints mapped to MarketOS primitives.",
  },
  {
    title: "Integrations",
    detail: "Payments, KYC, logistics, and analytics wired through hardened adapters.",
  },
  {
    title: "Pilot",
    detail: "Limited vendor cohort with strict observability and staffed support from Horizon.",
  },
  {
    title: "Scale up",
    detail: "Performance tuning, back-office tooling, and handover to your operators.",
  },
];

export default function MarketOSPage() {
  return (
    <main className="bg-canvas text-ink">
      <section className="border-b border-border bg-surface">
        <div className="container grid gap-10 py-16 md:grid-cols-2 md:py-20">
          <FadeIn className="space-y-4">
            <p className="eyebrow">MarketOS</p>
            <h1 className="font-display text-4xl font-semibold tracking-tightest text-ink">
              Custom marketplace infrastructure without the noise.
            </h1>
            <p className="text-lg text-subtle">
              MarketOS is a composable stack for product marketplaces. Catalog, vendors, payments,
              logistics, and admin tools arrive production-ready - no patchwork.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-subtle">
              <span className="tag">Governed</span>
              <span className="tag">Auditable</span>
              <span className="tag">Partner-ready</span>
            </div>
          </FadeIn>
          <FadeIn className="grid gap-4 text-sm text-subtle">
            <div className="border border-border bg-canvas/60 px-4 py-4">
              <p className="text-xs uppercase tracking-[0.16em] text-subtle">Playbooks</p>
              <p className="text-lg font-semibold text-ink">Ops runbooks for every state</p>
            </div>
            <div className="border border-border bg-canvas/60 px-4 py-4">
              <p className="text-xs uppercase tracking-[0.16em] text-subtle">Vendor trust</p>
              <p className="text-lg font-semibold text-ink">SLA monitoring and risk controls</p>
            </div>
            <div className="border border-border bg-canvas/60 px-4 py-4">
              <p className="text-xs uppercase tracking-[0.16em] text-subtle">Interfaces</p>
              <p className="text-lg font-semibold text-ink">Admin console, partner APIs, webhooks</p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="border-b border-border bg-canvas">
        <div className="container space-y-10 py-16 md:py-20">
          <SectionHeading
            eyebrow="Capabilities"
            title="Reliable rails for complex marketplaces."
          />
          <Stagger className="grid gap-4 md:grid-cols-3">
            {capabilities.map((item) => (
              <StaggerItem key={item.title}>
                <div className="card-plain h-full rounded-none md:rounded-lg">
                  <p className="text-sm font-semibold text-ink">{item.title}</p>
                  <p className="mt-2 text-sm text-subtle">{item.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="border-b border-border bg-surface">
        <div className="container grid gap-10 py-16 md:grid-cols-2 md:py-20">
          <FadeIn className="space-y-3">
            <SectionHeading
              eyebrow="Delivery"
              title="From blueprint to governed launch."
              description="We co-design the governance model, integrate partners, and launch with visibility into every operation."
            />
          </FadeIn>
          <FadeIn className="space-y-3">
            {delivery.map((step) => (
              <div
                key={step.title}
                className="flex items-start justify-between border border-border bg-canvas/60 px-4 py-3"
              >
                <div className="max-w-lg">
                  <p className="text-sm font-semibold text-ink">{step.title}</p>
                  <p className="text-sm text-subtle">{step.detail}</p>
                </div>
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-subtle">
                  Ready
                </span>
              </div>
            ))}
          </FadeIn>
        </div>
      </section>

      <section className="bg-canvas">
        <div className="container flex flex-col gap-6 py-16 md:flex-row md:items-center md:justify-between md:py-20">
          <div className="space-y-2">
            <p className="eyebrow">Engage Horizon</p>
            <h2 className="font-display text-3xl font-semibold tracking-tightest text-ink">
              Launch your next marketplace on MarketOS.
            </h2>
            <p className="text-base text-subtle">
              A short discovery, an explicit plan, and a governed pilot. No noise.
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full border border-ink px-5 py-3 text-sm font-semibold text-ink hover:bg-ink hover:text-surface"
            >
              Talk to us
            </Link>
            <Link
              href="/#products"
              className="inline-flex items-center rounded-full border border-border px-5 py-3 text-sm font-semibold text-ink hover:border-ink"
            >
              Explore products
            </Link>
          </div>
        </div>
      </section>
      <Analytics />
    </main>
  );
}
