import { FadeIn } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { insightPosts } from "@/lib/content";
import { Analytics } from "@vercel/analytics/next";

export default function InsightsPage() {
  return (
    <main className="bg-canvas">
      <section className="border-b border-border bg-surface">
        <div className="container space-y-6 py-16 md:py-20">
          <SectionHeading
            eyebrow="Insights"
            title="Working notes from Horizon."
            description="Short, practical dispatches from ServiceOS and MarketOS delivery."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {insightPosts.map((post) => (
              <FadeIn key={post.title} className="border border-border bg-canvas/60 px-5 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-subtle">
                  {post.tag}
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold text-ink">{post.title}</h3>
                <p className="mt-2 text-sm text-subtle">{post.summary}</p>
                <p className="mt-3 text-xs text-subtle">Full posts coming soon.</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      <Analytics />
    </main>
  );
}
