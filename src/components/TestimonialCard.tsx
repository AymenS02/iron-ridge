import { showPlaceholderLabels } from "@/data/site";
import { cn } from "@/components/ui";

export type Testimonial = { quote: string; name: string; location: string; project: string };

export function SampleTag({ className }: { className?: string }) {
  if (!showPlaceholderLabels) return null;
  return <span className={cn("text-[0.6875rem] font-medium tracking-wide uppercase opacity-70", className)}>Sample review</span>;
}

export function TestimonialCard({ testimonial, featured }: { testimonial: Testimonial; featured?: boolean }) {
  return (
    <figure className={cn("p-7 sm:p-8", featured ? "bg-band text-on-band" : "border border-line bg-background")}>
      <blockquote className={cn("leading-relaxed", featured ? "font-heading text-2xl leading-snug font-bold" : "text-lg")}>
        “{testimonial.quote}”
      </blockquote>
      <figcaption className="mt-6 flex items-end justify-between gap-4">
        <span>
          <span className="block font-semibold">{testimonial.name}</span>
          <span className={cn("block text-sm", featured ? "text-on-band-muted" : "text-muted")}>
            {testimonial.project}, {testimonial.location}
          </span>
        </span>
        <SampleTag className="shrink-0" />
      </figcaption>
    </figure>
  );
}
