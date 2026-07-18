import { Link } from "@tanstack/react-router";
import hkLogoMark from "@/assets/hk-logo-mark.png";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      to="/"
      className="group flex items-center gap-2.5"
      aria-label="KH Global Trading — Home"
    >
      <span className="relative grid size-10 shrink-0 place-items-center transition-transform group-hover:scale-105">
        <img
          src={hkLogoMark}
          alt="KH Global Trading logo"
          className="size-full object-contain"
        />
      </span>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-[15px] font-bold tracking-tight text-foreground">
            KH Global Trading
          </span>
          <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
            FZE LLC
          </span>
        </span>
      )}
    </Link>
  );
}
