import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site-content";

export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border/80 bg-background/95 p-3 backdrop-blur-md md:hidden pb-[max(0.75rem,env(safe-area-inset-bottom))]">
      <div className="mx-auto grid max-w-lg grid-cols-2 gap-2">
        <Button
          nativeButton={false}
          render={<a href={site.phoneHref} />}
          variant="outline"
          className="h-11"
        >
          <Phone data-icon="inline-start" />
          Call
        </Button>
        <Button
          nativeButton={false}
          render={
            <a href={site.messengerHref} target="_blank" rel="noopener noreferrer" />
          }
          className="h-11 bg-gold text-gold-foreground hover:bg-gold/90"
        >
          <MessageCircle data-icon="inline-start" />
          Messenger
        </Button>
      </div>
    </div>
  );
}
