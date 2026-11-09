import { Clock, Mail, MapPin, Phone } from "lucide-react";
import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageIntro } from "@/components/PageIntro";
import { PeakOutline } from "@/components/Peaks";
import { Reveal } from "@/components/Reveal";
import { Container } from "@/components/ui";
import { business } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Call ${business.phone} or send a note for a free quote in ${business.serviceArea}.`,
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Let's talk about your project."
        lead={`Call, email or fill in the form. ${business.ownerFirstName} usually gets back to people the same day.`}
      />

      <section className="pt-14 pb-36 sm:pt-20 lg:pb-48">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <ContactForm />
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-5">
            <aside aria-label="Contact details" className="relative overflow-hidden bg-band p-8 text-on-band sm:p-10">
              <PeakOutline className="pointer-events-none absolute -right-24 -bottom-2 w-[30rem] max-w-none text-white/10" />
              <div className="relative space-y-8">
                <div>
                  <h2 className="flex items-center gap-2.5 text-sm tracking-widest text-on-band-muted uppercase">
                    <Phone aria-hidden className="size-4" /> Phone
                  </h2>
                  <a href={business.phoneHref} className="font-heading mt-2 block text-[clamp(1.75rem,3.2vw,2.5rem)] leading-tight font-extrabold underline-offset-4 hover:underline">
                    {business.phone}
                  </a>
                </div>
                <div>
                  <h2 className="flex items-center gap-2.5 text-sm tracking-widest text-on-band-muted uppercase">
                    <Mail aria-hidden className="size-4" /> Email
                  </h2>
                  <a href={business.emailHref} className="mt-2 block text-lg font-semibold break-all underline-offset-4 hover:underline">
                    {business.email}
                  </a>
                </div>
                <div>
                  <h2 className="flex items-center gap-2.5 text-sm tracking-widest text-on-band-muted uppercase">
                    <MapPin aria-hidden className="size-4" /> Service area
                  </h2>
                  <p className="mt-2 text-lg font-semibold">{business.serviceArea}</p>
                  <p className="mt-1 leading-relaxed text-on-band-muted">{business.towns.join(", ")}</p>
                </div>
                <div>
                  <h2 className="flex items-center gap-2.5 text-sm tracking-widest text-on-band-muted uppercase">
                    <Clock aria-hidden className="size-4" /> Hours
                  </h2>
                  <dl className="mt-2 space-y-1.5">
                    {business.hours.map((row) => (
                      <div key={row.days} className="flex justify-between gap-4">
                        <dt>{row.days}</dt>
                        <dd className="text-right font-semibold">{row.time}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </aside>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
