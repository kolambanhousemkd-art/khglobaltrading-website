import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { type ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  crumbs = [],
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  crumbs?: { label: string; to?: string }[];
}) {
  return (
    <section className="relative -mt-24 overflow-hidden pt-24 bg-secondary text-secondary-foreground">
      <div className="pointer-events-none absolute inset-0 bg-radial-glow opacity-90" />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
      <div className="container-x relative pt-14 pb-20 md:pt-20 md:pb-28">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1 text-xs text-white/60">
          <Link to="/" className="hover:text-white">Home</Link>
          {crumbs.map((c, i) => (
            <span key={i} className="inline-flex items-center gap-1">
              <ChevronRight className="size-3" />
              {c.to ? (
                <Link to={c.to} className="hover:text-white">{c.label}</Link>
              ) : (
                <span className="text-white/80">{c.label}</span>
              )}
            </span>
          ))}
        </nav>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
          className="max-w-3xl"
        >
          {eyebrow && (
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80 backdrop-blur">
              {eyebrow}
            </div>
          )}
          <h1 className="text-balance font-display text-5xl font-semibold leading-[1.02] tracking-tight text-white md:text-6xl lg:text-7xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-2xl text-lg text-white/70">{description}</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
