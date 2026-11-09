import { Mail } from "lucide-react";
import { business } from "@/data/site";
import { PeakOutline, RidgeEdge } from "@/components/Peaks";
import { Reveal } from "@/components/Reveal";
import { ButtonLink, CallButton, Container } from "@/components/ui";

export function CtaBand({ title = "Let's talk about your place." }: { title?: string }) {
  return (
    <section className="relative mt-16 bg-band pb-32 text-on-band sm:mt-24 lg:pb-44">
      <RidgeEdge className="text-band" />
      <div className="absolute inset-0 overflow-hidden">
        <PeakOutline className="absolute right-[-12%] bottom-16 w-[60rem] max-w-none text-white/10" />
      </div>
      <Container className="relative pt-14 sm:pt-20">
        <Reveal>
          <h2 className="max-w-3xl text-[clamp(2.5rem,6vw,4.75rem)] leading-[1.02]">{title}</h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-on-band-muted">
            Tell {business.ownerFirstName} what you have in mind. You will get a straight answer and a written quote, with no pressure either way.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact" variant="onBand">
              Get a Free Quote
            </ButtonLink>
            <CallButton variant="outlineOnBand" />
          </div>
          <a href={business.emailHref} className="mt-6 inline-flex items-center gap-2 break-all underline-offset-4 hover:underline">
            <Mail aria-hidden className="size-4 shrink-0" />
            {business.email}
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
