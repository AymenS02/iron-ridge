import { ArrowRight, Check } from "lucide-react";
import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";
import { ServiceIcon } from "@/components/ServiceIcon";
import { SitePhoto } from "@/components/SitePhoto";
import { ButtonLink, cn, Container } from "@/components/ui";
import { business, services, type Service } from "@/data/site";

export const metadata: Metadata = {
  title: "Services",
  description: `Renovations, kitchen cabinets, flooring, drywall, bricklaying and interlocking across ${business.serviceArea}.`,
};

function ServiceDetails({ service, index }: { service: Service; index: number }) {
  return (
    <>
      <div className="flex items-center gap-4">
        <span className="grid size-14 place-items-center bg-action text-on-action">
          <ServiceIcon name={service.icon} className="size-7" />
        </span>
        <span className="text-sm font-medium text-muted tabular-nums">
          0{index + 1} / 0{services.length}
        </span>
      </div>
      <h2 className="mt-5 text-[clamp(2.125rem,4.2vw,3.25rem)] leading-[1.05]">{service.name}</h2>
      <p className="mt-5 text-lg leading-relaxed text-muted">{service.description}</p>
      <h3 className="mt-7 text-sm tracking-wide uppercase">What&apos;s included</h3>
      <ul className="mt-3 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
        {service.included.map((item) => (
          <li key={item} className="flex gap-2.5">
            <Check aria-hidden className="mt-1 size-4.5 shrink-0 text-accent" />
            {item}
          </li>
        ))}
      </ul>
      <ButtonLink href="/contact" variant="outline" className="mt-8">
        Ask about {service.name.toLowerCase()}
        <ArrowRight aria-hidden className="size-4.5" />
      </ButtonLink>
    </>
  );
}

function SplitService({ service, index, flip }: { service: Service; index: number; flip: boolean }) {
  return (
    <section id={service.slug} className={cn("py-20 sm:py-28", flip && "bg-surface")}>
      <Container className="grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
        <Reveal className={cn("relative pb-14 lg:col-span-7", flip ? "lg:order-2 sm:pl-20" : "sm:pr-20")}>
          <SitePhoto image={service.image} sizes="(min-width: 1024px) 55vw, 95vw" className="aspect-[4/3]" />
          <div className={cn("absolute bottom-0 w-[42%] border-8", flip ? "left-0 border-surface" : "right-0 border-background")}>
            <SitePhoto image={service.secondaryImage} sizes="(min-width: 1024px) 22vw, 45vw" className="aspect-[5/4]" labelClassName="top-2 left-2" />
          </div>
        </Reveal>
        <Reveal delay={0.08} className={cn("lg:col-span-5", flip && "lg:order-1")}>
          <ServiceDetails service={service} index={index} />
        </Reveal>
      </Container>
    </section>
  );
}

function WideService({ service, index }: { service: Service; index: number }) {
  return (
    <section id={service.slug} className="lg:pb-24">
      <SitePhoto image={service.image} sizes="100vw" className="h-[20rem] sm:h-[30rem] lg:h-[42rem]" imageClassName="object-bottom" labelClassName="top-2 right-2" />
      <Container>
        <Reveal className="relative bg-background py-12 sm:p-12 lg:-mt-[30rem] lg:ml-auto lg:w-[52%] lg:p-14 lg:shadow-2xl lg:shadow-black/20">
          <ServiceDetails service={service} index={index} />
        </Reveal>
      </Container>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Services"
        title="If it's part of your home, we can build it right."
        lead={`From the first wall that comes down to the last stone in the driveway. Here is what ${business.ownerFirstName} and the crew take on across ${business.serviceArea}.`}
      >
        <nav aria-label="Jump to a service" className="mt-9 flex flex-wrap gap-2">
          {services.map((service) => (
            <a key={service.slug} href={`#${service.slug}`} className="border border-foreground/25 bg-background px-3.5 py-2 text-sm font-medium transition-colors hover:border-accent hover:text-accent">
              {service.name}
            </a>
          ))}
        </nav>
      </PageIntro>

      {services.map((service, index) =>
        index % 3 === 2 ? (
          <WideService key={service.slug} service={service} index={index} />
        ) : (
          <SplitService key={service.slug} service={service} index={index} flip={index % 3 === 1} />
        ),
      )}

      <CtaBand title="Not sure where to start?" />
    </>
  );
}
