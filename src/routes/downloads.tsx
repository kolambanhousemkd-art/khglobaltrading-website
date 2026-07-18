import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/section";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

const FILES = [
  {
    title: "Company Profile",
    desc: "An overview of KH Global Trading FZE LLC and our business activities.",
    size: "1.8 MB",
  },
  {
    title: "Fire Fighting Equipment Catalogue",
    desc: "Extinguishers, hose reels, cabinets, alarm accessories and safety signage.",
    size: "6.2 MB",
  },
  {
    title: "PPE Product Range",
    desc: "Helmets, gloves, safety shoes, reflective jackets and respiratory protection.",
    size: "3.1 MB",
  },
  {
    title: "Industrial & Building Materials",
    desc: "Hardware, electrical, plumbing, tools, fasteners and adhesives.",
    size: "4.4 MB",
  },
  {
    title: "General Trading Capability",
    desc: "Commercial, facility management and custom sourcing capabilities.",
    size: "1.2 MB",
  },
];

export const Route = createFileRoute("/downloads")({
  head: () => ({
    meta: [
      { title: "Downloads — Catalogues | KH Global Trading" },
      {
        name: "description",
        content:
          "Download the KH Global Trading company profile and product catalogues for fire safety, PPE, industrial materials and general trading.",
      },
      { property: "og:title", content: "Downloads — KH Global Trading" },
      {
        property: "og:description",
        content: "Company profile and product catalogues.",
      },
      { property: "og:url", content: "/downloads" },
    ],
    links: [{ rel: "canonical", href: "/downloads" }],
  }),
  component: DownloadsPage,
});

function DownloadsPage() {
  return (
    <>
      <PageHero
        eyebrow="Download centre"
        title={
          <>
            Catalogues &amp;{" "}
            <span className="text-gradient-fire">company profile.</span>
          </>
        }
        description="Everything you need to review our range and share with your team — one click away."
        crumbs={[{ label: "Downloads" }]}
      />

      <section className="section-y">
        <div className="container-x">
          <div className="grid gap-5 md:grid-cols-2">
            {FILES.map((f, i) => (
              <Reveal key={f.title} delay={(i % 6) * 0.05}>
                <div className="card-premium card-premium-hover flex items-center gap-5 p-6">
                  <div className="grid size-14 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
                    <FileText className="size-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-lg font-semibold">
                      {f.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{f.desc}</p>
                    <p className="mt-1 text-xs text-muted-foreground/70">
                      PDF · {f.size}
                    </p>
                  </div>
                  <Button variant="fire" size="sm">
                    <Download className="mr-1 size-4" /> Get PDF
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
