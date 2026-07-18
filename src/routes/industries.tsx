import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/section";
import { INDUSTRIES } from "@/lib/site-data";
import * as Icons from "lucide-react";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Serve — KH Global Trading" },
      {
        name: "description",
        content:
          "Fire safety, PPE and industrial supply for construction, facilities management, hospitality, healthcare, oil & gas, manufacturing and more across the UAE.",
      },
      { property: "og:title", content: "Industries — KH Global Trading" },
      {
        property: "og:description",
        content:
          "Supplying commercial, industrial and facility management sectors across the UAE.",
      },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title={
          <>
            Supplying <span className="text-gradient-fire">every sector</span>{" "}
            of the UAE.
          </>
        }
        description="Fire safety, PPE and industrial supply for commercial, industrial and facility management businesses across the Emirates."
        crumbs={[{ label: "Industries" }]}
      />

      <section className="section-y">
        <div className="container-x">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {INDUSTRIES.map((i, idx) => {
              const Icon =
                (Icons as unknown as Record<string, Icons.LucideIcon>)[
                  i.icon
                ] ?? Icons.Sparkles;
              return (
                <Reveal key={i.name} delay={(idx % 6) * 0.05}>
                  <div className="group relative h-full overflow-hidden rounded-3xl border border-border bg-surface p-7 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated">
                    <div className="grid size-14 place-items-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-gradient-fire group-hover:text-primary-foreground">
                      <Icon className="size-6" />
                    </div>
                    <h3 className="mt-6 font-display text-xl font-semibold">
                      {i.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Fire safety equipment and supply solutions tailored to the{" "}
                      {i.name.toLowerCase()} sector.
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
