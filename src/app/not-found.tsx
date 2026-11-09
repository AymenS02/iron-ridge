import { PeakMark } from "@/components/Peaks";
import { ButtonLink, CallButton, Container } from "@/components/ui";

export default function NotFound() {
  return (
    <Container className="py-24 pb-40 sm:py-36 sm:pb-52">
      <PeakMark className="h-12 w-auto" />
      <h1 className="mt-6 text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.03]">This page isn&apos;t built yet.</h1>
      <p className="mt-5 max-w-lg text-lg text-muted">The link may be old. Head back home, or give us a call.</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <ButtonLink href="/">Back to home</ButtonLink>
        <CallButton />
      </div>
    </Container>
  );
}
