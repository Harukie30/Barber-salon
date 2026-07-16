import Image from "next/image";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site-content";

type BrandLogoProps = {
  className?: string;
  /** Knock out the black PNG canvas on dark surfaces */
  blend?: boolean;
  priority?: boolean;
};

export function BrandLogo({
  className,
  blend = false,
  priority = false,
}: BrandLogoProps) {
  return (
    <Image
      src={site.logoSrc}
      alt={`${site.name} logo`}
      width={160}
      height={160}
      priority={priority}
      className={cn(
        "h-10 w-auto object-contain sm:h-12",
        blend && "mix-blend-lighten",
        className
      )}
    />
  );
}
