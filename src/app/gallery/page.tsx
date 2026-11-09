import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { Gallery } from "@/components/Gallery";
import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Container, Eyebrow } from "@/components/ui";
import { business, testimonials } from "@/data/site";

export const metadata: Metadata = {
  title: "Gallery & Testimonials",
  description: `Recent projects and client stories from around ${business.serviceArea}.`,
};

export default function GalleryPage() {
  return (
    <>
      <PageIntro
        eyebrow="Gallery & testimonials"
        title="The work, and the people who live with it."
        lead="Browse recent projects by trade, then hear from the homeowners themselves."
      />

      <section aria-label="Project gallery" className="py-14 sm:py-20">
        <Container>
          <Gallery />
        </Container>
      </section>

      <section aria-labelledby="testimonials" className="bg-surface py-20 sm:py-28">
        <Container>
          <Reveal>
            <Eyebrow>Kind words</Eyebrow>
            <h2 id="testimonials" className="mt-4 max-w-2xl text-[clamp(2.125rem,4.5vw,3.5rem)] leading-[1.05]">
              Ask the neighbours.
            </h2>
          </Reveal>
          <div className="mt-12 columns-1 gap-5 md:columns-2 lg:columns-3 [&>*]:mb-5 [&>*]:break-inside-avoid">
            {testimonials.map((testimonial, index) => (
              <Reveal key={testimonial.name} delay={(index % 3) * 0.06}>
                <TestimonialCard testimonial={testimonial} featured={index === 1} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand title="Your place could be next." />
    </>
  );
}
