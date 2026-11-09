import Image from "next/image";
import { showPlaceholderLabels, type SiteImage } from "@/data/site";
import { cn } from "@/components/ui";

type Props = {
  image: SiteImage;
  sizes: string;
  className?: string;
  imageClassName?: string;
  preload?: boolean;
  labelClassName?: string;
};

/** A cover-fit photo that fills its box. Size the box through `className`. */
export function SitePhoto({ image, sizes, className, imageClassName, preload, labelClassName = "bottom-2 left-2" }: Props) {
  return (
    <div className={cn("relative overflow-hidden bg-surface-strong", className)}>
      <Image src={image.src} alt={image.alt} fill sizes={sizes} preload={preload} className={cn("object-cover", imageClassName)} />
      {showPlaceholderLabels && (
        <span className={cn("absolute bg-black/70 px-1.5 py-0.5 text-[0.625rem] font-medium tracking-wide text-white", labelClassName)}>
          Placeholder photo
        </span>
      )}
    </div>
  );
}
