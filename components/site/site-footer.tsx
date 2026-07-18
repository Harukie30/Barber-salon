import Link from "next/link";
import { Phone } from "lucide-react";
import { BrandLogo } from "@/components/site/brand-logo";
import { Separator } from "@/components/ui/separator";
import { navLinks, site, socialLinks } from "@/lib/site-content";
import { cn } from "@/lib/utils";

function SocialIcon({
  network,
  className,
}: {
  network: (typeof socialLinks)[number]["network"];
  className?: string;
}) {
  const iconClass = cn("size-4", className);

  if (network === "facebook") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={iconClass}>
        <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14C17.174 2.097 15.943 2 14.643 2 11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z" />
      </svg>
    );
  }

  if (network === "instagram") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={iconClass}>
        <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5zm5.25-3.25a1 1 0 1 1-1 1 1 1 0 0 1 1-1z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={iconClass}>
      <path d="M14.5 3.5c.4 2.2 1.7 3.7 3.9 4.1v2.3c-1.3-.05-2.5-.4-3.6-1v5.7c0 3.4-2.7 5.9-6.2 5.9S2.5 17.9 2.5 14.5 5.1 8.6 8.6 8.6c.4 0 .8 0 1.2.1v2.4a3.7 3.7 0 0 0-1.1-.2c-2 0-3.5 1.6-3.5 3.6s1.6 3.6 3.5 3.6 3.4-1.5 3.4-3.6V3.5h2.4z" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/80 bg-navy text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm space-y-4">
            <BrandLogo className="h-16 sm:h-20" />
            <p className="text-sm leading-relaxed text-white/75">
              {site.tagline}. Call or message us to book your next appointment.
            </p>

            <div>
              <p className="mb-3 text-xs font-semibold tracking-wider text-gold uppercase">
                Follow us
              </p>
              <ul className="flex items-center gap-2.5">
                {socialLinks.map((social) => (
                  <li key={social.network}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      title={social.label}
                      className="inline-flex size-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/85 transition-colors duration-300 hover:border-gold/50 hover:bg-gold/15 hover:text-gold"
                    >
                      <SocialIcon network={social.network} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
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
                    href={`mailto:${site.email}`}
                    className="transition-colors hover:text-gold"
                  >
                    {site.email}
                  </a>
                </li>
                <li>{site.city}</li>
              </ul>
            </div>
          </div>
        </div>

        <Separator className="bg-white/15" />

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-center text-xs text-white/55 sm:text-left">
            © {new Date().getFullYear()} {site.name}. Demo landing page for Tagbilaran
            City.
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 sm:justify-end">
            {socialLinks.map((social) => (
              <li key={social.network}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-white/55 transition-colors hover:text-gold"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
