"use client";

import Image from "next/image";
import { useEffect } from "react";
import { ChevronLeft, ChevronRight, LayoutGrid, X } from "lucide-react";
import { gallery, site } from "@/lib/site-content";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

type GalleryModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** When set, opens in focused lightbox mode at that index */
  activeIndex: number | null;
  onActiveIndexChange: (index: number | null) => void;
};

export function GalleryModal({
  open,
  onOpenChange,
  activeIndex,
  onActiveIndexChange,
}: GalleryModalProps) {
  const focused = activeIndex !== null;
  const item = focused ? gallery[activeIndex] : null;

  useEffect(() => {
    if (!open || activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        onActiveIndexChange(
          (activeIndex - 1 + gallery.length) % gallery.length
        );
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        onActiveIndexChange((activeIndex + 1) % gallery.length);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, activeIndex, onActiveIndexChange]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        className={cn(
          "relative flex max-h-[min(92vh,920px)] w-full max-w-[calc(100%-0.5rem)] flex-col gap-0 overflow-hidden rounded-2xl bg-background p-0 sm:max-w-4xl",
          "duration-300 data-open:fade-in-0 data-open:zoom-in-[0.98] data-closed:fade-out-0 data-closed:zoom-out-[0.98]",
          "ease-[cubic-bezier(0.32,0.72,0,1)]"
        )}
      >
        {/* Soft brand watermark behind the whole modal */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        >
          <Image
            src={site.logoMarkSrc}
            alt=""
            width={866}
            height={566}
            className="absolute top-1/2 left-1/2 w-[min(90%,520px)] -translate-x-1/2 -translate-y-1/2 object-contain opacity-[0.04]"
          />
        </div>

        <DialogHeader
          className={cn(
            "relative z-10 flex-row items-center justify-between gap-3 px-4 py-3 sm:px-5",
            focused
              ? "border-b border-white/10 bg-navy"
              : "border-b border-border/70 bg-background/80 backdrop-blur-sm"
          )}
        >
          <div className="min-w-0">
            <DialogTitle
              className={cn(
                "font-heading text-base font-semibold sm:text-lg",
                focused ? "text-white" : "text-navy"
              )}
            >
              {focused ? "Photo" : "All photos"}
            </DialogTitle>
            <DialogDescription
              className={cn(
                "mt-0.5 text-xs sm:text-sm",
                focused ? "text-white/65" : undefined
              )}
            >
              {focused && item
                ? `${activeIndex + 1} / ${gallery.length} · ${item.alt}`
                : `${gallery.length} photos from recent work`}
            </DialogDescription>
          </div>

          <div className="flex shrink-0 items-center gap-1.5">
            {focused && (
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="hidden border-white/25 bg-white/10 text-white hover:bg-white/20 hover:text-white sm:inline-flex"
                onClick={() => onActiveIndexChange(null)}
              >
                <LayoutGrid data-icon="inline-start" />
                View all
              </Button>
            )}
            <Button
              type="button"
              variant="ghost"
              size="icon-sm"
              aria-label="Close gallery"
              className={cn(
                focused && "text-white hover:bg-white/10 hover:text-white"
              )}
              onClick={() => onOpenChange(false)}
            >
              <X />
            </Button>
          </div>
        </DialogHeader>

        {focused && item ? (
          <div className="relative z-10 flex min-h-0 flex-1 flex-col">
            <div className="relative flex min-h-[52vh] flex-1 items-center justify-center overflow-hidden bg-white px-12 py-6 sm:min-h-[60vh] sm:px-16">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 flex items-center justify-center"
              >
                <Image
                  src={site.logoMarkSrc}
                  alt=""
                  width={874}
                  height={578}
                  className="h-[85%] w-[90%] max-w-none object-contain opacity-[0.07]"
                  priority
                />
              </div>

              <Button
                type="button"
                variant="outline"
                size="icon"
                aria-label="Previous photo"
                className="absolute top-1/2 left-2 z-10 size-10 -translate-y-1/2 rounded-full border-border/80 bg-background text-navy shadow-sm hover:bg-muted sm:left-4"
                onClick={() =>
                  onActiveIndexChange(
                    (activeIndex - 1 + gallery.length) % gallery.length
                  )
                }
              >
                <ChevronLeft />
              </Button>

              <div className="relative z-[1] h-[min(62vh,640px)] w-full max-w-md">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 90vw, 448px"
                  className="object-contain drop-shadow-md"
                  priority
                />
              </div>

              <Button
                type="button"
                variant="outline"
                size="icon"
                aria-label="Next photo"
                className="absolute top-1/2 right-2 z-10 size-10 -translate-y-1/2 rounded-full border-border/80 bg-background text-navy shadow-sm hover:bg-muted sm:right-4"
                onClick={() =>
                  onActiveIndexChange((activeIndex + 1) % gallery.length)
                }
              >
                <ChevronRight />
              </Button>
            </div>

            <div className="relative z-10 flex gap-2 overflow-x-auto border-t border-white/10 bg-navy px-4 py-3 sm:px-5">
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="shrink-0 border-white/25 bg-white/10 text-white hover:bg-white/20 hover:text-white sm:hidden"
                onClick={() => onActiveIndexChange(null)}
              >
                <LayoutGrid data-icon="inline-start" />
                All
              </Button>
              {gallery.map((thumb, index) => (
                <button
                  key={thumb.src}
                  type="button"
                  aria-label={`View ${thumb.alt}`}
                  aria-current={index === activeIndex ? "true" : undefined}
                  onClick={() => onActiveIndexChange(index)}
                  className={cn(
                    "relative aspect-[3/4] w-14 shrink-0 overflow-hidden bg-white/10 transition-opacity duration-300",
                    index === activeIndex
                      ? "opacity-100 ring-2 ring-gold ring-offset-2 ring-offset-navy"
                      : "opacity-55 hover:opacity-90"
                  )}
                >
                  <Image
                    src={thumb.src}
                    alt=""
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="relative z-10 min-h-0 flex-1 overflow-y-auto p-4 sm:p-5">
            <ul className="relative grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3">
              {gallery.map((photo, index) => (
                <li key={photo.src}>
                  <button
                    type="button"
                    onClick={() => onActiveIndexChange(index)}
                    className="group relative aspect-[3/4] w-full overflow-hidden bg-muted text-left outline-none focus-visible:ring-2 focus-visible:ring-gold"
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 640px) 45vw, 240px"
                      className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.04]"
                    />
                    <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/75 to-transparent px-2.5 pb-2.5 pt-10">
                      <span className="line-clamp-1 text-xs font-medium text-white">
                        {photo.alt}
                      </span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
