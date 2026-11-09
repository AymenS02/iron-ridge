import { PeakMark } from "@/components/Peaks";
import { cn } from "@/components/ui";

// PLACEHOLDER: stand-in drawn from the logo description, because /public/logo.png
// isn't in the repo yet. It follows the text colour, so it works in both themes.
// The real PNG has a black bar and wordmark, so dark mode will need a light version.
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex flex-col items-start", className)}>
      <PeakMark className="-mb-px ml-0.5 h-5 w-auto" />
      <span aria-hidden className="block h-1 w-full bg-current" />
      <span className="font-heading mt-1 text-[1.25rem] leading-none font-black tracking-tight">IRON RIDGE</span>
      <span className="mt-0.5 text-[0.52rem] leading-none font-semibold tracking-[0.42em]">CONTRACTING</span>
    </span>
  );
}
