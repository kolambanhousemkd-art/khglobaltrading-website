import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/section";
import { ArrowUpRight } from "lucide-react";
import aboutImg from "@/assets/about-team.jpg";
import extinguisherImg from "@/assets/product-extinguisher.jpg";
import warehouseImg from "@/assets/project-warehouse.jpg";

const POSTS = [
  {
    title: "Choosing the right fire extinguisher for your facility",
    cat: "Fire Safety",
    read: "5 min",
    img: extinguisherImg,
  },
  {
    title: "PPE essentials every UAE workplace should stock",
    cat: "PPE",
    read: "6 min",
    img: aboutImg,
  },
  {
    title: "Why a reliable supply chain matters for facility managers",
    cat: "General Trading",
    read: "4 min",
    img: warehouseImg,
  },
  {
    title: "Fire safety signage: what every building needs",
    cat: "Fire Safety",
    read: "4 min",
    img: extinguisherImg,
  },
];

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Insights — Fire Safety & Supply Tips | KH Global Trading" },
      {
        name: "description",
        content:
          "Practical guides on fire safety equipment, PPE and industrial supply from KH Global Trading FZE LLC.",
      },
      { property: "og:title", content: "Insights — KH Global Trading" },
      {
        property: "og:description",
        content: "Guides and tips on fire safety, PPE and industrial supply.",
      },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title={
          <>
            Guides on{" "}
            <span className="text-gradient-fire">
              fire safety &amp; supply.
            </span>
          </>
        }
        description="Practical tips for facility managers, procurement teams and business owners across the UAE."
        crumbs={[{ label: "Insights" }]}
      />

      <section className="section-y">
        <div className="container-x">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {POSTS.map((p, i) => (
              <Reveal key={p.title} delay={(i % 6) * 0.05}>
                <Link to="/blog" className="group block h-full">
                  <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-elevated">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={p.img}
                        alt={p.title}
                        loading="lazy"
                        className="size-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                        <span className="text-primary">{p.cat}</span>
                        <span>· {p.read} read</span>
                      </div>
                      <h3 className="mt-3 flex-1 font-display text-lg font-semibold leading-snug">
                        {p.title}
                      </h3>
                      <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                        Read article <ArrowUpRight className="size-4" />
                      </div>
                    </div>
                  </article>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
