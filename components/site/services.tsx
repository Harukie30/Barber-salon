import { services } from "@/lib/site-content";
import { Reveal } from "@/components/site/reveal";

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold tracking-wider text-primary uppercase">
            Services
          </p>
          <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            What we offer
          </h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Clean cuts and care for hair, nails, brows, and more — priced for everyday Tagbilaran.
          </p>
        </Reveal>

        <Reveal className="mt-12">
          <ul className="divide-y divide-border/80 border-y border-border/80">
            {services.map((service) => (
              <li
                key={service.name}
                className="grid gap-2 py-6 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-8"
              >
                <div>
                  <h3 className="font-heading text-xl font-semibold text-navy">
                    {service.name}
                  </h3>
                  <p className="mt-1 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {service.description}
                  </p>
                </div>
                <p className="font-heading text-base font-medium text-primary sm:text-right">
                  {service.price}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
