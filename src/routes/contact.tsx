import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { COMPANY } from "@/lib/site-data";
import { Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(200),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Please add a few details").max(1500),
});

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — KH Global Trading FZC LLC" },
      {
        name: "description",
        content:
          "Contact KH Global Trading FZC LLC — request a quote or ask about fire safety, PPE and industrial supply across the UAE.",
      },
      { property: "og:title", content: "Contact — KH Global Trading" },
      {
        property: "og:description",
        content: "Get in touch with our UAE supply team.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please review the form.");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      form.reset();
      toast.success("Thank you — our team will reply within one business day.");
    }, 800);
  };

  const cards = [
    {
      icon: Phone,
      label: "Phone",
      value: COMPANY.phone,
      href: `tel:${COMPANY.phone.replace(/\s/g, "")}`,
    },
    {
      icon: Mail,
      label: "Email",
      value: COMPANY.email,
      href: `mailto:${COMPANY.email}`,
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Chat with us",
      href: `https://wa.me/${COMPANY.whatsapp}`,
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let's talk about{" "}
            <span className="text-gradient-fire">your requirements.</span>
          </>
        }
        description="Request a quote, ask about a product, or start a conversation with our team — we usually reply within one business day."
        crumbs={[{ label: "Contact" }]}
      />

      <section className="section-y">
        <div className="container-x grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <div className="card-premium p-8 md:p-10">
              <h2 className="font-display text-2xl font-semibold">
                Send us a message
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Tell us about your facility and requirements.
              </p>
              <form onSubmit={onSubmit} className="mt-8 grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Full name *</Label>
                    <Input id="name" name="name" required maxLength={100} />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      maxLength={200}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" name="phone" maxLength={30} />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" name="company" maxLength={120} />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">How can we help? *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    maxLength={1500}
                  />
                </div>
                <Button
                  type="submit"
                  variant="fire"
                  size="lg"
                  disabled={submitting}
                >
                  <Send className="mr-1 size-4" />{" "}
                  {submitting ? "Sending…" : "Send message"}
                </Button>
              </form>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid gap-5">
              <div className="card-premium p-6">
                <div className="flex items-start gap-4">
                  <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-gradient-fire text-primary-foreground shadow-glow">
                    <MapPin className="size-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      Company
                    </p>
                    <p className="mt-1 font-display text-lg font-semibold">
                      {COMPANY.name}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {COMPANY.address}
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {cards.map((c) => (
                  <a
                    key={c.label}
                    href={c.href ?? "#"}
                    target={c.href?.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="card-premium card-premium-hover block p-5"
                  >
                    <c.icon className="size-5 text-primary" />
                    <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      {c.label}
                    </p>
                    <p className="mt-1 text-sm font-semibold">{c.value}</p>
                  </a>
                ))}
              </div>

              <div className="card-premium p-6 text-center">
                <p className="text-sm text-muted-foreground">
                  We usually reply within{" "}
                  <span className="font-semibold text-foreground">
                    one business day
                  </span>
                  .
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
