import type { ReactNode } from "react";
import { PeakOutline } from "@/components/Peaks";
import { Reveal } from "@/components/Reveal";
import { Container, Eyebrow } from "@/components/ui";

export function PageIntro({ eyebrow, title, lead, children }: { eyebrow: string; title: string; lead: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-surface">
      <PeakOutline className="pointer-events-none absolute -right-16 -bottom-1 w-[34rem] max-w-[90%] text-peak-mid/25 lg:right-[6%] lg:w-[46rem]" />
      <Container className="relative pt-16 pb-16 sm:pt-24 sm:pb-24">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-5 max-w-4xl text-[clamp(2.5rem,6.5vw,5rem)] leading-[1.02]">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">{lead}</p>
          {children}
        </Reveal>
      </Container>
    </section>
  );
}
