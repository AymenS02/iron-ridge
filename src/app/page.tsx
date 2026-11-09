import { ArrowRight, Handshake, FileText, ShieldCheck, Sparkles } from "lucide-react";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { PeakMark, RidgeEdge } from "@/components/Peaks";
import { Reveal } from "@/components/Reveal";
import { ServicesPreview } from "@/components/ServicesPreview";
import { SitePhoto } from "@/components/SitePhoto";
import { SampleTag } from "@/components/TestimonialCard";
import { ButtonLink, CallButton, Container, Eyebrow } from "@/components/ui";
import { about, business, featuredProjects, images, reasons, testimonials } from "@/data/site";

const ridgeClip = "[clip-path:polygon(0_30%,17%_12%,30%_25%,58%_0,76%_19%,100%_5%,100%_100%,0_100%)]";

const reasonIcons = { handshake: Handshake, quote: FileText, clean: Sparkles, shield: ShieldCheck };

export default function Home() {
  const testimonial = testimonials[0];

  return (
    <>
      <section className="relative overflow-hidden">
        <Container className="relative z-10 pt-14 sm:pt-20 lg:flex lg:min-h-[calc(100svh-7rem)] lg:items-center lg:pt-0 lg:pb-16">
          <div className="lg:w-[52%] lg:pr-8">
            <Reveal>
              <Eyebrow>{business.serviceArea}</Eyebrow>
              <h1 className="mt-6 text-[clamp(2.875rem,6vw,5.5rem)] leading-[1]">
                Built by someone you can <span className="text-accent">actually call.</span>
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
                Trusted local craftsmanship from {business.owner} and a small crew who treat your home the way they treat their own.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact">
                  Get a Free Quote
                  <ArrowRight aria-hidden className="size-4.5" />
                </ButtonLink>
                <CallButton />
              </div>
            </Reveal>
          </div>
        </Container>

        <div className="relative mt-10 h-[23rem] sm:h-[32rem] lg:absolute lg:inset-y-0 lg:right-0 lg:mt-0 lg:h-auto lg:w-[50vw]">
          <Reveal y={60} delay={0.15} className={`absolute inset-0 -translate-x-[6%] translate-y-[3%] bg-peak-back ${ridgeClip}`}>
            <span />
          </Reveal>
          <Reveal y={40} delay={0.08} className={`absolute inset-0 -translate-x-[2.5%] translate-y-[1.5%] bg-peak-mid ${ridgeClip}`}>
            <span />
          </Reveal>
          <div className={`absolute inset-0 ${ridgeClip}`}>
            <SitePhoto image={images.hero} sizes="(min-width: 1024px) 50vw, 100vw" preload className="size-full" labelClassName="right-2 bottom-2" />
          </div>
          <figure className="absolute bottom-5 left-5 max-w-[17rem] bg-background p-4 shadow-xl shadow-black/15 sm:p-5 lg:bottom-14 lg:-left-6">
            <blockquote className="font-heading text-lg leading-snug font-bold">“I answer my own phone. Always have.”</blockquote>
            <figcaption className="mt-1.5 text-sm text-muted">{business.owner}, owner</figcaption>
          </figure>
        </div>
      </section>

      <section aria-label="Towns we serve" className="border-y border-line bg-surface">
        <Container className="flex flex-wrap items-center gap-x-7 gap-y-2 py-5 text-sm font-medium text-muted">
          <PeakMark className="h-4 w-auto" />
          {business.towns.map((town) => (
            <span key={town}>{town}</span>
          ))}
        </Container>
      </section>

      <section className="py-20 sm:py-28 lg:py-36">
        <Container>
          <Reveal className="mb-12 max-w-3xl lg:mb-16">
            <Eyebrow>What we do</Eyebrow>
            <h2 className="mt-4 text-[clamp(2.125rem,4.8vw,3.75rem)] leading-[1.04]">Six trades. One person who answers for all of it.</h2>
          </Reveal>
          <ServicesPreview />
        </Container>
      </section>

      <section className="relative mt-10 bg-band pt-14 pb-24 text-on-band sm:pt-20 lg:pb-32">
        <RidgeEdge className="text-band" />
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <p className="text-xs font-semibold tracking-[0.2em] text-on-band-muted uppercase">Why Iron Ridge</p>
            <h2 className="mt-4 text-[clamp(2.25rem,5vw,4rem)] leading-[1.03]">Hiring a contractor shouldn&apos;t be a gamble.</h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-on-band-muted">
              You are letting someone into your home and trusting them with your savings. Here is what you can count on.
            </p>
          </Reveal>
          <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:col-span-7">
            {reasons.map((reason, index) => {
              const Icon = reasonIcons[reason.icon];
              return (
                <Reveal key={reason.title} delay={index * 0.06} className={index % 2 === 1 ? "sm:mt-14" : undefined}>
                  <div className="border-t border-white/30 pt-6">
                    <Icon aria-hidden className="size-7 text-brand-light" />
                    <h3 className="mt-4 text-2xl">{reason.title}</h3>
                    <p className="mt-2.5 leading-relaxed text-on-band-muted">{reason.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28 lg:py-36">
        <Container className="grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
          <Reveal className="relative pb-16 sm:pr-24 lg:col-span-6">
            <SitePhoto image={images.carpenter} sizes="(min-width: 1024px) 40vw, 90vw" className="aspect-[5/4]" />
            <div className="absolute right-0 bottom-0 w-[52%] border-8 border-background sm:w-[46%]">
              <SitePhoto image={images.plans} sizes="(min-width: 1024px) 20vw, 50vw" className="aspect-square" labelClassName="top-2 left-2" />
            </div>
            <PeakMark className="absolute bottom-3 left-0 h-9 w-auto" />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-6">
            <Eyebrow>Meet Hasib</Eyebrow>
            <h2 className="mt-4 text-[clamp(2.125rem,4.5vw,3.5rem)] leading-[1.05]">A local tradesman, not a big outfit.</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">{about.teaser}</p>
            <Link href="/about" className="group mt-7 inline-flex items-center gap-2 font-semibold text-accent underline-offset-4 hover:underline">
              Read Hasib&apos;s story
              <ArrowRight aria-hidden className="size-4.5 transition-transform motion-safe:group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </Container>
      </section>

      <section aria-labelledby="recent-work" className="bg-surface py-20 sm:py-24">
        <Container className="flex items-end justify-between gap-6">
          <Reveal>
            <Eyebrow>Recent work</Eyebrow>
            <h2 id="recent-work" className="mt-4 text-[clamp(1.875rem,4.5vw,3.5rem)] leading-[1.05]">Around the neighbourhood.</h2>
          </Reveal>
          <Link href="/gallery" className="hidden shrink-0 items-center gap-2 font-semibold text-accent underline-offset-4 hover:underline sm:inline-flex">
            See the gallery
            <ArrowRight aria-hidden className="size-4.5" />
          </Link>
        </Container>
        <ul
          tabIndex={0}
          aria-label="Featured projects, scrollable"
          className="mt-10 flex snap-x scroll-px-5 items-end gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:thin] sm:scroll-px-8 sm:gap-6 sm:px-8 lg:scroll-px-[max(3.5rem,calc((100vw-90rem)/2+3.5rem))] lg:px-[max(3.5rem,calc((100vw-90rem)/2+3.5rem))]"
        >
          {featuredProjects.map((project, index) => (
            <li key={project.title} className="w-[76vw] shrink-0 snap-start sm:w-[24rem] lg:w-[27rem]">
              <SitePhoto image={project.image} sizes="(min-width: 640px) 27rem, 76vw" className={index % 2 === 0 ? "aspect-[4/5]" : "aspect-[4/3]"} />
              <p className="mt-3 font-semibold">{project.title}</p>
              <p className="text-sm text-muted">{project.location}</p>
            </li>
          ))}
        </ul>
        <Container className="mt-6 sm:hidden">
          <Link href="/gallery" className="inline-flex items-center gap-2 font-semibold text-accent">
            See the gallery
            <ArrowRight aria-hidden className="size-4.5" />
          </Link>
        </Container>
      </section>

      <section className="pt-20 sm:pt-28 lg:pt-36">
        <Container className="grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-2">
            <PeakMark className="h-12 w-auto" />
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-9">
            <figure>
              <blockquote className="font-heading text-[clamp(1.75rem,3.8vw,3.25rem)] leading-[1.15] font-bold tracking-tight">“{testimonial.quote}”</blockquote>
              <figcaption className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-1">
                <span className="font-semibold">{testimonial.name}</span>
                <span className="text-muted">
                  {testimonial.project}, {testimonial.location}
                </span>
                <SampleTag />
              </figcaption>
            </figure>
          </Reveal>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
