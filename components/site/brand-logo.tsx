import Image from "next/image";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site-content";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
  /** Transparent oval mark (no white plate) — good on dark surfaces */
  variant?: "badge" | "mark";
};

export function BrandLogo({
  className,
  priority = false,
  variant = "badge",
}: BrandLogoProps) {
  if (variant === "mark") {
    return (
      <Image
        src={site.logoMarkSrc}
        alt={`${site.name} logo`}
        width={477}
        height={307}
        priority={priority}
        className={cn("h-10 w-auto max-w-none object-contain sm:h-12", className)}
      />
    );
  }

  // Oval-friendly plate — no overflow clip so left/right tips stay intact
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-2xl bg-white px-2.5 py-1.5 shadow-sm ring-1 ring-black/10",
        className
      )}
    >
      <Image
        src={site.logoMarkSrc}
        alt={`${site.name} logo`}
        width={477}
        height={307}
        priority={priority}
        className="h-full w-auto max-w-none object-contain"
      />
    </span>
  );
}
