import { Mail, MapPin, Phone } from "lucide-react";
import { business } from "@/data/site";
import { Container } from "@/components/ui";

export function ContactBar() {
  return (
    <div className="bg-band-deep text-white">
      <Container className="flex flex-wrap items-center justify-center gap-x-5 gap-y-0.5 py-1.5 text-xs sm:justify-between sm:text-[0.8125rem]">
        <p className="hidden items-center gap-2 text-white/80 sm:flex">
          <MapPin aria-hidden className="size-3.5" />
          Serving {business.serviceArea}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-0.5">
          <a href={business.phoneHref} className="inline-flex items-center gap-1.5 font-semibold hover:underline">
            <Phone aria-hidden className="size-3.5" />
            {business.phone}
          </a>
          <a href={business.emailHref} className="inline-flex items-center gap-1.5 hover:underline">
            <Mail aria-hidden className="size-3.5" />
            {business.email}
          </a>
        </div>
      </Container>
    </div>
  );
}
