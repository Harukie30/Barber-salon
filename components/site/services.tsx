import { MessageCircle } from "lucide-react";
import { services, site } from "@/lib/site-content";
import { Reveal } from "@/components/site/reveal";
import { Button } from "@/components/ui/button";

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 xl:gap-20">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-sm font-semibold tracking-wider text-primary uppercase">
              Services
            </p>
            <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-navy sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
              What we offer
            </h2>
            <p className="mt-4 max-w-md text-muted-foreground leading-relaxed">
              Clean cuts and care for hair, nails, brows, and more — priced for
              everyday Tagbilaran.
            </p>

            <div className="mt-8 hidden h-px w-16 bg-gold/80 lg:block" aria-hidden />

            <p className="mt-8 hidden max-w-sm text-sm text-muted-foreground lg:block">
              Not sure what you need? Message us and we&apos;ll point you to the
              right service.
            </p>

            <Button
              nativeButton={false}
              render={
                <a
                  href={site.messengerHref}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
              className="mt-6 bg-gold text-gold-foreground hover:bg-gold/90"
            >
              <MessageCircle data-icon="inline-start" />
              Book via Messenger
            </Button>
          </Reveal>

          <Reveal>
            <ul className="border-t border-border/80">
              {services.map((service, index) => (
                <li
                  key={service.name}
                  className="group border-b border-border/80 transition-colors duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-secondary/40"
                >
                  <div className="grid gap-3 py-6 sm:grid-cols-[3rem_1fr_auto] sm:items-baseline sm:gap-6 sm:py-7">
                    <span className="font-heading text-sm font-medium tracking-wider text-gold tabular-nums">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="min-w-0">
                      <h3 className="font-heading text-xl font-semibold tracking-tight text-navy transition-colors duration-500 group-hover:text-primary sm:text-2xl">
                        {service.name}
                      </h3>
                      <p className="mt-1.5 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
                        {service.description}
                      </p>
                    </div>

                    <p className="font-heading text-base font-semibold text-primary sm:text-right sm:text-lg">
                      {service.price}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
