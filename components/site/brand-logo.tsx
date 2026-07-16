import Image from "next/image";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site-content";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
};

export function BrandLogo({ className, priority = false }: BrandLogoProps) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-white p-0.5 shadow-sm ring-1 ring-black/10",
        className
      )}
    >
      <Image
        src={site.logoSrc}
        alt={`${site.name} logo`}
        width={160}
        height={160}
        priority={priority}
        className="h-full w-auto object-contain"
      />
    </span>
  );
}
