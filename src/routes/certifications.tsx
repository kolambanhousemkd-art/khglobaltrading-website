import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/section";
import { ClipboardCheck, PackageCheck, ShieldCheck, Truck } from "lucide-react";

const COMMITMENTS = [
  {
    icon: ShieldCheck,
    title: "Certified Quality Products",
    desc: "We prioritise sourcing fire safety and PPE products manufactured to recognised safety standards.",
  },
  {
    icon: ClipboardCheck,
    title: "Careful Product Selection",
    desc: "Every item we add to our range is reviewed for build quality, compliance markings and supplier reliability.",
  },
  {
    icon: PackageCheck,
    title: "Consistent Standards",
    desc: "From fire fighting equipment to industrial materials, we hold every category to the same quality bar.",
  },
  {
    icon: Truck,
    title: "Traceable Supply Chain",
    desc: "We work with dependable manufacturers and distributors so you know exactly what you're receiving.",
  },
];

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: "Quality & Compliance — KH Global Trading" },
      {
        name: "description",
        content:
          "How KH Global Trading approaches product quality and compliance across fire safety, PPE and industrial supply.",
      },
      {
        property: "og:title",
        content: "Quality & Compliance — KH Global Trading",
      },
      {
        property: "og:description",
        content: "Our approach to certified, quality-focused product sourcing.",
      },
      { property: "og:url", content: "/certifications" },
    ],
    links: [{ rel: "canonical", href: "/certifications" }],
  }),
  component: CertificationsPage,
});

function CertificationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Quality & Compliance"
        title={
          <>
            Quality is not <span className="text-gradient-fire">optional.</span>
          </>
        }
        description="Fire safety is our core business — so product quality and compliance sit at the centre of everything we source and supply."
        crumbs={[{ label: "Quality & Compliance" }]}
      />

      <section className="section-y">
        <div className="container-x">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {COMMITMENTS.map((c, i) => (
              <Reveal key={c.title} delay={(i % 6) * 0.05}>
                <div className="card-premium card-premium-hover h-full p-7">
                  <div className="grid size-14 place-items-center rounded-2xl bg-gradient-fire text-primary-foreground shadow-glow">
                    <c.icon className="size-6" />
                  </div>
                  <h3 className="mt-6 font-display text-lg font-semibold">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <div className="mt-12 rounded-3xl border border-dashed border-border bg-muted/30 p-8 text-center">
              <p className="text-sm text-muted-foreground">
                Need documentation for a specific product — datasheets,
                compliance markings or manufacturer information? Our team can
                provide this on request for any item in our catalogue.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
