import { BrickWall, ChefHat, Grid3x3, Hammer, Layers, PaintRoller, type LucideIcon } from "lucide-react";
import type { ServiceIconName } from "@/data/site";

const icons: Record<ServiceIconName, LucideIcon> = {
  renovations: Hammer,
  kitchen: ChefHat,
  flooring: Layers,
  drywall: PaintRoller,
  brick: BrickWall,
  interlock: Grid3x3,
};

export function ServiceIcon({ name, className }: { name: ServiceIconName; className?: string }) {
  const Icon = icons[name];
  return <Icon aria-hidden className={className} />;
}
