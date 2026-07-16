import { Gallery } from "@/components/site/gallery";
import { Hero } from "@/components/site/hero";
import { MobileCtaBar } from "@/components/site/mobile-cta";
import { Reviews } from "@/components/site/reviews";
import { Services } from "@/components/site/services";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { Visit } from "@/components/site/visit";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 pb-20 md:pb-0">
        <Hero />
        <Services />
        <Gallery />
        <Reviews />
        <Visit />
      </main>
      <SiteFooter />
      <MobileCtaBar />
    </>
  );
}
