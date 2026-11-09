"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Mail, Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useRef, useState } from "react";
import { business, navigation } from "@/data/site";
import { Logo } from "@/components/Logo";
import { PeakOutline } from "@/components/Peaks";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useDialog } from "@/components/useDialog";
import { buttonClass, cn, Container } from "@/components/ui";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <>
      <header className="border-b border-line bg-background/90 backdrop-blur-md">
        <Container className="flex h-[4.5rem] items-center justify-between gap-6">
          <Link href="/" aria-label={`${business.name} home`} className="shrink-0">
            <Logo />
          </Link>

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navigation.map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "relative block px-3.5 py-2 text-[0.9375rem] font-medium transition-colors hover:text-accent",
                        active && "text-accent",
                      )}
                    >
                      {item.label}
                      {active && (
                        <motion.span
                          layoutId="nav-peak"
                          aria-hidden
                          className="absolute -bottom-[0.9rem] left-1/2 -ml-2 h-2 w-4 bg-peak-mid [clip-path:polygon(50%_0,100%_100%,0_100%)]"
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-1 sm:gap-2">
            <ThemeToggle />
            <a href={business.phoneHref} className={buttonClass("primary", "min-h-11 px-4 py-2 text-[0.9375rem] max-sm:hidden")}>
              <Phone aria-hidden className="size-4" />
              Call Hasib
            </a>
            <a
              href={business.phoneHref}
              aria-label={`Call ${business.phone}`}
              className="grid size-11 place-items-center bg-action text-on-action sm:hidden"
            >
              <Phone aria-hidden className="size-5" />
            </a>
            <button
              type="button"
              aria-label="Open menu"
              aria-haspopup="dialog"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
              className="grid size-11 cursor-pointer place-items-center hover:bg-foreground/10 lg:hidden"
            >
              <Menu aria-hidden className="size-6" />
            </button>
          </div>
        </Container>
      </header>

      <AnimatePresence>{menuOpen && <MobileMenu pathname={pathname} onClose={closeMenu} />}</AnimatePresence>
    </>
  );
}

function MobileMenu({ pathname, onClose }: { pathname: string; onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  useDialog(ref, onClose);

  return (
    <motion.div
      ref={ref}
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-band-deep text-on-band lg:hidden"
    >
      <PeakOutline className="pointer-events-none absolute right-[-20%] bottom-24 w-[130%] max-w-2xl text-white/10" />
      <Container className="flex h-[4.5rem] shrink-0 items-center justify-between">
        <Link href="/" onClick={onClose} aria-label={`${business.name} home`}>
          <Logo />
        </Link>
        <button
          type="button"
          data-autofocus
          aria-label="Close menu"
          onClick={onClose}
          className="grid size-11 cursor-pointer place-items-center hover:bg-white/10"
        >
          <X aria-hidden className="size-6" />
        </button>
      </Container>

      <Container className="relative flex flex-1 flex-col justify-between gap-8 pt-6 pb-8">
        <nav aria-label="Mobile">
          <ul>
            {navigation.map((item, index) => {
              const active = isActive(pathname, item.href);
              return (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + index * 0.04, duration: 0.3 }}
                  className="border-b border-white/15"
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    aria-current={active ? "page" : undefined}
                    className="font-heading flex items-baseline gap-4 py-3.5 text-3xl font-extrabold tracking-tight"
                  >
                    <span className="text-xs font-medium text-on-band-muted tabular-nums">0{index + 1}</span>
                    {item.label}
                    {active && (
                      <span aria-hidden className="ml-auto size-3 self-center bg-white [clip-path:polygon(50%_0,100%_100%,0_100%)]" />
                    )}
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </nav>

        <div className="space-y-3">
          <a href={business.phoneHref} className={buttonClass("onBand", "w-full")}>
            <Phone aria-hidden className="size-4.5" />
            {business.phone}
          </a>
          <a href={business.emailHref} className="flex min-h-11 items-center justify-center gap-2 text-[0.9375rem] underline-offset-4 hover:underline">
            <Mail aria-hidden className="size-4" />
            {business.email}
          </a>
        </div>
      </Container>
    </motion.div>
  );
}
