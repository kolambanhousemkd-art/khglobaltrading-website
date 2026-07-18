import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PRODUCT_CATEGORIES } from "@/lib/site-data";
import { ArrowUpRight, Search } from "lucide-react";
import { useMemo, useState } from "react";
import extinguisherImg from "@/assets/product-extinguisher.jpg";
import alarmImg from "@/assets/product-alarm.jpg";
import warehouseImg from "@/assets/project-warehouse.jpg";
import aboutImg from "@/assets/about-team.jpg";

const IMAGES: Record<string, string> = {
  "fire-fighting-equipment": extinguisherImg,
  ppe: aboutImg,
  "industrial-building-materials": warehouseImg,
  "general-trading": alarmImg,
};

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      {
        title:
          "Products — Fire Safety, PPE & Industrial Supply | KH Global Trading",
      },
      {
        name: "description",
        content:
          "Fire fighting equipment, PPE, industrial & building materials, and general trading products — supplied across the UAE by KH Global Trading FZE LLC.",
      },
      { property: "og:title", content: "Products — KH Global Trading FZE LLC" },
      {
        property: "og:description",
        content:
          "Browse our fire safety, PPE, industrial and general trading product range.",
      },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const [q, setQ] = useState("");
  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return PRODUCT_CATEGORIES;
    return PRODUCT_CATEGORIES.filter(
      (c) =>
        c.name.toLowerCase().includes(query) ||
        c.tagline.toLowerCase().includes(query) ||
        c.items.some((i) => i.toLowerCase().includes(query)),
    );
  }, [q]);

  return (
    <>
      <PageHero
        eyebrow="Products"
        title={
          <>
            Fire safety, PPE &amp;{" "}
            <span className="text-gradient-fire">industrial supply.</span>
          </>
        }
        description="Everything your facility needs — fire fighting equipment is our core business, alongside PPE, industrial & building materials, and general trading products."
        crumbs={[{ label: "Products" }]}
      />

      <section className="section-y">
        <div className="container-x">
          <div className="mb-10 flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              {filtered.length} categories ·{" "}
              {PRODUCT_CATEGORIES.reduce((a, c) => a + c.items.length, 0)}+
              products
            </p>
            <div className="relative w-full max-w-sm">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search products (e.g. helmets, extinguisher)"
                className="h-11 rounded-full pl-10"
                aria-label="Search products"
              />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {filtered.map((c, i) => (
              <Reveal key={c.slug} delay={(i % 6) * 0.05}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-elevated">
                  <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                    <img
                      src={IMAGES[c.slug]}
                      alt={c.name}
                      loading="lazy"
                      className="size-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-secondary backdrop-blur">
                      {c.items.length} products
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-xl font-semibold">
                      {c.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {c.tagline}
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {c.items.map((i) => (
                        <li
                          key={i}
                          className="rounded-full bg-muted px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
                        >
                          {i}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex items-center gap-2 pt-4">
                      <Button
                        asChild
                        size="sm"
                        variant="fire"
                        className="flex-1"
                      >
                        <Link to="/contact">
                          Request quote{" "}
                          <ArrowUpRight className="ml-1 size-3.5" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="rounded-3xl border border-dashed border-border p-16 text-center">
              <p className="text-muted-foreground">
                No products match "{q}". Try our custom sourcing service.
              </p>
              <Button asChild variant="fire" className="mt-4">
                <Link to="/contact">Request custom sourcing</Link>
              </Button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
