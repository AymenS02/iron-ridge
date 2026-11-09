"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { gallery, services, showPlaceholderLabels, type GalleryItem } from "@/data/site";
import { SitePhoto } from "@/components/SitePhoto";
import { useDialog } from "@/components/useDialog";
import { cn } from "@/components/ui";

const filters = [{ slug: "all", name: "All work" }, ...services.map(({ slug, name }) => ({ slug, name }))];

// Repeating sizes keep the grid from reading as a uniform template.
const spans = ["col-span-2 row-span-2", "", "row-span-2", "", "col-span-2", "", "row-span-2", ""];

export function Gallery() {
  const [filter, setFilter] = useState("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const items = filter === "all" ? gallery : gallery.filter((item) => item.service === filter);
  const close = useCallback(() => setOpenIndex(null), []);

  return (
    <>
      <div role="group" aria-label="Filter projects by service" className="flex flex-wrap gap-2">
        {filters.map((option) => {
          const active = option.slug === filter;
          return (
            <button
              key={option.slug}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(option.slug)}
              className={cn(
                "relative min-h-11 cursor-pointer px-4 py-2 text-sm font-semibold transition-colors",
                active ? "text-on-action" : "text-foreground hover:text-accent",
              )}
            >
              {active && <motion.span layoutId="gallery-filter" className="absolute inset-0 bg-action" transition={{ duration: 0.25 }} />}
              <span className="relative">{option.name}</span>
            </button>
          );
        })}
      </div>

      <motion.ul layout className="mt-8 grid grid-flow-dense auto-rows-[10.5rem] grid-cols-2 gap-3 sm:auto-rows-[14rem] sm:gap-4 lg:auto-rows-[17rem] lg:grid-cols-4">
        <AnimatePresence mode="popLayout" initial={false}>
          {items.map((item, index) => (
            <motion.li
              key={item.title}
              layout
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.3 }}
              className={spans[index % spans.length]}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(index)}
                aria-label={`View larger photo: ${item.title}, ${item.location}`}
                className="group relative block size-full cursor-zoom-in overflow-hidden text-left"
              >
                <SitePhoto
                  image={item.image}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="size-full"
                  preload={index === 0}
                  imageClassName="transition-transform duration-500 motion-safe:group-hover:scale-105"
                  labelClassName="top-2 left-2"
                />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3 pt-10 text-white sm:p-4 sm:pt-12">
                  <span className="block leading-tight font-semibold">{item.title}</span>
                  <span className="block text-sm text-white/85">{item.location}</span>
                </span>
              </button>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>

      <AnimatePresence>
        {openIndex !== null && <Lightbox items={items} index={openIndex} onChange={setOpenIndex} onClose={close} />}
      </AnimatePresence>
    </>
  );
}

function Lightbox({ items, index, onChange, onClose }: { items: GalleryItem[]; index: number; onChange: (index: number) => void; onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  useDialog(ref, onClose);
  const item = items[index];
  const step = useCallback((by: number) => onChange((index + by + items.length) % items.length), [index, items.length, onChange]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "ArrowLeft") step(-1);
      if (event.key === "ArrowRight") step(1);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [step]);

  const control = "grid size-12 cursor-pointer place-items-center bg-white/10 text-white transition-colors hover:bg-white/25";

  return (
    <motion.div
      ref={ref}
      role="dialog"
      aria-modal="true"
      aria-label={`${item.title}, photo ${index + 1} of ${items.length}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex flex-col bg-black/95"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="flex items-center justify-between p-3 text-white">
        <p className="px-2 text-sm tabular-nums">
          {index + 1} / {items.length}
        </p>
        <button type="button" data-autofocus aria-label="Close photo" onClick={onClose} className={control}>
          <X aria-hidden className="size-6" />
        </button>
      </div>

      <div className="relative min-h-0 flex-1">
        <Image key={item.title} src={item.image.src} alt={item.image.alt} fill sizes="100vw" className="object-contain" />
      </div>

      <div className="flex items-center justify-between gap-4 p-3 text-white">
        <button type="button" aria-label="Previous photo" onClick={() => step(-1)} className={control}>
          <ChevronLeft aria-hidden className="size-6" />
        </button>
        <p className="min-w-0 text-center">
          <span className="block font-semibold">{item.title}</span>
          <span className="block text-sm text-white/75">
            {item.location}
            {showPlaceholderLabels && " · Placeholder photo"}
          </span>
        </p>
        <button type="button" aria-label="Next photo" onClick={() => step(1)} className={control}>
          <ChevronRight aria-hidden className="size-6" />
        </button>
      </div>
    </motion.div>
  );
}
