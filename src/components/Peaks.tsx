import { cn } from "@/components/ui";

/** The three overlapping peaks from the logo. */
export function PeakMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 34" aria-hidden className={className}>
      <polygon points="2,34 20,10 38,34" className="fill-peak-back" />
      <polygon points="26,34 44,8 62,34" className="fill-peak-front" />
      <polygon points="14,34 32,2 50,34" className="fill-peak-mid" />
    </svg>
  );
}

/**
 * A jagged ridge line that sits on the top edge of a `relative` section and
 * overlaps whatever comes before it. Colour comes from `text-*`.
 */
export function RidgeEdge({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      aria-hidden
      className={cn("pointer-events-none absolute inset-x-0 bottom-full -mb-px h-10 w-full fill-current sm:h-16 lg:h-24", className)}
    >
      <path
        opacity="0.4"
        d="M0 120V70l130-46 170 72 190-82 150 66 200-74 180 78 170-60 250 78v18z"
      />
      <path d="M0 120V92l190-42 130 50 170-58 190 66 170-50 170 54 160-44 260 40v12z" />
    </svg>
  );
}

/** Large outlined peaks for quiet background texture. */
export function PeakOutline({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 640 340" fill="none" aria-hidden className={className}>
      <path d="M20 340 200 100l180 240" stroke="currentColor" strokeWidth="1.5" />
      <path d="M260 340 440 80l180 260" stroke="currentColor" strokeWidth="1.5" />
      <path d="M140 340 320 20l180 320" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
