import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/section";
import { FAQS } from "@/lib/site-data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — KH Global Trading" },
      {
        name: "description",
        content:
          "Frequently asked questions about our fire safety, PPE, industrial and general trading supply across the UAE.",
      },
      { property: "og:title", content: "FAQ — KH Global Trading" },
      {
        property: "og:description",
        content: "Answers to the most common supply and product questions.",
      },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title={
          <>
            Answers to the questions we{" "}
            <span className="text-gradient-fire">hear most.</span>
          </>
        }
        description="Can't find what you're looking for? Contact our team — we usually reply within one business day."
        crumbs={[{ label: "FAQ" }]}
      />

      <section className="section-y">
        <div className="container-x max-w-3xl">
          <Reveal>
            <Accordion type="single" collapsible className="space-y-3">
              {FAQS.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="rounded-2xl border border-border bg-surface px-5 shadow-soft data-[state=open]:border-primary/30"
                >
                  <AccordionTrigger className="text-left font-display text-lg font-semibold hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>
    </>
  );
}
