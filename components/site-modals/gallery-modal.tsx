"use client";

import Image from "next/image";
import { useEffect } from "react";
import { ChevronLeft, ChevronRight, LayoutGrid, X } from "lucide-react";
import { gallery } from "@/lib/site-content";
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
          "flex max-h-[min(92vh,920px)] w-full max-w-[calc(100%-1.5rem)] flex-col gap-0 overflow-hidden rounded-2xl bg-background p-0 sm:max-w-4xl",
          "duration-300 data-open:fade-in-0 data-open:zoom-in-[0.98] data-closed:fade-out-0 data-closed:zoom-out-[0.98]",
          "ease-[cubic-bezier(0.32,0.72,0,1)]"
        )}
      >
        <DialogHeader className="flex-row items-center justify-between gap-3 border-b border-border/70 px-4 py-3 sm:px-5">
          <div className="min-w-0">
            <DialogTitle className="font-heading text-base font-semibold text-navy sm:text-lg">
              {focused ? "Photo" : "All photos"}
            </DialogTitle>
            <DialogDescription className="mt-0.5 text-xs sm:text-sm">
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
                className="hidden sm:inline-flex"
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
              onClick={() => onOpenChange(false)}
            >
              <X />
            </Button>
          </div>
        </DialogHeader>

        {focused && item ? (
          <div className="flex min-h-0 flex-1 flex-col">
            <div className="relative flex min-h-[52vh] flex-1 items-center justify-center bg-navy/95 px-12 py-6 sm:min-h-[60vh] sm:px-16">
              <Button
                type="button"
                variant="outline"
                size="icon"
                aria-label="Previous photo"
                className="absolute top-1/2 left-2 z-10 size-10 -translate-y-1/2 rounded-full border-white/20 bg-white/10 text-white hover:bg-white/20 hover:text-white sm:left-4"
                onClick={() =>
                  onActiveIndexChange(
                    (activeIndex - 1 + gallery.length) % gallery.length
                  )
                }
              >
                <ChevronLeft />
              </Button>

              <div className="relative h-[min(62vh,640px)] w-full max-w-md">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 90vw, 448px"
                  className="object-contain"
                  priority
                />
              </div>

              <Button
                type="button"
                variant="outline"
                size="icon"
                aria-label="Next photo"
                className="absolute top-1/2 right-2 z-10 size-10 -translate-y-1/2 rounded-full border-white/20 bg-white/10 text-white hover:bg-white/20 hover:text-white sm:right-4"
                onClick={() =>
                  onActiveIndexChange((activeIndex + 1) % gallery.length)
                }
              >
                <ChevronRight />
              </Button>
            </div>

            <div className="flex gap-2 overflow-x-auto border-t border-border/70 bg-background px-4 py-3 sm:px-5">
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="shrink-0 sm:hidden"
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
                    "relative aspect-[3/4] w-14 shrink-0 overflow-hidden bg-muted transition-opacity duration-300",
                    index === activeIndex
                      ? "opacity-100 ring-2 ring-gold ring-offset-2 ring-offset-background"
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
          <div className="min-h-0 flex-1 overflow-y-auto p-4 sm:p-5">
            <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3">
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
