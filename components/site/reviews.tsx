"use client";

import { useEffect, useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { reviews } from "@/lib/site-content";
import { Reveal } from "@/components/site/reveal";
import { cn } from "@/lib/utils";

export function Reviews() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const autoplay = useRef(
    Autoplay({
      delay: 4000,
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

  return (
    <section id="reviews" className="scroll-mt-20 overflow-hidden py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold tracking-wider text-primary uppercase">
            Reviews
          </p>
          <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            What clients say
          </h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Real talk from regulars in Tagbilaran — the kind of feedback that keeps us sharp.
          </p>
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
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-0.5" aria-hidden>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="size-3.5 fill-gold text-gold"
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground tabular-nums">
                  <span className="font-medium text-navy">{current + 1}</span>
                  <span className="mx-1.5 text-border">/</span>
                  <span>{count}</span>
                </p>
              </div>

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
                {reviews.map((review, index) => (
                  <CarouselItem
                    key={review.name}
                    className="basis-[88%] pl-3 sm:basis-[70%] sm:pl-4 md:basis-[55%] lg:basis-[46%]"
                  >
                    <blockquote
                      className={cn(
                        "flex h-full flex-col justify-between border-y border-border/70 py-8 transition-opacity duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] sm:py-10",
                        index === current ? "opacity-100" : "opacity-45"
                      )}
                    >
                      <div>
                        <span
                          aria-hidden
                          className="font-heading text-5xl leading-none text-gold/90 sm:text-6xl"
                        >
                          “
                        </span>
                        <p className="mt-2 font-heading text-xl font-medium leading-snug tracking-tight text-navy sm:text-2xl md:text-[1.65rem] md:leading-snug">
                          {review.quote}
                        </p>
                      </div>

                      <footer className="mt-8 flex items-center gap-3">
                        <Avatar size="lg">
                          <AvatarFallback className="bg-primary/10 font-medium text-primary">
                            {review.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <cite className="not-italic text-sm font-semibold text-navy">
                            {review.name}
                          </cite>
                          <p className="mt-0.5 text-xs text-muted-foreground">
                            Verified client
                          </p>
                        </div>
                      </footer>
                    </blockquote>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </div>

            <div className="mt-7 flex items-center justify-center gap-2 px-4 sm:mt-8">
              {reviews.map((review, index) => (
                <button
                  key={review.name}
                  type="button"
                  aria-label={`Go to review ${index + 1}`}
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
    </section>
  );
}
