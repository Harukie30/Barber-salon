"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, MessageCircle, Phone } from "lucide-react";
import { BrandLogo } from "@/components/site/brand-logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { navLinks, site } from "@/lib/site-content";

export function SiteHeader() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let scrolledState = window.scrollY > 24;
    let hiddenState = false;
    let lockUntil = 0;
    const directionThreshold = 18;
    const scrolledOn = 64;
    const scrolledOff = 16;
    const hideAfter = 160;
    // Match the longer CSS glide so it doesn't snap reverse mid-motion
    const motionMs = 780;

    const onScroll = () => {
      const y = Math.max(0, window.scrollY);
      const delta = y - lastY;
      const now = performance.now();

      const nextScrolled = scrolledState
        ? y > scrolledOff
        : y > scrolledOn;

      if (nextScrolled !== scrolledState) {
        scrolledState = nextScrolled;
        setScrolled(nextScrolled);
      }

      let nextHidden = hiddenState;
      if (y < hideAfter) {
        nextHidden = false;
        lastY = y;
      } else if (now >= lockUntil && Math.abs(delta) > directionThreshold) {
        nextHidden = delta > 0;
        lastY = y;
      }

      if (nextHidden !== hiddenState) {
        hiddenState = nextHidden;
        lockUntil = now + motionMs;
        setHidden(nextHidden);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 will-change-transform transition-[transform,opacity,background-color,border-color,box-shadow] duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]",
        hidden
          ? "pointer-events-none -translate-y-full opacity-0"
          : "translate-y-0 opacity-100",
        scrolled
          ? "border-b border-border/70 bg-background/90 shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        <Link href="#top" className="shrink-0" aria-label={site.name}>
          <BrandLogo priority className="h-11 sm:h-14" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors duration-700 hover:text-gold",
                scrolled ? "text-navy/85" : "text-white/85"
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button
            nativeButton={false}
            render={<a href={site.phoneHref} />}
            variant="outline"
            size="sm"
            className={cn(
              "transition-colors duration-700",
              scrolled
                ? "border-border bg-background text-navy hover:bg-muted"
                : "border-white/40 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
            )}
          >
            <Phone data-icon="inline-start" />
            Call
          </Button>
          <Button
            nativeButton={false}
            render={<a href={site.messengerHref} target="_blank" rel="noopener noreferrer" />}
            size="sm"
            className="bg-gold text-gold-foreground hover:bg-gold/90"
          >
            <MessageCircle data-icon="inline-start" />
            Book
          </Button>
        </div>

        <Sheet>
          <SheetTrigger
            render={
              <Button
                variant="outline"
                size="icon"
                className={cn(
                  "md:hidden transition-colors duration-700",
                  scrolled
                    ? "border-border bg-background text-navy hover:bg-muted"
                    : "border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white"
                )}
              />
            }
          >
            <Menu />
            <span className="sr-only">Open menu</span>
          </SheetTrigger>
          <SheetContent side="right" className="gap-0">
            <SheetHeader className="animate-sheet-item border-b border-border">
              <SheetTitle className="sr-only">{site.name}</SheetTitle>
              <BrandLogo className="h-14 w-auto self-start" />
            </SheetHeader>
            <nav className="flex flex-col gap-1 p-4">
              {navLinks.map((link, index) => (
                <SheetClose
                  key={link.href}
                  render={
                    <a
                      href={link.href}
                      style={{ animationDelay: `${120 + index * 60}ms` }}
                      className="animate-sheet-item rounded-md px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted"
                    />
                  }
                >
                  {link.label}
                </SheetClose>
              ))}
            </nav>
            <div
              style={{ animationDelay: `${120 + navLinks.length * 60}ms` }}
              className="animate-sheet-item mt-auto flex flex-col gap-2 border-t border-border p-4"
            >
              <Button
                nativeButton={false}
                render={<a href={site.phoneHref} />}
                variant="outline"
                className="w-full"
              >
                <Phone data-icon="inline-start" />
                Call {site.phoneDisplay}
              </Button>
              <Button
                nativeButton={false}
                render={
                  <a href={site.messengerHref} target="_blank" rel="noopener noreferrer" />
                }
                className="w-full bg-gold text-gold-foreground hover:bg-gold/90"
              >
                <MessageCircle data-icon="inline-start" />
                Book via Messenger
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
