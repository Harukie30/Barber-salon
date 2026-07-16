import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { branches, hours, mapsEmbedUrl, site } from "@/lib/site-content";
import { Reveal } from "@/components/site/reveal";

export function Visit() {
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
            Hours, branches, map, and contact — everything you need to drop by or book ahead.
          </p>
        </Reveal>

        <Reveal className="mt-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-10">
              <div>
                <div className="mb-4 flex items-center gap-2 text-navy">
                  <Clock className="size-4 text-primary" />
                  <h3 className="font-heading text-lg font-semibold">Opening hours</h3>
                </div>
                <ul className="space-y-3">
                  {hours.map((row) => (
                    <li
                      key={row.day}
                      className="flex items-baseline justify-between gap-4 text-sm sm:text-base"
                    >
                      <span className="text-muted-foreground">{row.day}</span>
                      <span className="font-medium text-navy">{row.time}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Separator />

              <div>
                <div className="mb-4 flex items-center gap-2 text-navy">
                  <MapPin className="size-4 text-primary" />
                  <h3 className="font-heading text-lg font-semibold">Branches</h3>
                </div>
                <ul className="space-y-5">
                  {branches.map((branch) => (
                    <li key={branch.name}>
                      <p className="font-medium text-navy">{branch.name}</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {branch.address}
                      </p>
                      <p className="mt-0.5 text-xs font-medium tracking-wide text-primary uppercase">
                        {branch.note}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <Separator />

              <div>
                <h3 className="font-heading text-lg font-semibold text-navy">Contact</h3>
                <p className="mt-2 text-sm text-muted-foreground">{site.phoneDisplay}</p>
                <p className="text-sm text-muted-foreground">{site.email}</p>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
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
                  >
                    <MessageCircle data-icon="inline-start" />
                    Book via Messenger
                  </Button>
                </div>
              </div>
            </div>

            <div className="overflow-hidden border border-border/80 bg-muted shadow-sm">
              <iframe
                title="Moely Boley on Google Maps — Tagbilaran City"
                src={mapsEmbedUrl}
                className="h-[320px] w-full border-0 sm:h-[420px] lg:h-full lg:min-h-[480px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
