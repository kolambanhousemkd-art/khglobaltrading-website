import { Link } from "@tanstack/react-router";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";
import { COMPANY, NAV } from "@/lib/site-data";
import { Logo } from "./logo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function SiteFooter() {
  const cols = [
    { title: "Company", items: NAV.slice(0, 4) },
    { title: "Explore", items: NAV.slice(4, 8) },
    { title: "Resources", items: NAV.slice(8) },
  ];
  return (
    <footer className="relative mt-24 overflow-hidden bg-secondary text-secondary-foreground">
      <div className="pointer-events-none absolute inset-0 bg-radial-glow opacity-70" />
      <div className="container-x relative pt-20 pb-10">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr_1.4fr]">
          <div>
            <div className="[&_a]:!text-white [&_span]:!text-white/80">
              <Logo />
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              {COMPANY.name} is a UAE-based trading company supplying certified
              fire fighting equipment, PPE, industrial &amp; building materials,
              and general trading products across the UAE.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                {COMPANY.address}
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-4 shrink-0 text-primary" />{" "}
                {COMPANY.phone}
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-4 shrink-0 text-primary" />{" "}
                {COMPANY.email}
              </li>
            </ul>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {cols.map((c) => (
              <div key={c.title}>
                <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-white/60">
                  {c.title}
                </h4>
                <ul className="space-y-2.5 text-sm">
                  {c.items.map((i) => (
                    <li key={i.to}>
                      <Link
                        to={i.to}
                        className="text-white/80 transition hover:text-primary"
                      >
                        {i.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-white/60">
              Newsletter
            </h4>
            <p className="mb-4 text-sm text-white/70">
              Compliance updates, product launches and safety insights —
              monthly.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-2 sm:flex-row"
            >
              <Input
                type="email"
                required
                placeholder="you@company.ae"
                aria-label="Email"
                className="border-white/15 bg-white/5 text-white placeholder:text-white/50"
              />
              <Button variant="fire" type="submit">
                Subscribe
              </Button>
            </form>
            <div className="mt-6 flex gap-2">
              {[Linkedin, Instagram, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="grid size-9 place-items-center rounded-full border border-white/15 text-white/70 transition hover:border-primary hover:text-primary"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col-reverse items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center">
          <p>
            Copyright © {new Date().getFullYear()} {COMPANY.legalName}. All
            Rights Reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">
              Privacy
            </a>
            <a href="#" className="hover:text-white">
              Terms
            </a>
            <a href="#" className="hover:text-white">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
