import { Square, Circle, Triangle } from "lucide-react";
import { FeatureGrid, type Feature } from "@/components/ui/modern-feature-grid";

const features: Feature[] = [
  {
    Icon: Square,
    title: "State estimation",
    description: "Advanced engine-powered state estimation for real-time substation monitoring and analysis.",
  },
  {
    Icon: Circle,
    title: "Anomaly & fault detection",
    description: "Intelligent detection system that identifies anomalies and faults before they impact operations.",
  },
  {
    Icon: Triangle,
    title: "Predictive RUL & simulation",
    description: "Predictive remaining useful life calculations and simulation capabilities for proactive maintenance.",
  },
];

const Features = () => {
  return (
    <FeatureGrid
      sectionTitle="Powerful Features"
      sectionDescription="Transform your substation operations with our comprehensive suite of intelligent monitoring and analytics tools."
      features={features}
      id="features"
      className="opacity-0 animate-fade-up"
      style={{ animationDelay: "100ms", animationFillMode: "forwards" }}
    />
  );
};

export default Features;
