import { Check } from "lucide-react";
import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { PeakMark } from "@/components/Peaks";
import { Reveal } from "@/components/Reveal";
import { SitePhoto } from "@/components/SitePhoto";
import { Container, Eyebrow } from "@/components/ui";
import { about, business, images } from "@/data/site";

export const metadata: Metadata = {
  title: "About Hasib",
  description: `Meet ${business.owner}, the local tradesman behind ${business.name}.`,
};

export default function AboutPage() {
  return (
    <>
      <section className="overflow-hidden">
        <Container className="grid items-end gap-12 pt-16 sm:pt-24 lg:grid-cols-12 lg:gap-16">
          <Reveal className="pb-4 lg:col-span-6 lg:pb-24">
            <Eyebrow>About</Eyebrow>
            <h1 className="mt-5 text-[clamp(2.75rem,6.8vw,5.5rem)] leading-[1]">Hi, I&apos;m Hasib.</h1>
            <p className="mt-6 max-w-xl text-xl leading-relaxed text-muted">
              I run Iron Ridge Contracting, and I would like to be the last contractor you ever need to look for.
            </p>
          </Reveal>
          <Reveal y={36} className="lg:col-span-6">
            <SitePhoto
              image={images.carpenter}
              sizes="(min-width: 1024px) 50vw, 100vw"
              preload
              className="aspect-[4/3] [clip-path:polygon(0_22%,24%_6%,42%_20%,68%_0,100%_18%,100%_100%,0_100%)]"
              labelClassName="right-2 bottom-2"
            />
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-line py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <p className="font-heading border-l-4 border-peak-mid pl-6 text-[clamp(1.75rem,3.4vw,2.75rem)] leading-[1.12] font-bold tracking-tight">{about.pullQuote}</p>
          </Reveal>
          <Reveal delay={0.08} className="space-y-6 text-lg leading-relaxed lg:col-span-6 lg:col-start-7">
            <h2 className="text-3xl">My story</h2>
            {about.story.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="text-muted">
                {paragraph}
              </p>
            ))}
            <p className="font-semibold">{business.owner}</p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-surface py-20 sm:py-28">
        <Container>
          <Reveal>
            <Eyebrow>What I believe</Eyebrow>
            <h2 className="mt-4 max-w-2xl text-[clamp(2.125rem,4.5vw,3.5rem)] leading-[1.05]">Four rules I don&apos;t bend.</h2>
          </Reveal>
          <ol className="mt-12 grid gap-x-16 gap-y-10 md:grid-cols-2">
            {about.values.map((value, index) => (
              <li key={value.title} className={index % 2 === 1 ? "md:mt-16" : undefined}>
                <Reveal delay={index * 0.06} className="flex gap-6 border-t border-foreground/20 pt-6">
                  <span className="font-heading text-5xl font-black text-peak-mid tabular-nums">{index + 1}</span>
                  <div>
                    <h3 className="text-2xl">{value.title}</h3>
                    <p className="mt-2 text-lg leading-relaxed text-muted">{value.body}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="relative">
        <SitePhoto image={images.neighbourhood} sizes="100vw" className="h-[22rem] sm:h-[34rem] lg:h-[44rem]" labelClassName="top-2 right-2" />
        <Container>
          <Reveal className="relative bg-band p-8 text-on-band sm:p-12 lg:-mt-72 lg:w-1/2">
            <PeakMark className="h-8 w-auto [&_.fill-peak-front]:fill-white [&_.fill-peak-mid]:fill-brand-light [&_.fill-peak-back]:fill-white/40" />
            <h2 className="mt-5 text-[clamp(2rem,4vw,3.25rem)] leading-[1.05]">Hamilton is home.</h2>
            <p className="mt-5 text-lg leading-relaxed text-on-band-muted">{about.roots}</p>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-6">
            <Eyebrow>My commitment to you</Eyebrow>
            <h2 className="mt-4 text-[clamp(2.125rem,4.5vw,3.5rem)] leading-[1.05]">The job ends. The relationship doesn&apos;t.</h2>
            <ul className="mt-8 border-t border-line">
              {about.commitments.map((item) => (
                <li key={item} className="flex gap-3.5 border-b border-line py-4 text-lg">
                  <Check aria-hidden className="mt-1 size-5 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-6">
            <SitePhoto image={images.handshake} sizes="(min-width: 1024px) 45vw, 95vw" className="aspect-[4/3] [clip-path:polygon(0_0,100%_0,100%_100%,34%_100%,17%_90%,0_100%)]" labelClassName="top-2 right-2" />
          </Reveal>
        </Container>
      </section>

      <CtaBand title="I'd be glad to meet you." />
    </>
  );
}
