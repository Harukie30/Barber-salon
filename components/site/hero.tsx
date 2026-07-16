import Image from "next/image";
import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { heroImage, site } from "@/lib/site-content";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-end overflow-hidden"
    >
      <Image
        src={heroImage.src}
        alt={heroImage.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/35"
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/50 to-transparent" aria-hidden />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-28 pt-32 sm:px-6 sm:pb-32 sm:pt-36 lg:px-8">
        <p className="animate-hero-rise font-heading text-4xl font-semibold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
          {site.name}
        </p>
        <h1 className="animate-hero-rise-delay mt-4 max-w-xl font-heading text-2xl font-medium tracking-tight text-white/95 sm:text-3xl md:text-4xl">
          {site.headline}
        </h1>
        <p className="animate-hero-rise-delay-2 mt-4 max-w-md text-base leading-relaxed text-white/80 sm:text-lg">
          {site.description}
        </p>
        <div className="animate-hero-rise-delay-2 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button
            nativeButton={false}
            render={<a href={site.phoneHref} />}
            size="lg"
            className="h-12 bg-gold px-6 text-base text-gold-foreground transition-transform hover:bg-gold/90 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Phone data-icon="inline-start" />
            Call Now
          </Button>
          <Button
            nativeButton={false}
            render={
              <a href={site.messengerHref} target="_blank" rel="noopener noreferrer" />
            }
            size="lg"
            variant="outline"
            className="h-12 border-white/50 bg-white/10 px-6 text-base text-white backdrop-blur-sm transition-transform hover:bg-white/20 hover:text-white hover:scale-[1.02] active:scale-[0.98]"
          >
            <MessageCircle data-icon="inline-start" />
            Book via Messenger
          </Button>
        </div>
      </div>
    </section>
  );
}
