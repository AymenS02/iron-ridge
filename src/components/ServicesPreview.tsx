"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { services } from "@/data/site";
import { SitePhoto } from "@/components/SitePhoto";
import { cn } from "@/components/ui";

/** An editorial service list. Hovering or focusing a row swaps the large photo beside it. */
export function ServicesPreview() {
  const [active, setActive] = useState(0);

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
      <div className="relative hidden lg:col-span-5 lg:block">
        <div className="sticky top-44 aspect-[4/5] [clip-path:polygon(0_0,100%_0,100%_100%,34%_100%,17%_90%,0_100%)]">
          {services.map((service, index) => (
            <div
              key={service.slug}
              aria-hidden={index !== active}
              className={cn("absolute inset-0 transition-opacity duration-500", index === active ? "opacity-100" : "opacity-0")}
            >
              <SitePhoto image={service.image} sizes="40vw" className="size-full" labelClassName="top-2 right-2" />
            </div>
          ))}
        </div>
      </div>

      <ol className="border-t border-line lg:col-span-7">
        {services.map((service, index) => (
          <li key={service.slug} className="border-b border-line">
            <Link
              href={`/services#${service.slug}`}
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
              className="group flex items-center gap-5 py-6 sm:gap-8 sm:py-8"
            >
              <span className="w-6 shrink-0 text-sm font-medium text-muted tabular-nums">0{index + 1}</span>
              <span className="min-w-0 flex-1">
                <span className="font-heading block text-[clamp(1.625rem,3.6vw,2.75rem)] leading-tight font-extrabold tracking-tight transition-[color,translate] duration-300 group-hover:text-accent motion-safe:group-hover:translate-x-2">
                  {service.name}
                </span>
                <span className="mt-1.5 block leading-relaxed text-muted">{service.short}</span>
              </span>
              <SitePhoto image={service.image} sizes="96px" className="size-20 shrink-0 sm:size-24 lg:hidden [&>span]:hidden" />
              <ArrowRight
                aria-hidden
                className="hidden size-6 shrink-0 text-accent opacity-0 transition duration-300 group-hover:opacity-100 motion-safe:group-hover:translate-x-1 lg:block"
              />
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
