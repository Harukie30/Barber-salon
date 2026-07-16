import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { reviews } from "@/lib/site-content";
import { Reveal } from "@/components/site/reveal";

export function Reviews() {
  return (
    <section id="reviews" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold tracking-wider text-primary uppercase">
            Reviews
          </p>
          <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            What clients say
          </h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Mock reviews for the demo — replace with real Google or Facebook feedback later.
          </p>
        </Reveal>

        <Reveal className="mt-12">
          <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <li key={review.name} className="space-y-4">
                <p className="text-base leading-relaxed text-foreground/90">
                  “{review.quote}”
                </p>
                <div className="flex items-center gap-3">
                  <Avatar size="sm">
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {review.initials}
                    </AvatarFallback>
                  </Avatar>
                  <p className="text-sm font-medium text-navy">{review.name}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
