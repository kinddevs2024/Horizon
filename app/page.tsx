import { ContactForm } from "@/components/contact-form";
import { FadeIn, Stagger, StaggerItem } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { insightPosts, products, technologyPillars } from "@/lib/content";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-canvas text-ink">
      <main>
        <section id="hero" className="border-b border-border bg-canvas">
          <div className="container grid gap-12 py-16 md:py-20 lg:grid-cols-12">
            <FadeIn className="space-y-8 lg:col-span-7">
              <div className="space-y-4">
                <p className="eyebrow">Horizon</p>
                <h1 className="font-display text-4xl font-semibold leading-tight tracking-tightest text-ink md:text-5xl">
                  Calm operating systems for services and marketplaces.
                </h1>
                <p className="max-w-2xl text-lg text-muted">
                  We build ServiceOS and MarketOS - engineered rails for bookings,
                  clients, staff, catalog, and logistics. Designed to keep
                  operations quiet while teams scale.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="#contact"
                  className="inline-flex items-center rounded-full border border-ink px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-surface"
                >
                  Start a project
                </Link>
                <Link
                  href="#products"
                  className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-ink hover:border-ink"
                >
                  View products
                </Link>
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-subtle">
                <span className="tag">ServiceOS</span>
                <span className="tag">MarketOS</span>
                <span className="tag">Launching in 2027</span>
              </div>
            </FadeIn>

            <FadeIn className="space-y-4 lg:col-span-5">
              <div className="card-plain rounded-none md:rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-ink">Operations view</p>
                    <p className="text-sm text-subtle">
                      One console for bookings, catalog, and fulfilment.
                    </p>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-subtle">
                    Live
                  </span>
                </div>
                <div className="mt-6 space-y-3">
                  <div className="flex items-center justify-between border-b border-border pb-3">
                    <div>
                      <p className="text-sm font-semibold text-ink">ServiceOS</p>
                      <p className="text-xs text-subtle">SLA-aware bookings</p>
                    </div>
                    <span className="text-xs font-semibold text-accent">Stable</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-border pb-3">
                    <div>
                      <p className="text-sm font-semibold text-ink">MarketOS</p>
                      <p className="text-xs text-subtle">Orders + logistics</p>
                    </div>
                    <span className="text-xs font-semibold text-accent">Production</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-ink">Horizon Labs</p>
                      <p className="text-xs text-subtle">Automation R&D</p>
                    </div>
                    <span className="text-xs font-semibold text-subtle">2027</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { title: "Lead time", value: "6-8 weeks" },
                  { title: "Engagement", value: "Engineering-led" },
                  { title: "Integration", value: "API-first" },
                  { title: "Support", value: "Runbook + SLOs" },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="card-plain rounded-none text-sm font-medium text-subtle md:rounded-lg"
                  >
                    <p className="text-xs uppercase tracking-[0.16em] text-subtle">
                      {item.title}
                    </p>
                    <p className="mt-1 text-ink">{item.value}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        <section id="products" className="bg-surface">
          <div className="container space-y-10 py-16 md:py-20">
            <SectionHeading
              eyebrow="Products"
              title="Built for real operations, not demos."
              description="Each product is opinionated, API-first, and shipped with the governance and observability modern teams expect."
            />
            <div className="grid gap-6 md:grid-cols-3">
              {products.map((product, index) => (
                <FadeIn key={product.slug} delay={0.05 * index}>
                  <div className="flex h-full flex-col justify-between border border-border bg-canvas/60 p-6">
                    <div className="space-y-3">
                      <p className="eyebrow">{product.slug === "future" ? "Launching 2027" : "Available"}</p>
                      <h3 className="font-display text-2xl font-semibold text-ink">
                        {product.name}
                      </h3>
                      <p className="text-base text-subtle">{product.summary}</p>
                      <ul className="mt-4 space-y-2 text-sm text-muted">
                        {product.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2">
                            <span className="mt-1 h-px w-4 bg-border" aria-hidden />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {product.slug !== "future" ? (
                      <Link
                        href={product.href}
                        className="mt-6 inline-flex items-center text-sm font-semibold text-ink underline underline-offset-4 hover:text-accent"
                      >
                        Explore {product.name}
                      </Link>
                    ) : (
                      <p className="mt-6 text-sm font-semibold text-subtle">
                        Teaser only. Horizon Labs, launching in 2027.
                      </p>
                    )}
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section id="technology" className="bg-canvas">
          <div className="container space-y-10 py-16 md:py-20">
            <SectionHeading
              eyebrow="Technology"
              title="Structured for resilience."
              description="We ship calm systems: predictable defaults, clear runbooks, and no surprises during go-live."
            />
            <div className="grid gap-6 md:grid-cols-4">
              {technologyPillars.map((pillar, index) => (
                <FadeIn
                  key={pillar.title}
                  delay={0.05 * index}
                  className="card-plain h-full rounded-none md:rounded-lg"
                >
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-ink">{pillar.title}</p>
                    <p className="text-sm text-subtle">{pillar.body}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="bg-surface">
          <div className="container grid gap-10 py-16 md:grid-cols-2 md:py-20">
            <div className="space-y-4">
              <SectionHeading
                eyebrow="About"
                title="Engineering-first and quietly ambitious."
                description="Horizon is an engineering studio dedicated to operations software. We build with a bias for clarity, diagnostics, and long-term maintainability."
              />
            </div>
            <FadeIn className="grid gap-4 text-sm text-subtle">
              {[
                "We co-design with operators, not just stakeholders.",
                "Workstreams stay small: product engineering, infra, and design in one pod.",
                "Every launch ships with a runbook, SLOs, and observability baked in.",
                "Engagements are measured in outcomes, not vanity releases.",
              ].map((item) => (
                <div
                  key={item}
                  className="border border-border bg-canvas/60 px-4 py-4"
                >
                  <p className="text-ink">{item}</p>
                </div>
              ))}
            </FadeIn>
          </div>
        </section>

        <section id="insights" className="bg-canvas">
          <div className="container space-y-8 py-16 md:py-20">
            <SectionHeading
              eyebrow="Insights"
              title="Working notes from Horizon."
              description="No fluff - just what we are learning as we ship ServiceOS and MarketOS."
            />
            <Stagger className="grid gap-4 md:grid-cols-3">
              {insightPosts.map((post) => (
                <StaggerItem key={post.title}>
                  <div className="flex h-full flex-col justify-between border border-border bg-surface px-5 py-4">
                    <div className="space-y-2">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-subtle">
                        {post.tag}
                      </p>
                      <h3 className="font-display text-xl font-semibold text-ink">
                        {post.title}
                      </h3>
                      <p className="text-sm text-subtle">{post.summary}</p>
                    </div>
                    <Link
                      href="/insights"
                      className="mt-4 text-sm font-semibold text-ink underline underline-offset-4 hover:text-accent"
                    >
                      View note
                    </Link>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        <section id="contact" className="bg-surface">
          <div className="container grid gap-10 py-16 md:grid-cols-5 md:py-20">
            <FadeIn className="space-y-4 md:col-span-2">
              <p className="eyebrow">Contact / Order</p>
              <h2 className="font-display text-3xl font-semibold tracking-tightest text-ink">
                Tell us about your service or marketplace.
              </h2>
              <p className="text-base text-subtle">
                ServiceOS and MarketOS projects begin with a technical scoping
                session. We respond within one business day.
              </p>
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
              </div>
              <div className="space-y-2 text-sm text-subtle">
                <p className="font-semibold text-ink">What to expect</p>
                <ul className="space-y-1">
                  <li>- A 30-minute engineering call</li>
                  <li>- A draft architecture and timeline</li>
                  <li>- Optional pilot build</li>
                </ul>
              </div>
            </FadeIn>
            <div className="md:col-span-3">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
