"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { LayoutGrid } from "lucide-react";
import { gallery } from "@/lib/site-content";
import { Reveal } from "@/components/site/reveal";
import { GalleryModal } from "@/components/site-modals/gallery-modal";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

export function Gallery() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const autoplay = useRef(
    Autoplay({
      delay: 1500,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  useEffect(() => {
    if (!api) return;

    const sync = () => {
      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap());
    };

    sync();
    api.on("reInit", sync);
    api.on("select", sync);

    return () => {
      api.off("reInit", sync);
      api.off("select", sync);
    };
  }, [api]);

  useEffect(() => {
    if (!api) return;

    if (modalOpen) {
      autoplay.current.stop();
    } else {
      autoplay.current.play();
    }
  }, [api, modalOpen]);

  const openAll = () => {
    setActiveIndex(null);
    setModalOpen(true);
  };

  const openAt = (index: number) => {
    setActiveIndex(index);
    setModalOpen(true);
  };

  return (
    <section id="gallery" className="scroll-mt-20 overflow-hidden bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold tracking-wider text-primary uppercase">
                Gallery
              </p>
              <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
                Recent work
              </h2>
              <p className="mt-3 max-w-xl text-muted-foreground">
                A look at the finishes we deliver — swipe, tap a photo, or view everything.
              </p>
            </div>

            <Button
              type="button"
              variant="outline"
              onClick={openAll}
              className="self-start border-border/80 bg-background text-navy shadow-sm"
            >
              <LayoutGrid data-icon="inline-start" />
              View all
            </Button>
          </div>
        </Reveal>

        <Reveal className="mt-10 sm:mt-12">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[autoplay.current]}
            className="w-full"
          >
            <div className="mb-5 flex items-center justify-between gap-4 px-4 sm:mb-6 sm:px-6 lg:px-8">
              <p className="text-sm text-muted-foreground tabular-nums">
                <span className="font-medium text-navy">{current + 1}</span>
                <span className="mx-1.5 text-border">/</span>
                <span>{count}</span>
              </p>
              <div className="flex items-center gap-2">
                <CarouselPrevious
                  variant="outline"
                  size="icon"
                  className="static size-10 translate-none rounded-full border-border/80 bg-background text-navy shadow-sm transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-muted hover:scale-[1.03] active:scale-[0.97]"
                />
                <CarouselNext
                  variant="outline"
                  size="icon"
                  className="static size-10 translate-none rounded-full border-border/80 bg-background text-navy shadow-sm transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-muted hover:scale-[1.03] active:scale-[0.97]"
                />
              </div>
            </div>

            <div className="pl-4 sm:pl-6 lg:pl-8">
              <CarouselContent className="-ml-3 sm:-ml-4">
                {gallery.map((item, index) => (
                  <CarouselItem
                    key={item.src}
                    className="basis-[82%] pl-3 sm:basis-[52%] sm:pl-4 md:basis-[40%] lg:basis-[34%]"
                  >
                    <button
                      type="button"
                      onClick={() => openAt(index)}
                      className={cn(
                        "group relative aspect-[3/4] w-full overflow-hidden bg-muted text-left transition-opacity duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2",
                        index === current ? "opacity-100" : "opacity-70"
                      )}
                    >
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        sizes="(max-width: 640px) 82vw, (max-width: 768px) 52vw, (max-width: 1024px) 40vw, 34vw"
                        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.04]"
                        priority={index < 2}
                      />
                      <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/80 via-navy/30 to-transparent px-4 pb-4 pt-20">
                        <span className="block text-sm font-medium text-white">
                          {item.alt}
                        </span>
                      </span>
                    </button>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </div>

            <div className="mt-7 flex items-center justify-center gap-2 px-4 sm:mt-8">
              {gallery.map((item, index) => (
                <button
                  key={item.src}
                  type="button"
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={index === current ? "true" : undefined}
                  onClick={() => api?.scrollTo(index)}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
                    index === current
                      ? "w-7 bg-gold"
                      : "w-1.5 bg-navy/25 hover:bg-navy/45"
                  )}
                />
              ))}
            </div>
          </Carousel>
        </Reveal>
      </div>

      <GalleryModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        activeIndex={activeIndex}
        onActiveIndexChange={setActiveIndex}
      />
    </section>
  );
}
