import { Mail, Phone } from "lucide-react";
import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { FaqAccordion } from "@/components/FaqAccordion";
import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";
import { Container } from "@/components/ui";
import { business, faqs } from "@/data/site";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Straight answers about quotes, timelines, insurance, cleanup and the areas we serve.",
};

export default function FaqPage() {
  return (
    <>
      <PageIntro eyebrow="FAQ" title="Fair questions, straight answers." lead="The things most people ask before they hire a contractor. If yours isn't here, just ask." />

      <section className="py-16 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-8">
            <FaqAccordion items={faqs} />
          </Reveal>
          <aside className="lg:col-span-4">
            <div className="bg-surface p-7 sm:p-8 lg:sticky lg:top-44">
              <h2 className="text-2xl">Still wondering?</h2>
              <p className="mt-3 leading-relaxed text-muted">You will get {business.ownerFirstName}, not a call centre.</p>
              <a href={business.phoneHref} className="mt-6 flex items-center gap-3 text-lg font-semibold text-accent underline-offset-4 hover:underline">
                <Phone aria-hidden className="size-5 shrink-0" />
                {business.phone}
              </a>
              <a href={business.emailHref} className="mt-3 flex items-start gap-3 break-all text-accent underline-offset-4 hover:underline">
                <Mail aria-hidden className="mt-0.5 size-5 shrink-0" />
                {business.email}
              </a>
            </div>
          </aside>
        </Container>
      </section>

      <CtaBand title="Ready when you are." />
    </>
  );
}
