import { Square, Circle, Triangle } from "lucide-react";

const features = [
  {
    icon: Square,
    label: "Engine",
    title: "State estimation",
  },
  {
    icon: Circle,
    label: "Detection",
    title: "Anomaly & fault",
  },
  {
    icon: Triangle,
    label: "Prediction",
    title: "Predictive RUL & simulation",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative rounded-2xl border border-border bg-card p-8 opacity-0 animate-fade-up transition-all duration-500 hover:border-muted-foreground/30"
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: "forwards" }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-8 h-24 flex items-center justify-center">
                  <feature.icon
                    className="h-16 w-16 text-muted-foreground/60 transition-all duration-500 group-hover:text-foreground group-hover:scale-110"
                    strokeWidth={1}
                  />
                </div>
                <span className="text-xs text-muted-foreground mb-2 uppercase tracking-wider">
                  {feature.label}
                </span>
                <h3 className="text-lg font-medium text-foreground">
                  {feature.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
