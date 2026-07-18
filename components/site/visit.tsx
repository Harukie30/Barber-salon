"use client";

import { useEffect, useState } from "react";
import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  branches,
  hours,
  mapsEmbedForAddress,
  site,
} from "@/lib/site-content";
import { Reveal } from "@/components/site/reveal";
import { cn } from "@/lib/utils";

export function Visit() {
  const [activeBranch, setActiveBranch] = useState(0);
  const [api, setApi] = useState<CarouselApi>();
  const [canScroll, setCanScroll] = useState(false);
  const branch = branches[activeBranch];
  const mapSrc = mapsEmbedForAddress(branch.mapQuery);

  useEffect(() => {
    if (!api) return;

    const sync = () => {
      setCanScroll(api.canScrollPrev() || api.canScrollNext());
    };

    sync();
    api.on("reInit", sync);
    api.on("select", sync);
    api.on("resize", sync);

    return () => {
      api.off("reInit", sync);
      api.off("select", sync);
      api.off("resize", sync);
    };
  }, [api]);

  const selectBranch = (index: number) => {
    setActiveBranch(index);
    api?.scrollTo(index);
  };

  return (
    <section id="visit" className="scroll-mt-20 bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold tracking-wider text-primary uppercase">
            Visit
          </p>
          <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            Find us in Tagbilaran
          </h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Hours, branches, map, and contact — tap a branch to move the map.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 sm:gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-x-14 lg:gap-y-12 xl:gap-x-16">
          <Reveal>
            <div className="mb-5 flex items-center gap-2.5">
              <Clock className="size-4 text-gold" aria-hidden />
              <h3 className="font-heading text-lg font-semibold tracking-tight text-navy sm:text-xl">
                Opening hours
              </h3>
            </div>
            <ul className="border-t border-border/80">
              {hours.map((row) => (
                <li
                  key={row.day}
                  className="flex items-baseline justify-between gap-6 border-b border-border/80 py-4 text-sm sm:text-base"
                >
                  <span className="text-muted-foreground">{row.day}</span>
                  <span className="font-heading font-semibold text-navy tabular-nums">
                    {row.time}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="lg:col-start-1">
            <Carousel
              setApi={setApi}
              orientation="vertical"
              opts={{
                align: "start",
                dragFree: true,
                containScroll: "trimSnaps",
              }}
              className="w-full"
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <MapPin className="size-4 text-gold" aria-hidden />
                  <h3 className="font-heading text-lg font-semibold tracking-tight text-navy sm:text-xl">
                    Branches
                  </h3>
                </div>

                {canScroll && (
                  <div className="flex items-center gap-1.5">
                    <CarouselPrevious
                      variant="outline"
                      size="icon-sm"
                      className="static size-8 translate-none rounded-full border-border/80 bg-background text-navy shadow-sm"
                    />
                    <CarouselNext
                      variant="outline"
                      size="icon-sm"
                      className="static size-8 translate-none rounded-full border-border/80 bg-background text-navy shadow-sm"
                    />
                  </div>
                )}
              </div>

              <p className="mb-3 text-xs text-muted-foreground">
                Drag or scroll to browse
                {branches.length > 2 ? ` all ${branches.length} branches` : ""}.
              </p>

              <div className="relative h-[min(26rem,58vh)]">
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 z-10 h-5 bg-gradient-to-b from-secondary/50 to-transparent"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-8 bg-gradient-to-t from-secondary/50 to-transparent"
                  aria-hidden
                />

                <CarouselContent className="-mt-3 h-full touch-pan-y">
                  {branches.map((item, index) => {
                    const selected = index === activeBranch;
                    return (
                      <CarouselItem
                        key={item.name}
                        className="basis-[48%] pt-3 sm:basis-[46%]"
                      >
                        <button
                          type="button"
                          onClick={() => selectBranch(index)}
                          aria-pressed={selected}
                          className={cn(
                            "relative grid h-full w-full gap-2 overflow-hidden rounded-xl border px-4 py-5 text-left sm:grid-cols-[3rem_1fr] sm:gap-5 sm:px-5",
                            "origin-center transition-[transform,box-shadow,background-color,border-color,opacity] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform",
                            "hover:-translate-y-1.5 hover:scale-[1.02] hover:border-gold/40 hover:bg-background hover:opacity-100 hover:shadow-[0_14px_30px_-12px_rgba(30,45,90,0.28)]",
                            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2",
                            selected
                              ? "-translate-y-1.5 scale-[1.02] border-gold bg-background opacity-100 shadow-[0_16px_34px_-10px_rgba(30,45,90,0.35)] ring-2 ring-gold/45"
                              : "border-border/70 bg-background/50 opacity-75 shadow-none"
                          )}
                        >
                          {selected && (
                            <span
                              aria-hidden
                              className="absolute inset-y-0 left-0 w-1 bg-gold"
                            />
                          )}
                          <span
                            className={cn(
                              "font-heading text-sm font-medium tracking-wider tabular-nums",
                              selected ? "text-gold" : "text-gold/80"
                            )}
                          >
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <div>
                            <p
                              className={cn(
                                "font-heading text-lg font-semibold tracking-tight",
                                selected ? "text-primary" : "text-navy"
                              )}
                            >
                              {item.name}
                            </p>
                            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                              {item.address}
                            </p>
                            <p className="mt-1 text-sm text-muted-foreground">
                              {item.type} ·{" "}
                              <a
                                href={item.phoneHref}
                                onClick={(event) => event.stopPropagation()}
                                className="font-medium text-navy transition-colors hover:text-gold"
                              >
                                {item.phoneDisplay}
                              </a>
                            </p>
                            <p
                              className={cn(
                                "mt-2 text-xs font-semibold tracking-wider uppercase",
                                selected ? "text-gold" : "text-primary"
                              )}
                            >
                              {item.note}
                              {selected ? " · Showing on map" : ""}
                            </p>
                          </div>
                        </button>
                      </CarouselItem>
                    );
                  })}
                </CarouselContent>
              </div>
            </Carousel>
          </Reveal>

          {/* Mobile: after branches. Desktop: right column spanning content height */}
          <Reveal className="flex min-h-[320px] flex-col sm:min-h-[360px] lg:col-start-2 lg:row-span-3 lg:row-start-1 lg:min-h-full lg:self-stretch">
            <div className="flex items-center justify-between gap-3 bg-navy px-4 py-3 sm:px-5">
              <div className="min-w-0">
                <p className="truncate font-heading text-sm font-semibold text-white">
                  {branch.name}
                </p>
                <p className="truncate text-xs text-white/60">{branch.address}</p>
              </div>
              <MapPin className="size-4 shrink-0 text-gold" aria-hidden />
            </div>
            <div className="relative min-h-[280px] flex-1 overflow-hidden bg-muted sm:min-h-[320px] lg:min-h-0">
              <iframe
                key={mapSrc}
                title={`Map — ${branch.name}`}
                src={mapSrc}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>

          <Reveal className="lg:col-start-1">
            <h3 className="font-heading text-lg font-semibold tracking-tight text-navy sm:text-xl">
              Contact
            </h3>
            <div className="mt-4 space-y-1.5">
              <a
                href={site.phoneHref}
                className="block font-heading text-base font-medium text-navy transition-colors hover:text-gold"
              >
                {site.phoneDisplay}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="block text-sm text-muted-foreground transition-colors hover:text-navy"
              >
                {site.email}
              </a>
              <p className="pt-1 text-sm text-muted-foreground">{site.city}</p>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button
                nativeButton={false}
                render={<a href={site.phoneHref} />}
                className="bg-gold text-gold-foreground hover:bg-gold/90"
              >
                <Phone data-icon="inline-start" />
                Click to Call
              </Button>
              <Button
                nativeButton={false}
                render={
                  <a
                    href={site.messengerHref}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
                variant="outline"
                className="border-border/80 bg-background"
              >
                <MessageCircle data-icon="inline-start" />
                Book via Messenger
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
