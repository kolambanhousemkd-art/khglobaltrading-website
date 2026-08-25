import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Flame,
  HardHat,
  Wrench,
  Package,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import heroImg from "@/assets/hero-fire.jpg";
import aboutImg from "@/assets/about-team.jpg";
import extinguisherImg from "@/assets/product-extinguisher.jpg";
import alarmImg from "@/assets/product-alarm.jpg";
import sprinklerImg from "@/assets/product-sprinkler.jpg";
import pumpImg from "@/assets/product-pump.jpg";
import { Button } from "@/components/ui/button";
import { Reveal, SectionHeader } from "@/components/site/section";
import { Counter } from "@/components/site/counter";
import {
  BUSINESS_ACTIVITIES,
  INDUSTRIES,
  STATS,
  WHY_CHOOSE_US,
} from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "KH Global Trading FZC LLC — Fire Safety & Industrial Supply UAE",
      },
      {
        name: "description",
        content:
          "KH Global Trading FZC LLC supplies high-quality fire fighting equipment, safety products, industrial materials, and general trading solutions across the UAE.",
      },
      {
        property: "og:title",
        content:
          "KH Global Trading FZC LLC — Fire Safety & Industrial Supply UAE",
      },
      {
        property: "og:description",
        content:
          "Fire fighting equipment, PPE, industrial & building materials, and general trading — one reliable UAE supplier.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preload", as: "image", href: heroImg },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <BusinessActivities />
      <ProductsShowcase />
      <IndustriesSection />
      <WhyUs />
      <CtaBanner />
    </>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section className="relative -mt-24 overflow-hidden pt-24">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Fire fighting equipment and industrial safety solutions"
          width={1920}
          height={1200}
          className="size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="container-x relative pt-16 pb-28 md:pt-24 md:pb-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
          className="max-w-3xl text-white"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-white/80 backdrop-blur">
            <span className="size-1.5 rounded-full bg-primary animate-pulse" />
            KH Global Trading FZC LLC · United Arab Emirates
          </span>
          <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.02] tracking-tight md:text-6xl lg:text-7xl">
            Your Trusted Partner for{" "}
            <span className="text-gradient-fire">Fire Safety</span>
            <br className="hidden sm:block" /> &amp; Industrial Supply Solutions
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 md:text-xl">
            KH GLOBAL TRADING FZC LLC supplies high-quality fire fighting
            equipment, safety products, industrial materials, and general
            trading solutions across the UAE with reliability, competitive
            pricing, and exceptional customer service.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button asChild variant="fire" size="lg">
              <Link to="/contact">
                Get a Quote <ArrowUpRight className="ml-1 size-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="glass"
              size="lg"
              className="text-white border-white/20 hover:bg-white/10"
            >
              <Link to="/contact">
                Contact Us <ArrowRight className="ml-1 size-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/70">
            {[
              "Fire Safety as Our Core Business",
              "Competitive, Transparent Pricing",
              "Reliable Supply Across the UAE",
            ].map((t) => (
              <div key={t} className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-primary" /> {t}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Floating stat card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute bottom-8 right-4 hidden max-w-xs md:right-8 md:block"
        >
          <div className="glass-dark rounded-2xl p-5 text-white shadow-elevated animate-float">
            <div className="flex items-center gap-3">
              <div className="grid size-11 place-items-center rounded-xl bg-gradient-fire">
                <ShieldCheck className="size-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-white/60">
                  Core Focus
                </p>
                <p className="font-display text-xl font-semibold">
                  Fire Safety First
                </p>
              </div>
            </div>
            <p className="mt-3 text-xs text-white/70">
              Plus industrial, commercial & general trading supply.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- Stats ---------- */
function Stats() {
  return (
    <section className="section-y">
      <div className="container-x">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="card-premium card-premium-hover relative overflow-hidden p-8">
                <div className="absolute -right-8 -top-8 size-40 rounded-full bg-primary/5 blur-2xl" />
                <p className="font-display text-5xl font-bold tracking-tight text-foreground md:text-6xl">
                  <Counter to={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-3 text-sm font-medium text-muted-foreground">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Business activities ---------- */
function BusinessActivities() {
  const icons = [Flame, HardHat, Wrench, Package];
  return (
    <section className="section-y bg-muted/40">
      <div className="container-x">
        <SectionHeader
          eyebrow="What we supply"
          title={
            <>
              Four business lines,{" "}
              <span className="text-gradient-fire">one reliable partner</span>.
            </>
          }
          description="Fire fighting equipment is our core business — alongside PPE, industrial & building materials, and general trading products for businesses across the UAE."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {BUSINESS_ACTIVITIES.map((a, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={a.slug} delay={i * 0.06}>
                <div className="card-premium card-premium-hover group h-full p-7">
                  <div className="flex items-start justify-between">
                    <div className="grid size-12 place-items-center rounded-xl bg-gradient-fire text-primary-foreground shadow-glow transition-transform group-hover:-rotate-6 group-hover:scale-110">
                      <Icon className="size-5" />
                    </div>
                    {a.highlight && (
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-primary">
                        {a.highlight}
                      </span>
                    )}
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold">
                    {a.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {a.tagline}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-1.5">
                    {a.items.slice(0, 6).map((it) => (
                      <li
                        key={it}
                        className="rounded-full bg-muted px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
                      >
                        {it}
                      </li>
                    ))}
                    {a.items.length > 6 && (
                      <li className="rounded-full bg-muted px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
                        +{a.items.length - 6} more
                      </li>
                    )}
                  </ul>
                  <div className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    <Link
                      to="/products"
                      className="inline-flex items-center gap-1"
                    >
                      View products <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- Products showcase ---------- */
function ProductsShowcase() {
  const cards = [
    { img: extinguisherImg, title: "Fire Extinguishers", tag: "Fire Fighting" },
    { img: alarmImg, title: "Smoke & Heat Detectors", tag: "Fire Alarm" },
    { img: sprinklerImg, title: "Safety Signages", tag: "Passive Safety" },
    { img: pumpImg, title: "Fire Hose Reels", tag: "Fire Fighting" },
  ];
  return (
    <section className="section-y">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader
            align="left"
            eyebrow="Featured products"
            title={
              <>
                Quality-focused equipment,
                <br />
                ready to supply.
              </>
            }
            description="A snapshot of our fire fighting range — browse the full catalogue across all four business lines."
          />
          <Button asChild variant="ink" size="lg">
            <Link to="/products">
              All products <ArrowRight className="ml-1 size-4" />
            </Link>
          </Button>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.07}>
              <div className="group relative overflow-hidden rounded-3xl border border-border bg-surface shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-elevated">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.title}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-5 pt-16">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/70">
                    {c.tag}
                  </span>
                  <h3 className="mt-1 font-display text-lg font-semibold text-white">
                    {c.title}
                  </h3>
                </div>
                <div className="absolute right-4 top-4 grid size-10 translate-y-2 place-items-center rounded-full bg-white/90 text-secondary opacity-0 backdrop-blur transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowUpRight className="size-4" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Industries ---------- */
function IndustriesSection() {
  return (
    <section className="section-y bg-muted/30">
      <div className="container-x">
        <SectionHeader
          eyebrow="Industries we serve"
          title={<>Supplying businesses across the UAE.</>}
        />
        <div className="mt-12 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {INDUSTRIES.map((i, idx) => (
            <Reveal key={i.name} delay={idx * 0.03}>
              <div className="card-premium card-premium-hover flex items-center gap-3 p-5">
                <span className="grid size-10 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Sparkles className="size-4" />
                </span>
                <span className="text-sm font-semibold">{i.name}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Why us ---------- */
function WhyUs() {
  return (
    <section className="section-y">
      <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-fire opacity-20 blur-2xl" />
            <img
              src={aboutImg}
              alt="Fire safety and industrial supply team"
              loading="lazy"
              width={1600}
              height={1200}
              className="rounded-[2rem] shadow-elevated"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="max-w-xl">
            <div className="eyebrow mb-4">Why KH Global Trading</div>
            <h2 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
              Reliable products, fair pricing, real partnership.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              We are committed to delivering reliable products, competitive
              pricing, and long-term partnerships built on trust and
              professionalism.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {WHY_CHOOSE_US.map((p) => (
                <li key={p.title} className="flex items-start gap-3">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                    <CheckCircle2 className="size-3.5" />
                  </span>
                  <span className="text-sm leading-relaxed text-foreground">
                    {p.title}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild variant="fire" size="lg">
                <Link to="/about">
                  Our story <ArrowRight className="ml-1 size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/why-us">Why choose us</Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- CTA ---------- */
function CtaBanner() {
  return (
    <section className="section-y">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-ink p-10 text-white shadow-elevated md:p-16">
          <div className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full bg-primary/40 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.06]" />
          <div className="relative grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-center">
            <div>
              <div className="eyebrow mb-4">Let's talk supply</div>
              <h2 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
                Tell us what your facility
                <br /> needs — we'll source it.
              </h2>
              <p className="mt-5 max-w-xl text-white/70">
                Share your requirements and our team will get back to you with
                availability, pricing and delivery timelines.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button asChild variant="fire" size="xl" className="w-full">
                <Link to="/contact">Get a quote</Link>
              </Button>
              <Button
                asChild
                variant="glass"
                size="xl"
                className="w-full text-white border-white/20 hover:bg-white/10"
              >
                <Link to="/contact">Contact us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
