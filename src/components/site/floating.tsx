import { ArrowUp, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, useScroll } from "motion/react";
import { COMPANY } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-fire"
    />
  );
}

export function FloatingActions() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 400);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      <button
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={cn(
          "grid size-11 place-items-center rounded-full border border-border bg-surface text-foreground shadow-elevated transition-all duration-500",
          show ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-3",
        )}
      >
        <ArrowUp className="size-5" />
      </button>
      <a
        href={`https://wa.me/${COMPANY.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative grid size-14 place-items-center rounded-full bg-[oklch(0.7_0.19_150)] text-white shadow-glow transition hover:scale-105"
      >
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[oklch(0.7_0.19_150)] opacity-30" />
        <MessageCircle className="size-6" strokeWidth={2.4} />
      </a>
    </div>
  );
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!localStorage.getItem("cookie-ack")) {
      const t = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(t);
    }
  }, []);
  if (!visible) return null;
  return (
    <div className="fixed bottom-5 left-5 z-40 max-w-sm rounded-2xl border border-border bg-surface p-4 shadow-elevated">
      <p className="text-sm text-foreground">
        We use cookies to improve your experience. By continuing, you accept our{" "}
        <a href="#" className="text-primary underline underline-offset-2">cookie policy</a>.
      </p>
      <div className="mt-3 flex justify-end gap-2">
        <button
          onClick={() => {
            localStorage.setItem("cookie-ack", "1");
            setVisible(false);
          }}
          className="rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground"
        >
          Got it
        </button>
      </div>
    </div>
  );
}
