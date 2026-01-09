import { FadeIn, Stagger, StaggerItem } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import Image from "next/image";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/next";

const works = [
    {
        id: 1,
        image: "/our-clients-1.png",
        title: "001 Barbershop",
        description: "Premium barbershop website with modern design and online booking system",
        category: "Barbershop",
        url: "https://001barbershop.uz/",
    },
    {
        id: 2,
        image: "/our-clients-2.png",
        title: "Olympiad Platform",
        description: "Online platform for academic competitions with clean, minimalist design",
        category: "Education",
        url: "https://global-olimpiad-v2-2.vercel.app/",
    },
    {
        id: 3,
        image: "/our-clients-3.png",
        title: "Presidente Traditional Barbershop",
        description: "Elegant barbershop website with classic design and premium aesthetics",
        category: "Barbershop",
        url: "https://president-ecru.vercel.app/",
    },
    {
        id: 4,
        image: "/our-clients-4.png",
        title: "Brohouse Barbershop",
        description: "Modern barbershop platform with professional styling and user-friendly interface",
        category: "Barbershop",
        url: "https://bro-house.vercel.app/",
    },
    {
        id: 5,
        image: "/our-clients-5.png",
        title: "Presidente Barbershop",
        description: "Traditional barbershop website with sophisticated design and booking system",
        category: "Barbershop",
        url: "https://prasident.vercel.app/",
    },
    {
        id: 6,
        image: "/our-clients-6.png",
        title: "Sadia Lux",
        description: "Luxury e-commerce platform with elegant design and premium user experience",
        category: "Luxury",
        url: "https://sadia-lux.vercel.app/",
    },
];

export default function WorksPage() {
    return (
    <main className="bg-canvas text-ink">
      <section className="border-b border-border bg-surface">
        <div className="container py-16 md:py-20">
          <FadeIn className="space-y-4 max-w-3xl">
            <p className="eyebrow">Our Works</p>
            <h1 className="font-display text-4xl font-semibold tracking-tightest text-ink md:text-5xl">
              Projects we&apos;ve built for our clients.
            </h1>
            <p className="text-lg text-subtle">
              From barbershops to educational platforms, we create digital experiences
              that drive results. Each project is crafted with attention to detail and
              built to scale.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="border-b border-border bg-canvas">
        <div className="container space-y-10 py-16 md:py-20">
          <SectionHeading
            eyebrow="Portfolio"
            title="Featured projects"
            description="A selection of our recent work showcasing different industries and design approaches."
          />
          <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {works.map((work) => (
              <StaggerItem key={work.id}>
                <div className="group relative block overflow-hidden rounded-lg border border-border bg-surface transition-all hover:border-[#233C5A]/30 hover:shadow-lg">
                  <div className="relative aspect-[4/3] overflow-hidden bg-canvas">
                    <Image
                      src={work.image}
                      alt={work.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#233C5A]">
                        {work.category}
                      </span>
                      <a
                        href={work.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center transition-opacity"
                        aria-label={`Open ${work.title} website`}
                      >
                        <svg
                          className="h-4 w-4 text-[#233C5A] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-ink">{work.title}</h3>
                    <p className="text-sm text-subtle">{work.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-canvas">
        <div className="container flex flex-col gap-6 py-16 md:flex-row md:items-center md:justify-between md:py-20">
          <div className="space-y-2">
            <p className="eyebrow">Start Your Project</p>
            <h2 className="font-display text-3xl font-semibold tracking-tightest text-ink">
              Ready to build something great?
            </h2>
            <p className="text-base text-subtle">
              Let&apos;s discuss your project and see how we can help bring your vision to life.
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full border border-[#233C5A] bg-[#233C5A] px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-[#1a2d45] hover:border-[#1a2d45] hover:shadow-md"
            >
              Get in touch
            </Link>
            <Link
              href="/#products"
              className="inline-flex items-center rounded-full border border-border px-5 py-3 text-sm font-semibold text-ink hover:border-[#233C5A]"
            >
              View products
            </Link>
          </div>
        </div>
      </section>
      <Analytics />
    </main>
  );
}

