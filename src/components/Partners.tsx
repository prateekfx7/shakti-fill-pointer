import { Square, Circle, Triangle, Zap } from "lucide-react";
import { FeatureGrid, type Feature } from "@/components/ui/modern-feature-grid";

const partners: Feature[] = [
  {
    Icon: Square,
    title: "PowerGen",
    description: "Leading provider of power generation solutions and grid infrastructure technologies.",
  },
  {
    Icon: Circle,
    title: "GridSync",
    description: "Innovative grid synchronization and real-time monitoring systems for modern utilities.",
  },
  {
    Icon: Triangle,
    title: "UtilTech",
    description: "Advanced utility technology solutions for smart grid management and optimization.",
  },
  {
    Icon: Zap,
    title: "SmartSub",
    description: "Cutting-edge substation automation and intelligent monitoring platforms.",
  },
];

const Partners = () => {
  return (
    <FeatureGrid
      sectionTitle="Trusted Partners"
      sectionDescription="We collaborate with industry leaders to deliver the most advanced substation monitoring solutions."
      features={partners}
      id="partners"
      className="opacity-0 animate-fade-up"
      style={{ animationDelay: "50ms", animationFillMode: "forwards" }}
    />
  );
};

export default Partners;
