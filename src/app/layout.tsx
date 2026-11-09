import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import { ContactBar } from "@/components/ContactBar";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Providers } from "@/components/Providers";
import { business } from "@/data/site";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${business.name} | Renovations in ${business.serviceArea}`,
    template: `%s | ${business.name}`,
  },
  description: `Trusted local renovations, kitchen cabinets, flooring, drywall, bricklaying and interlocking from ${business.owner}. Serving ${business.serviceArea}.`,
};

// Headings and focus rings are set once here so every page stays consistent.
const bodyClass = [
  "flex min-h-full flex-col bg-background font-sans text-foreground",
  "[&_:is(h1,h2,h3)]:font-heading [&_:is(h1,h2,h3)]:font-extrabold [&_:is(h1,h2,h3)]:tracking-[-0.015em] [&_:is(h1,h2,h3)]:[font-stretch:108%]",
  "[&_:focus-visible]:outline-2 [&_:focus-visible]:outline-offset-2 [&_:focus-visible]:outline-peak-mid",
].join(" ");

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${archivo.variable} ${inter.variable} h-full scroll-pt-40 antialiased motion-safe:scroll-smooth`}
    >
      <body className={bodyClass}>
        <Providers>
          <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:bg-action focus:px-4 focus:py-2 focus:text-on-action">
            Skip to content
          </a>
          <div className="sticky top-0 z-40">
            <ContactBar />
            <Header />
          </div>
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
