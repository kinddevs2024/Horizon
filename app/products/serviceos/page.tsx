import { FadeIn, Stagger, StaggerItem } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/next";

const capabilities = [
  {
    title: "Scheduling & capacity",
    body: "Bookings, SLAs, and routing with availability windows, buffers, and escalation paths.",
  },
  {
    title: "Client 360",
    body: "Profiles, entitlements, history, and preferences in one place with clear permissions.",
  },
  {
    title: "Staff operations",
    body: "Shifts, credentials, assignments, and compliance tracking with audit-ready logs.",
  },
  {
    title: "Workflow automation",
    body: "Checklists, automations, and runbooks that surface exceptions instead of noise.",
  },
  {
    title: "Analytics",
    body: "Operational telemetry with SLOs, SLA adherence, and real-time health dashboards.",
  },
];

const delivery = [
  {
    title: "Foundation",
    detail: "Data model, access controls, and API footprint aligned to your services.",
  },
  {
    title: "Workflows",
    detail: "Bookings, staffing, and client flows wired to your policies and tooling.",
  },
  {
    title: "Pilot launch",
    detail: "Limited-scope go-live with observability, training, and recovery paths.",
  },
  {
    title: "Scale",
    detail: "Performance tuning, playbooks, and ownership handoff with our team on-call.",
  },
];

export default function ServiceOSPage() {
  return (
    <main className="bg-canvas text-ink">
      <section className="border-b border-border bg-surface">
        <div className="container grid gap-10 py-16 md:grid-cols-2 md:py-20">
          <FadeIn className="space-y-4">
            <p className="eyebrow">ServiceOS</p>
            <h1 className="font-display text-4xl font-semibold tracking-tightest text-ink">
              The operating system for service businesses.
            </h1>
            <p className="text-lg text-subtle">
              ServiceOS connects bookings, client care, workforce, and analytics into one calm
              platform. Built for companies running complex, repeatable services with high stakes.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-subtle">
              <span className="tag">SLA aware</span>
              <span className="tag">Runbook-ready</span>
              <span className="tag">API first</span>
            </div>
          </FadeIn>
          <FadeIn className="grid gap-4 text-sm text-subtle">
            <div className="border border-border bg-canvas/60 px-4 py-4">
              <p className="text-xs uppercase tracking-[0.16em] text-subtle">Lead time</p>
              <p className="text-lg font-semibold text-ink">6-8 weeks to production</p>
            </div>
            <div className="border border-border bg-canvas/60 px-4 py-4">
              <p className="text-xs uppercase tracking-[0.16em] text-subtle">Interfaces</p>
              <p className="text-lg font-semibold text-ink">Console + APIs + webhooks</p>
            </div>
            <div className="border border-border bg-canvas/60 px-4 py-4">
              <p className="text-xs uppercase tracking-[0.16em] text-subtle">Support</p>
              <p className="text-lg font-semibold text-ink">Runbooks, SLOs, escalation paths</p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="border-b border-border bg-canvas">
        <div className="container space-y-10 py-16 md:py-20">
          <SectionHeading
            eyebrow="Capabilities"
            title="Everything operations teams need - ready to extend."
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
              title="A calm path from design to production."
              description="We stay hands-on through go-live. Every phase ships with clear owners, telemetry, and rollback plans."
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
              Ready to plan your ServiceOS launch?
            </h2>
            <p className="text-base text-subtle">
              We start with a technical scoping session and a short implementation plan.
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full border border-ink px-5 py-3 text-sm font-semibold text-ink hover:bg-ink hover:text-surface"
            >
              Schedule time
            </Link>
            <Link
              href="/#insights"
              className="inline-flex items-center rounded-full border border-border px-5 py-3 text-sm font-semibold text-ink hover:border-ink"
            >
              View insights
            </Link>
          </div>
        </div>
      </section>
      <Analytics />
    </main>
  );
}
