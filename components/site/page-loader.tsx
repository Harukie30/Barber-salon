"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { site } from "@/lib/site-content";
import { cn } from "@/lib/utils";

const MIN_MS = 1800;
const FADE_MS = 850;

export function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(false);
      return;
    }

    let cancelled = false;
    const started = performance.now();

    const dismiss = () => {
      const remaining = Math.max(0, MIN_MS - (performance.now() - started));
      window.setTimeout(() => {
        if (cancelled) return;
        setExiting(true);
        window.setTimeout(() => {
          if (!cancelled) setVisible(false);
        }, FADE_MS);
      }, remaining);
    };

    if (document.readyState === "complete") {
      dismiss();
    } else {
      window.addEventListener("load", dismiss, { once: true });
    }

    return () => {
      cancelled = true;
      window.removeEventListener("load", dismiss);
    };
  }, []);

  useEffect(() => {
    if (!visible) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading"
      className={cn(
        "fixed inset-0 z-[100] overflow-hidden",
        "transition-opacity duration-[850ms] ease-[cubic-bezier(0.4,0,0.2,1)]",
        exiting ? "pointer-events-none opacity-0" : "opacity-100"
      )}
    >
      {/* Atmosphere */}
      <div className="absolute inset-0 bg-navy" aria-hidden />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.38_0.09_255)_0%,oklch(0.26_0.08_255)_48%,oklch(0.2_0.06_255)_100%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,oklch(0.78_0.12_85_/_0.12),transparent_42%)]"
        aria-hidden
      />
      <div
        className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/25 to-transparent"
        aria-hidden
      />

      {/* Soft brand watermark */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 w-[min(90vw,560px)] -translate-x-1/2 -translate-y-1/2 opacity-[0.06]"
      >
        <Image
          src={site.logoMarkSrc}
          alt=""
          width={874}
          height={578}
          priority
          className="h-auto w-full object-contain"
        />
      </div>

      <div
        className={cn(
          "relative z-10 flex h-full flex-col items-center justify-center px-6",
          "transition-[transform,opacity] duration-[850ms] ease-[cubic-bezier(0.4,0,0.2,1)]",
          exiting
            ? "translate-y-4 scale-[0.985] opacity-0"
            : "translate-y-0 scale-100 opacity-100"
        )}
      >
        <div className="animate-loader-rise flex flex-col items-center">
          <p className="mb-6 text-[0.7rem] font-semibold tracking-[0.28em] text-gold/90 uppercase">
            Since 2000
          </p>

          <div className="relative">
            <div
              aria-hidden
              className="absolute top-1/2 left-1/2 size-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-3xl sm:size-52"
            />
            <Image
              src={site.logoMarkSrc}
              alt={`${site.name} logo`}
              width={434}
              height={284}
              priority
              className="relative h-24 w-auto object-contain drop-shadow-[0_12px_40px_rgba(0,0,0,0.35)] sm:h-28"
            />
          </div>
        </div>

        <div className="animate-loader-rise-delay mt-8 max-w-sm text-center">
          <p className="font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {site.name}
          </p>
          <div className="mx-auto mt-4 h-px w-12 bg-gold/70" aria-hidden />
          <p className="mt-4 text-sm leading-relaxed text-white/65 sm:text-base">
            Modern cuts & care in Tagbilaran City
          </p>
        </div>

        <div
          className="animate-loader-rise-delay-2 mt-10 flex w-40 flex-col items-center gap-3 sm:w-48"
          aria-hidden
        >
          <div className="h-px w-full overflow-hidden bg-white/12">
            <div className="animate-loader-bar h-full w-2/5 bg-gradient-to-r from-transparent via-gold to-transparent" />
          </div>
          <p className="text-[0.65rem] font-medium tracking-[0.22em] text-white/40 uppercase">
            Loading
          </p>
        </div>
      </div>
    </div>
  );
}
