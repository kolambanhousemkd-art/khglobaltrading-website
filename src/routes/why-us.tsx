import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/section";
import { Button } from "@/components/ui/button";
import { WHY_CHOOSE_US } from "@/lib/site-data";
import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  Headset,
  Layers,
  ShieldCheck,
  Truck,
  Users,
  Warehouse,
} from "lucide-react";

const ICONS = [
  BadgeCheck,
  ShieldCheck,
  Banknote,
  Truck,
  Headset,
  Warehouse,
  Users,
  Layers,
];

export const Route = createFileRoute("/why-us")({
  head: () => ({
    meta: [
      { title: "Why Choose Us — KH Global Trading FZC LLC" },
      {
        name: "description",
        content:
          "Certified quality products, competitive pricing, fast delivery and reliable supply — why businesses across the UAE choose KH Global Trading.",
      },
      { property: "og:title", content: "Why Choose KH Global Trading" },
      {
        property: "og:description",
        content:
          "Quality, pricing, reliability and service — the reasons businesses trust us.",
      },
      { property: "og:url", content: "/why-us" },
    ],
    links: [{ rel: "canonical", href: "/why-us" }],
  }),
  component: WhyUsPage,
});

function WhyUsPage() {
  return (
    <>
      <PageHero
        eyebrow="Why Choose Us"
        title={
          <>
            Reasons businesses{" "}
            <span className="text-gradient-fire">trust us.</span>
          </>
        }
        description="From certified quality to fast delivery — here's what sets KH Global Trading apart as a supply partner."
        crumbs={[{ label: "Why Choose Us" }]}
      />

      <section className="section-y">
        <div className="container-x">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {WHY_CHOOSE_US.map((s, i) => {
              const Icon = ICONS[i % ICONS.length];
              return (
                <Reveal key={s.title} delay={(i % 8) * 0.05}>
                  <div className="card-premium card-premium-hover group h-full p-7">
                    <div className="grid size-12 place-items-center rounded-xl bg-gradient-fire text-primary-foreground shadow-glow">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="mt-6 font-display text-lg font-semibold">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {s.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <div className="mt-16 rounded-[2rem] bg-gradient-ink p-10 text-white md:p-14">
            <div className="grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
              <div>
                <div className="eyebrow mb-4">Start a partnership</div>
                <h2 className="font-display text-3xl font-semibold md:text-4xl">
                  Let's build a reliable supply relationship.
                </h2>
                <p className="mt-4 text-white/70">
                  Whether it's a single facility order or an ongoing supply
                  arrangement, our team is ready to help.
                </p>
              </div>
              <Button
                asChild
                variant="fire"
                size="xl"
                className="w-full md:w-auto md:justify-self-end"
              >
                <Link to="/contact">
                  Get a quote <ArrowRight className="ml-1 size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
