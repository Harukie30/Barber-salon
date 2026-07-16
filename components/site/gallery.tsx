import Image from "next/image";
import { gallery } from "@/lib/site-content";
import { Reveal } from "@/components/site/reveal";

export function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-20 bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold tracking-wider text-primary uppercase">
            Gallery
          </p>
          <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            Recent work
          </h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            A look at the finishes we deliver — swap these for your real photos anytime.
          </p>
        </Reveal>

        <Reveal className="mt-12">
          <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
            {gallery.map((item) => (
              <li
                key={item.src}
                className="group relative aspect-[4/5] overflow-hidden bg-muted"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
