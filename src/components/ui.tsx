import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { Phone } from "lucide-react";
import { business } from "@/data/site";

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-[90rem] px-5 sm:px-8 lg:px-14", className)}>{children}</div>;
}

export function Eyebrow({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <p className={cn("flex items-center gap-2.5 text-xs font-semibold tracking-[0.2em] text-accent uppercase", className)}>
      <span aria-hidden className="size-2.5 bg-current [clip-path:polygon(50%_0,100%_100%,0_100%)]" />
      {children}
    </p>
  );
}

const buttonBase =
  "inline-flex min-h-12 items-center justify-center gap-2.5 px-6 py-3 text-base font-semibold transition duration-200 motion-safe:hover:-translate-y-0.5";

const buttonVariants = {
  primary: "bg-action text-on-action hover:bg-action-hover",
  outline: "border border-foreground/30 text-foreground hover:border-foreground hover:bg-foreground/5",
  onBand: "bg-white text-[#00572a] hover:bg-brand-light",
  outlineOnBand: "border border-white/50 text-white hover:border-white hover:bg-white/10",
};

export type ButtonVariant = keyof typeof buttonVariants;

export function buttonClass(variant: ButtonVariant = "primary", className?: string) {
  return cn(buttonBase, buttonVariants[variant], className);
}

export function ButtonLink({
  variant,
  className,
  ...props
}: ComponentProps<typeof Link> & { variant?: ButtonVariant }) {
  return <Link {...props} className={buttonClass(variant, className)} />;
}

export function CallButton({ variant = "outline", className }: { variant?: ButtonVariant; className?: string }) {
  return (
    <a href={business.phoneHref} className={buttonClass(variant, className)}>
      <Phone aria-hidden className="size-4.5" />
      Call {business.phone}
    </a>
  );
}
