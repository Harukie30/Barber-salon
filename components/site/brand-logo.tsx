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
        width={434}
        height={284}
        priority={priority}
        className={cn("h-10 w-auto object-contain sm:h-12", className)}
      />
    );
  }

  // Oval-friendly plate: soft rounded rect, not a circle that clips the mark
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white px-1.5 py-1 shadow-sm ring-1 ring-black/10",
        className
      )}
    >
      <Image
        src={site.logoMarkSrc}
        alt={`${site.name} logo`}
        width={434}
        height={284}
        priority={priority}
        className="h-full w-auto object-contain"
      />
    </span>
  );
}
