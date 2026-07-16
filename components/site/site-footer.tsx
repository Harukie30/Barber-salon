import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";
import { BrandLogo } from "@/components/site/brand-logo";
import { Separator } from "@/components/ui/separator";
import { navLinks, site } from "@/lib/site-content";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/80 bg-navy text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm space-y-3">
            <BrandLogo className="h-16 sm:h-20" />
            <p className="text-sm leading-relaxed text-white/75">
              {site.tagline}. Call or message us to book your next appointment.
            </p>
          </div>

          <div className="flex flex-col gap-6 sm:flex-row sm:gap-12">
            <div>
              <p className="mb-3 text-xs font-semibold tracking-wider text-gold uppercase">
                Explore
              </p>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/80 transition-colors hover:text-gold"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-3 text-xs font-semibold tracking-wider text-gold uppercase">
                Contact
              </p>
              <ul className="space-y-2 text-sm text-white/80">
                <li>
                  <a
                    href={site.phoneHref}
                    className="inline-flex items-center gap-2 transition-colors hover:text-gold"
                  >
                    <Phone className="size-3.5" />
                    {site.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a
                    href={site.messengerHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 transition-colors hover:text-gold"
                  >
                    <MessageCircle className="size-3.5" />
                    Facebook Messenger
                  </a>
                </li>
                <li>{site.city}</li>
              </ul>
            </div>
          </div>
        </div>

        <Separator className="bg-white/15" />

        <p className="text-center text-xs text-white/55 sm:text-left">
          © {new Date().getFullYear()} {site.name}. Demo landing page for Tagbilaran City.
        </p>
      </div>
    </footer>
  );
}
