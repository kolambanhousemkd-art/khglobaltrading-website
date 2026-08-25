import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";
import { Reveal, SectionHeader } from "@/components/site/section";
import { Counter } from "@/components/site/counter";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  Eye,
  Flame,
  HeartHandshake,
  Package,
  ShieldCheck,
  Target,
} from "lucide-react";
import aboutImg from "@/assets/about-team.jpg";
import { COMPANY, STATS } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — KH Global Trading FZC LLC" },
      {
        name: "description",
        content:
          "KH Global Trading FZC LLC is a UAE-based trading company supplying fire fighting equipment, safety solutions and general trading products with reliability and professionalism.",
      },
      { property: "og:title", content: "About KH Global Trading FZC LLC" },
      {
        property: "og:description",
        content:
          "A UAE-based trading company committed to delivering quality products and dependable service.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  const values = [
    {
      icon: ShieldCheck,
      title: "Quality First",
      desc: "Fire safety is our core business — we take product quality seriously on every order.",
    },
    {
      icon: HeartHandshake,
      title: "Long-Term Partnership",
      desc: "We build relationships on trust, transparency and consistent service.",
    },
    {
      icon: Flame,
      title: "Safety-Led",
      desc: "Our primary focus is certified fire fighting equipment and safety solutions.",
    },
    {
      icon: Package,
      title: "Wide Sourcing Network",
      desc: "From safety equipment to general trading products, sourced to your specification.",
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="About KH Global Trading"
        title={
          <>
            A trading partner built on{" "}
            <span className="text-gradient-fire">trust.</span>
          </>
        }
        description="A UAE-based trading company committed to delivering quality products and dependable service — with fire safety at our core."
        crumbs={[{ label: "About" }]}
      />

      {/* Story */}
      <section className="section-y">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <img
              src={aboutImg}
              alt="KH Global Trading team"
              width={1600}
              height={1200}
              loading="lazy"
              className="rounded-[2rem] shadow-elevated"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <div className="eyebrow mb-4">Who we are</div>
              <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
                Fire safety at our core, trading at our heart.
              </h2>
              <p className="mt-5 text-muted-foreground">
                {COMPANY.name} is a UAE-based trading company committed to
                delivering quality products and dependable service. Our primary
                focus is supplying certified fire fighting equipment and safety
                solutions, while also serving commercial, industrial, and
                facility management sectors with a wide range of trading
                products.
              </p>
              <p className="mt-4 text-muted-foreground">
                Our mission is to provide reliable products, competitive
                pricing, and long-term partnerships built on trust and
                professionalism.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {STATS.slice(0, 4).map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl border border-border p-4"
                  >
                    <p className="font-display text-3xl font-bold">
                      <Counter to={s.value} suffix={s.suffix} />
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="section-y bg-muted/40">
        <div className="container-x">
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                icon: Target,
                title: "Our Mission",
                body: "To provide reliable products, competitive pricing, and long-term partnerships built on trust and professionalism.",
              },
              {
                icon: Eye,
                title: "Our Vision",
                body: "To be a dependable, quality-focused trading partner for fire safety and industrial supply across the UAE.",
              },
            ].map((b, i) => (
              <Reveal key={b.title} delay={i * 0.1}>
                <div className="card-premium card-premium-hover h-full p-8">
                  <b.icon className="size-8 text-primary" />
                  <h3 className="mt-6 font-display text-2xl font-semibold">
                    {b.title}
                  </h3>
                  <p className="mt-3 text-muted-foreground">{b.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-y">
        <div className="container-x">
          <SectionHeader eyebrow="Core values" title="What we stand for." />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06}>
                <div className="card-premium card-premium-hover h-full p-6">
                  <div className="grid size-12 place-items-center rounded-xl bg-gradient-fire text-primary-foreground shadow-glow">
                    <v.icon className="size-5" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-y bg-muted/30">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-surface p-8 text-center shadow-soft md:p-14">
            <div className="pointer-events-none absolute -right-20 -top-20 size-80 rounded-full bg-primary/10 blur-3xl" />
            <div className="relative">
              <p className="font-display text-2xl leading-relaxed md:text-3xl">
                Reliable products, competitive pricing, and long-term
                partnerships built on trust and professionalism.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {[
                  "Fire safety focused",
                  "Wide product range",
                  "UAE-wide supply",
                ].map((p) => (
                  <span
                    key={p}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-xs font-semibold"
                  >
                    <CheckCircle2 className="size-3.5 text-primary" /> {p}
                  </span>
                ))}
              </div>
              <div className="mt-10">
                <Button asChild variant="fire" size="lg">
                  <Link to="/contact">Start a conversation</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
