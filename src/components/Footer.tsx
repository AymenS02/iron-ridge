import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { business, navigation, services, showPlaceholderLabels } from "@/data/site";
import { Logo } from "@/components/Logo";
import { RidgeEdge } from "@/components/Peaks";
import { Container } from "@/components/ui";

const columnHeading = "text-xs font-semibold tracking-[0.2em] text-white/60 uppercase";

export function Footer() {
  return (
    <footer className="relative bg-band-deep text-white">
      <RidgeEdge className="text-band-deep" />
      <Container className="grid gap-12 pt-16 pb-10 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Logo />
          <p className="mt-6 max-w-sm leading-relaxed text-white/75">
            Honest, local craftsmanship from {business.owner} and a small crew of trades he trusts.
          </p>
          <ul className="mt-8 space-y-3">
            <li>
              <a href={business.phoneHref} className="font-heading inline-flex items-center gap-3 text-2xl font-bold hover:text-brand-light sm:text-3xl">
                <Phone aria-hidden className="size-5 text-brand-light" />
                {business.phone}
              </a>
            </li>
            <li>
              <a href={business.emailHref} className="inline-flex items-center gap-3 break-all hover:text-brand-light">
                <Mail aria-hidden className="size-5 shrink-0 text-brand-light" />
                {business.email}
              </a>
            </li>
            <li className="flex items-center gap-3 text-white/75">
              <MapPin aria-hidden className="size-5 shrink-0 text-brand-light" />
              {business.serviceArea}
            </li>
          </ul>
        </div>

        <nav aria-label="Services" className="lg:col-span-3">
          <h2 className={columnHeading}>Services</h2>
          <ul className="mt-5 space-y-2.5">
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={`/services#${service.slug}`} className="text-white/85 hover:text-brand-light">
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Footer" className="lg:col-span-2">
          <h2 className={columnHeading}>Explore</h2>
          <ul className="mt-5 space-y-2.5">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/85 hover:text-brand-light">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-2">
          <h2 className={columnHeading}>Service area</h2>
          <ul className="mt-5 space-y-2.5 text-white/85">
            {business.towns.map((town) => (
              <li key={town}>{town}</li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/15">
        <Container className="flex flex-col gap-2 py-5 text-sm text-white/60 sm:flex-row sm:justify-between">
          <p>
            © {business.copyrightYear} {business.name}. All rights reserved.
          </p>
          {showPlaceholderLabels && <p>Design preview. Photos and reviews are placeholders.</p>}
        </Container>
      </div>
    </footer>
  );
}
